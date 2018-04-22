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
    <script type="text/javascript" src="../js/jquery-1.8.2.min.js"></script>

    <script src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js" type="text/javascript"></script>
    <script src="../js/wxshare.js" type="text/javascript"></script>

    <script type="text/javascript">


        window.alert = function (name) {
            var iframe = document.createElement("IFRAME");
            iframe.style.display = "none";
            iframe.setAttribute("src", 'data:text/plain,');
            document.documentElement.appendChild(iframe);
            window.frames[0].window.alert(name);
            iframe.parentNode.removeChild(iframe);
        }

        function stopTouchendPropagationAfterScroll() {
            var locked = false;

            window.addEventListener('touchmove', function (ev) {
                locked || (locked = true, window.addEventListener('touchend', stopTouchendPropagation, true));
            }, true);

            function stopTouchendPropagation(ev) {
                ev.stopPropagation();
                window.removeEventListener('touchend', stopTouchendPropagation, true);
                locked = false;
            }
        }

        var arrAnswer = [], currentNo = 0;

        $(function () {
            $('a#btntest').click(function () {
                $('div#q1').fadeOut(function () {
                    $('div#q2').fadeIn();
                });
            });


            //获取数据
            $.get("../getSubject.php", function ($res) {

                var $mainbody = $('div#mainbody');
                var $template = $('div#template');

                $.each($res, function (i, $item) {
                    var qid = 'q' + i;

                    var $templateclone = $template.clone();

                    $templateclone.find('p').text((i + 1) + "、" + $item['subject']);
                    $templateclone.attr('id', qid);

                    var $btnanswergroup = $templateclone.find(".btnanswergroup");
                    var $btnanswer = $("<div class=\"btnanswer\"><span class=\"spanbtn\">滚雪球理论</span></div>");
                    $btnanswer.attr('qid', qid)
                        .attr('no', i);

                    var options = $item["options"].split(',');
                    var answer = $item["answer"];
                    var j, option, isAns;
                    for (j in options) {
                        option = options[j];

                        var $btnanswerclone = $btnanswer.clone();
                        var $btnspan = $btnanswerclone.find('span');
                        $btnspan.text(option);

                        var len = option.length;

                        if (len > 11) {
                            $btnanswerclone.css("height", "70px");
                            $btnspan.css("fontSize", "1em").css("textAlign", "left");
                        } else if (len > 22) {
                            $btnanswerclone.css("height", "90px");
                            $btnspan.css("fontSize", "1em").css("textAlign", "left");
                        } else if (len > 33) {
                            $btnanswerclone.css("height", "110px");
                            $btnspan.css("fontSize", "1em").css("textAlign", "left");

                        }


                        isAns = option == answer ? 1 : 0;

                        if (isAns == 1) {
                            $btnanswerclone.css('backgroundColor', 'red');
                        }

                        $btnanswerclone.attr('isans', isAns);
                        $btnanswergroup.append($btnanswerclone);
                    }

                    if (i == 0) {
                        $templateclone.fadeIn();
                    }
                    $mainbody.append($templateclone);
                });
                countDown();
            });

            //绑定答题按钮事件
            $('.btnanswer').live("touchend", function () {
                var $this = $(this);
                var isAns = $this.attr('isans');

                var no = $this.attr('no');

                if (isAns == 1) {
                    arrAnswer.push(no);
                }
                nextQuestion(no);
            });

            $('.btnanswer').live("touchmove", function () {
                stopTouchendPropagationAfterScroll();
            });
        });

        function nextQuestion(no) {

            currentNo = parseInt(no) + 1;
            if (no == 5) {
                clearInterval(timer);
                //提交
                //alert(arrAnswer.join(','));
                var ra = arrAnswer.length;
                var right = ra == 6 ? 1 : 0;
                var $url = 'useraction.php?action=dati&right=' + right;

                $.get($url, function ($res) {

                    var $choujiang = $res["choujiang"];
                    var $msg = $res["msg"];

                    if (ra == 6) {
                        if ($choujiang == '0') {
                            //全部答对可以抽奖
                            alert("恭喜您全部答对\n可以抽奖啦，祝您好运");
                            document.location.href = "choujiang/index.html";
                        } else {
                            //不可以抽奖
                            alert("恭喜您全部答对\n" + $msg);
                            document.location.href = "datiaffirm.php";
                        }
                    } else {
                        $msgnew = "您答对了" + ra + "道题\n";
                        if ($choujiang == "0") {
                            $msgnew += "不能参加抽奖\n不要放弃,加油";
                        }
                        else {
                            $msgnew += $msg;
                        }

                        alert($msgnew);
                        document.location.href = "datiaffirm.php";
                    }
                });
            }
            else {
                $('#q' + no).fadeOut(function () {
                    $q = $('#q' + (parseInt(no) + 1));
                    $q.fadeIn(function () {
                        //     console.log($q.find('.spanbtn').height());
                        //     $q.find('.spanbtn').parents('.btnanswer').css('height', '100px');
                    });
                });
            }

            countDown();
        }

        var timer;

        function countDown() {
            clearInterval(timer);

            var now = 0;
            timer = setInterval(function () {

                if (now == 100) {
                    clearInterval(timer);
                    nextQuestion(currentNo);
                } else {
                    now += 1;
                    progressfn(now);
                }
            }, 100);
        }

        function progressfn(cent) {
            //var progressbar = document.getElementById("progressbar");
            //progressbar = progressbar.getElementsByTagName("p");
            //progressbar[0].innerHTML = cent + "%";
            var progress = document.getElementById("progress");
            progress.style.width = cent + "%";
        }
    </script>
    <style type="text/css">
        body {
            background-image: url(img/bg.jpg);
        }

        #mainbody {
            display: block;
            padding: 20px;
        }

        .questiongroup {
            display: block;
            padding-bottom: 15px;
        }

        .divsubject {
            display: block;
            padding: 10px;
            /*border: 2px solid #000000;*/
            /*background-color: #fe6a60;*/
            font-weight: bold;
            line-height: 1.5em;
            font-size: 1.1em;
            -webkit-border-radius: 15px;
            -moz-border-radius: 15px;
            border-radius: 15px;
        }

        .btnanswergroup {
            display: block;
            margin-top: 40px;
        }

        .btnanswer {
            width: 80%;
            border: 2px solid #ff695f;
            background-color: #FFF;
            border-radius: 20px;
            height: 40px;
            line-height: 1.5em;
            display: block;

            background-image: url(img/btnbottom.png);
            background-repeat: no-repeat;
            background-size: contain;
            background-position: bottom center;
            background-origin: border-box;

            position: relative;
            margin: 0 auto;
            margin-top: 15px;
        }

        .btnanswer span {
            position: absolute;
            width: 90%;
            top: 45%;
            left: 50%;
            text-align: center;
            /*transform: translateY(-50%);*/
            transform: translate(-50%, -50%);
            line-height: 1.1em;
            font-weight: bold;
            clear: both;

        }

        .btnanswer:active {
            background-color: #ff695f;
        }

        #divfooter {
            height: 25px;
            position: fixed;
            top: 20px;
        }

        #progressbar {
            position: fixed;
            height: 10px;
            width: 80%;
            /*border: 1px solid #000000;*/
            border-radius: 5px;
            text-align: center;
            line-height: 10px;
            font-size: 0.8em;
            background-color: #ffda43;
            z-index: -2;

            left: 0px;
            right: 0px;
            margin: auto;
        }

        #progress {
            position: absolute;
            /*  border:1px solid;*/
            height: 100%;
            width: 0;
            background: #fe6a60;
            border-radius: 5px;
            z-index: -1;
        }

        #progress {
            background-size: 30px 30px;
        }
    </style>
</head>
<body>
<div class="" id="mainbody">
    <div class="questiongroup" id="template" style="display: none;">
        <div class="divsubject">
            <p>
                question title
            </p>
        </div>
        <div class="btnanswergroup">

        </div>
    </div>
</div>
<div id="divfooter">
    <div id="progressbar">
        <div id='progress'></div>
        <p></p>
    </div>
</div>
</body>
</html>