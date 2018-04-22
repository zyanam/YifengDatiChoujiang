<?php
//通过页面返回json格式的超时信息，方便ajax程序处理。
function sessionOverTime()
{
    $arr = array("overtime" => true);
    echo json_encode($arr);
    die();
}

function makeRand($begin=0,$end=20,$limit=5){
    $rand_array=range($begin,$end);
    shuffle($rand_array);//调用现成的数组随机排列函数
    return array_slice($rand_array,0,$limit);//截取前$limit个
}