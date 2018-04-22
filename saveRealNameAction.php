<?php
require_once "dbconn.php";
require_once "wxinterface.php";
require_once "session.php";


$openId = $_POST["openId"];
//$realname = urldecode($_POST["realname"]);
$email = $_POST["email"];
$employeeNo = $_POST["employeeno"];

$isf = $_POST["isf"];   //是否第一次登录

if ($isf == 1) {
    if (!saveUserIdToDb($openId, $email, $employeeNo, $realname)) {
        die("Save to DB error");
    }

    setSession($openId);
    redirectSessionUrl();
}