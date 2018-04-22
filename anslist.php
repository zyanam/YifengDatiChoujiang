<?php
require_once "session.php";
getSession(1);
?>

<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>答题排行榜</title>

    <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

    <script src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js" type="text/javascript"></script>
    <script src="js/wxshare.js" type="text/javascript"></script>

    <script type="text/javascript">
        window.history.forward(1);

        var $currentuser;
        $.get("useraction.php?action=single", function ($res) {
            $currentuser = $res["wx_userid"];
        });

        $(function () {
            $.get("useraction.php?action=list", function ($res) {
                $tblist = $("tbody#tblist");
                $trlist = $("tr#trlist");

                $.each($res, function (i, $e) {
                    $trlistclone = $trlist.clone();

                    var userid = $e["userid"];
                    var realname = $e["realname"];
                    var dati = $e["dati"];
                    var tright = $e["tright"];
                    if (userid == $currentuser) {
                        $trlistclone.addClass("success");
                    }

                    $trlistclone.find(".sid").text(i + 1);
                    $trlistclone.find(".userid").text(realname);


                    $trlistclone.find(".dati").text(tright + "/" + dati);
                    if(tright != 0 && dati != 0)
                    {
                        $trlistclone.find(".rate").text(parseInt((tright / dati) * 100) + "%");
                    }
                    $tblist.append($trlistclone.show());
                });
            });
        });
    </script>
</head>
<body style="padding:10px;">
<div class="panel panel-default">
    <!-- Default panel contents -->
    <div class="panel-heading">排行榜（答对次数前50）</div>
    <table class="table">
        <thead>
        <tr>
            <th>位置</th>
            <th style="text-align: center;">姓名</th>
            <th style="text-align: center;">答题次数</th>
            <th style="text-align: center;">正确率</th>
        </tr>
        </thead>
        <tbody id="tblist">
        <tr id="trlist" style="display:none;">
            <th style="text-align: center;" class="sid"></th>
            <td style="text-align: center;" class="userid"></td>
            <td style="text-align: center;" class="dati"></td>
            <td style="text-align: center;" class="rate"></td>
        </tr>
        </tbody>
    </table>
</div>

</body>
</html>