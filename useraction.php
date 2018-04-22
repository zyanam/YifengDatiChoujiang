<?php
require_once "dbconn.php";
require_once "session.php";
require_once "funcs.php";
require_once "wxinterface.php";

error_reporting(-1);
ini_set('display_errors', 1);

mb_internal_encoding("UTF-8");


header("Content-type: text/json; charset=utf-8");

$userid = getSession(0); //目前取的是openid

if (!isset($userid)) {
    sessionOverTime();
}
/**
 *用户相关操作
 *action:
 * list，调用获取榜单列表，前50名，按全对次数排序。
 * dati,调用增加答题次数；right,0表示没有全对，1表示全对。
 * choujiang,调用更新抽奖状态，只能抽奖一次,jiangpin,所得到的奖品是什么
 * single,获取当前登录用户的信息
 * cjtime,按抽奖时间获取用户列表
 */
$action = $_GET["action"];

if ($action == "list") {
    $data = getTopUserList(50);
    echo json_encode($data);
}

if ($action == "cjtime") {
    $data = getTopUserListByCj(5);
    echo json_encode($data);
}

if ($action == "dati") {
    $right = $_GET["right"];

    $result = updateAnswerTimes($userid, $right);

    if ($result) {

        $data = getUserBaseInfo($userid);
        $rownum = getUserRanking($userid);
        if (isset($data)) {
            $dati = $data["dati"];
            $tright = $data["tright"];
            $choujiang = $data["choujiang"];
            $rate = intval(($tright / $dati) * 100);

            $msg = "这是您第" . $dati . "次答题。\n";
            $msg .= $tright . "次全部正确\n正确率" . $rate . "%。\n";
            $msg .= "排名第" . $rownum . "";

            //发送微信消息
            sendMsg($userid, $msg);

            $result = array(
                'result' => $result,
                'choujiang' => $choujiang,
                'msg' => $msg);
        }
    }

    echo json_encode($result);
}

if ($action == "choujiang") {
    $jiangpin = $_GET["jiangpin"];

    //先判断是否已经抽过奖，抽过奖直接返回
    $baseInfo = getUserBaseInfo($userid);
    if ($baseInfo["choujiang"] == "1") {
        //抽过奖
        $ary = array("choujiang" => "yes");
        echo json_encode($ary);
        die;
    }

    $jlName = $_GET["jlname"];
    $jlNo = $_GET["jlno"];

    addJpNum($jlNo);     //更新奖品剩余数量

    $result = updateChoujiang($userid, $jiangpin, $jlNo); //更新中奖状态及领奖时间

    if ($result) {
        sendMsg($userid, "恭喜中" . $jlName . "! " . urldecode($jiangpin) . "。\n请联系售后服务部企划室孙菲领奖。");
    }

    $ary = array("result" => $result);
    echo json_encode($ary);
}

if ($action == "single") {
    $data = getUserbaseInfo($userid);

    if (count($data) > 0) {
        $jlList = getJpNum();
        $data["jl"] = $jlList;
    }

    echo json_encode($data);
}