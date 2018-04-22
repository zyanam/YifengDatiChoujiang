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
    <title>答题</title>

    <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

    <script src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js" type="text/javascript"></script>
    <script src="js/wxshare.js" type="text/javascript"></script>

    <style type="text/css">
        body {
            padding-top: 40px;
        }
    </style>

    <script type="text/javascript">
        $(function () {

            //获取数据
            $.get("getSubject.php", function (res) {
                var $sublist = $("div#sublist");
                var $template = $("div#template");

                //处理数据
                {
                    $.each(res, function (i, $item) {
                        $ans = $item["answer"];
                        var $tempclone = $template.clone();
                        $tempclone.attr('id', 'template' + i);
                        $tempclone.find(".subtitle").html(i + 1 + '.' + $item["subject"]);

                        $btnanswer = $tempclone.find("div.btnanswergroup");
                        $iptanswer = $("<label class=\"btn btn-info btnanswer\" style='white-space: pre-wrap'>" +
                            "               <input type=\"radio\" class=\"iptanswer\" name=\"options\">" +
                            "           </label>");

                        $.each($item["options"].split(","), function (i, e) {
                            $iptanswerclone = $iptanswer.clone();
                            $iptanswerclone.text(e).attr("ans", $ans);
                            $btnanswer.append($iptanswerclone);
                        });

                        $sublist.append($tempclone.removeAttr("style"));
                    });
                }

                //点击答案
                {
                    $("label.btnanswer").click(function () {
                        $this = $(this);
                        $parent = $this.parents(".btnanswergroup");
                        $parent.find(".btnanswer ").removeClass("active");
                        $this.addClass("active");

                        if ($this.text() == $this.attr("ans")) {
                            $parent.addClass("rightans");
                        } else {
                            $parent.removeClass("rightans");
                        }
                    });
                }

                //提交答案
                {
                    $("button#btnsubmitans").click(function () {
                        submitans();
                    });

                    function submitans() {
                        var l = $("div.rightans").length;
                        var right = 0;

                        if (l >= 6) {
                            right = 1;
                        }
                        $.get("useraction.php?action=dati&right=" + right, function ($res) {
                            if ($res["overtime"] == true) {
                                document.location.href = "authorization.php";
                            }
                            if (l != 6) {
                                if (confirm("您答对了" + l + "道题，不能抽奖！\n是否重新答题？")) {
                                    document.location.href = "datiaffirm.php";
                                } else {
                                    document.location.href = "anslist.php";
                                }
                            } else {
                                document.location.href = "choujiang/index.html";
                            }
                        });
                    }
                }

                //计时进度条
                {
                    var $left = $("div#leftprogress");
                    var $right = $("div#rightprogress");

                    var i = 100;
                    var s = 20;
                    inter2 = setInterval(function () {
                        i -= 5;
                        s--;
                        $right.text(s + ' 秒');

                        $left.css('width', 100 - i + '%').attr('aria-valuenow', 100 - i);
                        $right.css('width', i + '%');

                        if (s <= 0) {
                            clearInterval(inter2);
                            //强制提交
                            submitans();
                        }
                    }, 1000);
                }
            })
            ;

        })
        ;
    </script>
</head>
<body>
<div class="progress navbar-fixed-top" style="margin:10px;">
    <div id="leftprogress" class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="0"
         aria-valuemin="0" aria-valuemax="100" style="width: 0%;">
    </div>
    <div id="rightprogress" class="progress-bar progress-bar-success"
         style="width: 100%;padding-left: 5px;">
        20秒
    </div>
</div>
<div id="sublist" style="padding:10px;">
    <div class="panel panel-primary" id="template" style="display:none;">
        <div class="panel-heading subtitle" style="font-weight: bold;">
            这是题目
        </div>
        <div class="panel-footer">
            <div class="btn-group-vertical btn-block btnanswergroup" data-toggle="buttons">

            </div>
        </div>
    </div>
</div>
<button type="button" id="btnsubmitans" style="margin-bottom:50px;"
        class="btn btn-info center-block">答完了，抽奖去
</button>
</body>
</html>
