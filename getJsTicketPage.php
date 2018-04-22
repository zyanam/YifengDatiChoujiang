<?php
require_once "wxinterface.php";

header('Content-type: text/json');


$ticket = getJsAPITicket();
$noncestr = create_password();
$timestamp = time();
$url = urldecode($_GET["url"]);

$encode = "jsapi_ticket=" . $ticket .
    "&noncestr=" . $noncestr .
    "&timestamp=" . $timestamp .
    "&url=" . $url;

$sha1 = sha1($encode);

$data = array(
    'ticket' => $ticket,
    'timestamp' => $timestamp,
    'nonceStr' => $noncestr,
    'signature' => $sha1
);

echo json_encode($data);

function create_password($pw_length = 16)
{
    $randpwd = ”;
    for ($i = 0; $i < $pw_length; $i++) {
        $randpwd .= chr(mt_rand(33, 126));
    }
    return $randpwd;
}