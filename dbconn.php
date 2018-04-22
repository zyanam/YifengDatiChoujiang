<?php
require_once "config.php";

date_default_timezone_set('PRC');//其中PRC为“中华人民共和国”

function createConn()
{
    $mysqli = new mysqli(MYSQL_HOST,
        MYSQL_USER,
        MYSQL_PWD,
        MYSQL_DBNAME,
        MYSQL_PORT
    );

    $mysqli->set_charset("utf8");

    if ($mysqli->connect_errno) {
        die("could not connect to the database:\n" . $mysqli->connect_error);
    }

    return $mysqli;
}

//从数据库获取已保存的access_token，如果已过期则返回0
function getTokenFromDb()
{
    $mysqlli = createConn();
    $result = mysqli_query($mysqlli, "SELECT token,gettime FROM wx_accesstoken ORDER BY id DESC LIMIT 1");

    $data = array();

    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
        $data[] = $row;
    }
    $mysqlli->close();

    if (count($data) <= 0) {
        return 0;
    }

    $gettime = $data[0]["gettime"];
    $nowtime = time();

    if ($nowtime - $gettime > 7000) {
        return 0;
    } else {
        return $data[0]["token"];
    }
}

//保存从微信接口获取的access_token
function saveTokenToDb($token)
{
    $mysqli = createConn();
    $gettime = time();

    $stmt = $mysqli->prepare("INSERT INTO wx_accesstoken (token,gettime) VALUES (?,?)");
    $stmt->bind_param("ss", $token, $gettime);
    $stmt->execute();

    $stmt->close();
    $mysqli->close();
}

//根据userid获取用户信息
function getUserBaseInfo($openId)
{
    $mysqli = createConn();

    $stmt = $mysqli->prepare("SELECT id,wx_openId,email,employeeno,realname,wx_nickname,wx_headimgurl,dati,choujiang,jiangpin,lingjiang,tright FROM wx_user WHERE wx_openId = ?");
    $stmt->bind_param("s", $openId);
    $stmt->execute();
    $stmt->store_result();

    $data = array();
    $stmt->bind_result($id, $wx_openId, $email, $employeeno, $realname, $wx_nickname, $wx_headingurl, $dati, $choujiang, $jiangpin, $lingjiang, $tright);

    while ($stmt->fetch()) {
        $data = array(
            'id' => $id,
            'wx_openid' => $wx_openId,
            'email' => $email,
            'employeeno' => $employeeno,
            'realname' => empty($realname) || is_null($realname) ? $wx_nickname : $realname,
            'nickname' => $wx_nickname,
            'headimgurl' => $wx_headingurl,
            'dati' => $dati,
            'choujiang' => $choujiang,
            'jiangpin' => $jiangpin,
            'liangjiang' => $lingjiang,
            'tright' => $tright
        );
    }

    $stmt->close();
    $mysqli->close();

    return $data;
}


//把从微信接口获取的userid存入数据库
function saveUserIdToDb($openId = 0, $email = "", $employeeNo = "", $realname = "", $wx_UserInfo)
{

    $mysqli = createConn();

    $stmt = $mysqli->prepare("INSERT INTO wx_user" .
        "(wx_openId,email,employeeno,realname,wx_nickname,wx_sex,wx_language,wx_city,wx_province,wx_country,wx_headimgurl,wx_privilege) " .
        "VALUES (?,?,?,?,?,?,?,?,?,?,?,?)");
    $stmt->bind_param("ssssssssssss", $openId, $email, $employeeNo, $realname, $wx_UserInfo["nickname"]
        , $wx_UserInfo["sex"], $wx_UserInfo["language"], $wx_UserInfo["city"], $wx_UserInfo["province"], $wx_UserInfo["country"], $wx_UserInfo["headimgurl"], $wx_UserInfo["privilege"]);
    $result = $stmt->execute();

    $stmt->close();
    $mysqli->close();

    return $result;
}

/**
 * 获取前50名用户，以答对数倒序
 * $order:排序方式；1，按答题正确次数的数量。2，按中奖时间。默认1
 * $num:记录数量
 */
function getTopUserList($num = 20)
{
    $conn = createConn();
    $sql = " SELECT wx_openid,realname,dati,tright,choujiang,jiangpin,cjtime FROM wx_user ORDER BY tright DESC  LIMIT " . $num;

    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $stmt->store_result();

    $data = array();
    $stmt->bind_result($wx_openid, $realname, $dati, $tright, $choujiang, $jiangpin, $cttime);
    while ($stmt->fetch()) {
        $data[] = array(
            'openid' => $wx_openid,
            'realname' => $realname,
            'dati' => $dati,
            'tright' => $tright,
            'choujiang' => $choujiang,
            'jiangpin' => $jiangpin,
            'cjtime' => $cttime
        );
    }

    $stmt->close();
    $conn->close();

    return $data;
}

function getTopUserListByCj($num = 5)
{
    $conn = createConn();
    $sql = " SELECT wx_openid,realname,wx_nickname,dati,tright,choujiang,jiangpin,cjtime FROM wx_user WHERE choujiang='1' ORDER BY tright DESC  LIMIT " . $num;

    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $stmt->store_result();

    $data = array();
    $stmt->bind_result($wx_openid, $realname, $wx_nickname, $dati, $tright, $choujiang, $jiangpin, $cttime);
    while ($stmt->fetch()) {
        $data[] = array(
            'openid' => $wx_openid,
            'realname' => empty($realname) ? $wx_nickname : $realname,
            'nickname' => $wx_nickname,
            'dati' => $dati,
            'tright' => $tright,
            'choujiang' => $choujiang,
            'jiangpin' => $jiangpin,
            'cjtime' => $cttime
        );
    }

    $stmt->close();
    $conn->close();

    return $data;
}

//更新用户的答题次数
function updateAnswerTimes($openId, $right)
{
    $conn = createConn();
    if ($right > 0) {
        $stmt = $conn->prepare("UPDATE wx_user SET dati=dati+1,tright=tright+1 WHERE wx_openid = ?");
    } else {
        $stmt = $conn->prepare("UPDATE wx_user SET dati=dati+1 WHERE wx_openid = ?");
    }

    $stmt->bind_param("s", $openId);
    $result = $stmt->execute();

    $stmt->close();
    $conn->close();
    return $result;
}

//设置抽奖状态，以及所抽奖品。
function updateChoujiang($openId, $jiangpin, $jpLevel)
{
    $conn = createConn();

    $nowt = date('y-m-d G:i:s', time());
    $stmt = $conn->prepare("UPDATE wx_user SET choujiang=1,jiangpin=?,cjtime=?,jpLevel=? WHERE wx_openid=?");
    $stmt->bind_param("ssss", $jiangpin, $nowt, $jpLevel, $openId);
    $result = $stmt->execute();

    $stmt->close();
    $conn->close();

    return $result;
}

//获取用户排名
function getUserRanking($openId)
{
    $conn = createConn();

    $sql = "SELECT rownum FROM (SELECT @rownum:=@rownum+1 AS rownum, wx_openid,tright FROM wx_user, (SELECT @rownum:=0) t ORDER BY tright DESC) t1 WHERE wx_openid = ?";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $openId);
    $stmt->execute();
    $stmt->bind_result($rownum);

    $data = array();
    while ($stmt->fetch()) {
        $data = array('rownum' => $rownum);
    }

    $conn->close();
    $stmt->close();

    return $data['rownum'];
}

function getJsAPITicketFromDb()
{
    $conn = createConn();
    $stmt = $conn->prepare("SELECT ticket,gettime FROM wx_jsticket ORDER BY ID DESC LIMIT 1");
    $stmt->execute();
    $stmt->bind_result($ticket, $gettime);

    $data = array();

    while ($stmt->fetch()) {
        $data = array(
            'tickent' => $ticket,
            'gettime' => $gettime
        );
    }

    $stmt->close();
    $conn->close();

    if (intval(time()) - intval($data['gettime']) > 7000) {
        return "0";
    } else {
        return $data['tickent'];
    }
}

function saveJsAPITicketToDb($ticket)
{
    $conn = createConn();
    $stmt = $conn->prepare("INSERT INTO wx_jsticket (ticket,gettime) VALUES (?,?)");
    $stmt->bind_param("ss", $ticket, time());
    $result = $stmt->execute();

    $stmt->close();
    $conn->close();
    return $result;
}

function getSubjectById($idAry)
{
    $conn = createConn();
    $sql = "SELECT id,subject,options,answer FROM wx_tiku WHERE id IN (" . implode(",", $idAry) . ")";
    //$sql = "";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $stmt->bind_result($id, $subject, $options, $answer);

    $data = Array();
    while ($stmt->fetch()) {
        $data[] = Array(
            'id' => $id,
            'subject' => $subject,
            'options' => $options,
            'answer' => $answer
        );
    }

    $stmt->close();
    $conn->close();

    return $data;
}

//更新奖品剩余数量
function addJpNum($jiangpinlevel)
{
    $conn = createConn();
    $stmt = $conn->prepare("UPDATE wx_jpnum SET total=total-1 WHERE jiangpinlevel=?");
    $stmt->bind_param("s", $jiangpinlevel);

    $result = $stmt->execute();

    $stmt->close();
    $conn->close();
    return $result;
}

//获取剩余奖品数量
function getJpNum()
{
    $conn = createConn();
    $stmt = $conn->prepare("SELECT jiangpinlevel,total FROM wx_jpnum");
    $stmt->execute();
    $stmt->bind_result($jiangpinlevel, $total);
    $data = Array();
    while ($stmt->fetch()) {
        $data[] = Array(
            'jplevel' => $jiangpinlevel,
            'total' => $total
        );
    }

    $stmt->close();
    $conn->close();
    return $data;
}

?>