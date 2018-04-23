<?php
require_once "session.php";
getSession(1);
?>
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
    <title>答题规则</title>

    <script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></script>

    <style type="text/css">
        html {
            -webkit-tap-highlight-color: transparent;
        }

        body {
            background-size: cover;
            background-color: #ff6a60;
        }

        @media only screen and (max-width: 767px) {
            body {
                background-image: url(img/dataffirm.jpg);
            }
        }

        @media only screen and (width: 375px) and (height: 812px) {
        }

        #btnstart {
            /*border: 1px solid #1dc116;*/
            height: 300px;
            position: relative;
            display: block;
            top: 350px;
        }

        a:hover, a:visited, a:link, a:active {
            color: red;
        }
    </style>

</head>
<body style="margin: 0;">
<audio src="wav/diright.wav" id="diright">wav</audio>
<audio src="wav/diwrong.wav" id="diwrong">wav</audio>
<div id="mainbg">
    <a href="datinew.php" id="btnstart"></a>
</div>
</body>
</html>