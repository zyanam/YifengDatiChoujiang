<?php
header('Content-type: text/json');

require_once "dbconn.php";
require_once "funcs.php";

//$data = array();
//for ($i = 1; $i < 7; $i++) {
//    $obj->id = 1;
//    $obj->subject = "我是题目，我是题目，我是题目啊！";
//    $obj->stype = "0";      //0是判断，1是选择
//    $obj->options = "山西,吉林,内蒙古";
//    $obj->answer = "山西";
//    array_push($data,$obj);
//}

$idAry = Array("1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17");

$idAry = makeRand(1, 12, 6);

$data = getSubjectById($idAry);

{
    /**
     *
     * $data = array();
     *
     * $obj = array(
     * 'id' => '1',
     * 'subject' => "顾客挚爱日在每年几月份？",
     * 'options' => "2月,8月,10月",
     * 'answer' => "2月"
     * );
     * array_push($data, $obj);
     *
     * $obj = array(
     * 'id' => '1',
     * 'subject' => "我们矢志不渝的理念是？",
     * 'options' => "顾客第一,效率为先,注重品质",
     * 'answer' => "顾客第一"
     * );
     * array_push($data, $obj);
     *
     * $obj = array(
     * 'id' => '1',
     * 'subject' => "一汽丰田目前销量大概是？",
     * 'options' => "500万,600万,700万",
     * 'answer' => "500万"
     * );
     * array_push($data, $obj);
     *
     * $obj = array(
     * 'id' => '1',
     * 'subject' => "我们的售后服务理念是？",
     * 'options' => "专业对车、诚意待人,您的信赖、我们的使命,实质的信赖",
     * 'answer' => "专业对车、诚意待人"
     * );
     * array_push($data, $obj);
     *
     * $obj = array(
     * 'id' => '1',
     * 'subject' => "一汽丰田成立于下面哪一年？",
     * 'options' => "2003年,1999年,1997年",
     * 'answer' => "2003年"
     * );
     * array_push($data, $obj);
     *
     * $obj = array(
     * 'id' => '1',
     * 'subject' => "我们的企业精神是？",
     * 'options' => "尊重、挑战、速度、诚信, 倾听、预案、学习,更快、更高、更强",
     * 'answer' => "尊重、挑战、速度、诚信"
     * );
     * array_push($data, $obj);
     */
}

echo json_encode($data);