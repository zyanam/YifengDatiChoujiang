<?php
require_once "dbconn.php";

function getUrl($url)
{
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.22 (KHTML, like Gecko) Chrome/25.0.1364.172 Safari/537.22");
    curl_setopt($ch, CURLOPT_ENCODING, 'gzip'); //加入gzip解析
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    $output = curl_exec($ch);
    curl_close($ch);
    return $output;
}

function postUrl($url, $postData)
{
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

    curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
    $response = curl_exec($ch);
    if (curl_errno($ch)) {
        print curl_error($ch);
    }
    curl_close($ch);
    return $response;
}

function getAccessToken()
{
    $token = getTokenFromDb();

    if ($token != "0") {
        return $token;
    }

    $tokenUrl = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=" . WX_APPID . "&secret=" . WX_APPSECRET;

    $content = getUrl($tokenUrl);

    $content = json_decode($content, true);

    $newtoken = $content["access_token"];

    saveTokenToDb($newtoken);

    return $newtoken;
}

function getUserId($code)
{
    //$token = getAccessToken();

    $useridurl = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=" . WX_APPID .
        "&secret=" . WX_APPSECRET .
        "&code=" . $code .
        "&grant_type=authorization_code";

    $content = getUrl($useridurl);

    $result = json_decode($content, true);

    return $result;
}

function getUserInfoFromWx($userAccesstoken, $openId)
{
    $userInfoUrl = "https://api.weixin.qq.com/sns/userinfo" .
        "?access_token=" . $userAccesstoken .
        "&openid=" . $openId .
        "&lang=zh_CN";

    $result = getUrl($userInfoUrl);
    return json_decode($result, true);
}

function sendMsg($userid, $msg)
{
    {
        /**
         * $token = getAccessToken();
         *
         * $url = "https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=" . $token;
         *
         * //echo "url=" . $url . "<br />";
         * $msg = $msg . "\n<a href=\"" . DOMAIN . "/datiaffirm.php\">继续答题</a>";
         * //"\n<a href=\"" . DOMAIN . "/anslist.php\">查看排行榜</a>";
         *
         * $arr = array(
         * 'touser' => $userid,
         * 'msgtype' => 'text',
         * 'agentid' => '1000004',
         * 'text' => array(
         * 'content' => $msg
         * ),
         * 'safe' => '0'
         * );
         *
         * $arr = json_encode($arr);
         * postUrl($url, $arr);
         */
    }
}

function getJsAPITicket()
{
    $ticket = getJsAPITicketFromDb();

    if ($ticket == "0") {
        //已过期重新获取
        $token = getTokenFromDb();
        $url = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=" . $token . "&type=jsapi";
        $result = getUrl($url);
        $result = json_decode($result, true);
        $ticketnew = $result['ticket'];
        if (!isset($ticketnew)) {
            die("获取jsticket失败");
        }
        $ticket = $ticketnew;
        saveJsAPITicketToDb($ticket);
    }
    return $ticket;
}

