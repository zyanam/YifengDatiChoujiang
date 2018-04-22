<?php
/**
 * 跳转到微信授权登录
 */
require_once "config.php";

?>
<?php

//scop=snsapi_base,snsapi_userinfo,snsapi_privateinfo

$state = rand(1000, 9999);

session_start();
$_SESSION['state'] = $state;

$redirect_uri = DOMAIN . "/redirect_uri.php";
$authourl = "https://open.weixin.qq.com/connect/oauth2/authorize" .
    "?appid=" . WX_APPID .
    "&redirect_uri=" . urlencode($redirect_uri) .
    "&response_type=code" .
    "&scope=snsapi_base" .
    "&state=" . $state . "#wechat_redirect";

Header("Location: " . $authourl);
exit;
?>