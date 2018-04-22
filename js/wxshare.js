//注册
$.get("/getJsTicketPage.php?url=" + encodeURIComponent(document.location.href), function ($res) {
    wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: 'wxab88f9c3be2d67a5', // 必填，公众号的唯一标识
        timestamp: $res['timestamp'], // 必填，生成签名的时间戳
        nonceStr: $res['nonceStr'], // 必填，生成签名的随机串
        signature: $res['signature'],// 必填，签名
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表
    });
});

wx.ready(function () {
    //获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
    wx.onMenuShareTimeline({
        title: '顾客挚爱日邀你有奖答题!我在顾客挚爱日答题正确率达到100%，邀你来战!', // 分享标题
        link: document.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: 'http://bisai.uncars.com/choujiang/images/wxshare.jpg', // 分享图标
        success: function () {
            // 用户确认分享后执行的回调函数
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
        }
    });

//获取“分享给朋友”按钮点击状态及自定义分享内容接口
    wx.onMenuShareAppMessage({
        title: '顾客挚爱日邀你有奖答题!我在顾客挚爱日答题正确率达到100%，邀你来战!', // 分享标题
        desc: '为了赢得顾客的微笑，我们能做的是什么？对我们来说，还有诸多方面需要为之而奋斗。“顾客挚爱日”，恰是思索为了顾客的微笑能够做些什么，并且在日常业务中付诸行动的良好时机。来参加答题吧，提高每个人的工作品质，全公司团结一致，努力去实践“顾客第一”！', // 分享描述
        link: 'http://bisai.uncars.com/authorization.php', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: 'http://bisai.uncars.com/choujiang/images/wxshare.jpg', // 分享图标
        type: '', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
            // 用户确认分享后执行的回调函数
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
        }
    });
});


