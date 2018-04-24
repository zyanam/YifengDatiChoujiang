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
    <script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>

    <script src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js" type="text/javascript"></script>
    <script src="../js/wxshare.js" type="text/javascript"></script>

    <script src="mobilealert/layer.js" type="text/javascript"></script>


    <script type="text/javascript">
        var audioright, audiowrong, audioke;
        var colorCfg = {
            'choosed': '#ff695f',    //选上的
            'right': '#ff695f',      //正确答案
            'wrong': '#FFA500'       //错误答案
        }
        window.onload = function () {
            audioright = document.getElementById("audioright");
            audiowrong = document.getElementById("audiowrong");
            audioke = document.getElementById("audioke");

            document.addEventListener("WeixinJSBridgeReady", function () {
                audioke.play();
                audioke.muted = true;
            }, false);
        };

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
                $('div#q1').slidedown(function () {
                    $('div#q2').slideUp();
                });
            });

            $('#mainbody').on("touchmove", ".btnanswer", function () {
                stopTouchendPropagationAfterScroll();
            });

            //绑定答题按钮事件
            $("#mainbody").on("touchend", ".ontouchend", function () {

                var $this = $(this).removeClass('ontouchend');
                var isAns = $this.attr('isans');
                var $spanbtn = $this.find(".spanbtn");
                var no = $this.attr('no');

                $this.siblings().each(function (i, item) {
                    //取消按钮绑定事件
                    $(item).removeClass('ontouchend');
                });

                if ($spanbtn.height() > 24) {
                    $spanbtn.css({
                        'textIndent': '1.5rem'
                    });
                }

                $this.css('backgroundColor', colorCfg.choosed);
                setTimeout(function () {
                    $this.css('backgroundColor', '#FFF');
                }, 500);


                if (isAns == 1) {
                    //答对了
                    arrAnswer.push(no);
                    audioright.play();
                    setTimeout(function () {
                        $this.find('.symbol').css('backgroundImage', 'url("img/right.png")').show();
                    }, 500);
                }
                else {
                    //答错了
                    audiowrong.play();

                    setTimeout(function () {
                        $this.find('.symbol').css('backgroundImage', 'url("img/wrong.png")').show();
                    }, 500)


                    $this.attr('cs', '1');
                    setTimeout(function () {
                        //$this.css('backgroundColor', colorCfg.wrong);
                        //$groups = $this.parents('.btnanswergroup').find('.btnanswer');
                        $groups = $this.siblings();
                        $.each($groups, function (i, group) {
                            $group = $(group);
                            if ($group.attr('isans') == 1) {
                                var $spanbtn = $group.find(".spanbtn");
                                if ($spanbtn.height() > 24) {
                                    $spanbtn.css({
                                        'textIndent': '1.5rem'
                                    });
                                }
                                $group.find('.symbol').css('backgroundImage', 'url("img/right.png")').show();
                            }
                            else {
                                if ($group.attr('cs') != 1) {
                                    $group.animate({
                                        opacity: 0
                                    });
                                }
                            }
                        });
                    }, 500);
                }

                setTimeout(function () {
                    nextQuestion(no);
                }, 2000);
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
                    var $btnanswer = $("<div class=\"btnanswer ontouchend\"><div class=\"symbol\"></div><span class=\"spanbtn\">滚雪球理论</span></div>");
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

                        isAns = option == answer ? 1 : 0;

                        if (isAns == 1) {
                            $btnanswerclone.css('backgroundColor', '#f3f3f3');
                        }

                        $btnanswerclone
                            .attr('isans', isAns)
                            .attr('cs', 0);
                        $btnanswergroup.append($btnanswerclone);
                    }

                    if (i == 0) {
                        $templateclone.fadeIn(function () {
                            countDown();
                        });
                    }
                    $mainbody.append($templateclone);
                });
            });

        });

        function nextQuestion(no) {
            clearInterval(timer);
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
                            //alert("恭喜您全部答对\n可以抽奖啦，祝您好运");
                            layer.open({
                                content: '恭喜您全部答对<br />可以抽奖啦，祝您好运'
                                , btn: '好的'
                                , yes: function (index) {
                                    document.location.href = "choujiang/index.html";
                                    layer.close(index)
                                }
                            });
                        } else {
                            //不可以抽奖
                            //alert("恭喜您全部答对\n" + $msg);
                            layer.open({
                                content: '恭喜您全部答对<br />' + $msg
                                , btn: '好的'
                                , yes: function (index) {
                                    document.location.href = "datiaffirm.php";
                                    layer.close(index)
                                }
                            });
                        }
                    } else {
                        $msgnew = "您答对了" + ra + "道题<br />";
                        if ($choujiang == "0") {
                            $msgnew += "不能参加抽奖<br />不要放弃,加油";
                        }
                        else {
                            $msgnew += $msg;
                        }

                        //alert($msgnew);
                        layer.open({
                            content: $msgnew
                            , btn: '好的'
                            , yes: function (index) {
                                layer.close(index);
                                document.location.href = "datiaffirm.php";
                            }
                        });
                    }
                });
            }
            else {
                $('#q' + no).fadeOut(function () {
                    $q = $('#q' + currentNo);
                    $q.fadeIn();
                });
                countDown();
            }
        }

        var timer;

        function countDown() {

            var now = 100;
            timer = setInterval(function () {

                if (now < 40) {
                    if ((now % 10) == 0) {
                        try {
                            //audioke.play();
                            // audiowrong.play();
                            // audioright.play();
                            audioke.muted = false;
                            audioke.load();
                            audioke.play();
                        }
                        catch (e) {
                            alert(e);
                        }
                    }
                }
                if (now == 0) {
                    clearInterval(timer);
                    nextQuestion(currentNo);
                } else {
                    now -= 1;
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
            margin-top: 1rem;
            position: relative;
        }

        .btnanswer {
            width: 80%;
            border: 2px solid #ff695f;
            background-color: #FFF;
            border-radius: 20px;
            line-height: 1.5em;
            display: block;

            background-image: url(img/btnbottom.png);
            background-repeat: no-repeat;
            background-size: contain;
            background-position: bottom center;
            background-origin: border-box;
            padding: 0.8rem;

            position: relative;
            margin: 0 auto;
            margin-top: 15px;
        }

        .btnanswer span {
            position: relative;
            /*width: 90%;*/
            text-align: center;
            /*transform: translateY(-50%);*/
            line-height: 1.1em;
            font-weight: bold;
            clear: both;
            line-height: 1.5rem;

            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
        }

        .btnanswer:active {
            background-color: #ff695f;
        }

        div.symbol {
            width: 1.2rem;
            height: 1.2rem;
            background-image: url("img/right.png");
            background-repeat: no-repeat;
            -webkit-background-origin: content-box;
            background-origin: content-box;
            -webkit-background-size: contain;
            background-size: contain;
            position: absolute;
            display: none;
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
            background-color: #fe6a60;
            z-index: -2;

            left: 0px;
            right: 0px;
            margin: auto;

            -moz-transform: scaleX(-1);
            -webkit-transform: scaleX(-1);
            -o-transform: scaleX(-1);
            transform: scaleX(-1);
        }

        #progress {
            position: absolute;
            /*  border:1px solid;*/
            height: 100%;
            width: 0;
            background: #ffda43;
            border-radius: 5px;
            z-index: -1;
        }

        #progress {
            background-size: 30px 30px;
        }
    </style>
    <audio src="wav/ke.wav" preload="auto" muted id="audioke">wav</audio>
    <audio src="wav/diright.wav" preload="auto" id="audioright">wav</audio>
    <audio src="wav/diwrong.wav" preload="auto" id="audiowrong">wav</audio>
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