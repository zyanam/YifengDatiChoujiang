<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>信息确认</title>

    <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

    <script src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js" type="text/javascript"></script>
    <script src="js/wxshare.js" type="text/javascript"></script>
    <script type="text/javascript">
        $(function () {
            $("#frmrealname").submit(function () {
                $name = $("#realname").val();
                if ($name == "") {
                    alert("请填写真实姓名！");
                    return false;
                }
            });
        });
    </script>
    <?php
    $openId = $_GET['openId'];
    $isf = $_GET["isf"];
    ?>
</head>
<body style="padding:10px;">
<form action="saveRealNameAction.php" method="post" id="frmrealname">
    <div class="panel panel-default">
        <div class="panel-heading">
            这是一个临时页面，如果能提供员工认证查询接口，则不需要此页面。测试阶段，信息可以随便填！
        </div>
        <div class="panel-body">
            <input type="text" class="form-control" id="email" name="email" placeholder="请输入您的企业邮箱"
                   aria-describedby="basic-addon1">
            <input type="text" class="form-control" id="employeeno" name="employeeno" placeholder="请输入您的员工工号"
                   aria-describedby="basic-addon1">
            <input type="hidden" class="form-control" name="openId" value="<?php echo $openId; ?>"/>
            <input type="hidden" class="form-control" name="isf" value="<?php echo $isf; ?>"/>
        </div>
    </div>
    <button type="submit" id="btnsubmitans" href="dati.php" style="margin-bottom:50px;"
            class="btn btn-primary btn-block">提交
    </button>
</form>
</body>
</html>