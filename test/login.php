<?php
require_once "./dbconn.php";
require_once "./func.php";


//$corpId = "ww15bf5a0fc156cc7f";
//$corpSecret = "Wp8oKNrIxb0Lyiw0M_1v8ILusdgw-aAT9MEwKy7APzE";
//$tokenUrl = "https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=" . $corpId . "&corpsecret=" . $corpSecret;
////	echo $url;
//$content = getUrl($tokenUrl);
//
//$content = json_decode($content, true);
//echo $content;
//echo "<br />";
//echo $content['access_token'];

$token = getAccessToken();
echo $token;
?>

