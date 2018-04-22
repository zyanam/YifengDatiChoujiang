<?php
/**
 * 微信授权登录跳转页
 */
require_once "wxinterface.php";
require_once "session.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<?php
$code = $_GET["code"];
$state = $_GET["state"];


if (!isset($state)) {
    die("错误的返回！");
}

//    session_start();
//    echo "state =" .$state;
//    echo "<br />session =" .$_SESSION['state'];

if ($state != $_SESSION['state']) {
    die("暗号错误！");
}

//unset($_SESSION["state"]);

$result = getUserId($code);

$openId = $result["openid"];

$data = getUserBaseInfo($openId);

//$data==0表示第一次登录
if (count($data) <= 0) {
    Header("Location:saveRealName.php?isf=1&openId=" . $openId);
    exit;

}

$email = $data["email"];
//不是第一次登录，判断是否已填写邮箱
if (empty($email) || is_null($email)) {
    Header("Location: " . "saveRealName.php?isf=0&openId=" . $openId);
    exit;
}

setSession($openId);

//Header("Location: " . "datiaffirm.php");
redirectSessionUrl();
exit;

?>

</body>
</html>


