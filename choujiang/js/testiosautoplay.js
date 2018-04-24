var g_audio = window.g_audio = new Audio(); //创建一个audio播放器
var g_event = window.g_event = new
function () {
    var events = ['load', 'abort', 'canplay', 'canplaythrough', 'durationchange', 'emptied', 'ended', 'error', 'loadeddata', 'loadedmetadata', 'loadstart', 'pause', 'play', 'playing', 'progress', 'ratechange', 'seeked', 'seeking', 'stalled', 'suspend', 'timeupdate', 'volumechange', 'waiting', 'mediachange'];
    g_audio.loop = false;
    g_audio.autoplay = true;
    g_audio.isLoadedmetadata = false;
    g_audio.touchstart = true;
    g_audio.audio = true;
    g_audio.elems = {};
    g_audio.isSupportAudio = function (type) {
        type = type || "audio/mpeg";
        try {
            var r = g_audio.canPlayType(type);
            return g_audio.canPlayType && (r == "maybe" || r == "probably")
        } catch (e) {
            return false;
        }
    };
    g_audio.push = function (meta) {
        g_audio.previousId = g_audio.id;
        g_audio.id = meta.song_id;
        g_audio.previousSrc = g_audio.src;
        g_audio.previousTime = 0.00;
        g_audio.src = g_audio.currentSrc = meta.song_fileUrl;
        g_audio.isLoadedmetadata = false;
        g_audio.autobuffer = true;
        g_audio.load();
        g_audio.play();
        if (g_audio.previousSrc !== g_audio.src) {
            g_audio.play();
        }
    };
    for (var i = 0,
             l = events.length; i < l; i++) {
        (function (e) {
            var fs = [];
            this[e] = function (fn) {
                if (typeof fn !== 'function') {
                    for (var k = 0; k < fs.length; k++) {
                        fs[k].apply(g_audio);
                    }
                    return;
                }
                fs.push(fn);
                g_audio.addEventListener(e,
                    function () {
                        fn.apply(this);
                    });
            };
        }).apply(this, [events[i]]);
    }
    this.ended(function () { //播放结束
    });
    this.load(function () { //加载
        this.pause();
        this.play();
    });
    this.loadeddata(function () {
        this.pause();
        this.play();
    });
    this.loadedmetadata(function () {
        this.isLoadedmetadata = true;
    });
    this.error(function () { //请求资源时遇到错误
    });
    this.pause(function () { //歌曲暂停播放
    });
    this.play(function () { //歌曲播放
    });
};
$(document).ready(function () {
    if (/i(Phone|P(o|a)d)/.test(navigator.userAgent)) {
        $(document).one('touchstart',
            function (e) {
                g_audio.touchstart = true;
                g_audio.play();
                g_audio.pause();
                return false;
            });
    }
});
//audio使用:
$("#main").unbind("click").bind("click",
    function () {
        //gid 表示歌曲id,只是一个表示，没有值不影响播放
        //song_fileUrl :播放歌曲地址，不能为空，有效地址
        g_audio.elems["id"] = gid;
        g_audio.push({
            song_id: gid,
            song_fileUrl: json.URL
        });
    }); //绑定事件