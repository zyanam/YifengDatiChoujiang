<?php
session_start();

function setSession($userId)
{
    $_SESSION["userid"] = $userId;
}

/**
 * 从session中获取userid
 * $re,1需要跳转，0不需要跳转
 */
function getSession($re = 1)
{
    if (!$_SESSION["userid"]) {

        //setSessionUrl();

        if ($re == 1) {
            Header("Location:authorization.php");
            exit;
        } else {
            $arr = Array("overtime" => "true");
            echo $arr;
            die;
        }
    }

    return $_SESSION["userid"];
}

/**
 *需要重新登录的时候，登录完成后跳转的页面。
 * 一般使用url参数传递当前页面，但是这个需要跳转到微信的授权url，使用参数不方便，所以使用session
 */
function setSessionUrl()
{
    $url = $_SERVER['PHP_SELF'];
    $_SESSION["url"] = $url;
}

/**
 * 登录后调用
 */
function redirectSessionUrl()
{
    $url = $_SESSION["url"];
    if (!$_SESSION["url"]) {
        $url = "datiaffirm.php";
    }

    Header("Location: " . $url);
}