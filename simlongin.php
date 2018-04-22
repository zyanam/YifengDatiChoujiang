<?php
/**
 * Created by PhpStorm.
 * User: yanam
 * Date: 18/4/18
 * Time: 10:24
 */

require_once "dbconn.php";
require_once "wxinterface.php";
require_once "session.php";

getAccessToken();

$userId = 'ohbc20iZtJneUi0ubJCKLOUIz7EY';
setSession($userId);
Header("Location: " . "datiaffirm.php");
exit;

//$ss = sendMsg("zhaoyan","你的快递已到，请携带工卡前往邮件中心领取。\n出发前可查看<a href=\"http://work.weixin.qq.com\">邮件中心视频实况</a>，聪明避开排队。");
//
//var_dump($ss);

//$ranking = getUserRanking("zhaoyan01");
//var_dump($ranking);
//echo "ranking=" . $ranking;