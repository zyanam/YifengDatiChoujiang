var tracker_ua_base = (function () {
    var B = "Samsung", J = "Sharp", Q = "Sony Ericsson", F = "Motorola", R = "LG", K = "Huawei", A = "HTC",
        O = "Coolpad", N = "Asus", y = "Acer";
    var C = " based device";
    var x = {
        SAMSUNG: {
            "GT-S3370C": [B, "Corby 3G"],
            "GT-S3650": [B, "Corby"],
            "GT-S3653": [B, "Corby"],
            "GT-S3850": [B, "Corby II"],
            "GT-S5230": [B, "Star"],
            "GT-S5230W": [B, "Star"],
            "GT-S5233": [B, "Star"],
            "GT-S5260": [B, "Star II"],
            "GT-S5560": [B, "Marvel"],
            "GT-S5620": [B, "Monte"],
            "GT-S7550": [B, "Blue Earth"],
            "GT-S8000": [B, "Jet"],
            "GT-S8003": [B, "Jet"],
            "SGH-F480": [B, "Tocco"],
            "SGH-T528g": [B, "Straight Talk"],
            "GT-B3410": [B, "Star Qwerty"],
            "GT-B5310": [B, "Corby Pro"],
            "GT-B7722": [B, "Star Duos"],
            "GT-C6712": [B, "Star II Duos"]
        }
    };
    var P = {
        SAMSUNG: {
            "GT- S5250": [B, "Wave 525"],
            "GT-S5250": [B, "Wave 525"],
            "GT-S5253": [B, "Wave 525"],
            "GT-S5330": [B, "Wave 533"],
            "GT-S5380": [B, "Wave Y"],
            "GT-S5380D": [B, "Wave Y"],
            "GT-S5380K": [B, "Wave Y"],
            "GT-S5750E": [B, "Wave 575"],
            "GT-S5753E": [B, "Wave 575"],
            "GT-S7230B": [B, "Wave 723"],
            "GT-S7230E": [B, "Wave 723"],
            "GT-S7233E": [B, "Wave 723"],
            "GT-S7250": [B, "Wave M"],
            "GT-S7250D": [B, "Wave M"],
            "GT-S8500": [B, "Wave"],
            "GT-S8500C": [B, "Wave"],
            "GT-S8500R": [B, "Wave"],
            "GT-S8500T": [B, "Wave"],
            "GT-S8530": [B, "Wave II"],
            "GT-S8600": [B, "Wave 3"],
            "SHW-M410": [B, "Wave 3"]
        }
    };
    var G = {SAMSUNG: {"GT-I9500": [B, "GT-I9500"]}};
    var T = {"Coolpad D508": [O, "D508"], "Coolpad E600": [O, "E600"], "SCH-F839": [B, "SCH-F839"]};
    var z = {
        DX900: [y, "Tempo DX900"],
        F900: [y, "Tempo F900"],
        "Coolpad F800": [O, "F800"],
        "garmin-asus-Nuvifone-M10": ["Garmin-Asus", "Nuvifone M10"],
        "HP iPAQ 510": ["HP", "iPAQ 510"],
        "HD mini T5555": [A, "HD mini"],
        "HTC HD mini": [A, "HD mini"],
        "HTC HD mini T5555": [A, "HD mini"],
        "HTC HD2": [A, "HD2"],
        "HTC HD2 T8585": [A, "HD2"],
        "HD2 T8585": [A, "HD2"],
        "T-Mobile LEO": [A, "HD2"],
        dopodT5588: [A, "Hengshan"],
        "HTC Mega-T3333": [A, "Mega"],
        "HTC Snap S521": [A, "Snap"],
        "HTC Touch2 T3320": [A, "Touch 2"],
        "HTC Touch2 T3333": [A, "Touch 2"],
        "HTC Touch2 T3335": [A, "Touch 2"],
        "HTC P3700": [A, "Touch Diamond"],
        "HTC Touch Diamond2 T5353": [A, "Touch Diamond 2"],
        "HTC Touch HD T8282": [A, "Touch HD"],
        "HTC Touch HD T8283": [A, "Touch HD"],
        "HTC Touch HD2 T8585": [A, "Touch HD2"],
        "HTC Touch Pro2 T7373": [A, "Touch Pro 2"],
        T7380: [A, "Touch Pro 2"],
        "HTC TyTN II": [A, "TyTN II"],
        "GT-B7300": [B, "Omnia Lite"],
        "GT-B7610": [B, "Omnia Pro"],
        "GT-i8000": [B, "Omnia 2"],
        "GT-I8000": [B, "Omnia 2"],
        "GT-I8000U": [B, "Omnia 2"],
        M1i: [Q, "M1i Aspen"]
    };
    var D = {
        Acer: {Allegro: [y, "Allegro"], M310: [y, "Allegro"]},
        Asus: {Galaxy6: [N, "Galaxy 6"]},
        DELL: {"Venue Pro": ["Dell", "Venue Pro"]},
        FujitsuToshibaMobileCommun: {IS12T: ["Fujitsu Toshiba", "IS12T"]},
        HTC: {
            "7 Mozart": [A, "7 Mozart"],
            "7 Mozart T8698": [A, "7 Mozart"],
            T8697: [A, "7 Mozart"],
            T8698: [A, "7 Mozart"],
            PD67100: [A, "7 Mozart"],
            "Mozart T8698": [A, "7 Mozart"],
            Mozart: [A, "7 Mozart"],
            "USCCHTC-PC93100": [A, "Arrive"],
            Gold: [A, "Gold "],
            HD2: [A, "HD2"],
            HD7: [A, "HD7"],
            "HD7 T9292": [A, "HD7"],
            T9295: [A, "HD7"],
            T9296: [A, "HD7"],
            "HD7 Infinity": [A, "HD7"],
            T7575: [A, "7 Pro"],
            "7 Pro T7576": [A, "7 Pro"],
            mwp6985: [A, "Trophy"],
            "7 Trophy T8686": [A, "Trophy"],
            "7 Trophy": [A, "Trophy"],
            PC40100: [A, "Trophy"],
            "Touch-IT Trophy": [A, "Trophy"],
            Radar: [A, "Radar"],
            "Radar 4G": [A, "Radar"],
            "Radar C110e": [A, "Radar"],
            Mazaa: [A, "Mazaa"],
            Mondrian: [A, "Mondrian"],
            Schubert: [A, "Schubert"],
            "7 Schubert T9292": [A, "Schubert"],
            Spark: [A, "Spark"],
            T8788: [A, "Surround"],
            "TITAN X310e": [A, "Titan"],
            X310e: [A, "Titan"],
            PI39100: [A, "Titan"],
            PI86100: [A, "Titan II"],
            Ultimate: [A, "Ultimate"]
        },
        LG: {
            GW910: [R, "Optimus 7"],
            "LG E-900": [R, "Optimus 7 E900"],
            "LG-E900": [R, "Optimus 7 E900"],
            "LG-E900h": [R, "Optimus 7 E900"],
            "LG-C900": [R, "Optimus 7Q"],
            "LG-C900B": [R, "Quantum"],
            "LG-C900k": [R, "Quantum"]
        },
        nokia: {SeaRay: ["Nokia", "Lumia 800"], "800C": ["Nokia", "Lumia 800"]},
        NOKIA: {
            "710": ["Nokia", "Lumia 710"],
            "Nokia 710": ["Nokia", "Lumia 710"],
            "Lumia 710": ["Nokia", "Lumia 710"],
            "Lumia 719": ["Nokia", "Lumia 719"],
            "Lumia 800": ["Nokia", "Lumia 800"],
            "800": ["Nokia", "Lumia 800"],
            "Lumia 900": ["Nokia", "Lumia 900"],
            XXX: ["Nokia", "prototype"]
        },
        SAMSUNG: {
            "GT-I8350": [B, "Omnia W"],
            "GT-I8350T": [B, "Omnia W"],
            "SGH-i677": [B, "Focus Flash"],
            "SGH-i707": [B, "Taylor"],
            "SGH-i917": [B, "Omnia 7"],
            "SGH-I917": [B, "Omnia 7"],
            "SGH-i917.": [B, "Focus"],
            "SGH-i917R": [B, "Focus"],
            "SGH-i937": [B, "Focus S"],
            OMNIA7: [B, "Omnia 7"],
            OMINA7: [B, "Omnia 7"],
            Taylor: [B, "Taylor"]
        },
        TOSHIBA: {TSUNAGI: ["Toshiba", "Tsunagi"]}
    };
    var M = function () {
        this.initialize.apply(this, Array.prototype.slice.call(arguments))
    };
    M.prototype = {
        initialize: function (a) {
            this.original = a.value || null;
            this.alias = a.alias || null
        }
    };
    var E = function () {
        this.initialize.apply(this, arguments)
    };
    E.prototype = {
        initialize: function (b, a) {
            this.options = {
                useFeatures: a && a.useFeatures || false,
                detectCamouflage: a && a.detectCamouflage || true
            };
            this.browser = {stock: true, hidden: false, channel: ""};
            this.engine = {};
            this.os = {};
            this.device = {type: "desktop", identified: false};
            this.camouflage = false;
            this.features = [];
            this.detect(b)
        }, detect: function (g) {
            if (g.match("Unix")) {
                this.os.name = "Unix"
            }
            if (g.match("FreeBSD")) {
                this.os.name = "FreeBSD"
            }
            if (g.match("OpenBSD")) {
                this.os.name = "OpenBSD"
            }
            if (g.match("NetBSD")) {
                this.os.name = "NetBSD"
            }
            if (g.match("SunOS")) {
                this.os.name = "Solaris"
            }
            if (g.match("Linux")) {
                this.os.name = "Linux";
                if (g.match("CentOS")) {
                    this.os.name = "CentOS";
                    if (match = /CentOS\/[0-9\.\-]+el([0-9_]+)/.exec(g)) {
                        this.os.version = new M({value: match[1].replace(/_/g, ".")})
                    }
                }
                if (g.match("Debian")) {
                    this.os.name = "Debian"
                }
                if (g.match("Fedora")) {
                    this.os.name = "Fedora";
                    if (match = /Fedora\/[0-9\.\-]+fc([0-9]+)/.exec(g)) {
                        this.os.version = new M({value: match[1]})
                    }
                }
                if (g.match("Gentoo")) {
                    this.os.name = "Gentoo"
                }
                if (g.match("Kubuntu")) {
                    this.os.name = "Kubuntu"
                }
                if (g.match("Mandriva Linux")) {
                    this.os.name = "Mandriva";
                    if (match = /Mandriva Linux\/[0-9\.\-]+mdv([0-9]+)/.exec(g)) {
                        this.os.version = new M({value: match[1]})
                    }
                }
                if (g.match("Mageia")) {
                    this.os.name = "Mageia";
                    if (match = /Mageia\/[0-9\.\-]+mga([0-9]+)/.exec(g)) {
                        this.os.version = new M({value: match[1]})
                    }
                }
                if (g.match("Red Hat")) {
                    this.os.name = "Red Hat";
                    if (match = /Red Hat[^\/]*\/[0-9\.\-]+el([0-9_]+)/.exec(g)) {
                        this.os.version = new M({value: match[1].replace(/_/g, ".")})
                    }
                }
                if (g.match("Slackware")) {
                    this.os.name = "Slackware"
                }
                if (g.match("SUSE")) {
                    this.os.name = "SUSE"
                }
                if (g.match("Turbolinux")) {
                    this.os.name = "Turbolinux"
                }
                if (g.match("Ubuntu")) {
                    this.os.name = "Ubuntu";
                    if (match = /Ubuntu\/([0-9.]*)/.exec(g)) {
                        this.os.version = new M({value: match[1]})
                    }
                }
            }
            if (g.match("iPhone( Simulator)?;") || g.match("iPad;") || g.match("iPod;") || g.match(/iPhone\s*\d*s?[cp]?;/i)) {
                this.os.name = "iOS";
                this.os.version = new M({value: "1.0"});
                if (match = /OS (.*) like Mac OS X/.exec(g)) {
                    this.os.version = new M({value: match[1].replace(/_/g, ".")})
                }
                if (g.match("iPhone Simulator;")) {
                    this.device.type = "emulator"
                } else {
                    if (g.match("iPod;")) {
                        this.device.type = "media";
                        this.device.manufacturer = "Apple";
                        this.device.model = "iPod Touch"
                    } else {
                        if (g.match("iPhone;") || g.match(/iPhone\s*\d*s?[cp]?;/i)) {
                            this.device.type = "mobile";
                            this.device.manufacturer = "Apple";
                            this.device.model = "iPhone"
                        } else {
                            this.device.type = "tablet";
                            this.device.manufacturer = "Apple";
                            this.device.model = "iPad"
                        }
                    }
                }
                this.device.identified = true
            } else {
                if (g.match("Mac OS X")) {
                    this.os.name = "Mac OS X";
                    if (match = /Mac OS X (10[0-9\._]*)/.exec(g)) {
                        this.os.version = new M({value: match[1].replace(/_/g, ".")})
                    }
                }
            }
            if (g.match("Windows")) {
                this.os.name = "Windows";
                if (match = /Windows NT ([0-9]\.[0-9])/.exec(g)) {
                    this.os.version = S(match[1]);
                    switch (match[1]) {
                        case"6.2":
                            this.os.version = new M({value: match[1], alias: "8"});
                            break;
                        case"6.1":
                            this.os.version = new M({value: match[1], alias: "7"});
                            break;
                        case"6.0":
                            this.os.version = new M({value: match[1], alias: "Vista"});
                            break;
                        case"5.2":
                            this.os.version = new M({value: match[1], alias: "Server 2003"});
                            break;
                        case"5.1":
                            this.os.version = new M({value: match[1], alias: "XP"});
                            break;
                        case"5.0":
                            this.os.version = new M({value: match[1], alias: "2000"});
                            break;
                        default:
                            this.os.version = new M({value: match[1], alias: "NT " + this.os.version})
                    }
                }
                if (g.match("Windows 95") || g.match("Win95") || g.match("Win 9x 4.00")) {
                    this.os.version = new M({value: "4.0", alias: "95"})
                }
                if (g.match("Windows 98") || g.match("Win98") || g.match("Win 9x 4.10")) {
                    this.os.version = new M({value: "4.1", alias: "98"})
                }
                if (g.match("Windows ME") || g.match("WinME") || g.match("Win 9x 4.90")) {
                    this.os.version = new M({value: "4.9", alias: "ME"})
                }
                if (g.match("Windows XP") || g.match("WinXP")) {
                    this.os.name = new M({value: "5.1", alias: "XP"})
                }
                if (g.match("WP7")) {
                    this.os.name = "Windows Phone";
                    this.os.version = new M({value: "7.0", details: 2});
                    this.device.type = "mobile";
                    this.browser.mode = "desktop"
                }
                if (g.match("Windows CE") || g.match("WinCE") || g.match("WindowsCE")) {
                    if (g.match(" IEMobile")) {
                        this.os.name = "Windows Mobile";
                        if (g.match(" IEMobile 8")) {
                            this.os.version = new M({value: "6.5", details: 2})
                        }
                        if (g.match(" IEMobile 7")) {
                            this.os.version = new M({value: "6.1", details: 2})
                        }
                        if (g.match(" IEMobile 6")) {
                            this.os.version = new M({value: "6.0", details: 2})
                        }
                    } else {
                        this.os.name = "Windows CE";
                        if (match = /WindowsCEOS\/([0-9.]*)/.exec(g)) {
                            this.os.version = new M({value: match[1], details: 2})
                        }
                        if (match = /Windows CE ([0-9.]*)/.exec(g)) {
                            this.os.version = new M({value: match[1], details: 2})
                        }
                    }
                    this.device.type = "mobile"
                }
                if (g.match("Windows Mobile")) {
                    this.os.name = "Windows Mobile";
                    this.device.type = "mobile"
                }
                if (match = /WindowsMobile\/([0-9.]*)/.exec(g)) {
                    this.os.name = "Windows Mobile";
                    this.os.version = new M({value: match[1], details: 2});
                    this.device.type = "mobile"
                }
                if (g.match("Windows Phone [0-9]")) {
                    this.os.name = "Windows Mobile";
                    this.os.version = new M({value: g.match(/Windows Phone ([0-9.]*)/)[1], details: 2});
                    this.device.type = "mobile"
                }
                if (g.match("Windows Phone OS")) {
                    this.os.name = "Windows Phone";
                    this.os.version = new M({value: g.match(/Windows Phone OS ([0-9.]*)/)[1], details: 2});
                    if (this.os.version < 7) {
                        this.os.name = "Windows Mobile"
                    }
                    if (match = /IEMobile\/[^;]+; ([^;]+); ([^;]+)[;|\)]/.exec(g)) {
                        this.device.manufacturer = match[1];
                        this.device.model = match[2]
                    }
                    this.device.type = "mobile";
                    var i = this.device.manufacturer;
                    var b = L(this.device.model);
                    if (typeof D[i] !== "undefined" && typeof D[i][b] !== "undefined") {
                        this.device.manufacturer = D[i][b][0];
                        this.device.model = D[i][b][1];
                        this.device.identified = true
                    }
                    if (i === "Microsoft" && b === "XDeviceEmulator") {
                        this.device.manufacturer = null;
                        this.device.model = null;
                        this.device.type = "emulator";
                        this.device.identified = true
                    }
                }
            }
            if (g.match("Android")) {
                this.os.name = "Android";
                this.os.version = null;
                if (match = /Android(?: )?(?:AllPhone_|CyanogenMod_)?(?:\/)?v?([0-9.]+)/.exec(g.replace("-update", "."))) {
                    this.os.version = new M({value: match[1], details: 3})
                }
                if (g.match("Android Eclair")) {
                    this.os.version = new M({value: "2.0", details: 3})
                }
                this.device.type = "mobile";
                if (this.os.version >= 3) {
                    this.device.type = "tablet"
                }
                if (this.os.version >= 4 && g.match("Mobile")) {
                    this.device.type = "mobile"
                }
                if (match = /Eclair; (?:[a-zA-Z][a-zA-Z](?:[-_][a-zA-Z][a-zA-Z])?) Build\/([^\/]*)\//.exec(g)) {
                    this.device.model = match[1]
                } else {
                    if (match = /; ([^;]*[^;\s])\s+Build/.exec(g)) {
                        this.device.model = match[1]
                    } else {
                        if (match = /[a-zA-Z][a-zA-Z](?:[-_][a-zA-Z][a-zA-Z])?; ([^;]*[^;\s]);\s+Build/.exec(g)) {
                            this.device.model = match[1]
                        } else {
                            if (match = /\(([^;]+);U;Android\/[^;]+;[0-9]+\*[0-9]+;CTC\/2.0\)/.exec(g)) {
                                this.device.model = match[1]
                            } else {
                                if (match = /;\s?([^;]+);\s?[0-9]+\*[0-9]+;\s?CTC\/2.0/.exec(g)) {
                                    this.device.model = match[1]
                                } else {
                                    if (match = /zh-cn;\s*(.*?)(\/|build)/i.exec(g)) {
                                        this.device.model = match[1]
                                    } else {
                                        if (match = /Android [^;]+; (?:[a-zA-Z][a-zA-Z](?:[-_][a-zA-Z][a-zA-Z])?; )?([^)]+)\)/.exec(g)) {
                                            if (!g.match(/[a-zA-Z][a-zA-Z](?:[-_][a-zA-Z][a-zA-Z])?/)) {
                                                this.device.model = match[1]
                                            }
                                        } else {
                                            if (match = /^(.+?)\/\S+/i.exec(g)) {
                                                this.device.model = match[1]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (this.device.model && this.device.model.substring(0, 7) === "Android") {
                    this.device.model = null
                }
                if (this.device.model) {
                    var b = L(this.device.model);
                    if (typeof I[b] !== "undefined") {
                        this.device.manufacturer = I[b][0];
                        this.device.model = I[b][1];
                        if (typeof I[b][2] !== "undefined") {
                            this.device.type = I[b][2]
                        }
                        this.device.identified = true
                    }
                    if (b === "Emulator" || b === "x86 Emulator" || b === "x86 VirtualBox" || b === "vm") {
                        this.device.manufacturer = null;
                        this.device.model = null;
                        this.device.type = "emulator";
                        this.device.identified = true
                    }
                }
                if (g.match("HP eStation")) {
                    this.device.manufacturer = "HP";
                    this.device.model = "eStation";
                    this.device.type = "tablet";
                    this.device.identified = true
                }
                if (g.match("Pre/1.0")) {
                    this.device.manufacturer = "Palm";
                    this.device.model = "Pre";
                    this.device.identified = true
                }
                if (g.match("Pre/1.1")) {
                    this.device.manufacturer = "Palm";
                    this.device.model = "Pre Plus";
                    this.device.identified = true
                }
                if (g.match("Pre/1.2")) {
                    this.device.manufacturer = "Palm";
                    this.device.model = "Pre 2";
                    this.device.identified = true
                }
                if (g.match("Pre/3.0")) {
                    this.device.manufacturer = "HP";
                    this.device.model = "Pre 3";
                    this.device.identified = true
                }
                if (g.match("Pixi/1.0")) {
                    this.device.manufacturer = "Palm";
                    this.device.model = "Pixi";
                    this.device.identified = true
                }
                if (g.match("Pixi/1.1")) {
                    this.device.manufacturer = "Palm";
                    this.device.model = "Pixi Plus";
                    this.device.identified = true
                }
                if (g.match("P160UN?A?/1.0")) {
                    this.device.manufacturer = "HP";
                    this.device.model = "Veer";
                    this.device.identified = true
                }
            }
            if (g.match("GoogleTV")) {
                this.os.name = "Google TV";
                if (g.match("Chrome/5.")) {
                    this.os.version = new M({value: "1"})
                }
                if (g.match("Chrome/11.")) {
                    this.os.version = new M({value: "2"})
                }
                this.device.type = "television"
            }
            if (g.match("WoPhone")) {
                this.os.name = "WoPhone";
                if (match = /WoPhone\/([0-9\.]*)/.exec(g)) {
                    this.os.version = new M({value: match[1]})
                }
                this.device.type = "mobile"
            }
            if (g.match("BlackBerry")) {
                this.os.name = "BlackBerry OS";
                if (!g.match("Opera")) {
                    if (match = /BlackBerry([0-9]*)\/([0-9.]*)/.exec(g)) {
                        this.device.model = match[1];
                        this.os.version = new M({value: match[2], details: 2})
                    }
                    if (match = /; BlackBerry ([0-9]*);/.exec(g)) {
                        this.device.model = match[1]
                    }
                    if (match = /Version\/([0-9.]*)/.exec(g)) {
                        this.os.version = new M({value: match[1], details: 2})
                    }
                    if (this.os.version >= 10) {
                        this.os.name = "BlackBerry"
                    }
                    if (typeof this.device.model !== "undefined") {
                        if (typeof H[this.device.model] !== "undefined") {
                            this.device.model = "BlackBerry " + H[this.device.model] + " " + this.device.model
                        } else {
                            this.device.model = "BlackBerry " + this.device.model
                        }
                    } else {
                        this.device.model = "BlackBerry"
                    }
                } else {
                    this.device.model = "BlackBerry"
                }
                this.device.manufacturer = "RIM";
                this.device.type = "mobile";
                this.device.identified = true
            }
            if (g.match("RIM Tablet OS")) {
                this.os.name = "BlackBerry Tablet OS";
                this.os.version = new M({value: g.match(/RIM Tablet OS ([0-9.]*)/)[1], details: 2});
                this.device.manufacturer = "RIM";
                this.device.model = "BlackBerry PlayBook";
                this.device.type = "tablet";
                this.device.identified = true
            } else {
                if (g.match("PlayBook")) {
                    if (match = /Version\/(10[0-9.]*)/.exec(g)) {
                        this.os.name = "BlackBerry";
                        this.os.version = new M({value: match[1], details: 2});
                        this.device.manufacturer = "RIM";
                        this.device.model = "BlackBerry PlayBook";
                        this.device.type = "tablet";
                        this.device.identified = true
                    }
                }
            }
            if (g.match("(?:web|hpw)OS")) {
                this.os.name = "webOS";
                this.os.version = new M({value: g.match(/(?:web|hpw)OS\/([0-9.]*)/)[1]});
                if (g.match("tablet")) {
                    this.device.type = "tablet"
                } else {
                    this.device.type = "mobile"
                }
                this.device.manufacturer = g.match("hpwOS") ? "HP" : "Palm";
                if (g.match("Pre/1.0")) {
                    this.device.model = "Pre"
                }
                if (g.match("Pre/1.1")) {
                    this.device.model = "Pre Plus"
                }
                if (g.match("Pre/1.2")) {
                    this.device.model = "Pre2"
                }
                if (g.match("Pre/3.0")) {
                    this.device.model = "Pre3"
                }
                if (g.match("Pixi/1.0")) {
                    this.device.model = "Pixi"
                }
                if (g.match("Pixi/1.1")) {
                    this.device.model = "Pixi Plus"
                }
                if (g.match("P160UN?A?/1.0")) {
                    this.device.model = "Veer"
                }
                if (g.match("TouchPad/1.0")) {
                    this.device.model = "TouchPad"
                }
                if (g.match("Emulator/") || g.match("Desktop/")) {
                    this.device.type = "emulator";
                    this.device.manufacturer = null;
                    this.device.model = null
                }
                this.device.identified = true
            }
            if (g.match("Symbian") || g.match("Series[ ]?60") || g.match("S60")) {
                this.os.name = "Series60";
                if (g.match("SymbianOS/9.1") && !g.match("Series60")) {
                    this.os.version = new M({value: "3.0"})
                }
                if (match = /Series60\/([0-9.]*)/.exec(g)) {
                    this.os.version = new M({value: match[1]})
                }
                if (match = /Nokia([^\/;]+)[\/|;]/.exec(g)) {
                    if (match[1] !== "Browser") {
                        this.device.manufacturer = "Nokia";
                        this.device.model = match[1];
                        this.device.identified = true
                    }
                }
                if (match = /Vertu([^\/;]+)[\/|;]/.exec(g)) {
                    this.device.manufacturer = "Vertu";
                    this.device.model = match[1];
                    this.device.identified = true
                }
                if (match = /Symbian; U; ([^;]+); [a-z][a-z]\-[a-z][a-z]/i.exec(g)) {
                    this.device.manufacturer = "Nokia";
                    this.device.model = match[1];
                    this.device.identified = true
                }
                if (match = /Samsung\/([^;]*);/.exec(g)) {
                    this.device.manufacturer = B;
                    this.device.model = match[1];
                    this.device.identified = true
                }
                this.device.type = "mobile"
            }
            if (g.match("Series40")) {
                this.os.name = "Series40";
                if (match = /Nokia([^\/]+)\//.exec(g)) {
                    this.device.manufacturer = "Nokia";
                    this.device.model = match[1];
                    this.device.identified = true
                }
                this.device.type = "mobile"
            }
            if (g.match("MeeGo")) {
                this.os.name = "MeeGo";
                this.device.type = "mobile";
                if (match = /Nokia([^\)]+)\)/.exec(g)) {
                    this.device.manufacturer = "Nokia";
                    this.device.model = match[1];
                    this.device.identified = true
                }
            }
            if (g.match("Maemo")) {
                this.os.name = "Maemo";
                this.device.type = "mobile";
                if (match = /(N[0-9]+)/.exec(g)) {
                    this.device.manufacturer = "Nokia";
                    this.device.model = match[1];
                    this.device.identified = true
                }
            }
            if (g.match("Tizen")) {
                this.os.name = "Tizen";
                if (match = /Tizen[\/ ]([0-9.]*)/.exec(g)) {
                    this.os.version = new M({value: match[1]})
                }
                this.device.type = "mobile";
                if (match = /\(([^;]+); ([^\/]+)\//.exec(g)) {
                    if (match[1] !== "Linux") {
                        this.device.manufacturer = match[1];
                        this.device.model = match[2];
                        if (typeof G[this.device.manufacturer] !== "undefined" && typeof G[this.device.manufacturer][this.device.model] !== "undefined") {
                            var i = this.device.manufacturer;
                            var b = L(this.device.model);
                            this.device.manufacturer = G[i][b][0];
                            this.device.model = G[i][b][1];
                            this.device.identified = true
                        }
                    }
                }
            }
            if (g.match("[b|B]ada")) {
                this.os.name = "Bada";
                if (match = /[b|B]ada\/([0-9.]*)/.exec(g)) {
                    this.os.version = new M({value: match[1]})
                }
                this.device.type = "mobile";
                if (match = /\(([^;]+); ([^\/]+)\//.exec(g)) {
                    this.device.manufacturer = match[1];
                    this.device.model = L(match[2])
                }
                if (typeof P[this.device.manufacturer] !== "undefined" && typeof P[this.device.manufacturer][this.device.model] !== "undefined") {
                    var i = this.device.manufacturer;
                    var b = L(this.device.model);
                    this.device.manufacturer = P[i][b][0];
                    this.device.model = P[i][b][1];
                    this.device.identified = true
                }
            }
            if (g.match(/BREW/i) || g.match("BMP; U")) {
                this.os.name = "Brew";
                this.device.type = "mobile";
                if (match = /BREW; U; ([0-9.]*)/i.exec(g)) {
                    this.os.version = new M({value: match[1]})
                } else {
                    if (match = /;BREW\/([0-9.]*)/i.exec(g)) {
                        this.os.version = new M({value: match[1]})
                    }
                }
                if (match = /\(([^;]+);U;REX\/[^;]+;BREW\/[^;]+;(?:.*;)?[0-9]+\*[0-9]+;CTC\/2.0\)/.exec(g)) {
                    this.device.model = match[1]
                }
                if (this.device.model) {
                    var b = L(this.device.model);
                    if (typeof T[b] !== "undefined") {
                        this.device.manufacturer = T[b][0];
                        this.device.model = T[b][1];
                        this.device.identified = true
                    }
                }
            }
            if (g.match(/\(MTK;/)) {
                this.os.name = "MTK";
                this.device.type = "mobile"
            }
            if (g.match("CrOS")) {
                this.os.name = "Chrome OS";
                this.device.type = "desktop"
            }
            if (g.match("Joli OS")) {
                this.os.name = "Joli OS";
                this.device.type = "desktop";
                if (match = /Joli OS\/([0-9.]*)/i.exec(g)) {
                    this.os.version = new M({value: match[1]})
                }
            }
            if (g.match("Haiku")) {
                this.os.name = "Haiku";
                this.device.type = "desktop"
            }
            if (g.match("QNX")) {
                this.os.name = "QNX";
                this.device.type = "mobile"
            }
            if (g.match("OS/2; Warp")) {
                this.os.name = "OS/2 Warp";
                this.device.type = "desktop";
                if (match = /OS\/2; Warp ([0-9.]*)/i.exec(g)) {
                    this.os.version = new M({value: match[1]})
                }
            }
            if (g.match("Grid OS")) {
                this.os.name = "Grid OS";
                this.device.type = "tablet";
                if (match = /Grid OS ([0-9.]*)/i.exec(g)) {
                    this.os.version = new M({value: match[1]})
                }
            }
            if (g.match(/AmigaOS/i)) {
                this.os.name = "AmigaOS";
                this.device.type = "desktop";
                if (match = /AmigaOS ([0-9.]*)/i.exec(g)) {
                    this.os.version = new M({value: match[1]})
                }
            }
            if (g.match(/MorphOS/i)) {
                this.os.name = "MorphOS";
                this.device.type = "desktop";
                if (match = /MorphOS ([0-9.]*)/i.exec(g)) {
                    this.os.version = new M({value: match[1]})
                }
            }
            if (g.match("Kindle") && !g.match("Fire")) {
                this.os.name = "";
                this.device.manufacturer = "Amazon";
                this.device.model = "Kindle";
                this.device.type = "ereader";
                if (g.match("Kindle/2.0")) {
                    this.device.model = "Kindle 2"
                }
                if (g.match("Kindle/3.0")) {
                    this.device.model = "Kindle 3 or later"
                }
                this.device.identified = true
            }
            if (g.match("nook browser")) {
                this.os.name = "Android";
                this.device.manufacturer = "Barnes & Noble";
                this.device.model = "NOOK";
                this.device.type = "ereader";
                this.device.identified = true
            }
            if (g.match("bookeen/cybook")) {
                this.os.name = "";
                this.device.manufacturer = "Bookeen";
                this.device.model = "Cybook";
                this.device.type = "ereader";
                if (g.match("Orizon")) {
                    this.device.model = "Cybook Orizon"
                }
                this.device.identified = true
            }
            if (g.match("EBRD1101")) {
                this.os.name = "";
                this.device.manufacturer = "Sony";
                this.device.model = "Reader";
                this.device.type = "ereader";
                this.device.identified = true
            }
            if (g.match("Iriver ;")) {
                this.os.name = "";
                this.device.manufacturer = "iRiver";
                this.device.model = "Story";
                this.device.type = "ereader";
                if (g.match("EB07")) {
                    this.device.model = "Story HD EB07"
                }
                this.device.identified = true
            }
            if (g.match("Nintendo Wii")) {
                this.os.name = "";
                this.device.manufacturer = "Nintendo";
                this.device.model = "Wii";
                this.device.type = "gaming";
                this.device.identified = true
            }
            if (g.match("Nintendo DSi")) {
                this.os.name = "";
                this.device.manufacturer = "Nintendo";
                this.device.model = "DSi";
                this.device.type = "gaming";
                this.device.identified = true
            }
            if (g.match("Nintendo 3DS")) {
                this.os.name = "";
                this.device.manufacturer = "Nintendo";
                this.device.model = "3DS";
                this.device.type = "gaming";
                if (match = /Version\/([0-9.]*)/.exec(g)) {
                    this.os.version = new M({value: match[1]})
                }
                this.device.identified = true
            }
            if (g.match("PlayStation Portable")) {
                this.os.name = "";
                this.device.manufacturer = "Sony";
                this.device.model = "Playstation Portable";
                this.device.type = "gaming";
                this.device.identified = true
            }
            if (g.match("PlayStation Vita")) {
                this.os.name = "";
                if (match = /PlayStation Vita ([0-9.]*)/.exec(g)) {
                    this.os.version = new M({value: match[1]})
                }
                this.device.manufacturer = "Sony";
                this.device.model = "PlayStation Vita";
                this.device.type = "gaming";
                this.device.identified = true
            }
            if (g.match(/PlayStation 3/i)) {
                this.os.name = "";
                if (match = /PLAYSTATION 3;? ([0-9.]*)/.exec(g)) {
                    this.os.version = new M({value: match[1]})
                }
                this.device.manufacturer = "Sony";
                this.device.model = "Playstation 3";
                this.device.type = "gaming";
                this.device.identified = true
            }
            if (g.match("Viera")) {
                this.os.name = "";
                this.device.manufacturer = "Panasonic";
                this.device.model = "Smart Viera";
                this.device.type = "television";
                this.device.identified = true
            }
            if (g.match("AQUOSBrowser") || g.match("AQUOS-AS")) {
                this.os.name = "";
                this.device.manufacturer = J;
                this.device.model = "Aquos TV";
                this.device.type = "television";
                this.device.identified = true
            }
            if (g.match("SMART-TV")) {
                this.os.name = "";
                this.device.manufacturer = B;
                this.device.model = "Smart TV";
                this.device.type = "television";
                this.device.identified = true;
                if (match = /Maple([0-9]*)/.exec(g)) {
                    this.device.model += " " + match[1]
                }
            }
            if (g.match("SonyDTV|SonyBDP|SonyCEBrowser")) {
                this.os.name = "";
                this.device.manufacturer = "Sony";
                this.device.model = "Internet TV";
                this.device.type = "television";
                this.device.identified = true
            }
            if (g.match("NETTV/")) {
                this.os.name = "";
                this.device.manufacturer = "Philips";
                this.device.model = "Net TV";
                this.device.type = "television";
                this.device.identified = true
            }
            if (match = /LG NetCast\.(?:TV|Media)-([0-9]*)/.exec(g)) {
                this.os.name = "";
                this.device.manufacturer = R;
                this.device.model = "NetCast TV " + match[1];
                this.device.type = "television";
                this.device.identified = true
            }
            if (match = /LGSmartTV/.exec(g)) {
                this.os.name = "";
                this.device.manufacturer = R;
                this.device.model = "Smart TV";
                this.device.type = "television";
                this.device.identified = true
            }
            if (g.match("Toshiba_?TP/") || g.match("TSBNetTV/")) {
                this.os.name = "";
                this.device.manufacturer = "Toshiba";
                this.device.model = "Smart TV";
                this.device.type = "television";
                this.device.identified = true
            }
            if (match = /mbxtWebKit\/([0-9.]*)/.exec(g)) {
                this.os.name = "";
                this.browser.name = "MachBlue XT";
                this.browser.version = new M({value: match[1], details: 2});
                this.device.type = "television"
            }
            if (match = /\(ADB; ([^\)]+)\)/.exec(g)) {
                this.os.name = "";
                this.device.manufacturer = "ADB";
                this.device.model = (match[1] !== "Unknown" ? match[1].replace("ADB", "") + " " : "") + "IPTV receiver";
                this.device.type = "television";
                this.device.identified = true
            }
            if (g.match(/Mstar;OWB/)) {
                this.os.name = "";
                this.device.manufacturer = "MStar";
                this.device.model = "PVR";
                this.device.type = "television";
                this.device.identified = true;
                this.browser.name = "Origyn Web Browser"
            }
            if (match = /\TechniSat ([^;]+);/.exec(g)) {
                this.os.name = "";
                this.device.manufacturer = "TechniSat";
                this.device.model = match[1];
                this.device.type = "television";
                this.device.identified = true
            }
            if (match = /\Technicolor_([^;]+);/.exec(g)) {
                this.os.name = "";
                this.device.manufacturer = "Technicolor";
                this.device.model = match[1];
                this.device.type = "television";
                this.device.identified = true
            }
            if (match = /Winbox Evo2/.exec(g)) {
                this.os.name = "";
                this.device.manufacturer = "Winbox";
                this.device.model = "Evo2";
                this.device.type = "television";
                this.device.identified = true
            }
            if (match = /^Roku\/DVP-([0-9]+)/.exec(g)) {
                this.device.manufacturer = "Roku";
                this.device.type = "television";
                switch (match[1]) {
                    case"2000":
                        this.device.model = "HD";
                        break;
                    case"2050":
                        this.device.model = "XD";
                        break;
                    case"2100":
                        this.device.model = "XDS";
                        break;
                    case"2400":
                        this.device.model = "LT";
                        break;
                    case"3000":
                        this.device.model = "2 HD";
                        break;
                    case"3050":
                        this.device.model = "2 XD";
                        break;
                    case"3100":
                        this.device.model = "2 XS";
                        break
                }
                this.device.identified = true
            }
            if (match = /HbbTV\/1.1.1 \([^;]*;\s*([^;]*)\s*;\s*([^;]*)\s*;/.exec(g)) {
                var f = match[1].trim();
                var k = match[2].trim();
                if (!this.device.manufacturer && f !== "" && f !== "vendorName") {
                    switch (f) {
                        case"LGE":
                            this.device.manufacturer = "LG";
                            break;
                        case"TOSHIBA":
                            this.device.manufacturer = "Toshiba";
                            break;
                        case"smart":
                            this.device.manufacturer = "Smart";
                            break;
                        case"tv2n":
                            this.device.manufacturer = "TV2N";
                            break;
                        default:
                            this.device.manufacturer = f
                    }
                    if (!this.device.model && k !== "" && k !== "modelName") {
                        switch (k) {
                            case"GLOBAL_PLAT3":
                                this.device.model = "NetCast TV";
                                break;
                            case"SmartTV2012":
                                this.device.model = "Smart TV 2012";
                                break;
                            case"videoweb":
                                this.device.model = "Videoweb";
                                break;
                            default:
                                this.device.model = k
                        }
                        if (f === "Humax") {
                            this.device.model = this.device.model.toUpperCase()
                        }
                        this.device.identified = true;
                        this.os.name = ""
                    }
                }
                this.device.type = "television"
            }
            if (g.match("InettvBrowser")) {
                this.device.type = "television"
            }
            if (g.match("MIDP")) {
                this.device.type = "mobile"
            }
            if (!this.device.model && !this.device.manufacturer) {
                var c = [];
                if (!g.match(/^(Mozilla|Opera)/)) {
                    if (match = /^(?:MQQBrowser\/[0-9\.]+\/)?([^\s]+)/.exec(g)) {
                        match[1] = match[1].replace(/_TD$/, "");
                        match[1] = match[1].replace(/_CMCC$/, "");
                        match[1] = match[1].replace(/[_ ]Mozilla$/, "");
                        match[1] = match[1].replace(/ Linux$/, "");
                        match[1] = match[1].replace(/ Opera$/, "");
                        match[1] = match[1].replace(/\/[0-9].*$/, "");
                        c.push(match[1])
                    }
                }
                if (match = /[0-9]+x[0-9]+; ([^;]+)/.exec(g)) {
                    c.push(match[1])
                }
                if (match = /[0-9]+X[0-9]+ ([^;\/\(\)]+)/.exec(g)) {
                    c.push(match[1])
                }
                if (match = /Windows NT 5.1; ([^;]+); Windows Phone/.exec(g)) {
                    c.push(match[1])
                }
                if (match = /\) PPC; (?:[0-9]+x[0-9]+; )?([^;\/\(\)]+)/.exec(g)) {
                    c.push(match[1])
                }
                if (match = /\(([^;]+); U; Windows Mobile/.exec(g)) {
                    c.push(match[1])
                }
                if (match = /Vodafone\/1.0\/([^\/]+)/.exec(g)) {
                    c.push(match[1])
                }
                if (match = /\ ([^\s]+)$/.exec(g)) {
                    c.push(match[1])
                }
                for (var d = 0; d < c.length; d++) {
                    if (!this.device.model && !this.device.manufacturer) {
                        var b = L(c[d]);
                        var h = false;
                        if (this.os.name === "Android") {
                            if (typeof I[b] !== "undefined") {
                                this.device.manufacturer = I[b][0];
                                this.device.model = I[b][1];
                                if (typeof I[b][2] !== "undefined") {
                                    this.device.type = I[b][2]
                                }
                                this.device.identified = true;
                                h = true
                            }
                        }
                        if (!this.os.name || this.os.name === "Windows" || this.os.name === "Windows Mobile" || this.os.name === "Windows CE") {
                            if (typeof z[b] !== "undefined") {
                                this.device.manufacturer = z[b][0];
                                this.device.model = z[b][1];
                                this.device.type = "mobile";
                                this.device.identified = true;
                                if (this.os.name !== "Windows Mobile") {
                                    this.os.name = "Windows Mobile";
                                    this.os.version = null
                                }
                                h = true
                            }
                        }
                    }
                    if (!h) {
                        if (match = /^GIONEE-([^\s]+)/.exec(c[d])) {
                            this.device.manufacturer = "Gionee";
                            this.device.model = L(match[1]);
                            this.device.type = "mobile";
                            this.device.identified = true
                        }
                        if (match = /^HTC_?([^\/_]+)(?:\/|_|$)/.exec(c[d])) {
                            this.device.manufacturer = A;
                            this.device.model = L(match[1]);
                            this.device.type = "mobile";
                            this.device.identified = true
                        }
                        if (match = /^HUAWEI-([^\/]*)/.exec(c[d])) {
                            this.device.manufacturer = K;
                            this.device.model = L(match[1]);
                            this.device.type = "mobile";
                            this.device.identified = true
                        }
                        if (match = /(?:^|\()LGE?(?:\/|-|_|\s)([^\s]*)/.exec(c[d])) {
                            this.device.manufacturer = R;
                            this.device.model = L(match[1]);
                            this.device.type = "mobile";
                            this.device.identified = true
                        }
                        if (match = /^MOT-([^\/_]+)(?:\/|_|$)/.exec(c[d])) {
                            this.device.manufacturer = F;
                            this.device.model = L(match[1]);
                            this.device.type = "mobile";
                            this.device.identified = true
                        }
                        if (match = /^Motorola_([^\/_]+)(?:\/|_|$)/.exec(c[d])) {
                            this.device.manufacturer = F;
                            this.device.model = L(match[1]);
                            this.device.type = "mobile";
                            this.device.identified = true
                        }
                        if (match = /^Nokia([^\/]+)(?:\/|$)/.exec(c[d])) {
                            this.device.manufacturer = "Nokia";
                            this.device.model = L(match[1]);
                            this.device.type = "mobile";
                            this.device.identified = true;
                            if (!this.os.name) {
                                this.os.name = "Series40"
                            }
                        }
                        if (match = /^SonyEricsson([^\/_]+)(?:\/|_|$)/.exec(c[d])) {
                            this.device.manufacturer = Q;
                            this.device.model = L(match[1]);
                            this.device.type = "mobile";
                            this.device.identified = true
                        }
                        if (match = /^SAMSUNG-([^\/_]+)(?:\/|_|$)/.exec(c[d])) {
                            this.device.manufacturer = B;
                            this.device.model = L(match[1]);
                            this.device.type = "mobile";
                            if (this.os.name === "Bada") {
                                var i = "SAMSUNG";
                                var b = L(this.device.model);
                                if (typeof P[i] !== "undefined" && typeof P[i][b] !== "undefined") {
                                    this.device.manufacturer = P[i][b][0];
                                    this.device.model = P[i][b][1];
                                    this.device.identified = true
                                }
                            } else {
                                if (match = /Jasmine\/([0-9.]*)/.exec(g)) {
                                    var a = match[1];
                                    var i = "SAMSUNG";
                                    var b = L(this.device.model);
                                    if (typeof x[i] !== "undefined" && typeof x[i][b] !== "undefined") {
                                        this.device.manufacturer = x[i][b][0];
                                        this.device.model = x[i][b][1];
                                        this.device.identified = true;
                                        this.os.name = "Touchwiz";
                                        this.os.version = new M({value: "2.0"})
                                    }
                                } else {
                                    if (match = /Dolfin\/([0-9.]*)/.exec(g)) {
                                        var a = match[1];
                                        var i = "SAMSUNG";
                                        var b = L(this.device.model);
                                        if (typeof P[i] !== "undefined" && typeof P[i][b] !== "undefined") {
                                            this.device.manufacturer = P[i][b][0];
                                            this.device.model = P[i][b][1];
                                            this.device.identified = true;
                                            this.os.name = "Bada";
                                            switch (a) {
                                                case"2.0":
                                                    this.os.version = new M({value: "1.0"});
                                                    break;
                                                case"2.2":
                                                    this.os.version = new M({value: "1.2"});
                                                    break;
                                                case"3.0":
                                                    this.os.version = new M({value: "2.0"});
                                                    break
                                            }
                                        }
                                        if (typeof x[i] !== "undefined" && typeof x[i][b] !== "undefined") {
                                            this.device.manufacturer = x[i][b][0];
                                            this.device.model = x[i][b][1];
                                            this.device.identified = true;
                                            this.os.name = "Touchwiz";
                                            switch (a) {
                                                case"1.0":
                                                    this.os.version = new M({value: "1.0"});
                                                    break;
                                                case"1.5":
                                                    this.os.version = new M({value: "2.0"});
                                                    break;
                                                case"2.0":
                                                    this.os.version = new M({value: "3.0"});
                                                    break
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (match = /\((?:LG[-|\/])(.*) (?:Browser\/)?AppleWebkit/.exec(g)) {
                this.device.manufacturer = R;
                this.device.model = match[1];
                this.device.type = "mobile";
                this.device.identified = true
            }
            if (match = /^Mozilla\/5.0 \((?:Nokia|NOKIA)(?:\s?)([^\)]+)\)UC AppleWebkit\(like Gecko\) Safari\/530$/.exec(g)) {
                this.device.manufacturer = "Nokia";
                this.device.model = match[1];
                this.device.type = "mobile";
                this.device.identified = true;
                this.os.name = "Series60"
            }
            if (g.match("Safari")) {
                if (this.os.name === "iOS") {
                    this.browser.stock = true;
                    this.browser.hidden = true;
                    this.browser.name = "Safari";
                    this.browser.version = null
                }
                if (this.os.name === "Mac OS X" || this.os.name === "Windows") {
                    this.browser.name = "Safari";
                    this.browser.stock = this.os.name === "Mac OS X";
                    if (match = /Version\/([0-9\.]+)/.exec(g)) {
                        this.browser.version = new M({value: match[1]})
                    }
                    if (g.match(/AppleWebKit\/[0-9\.]+\+/)) {
                        this.browser.name = "WebKit Nightly Build";
                        this.browser.version = null
                    }
                }
            }
            if (g.match("MSIE")) {
                this.browser.name = "Internet Explorer";
                if (g.match("IEMobile") || g.match("Windows CE") || g.match("Windows Phone") || g.match("WP7")) {
                    this.browser.name = "Mobile Internet Explorer"
                }
                if (match = /MSIE ([0-9.]*)/.exec(g)) {
                    this.browser.version = new M({value: match[1]})
                }
            }
            if (g.match(/Opera/i)) {
                this.browser.stock = false;
                this.browser.name = "Opera";
                if (match = /Opera[\/| ]([0-9.]*)/.exec(g)) {
                    this.browser.version = new M({value: match[1]})
                }
                if (match = /Version\/([0-9.]*)/.exec(g)) {
                    if (parseFloat(match[1]) >= 10) {
                        this.browser.version = new M({value: match[1]})
                    } else {
                        this.browser.version = null
                    }
                }
                if (this.browser.version && g.match("Edition Labs")) {
                    this.browser.version.type = "alpha";
                    this.browser.channel = "Labs"
                }
                if (this.browser.version && g.match("Edition Next")) {
                    this.browser.version.type = "alpha";
                    this.browser.channel = "Next"
                }
                if (g.match("Opera Tablet")) {
                    this.browser.name = "Opera Mobile";
                    this.device.type = "tablet"
                }
                if (g.match("Opera Mobi")) {
                    this.browser.name = "Opera Mobile";
                    this.device.type = "mobile"
                }
                if (match = /Opera Mini;/.exec(g)) {
                    this.browser.name = "Opera Mini";
                    this.browser.version = null;
                    this.browser.mode = "proxy";
                    this.device.type = "mobile"
                }
                if (match = /Opera Mini\/(?:att\/)?([0-9.]*)/.exec(g)) {
                    this.browser.name = "Opera Mini";
                    this.browser.version = new M({value: match[1], details: -1});
                    this.browser.mode = "proxy";
                    this.device.type = "mobile"
                }
                if (this.browser.name === "Opera" && this.device.type === "mobile") {
                    this.browser.name = "Opera Mobile";
                    if (g.match(/BER/)) {
                        this.browser.name = "Opera Mini";
                        this.browser.version = null
                    }
                }
                if (g.match("InettvBrowser")) {
                    this.device.type = "television"
                }
                if (g.match("Opera TV") || g.match("Opera-TV")) {
                    this.browser.name = "Opera";
                    this.device.type = "television"
                }
                if (g.match("Linux zbov")) {
                    this.browser.name = "Opera Mobile";
                    this.browser.mode = "desktop";
                    this.device.type = "mobile";
                    this.os.name = null;
                    this.os.version = null
                }
                if (g.match("Linux zvav")) {
                    this.browser.name = "Opera Mini";
                    this.browser.version = null;
                    this.browser.mode = "desktop";
                    this.device.type = "mobile";
                    this.os.name = null;
                    this.os.version = null
                }
            }
            if (g.match("Firefox")) {
                this.browser.stock = false;
                this.browser.name = "Firefox";
                if (match = /Firefox\/([0-9ab.]*)/.exec(g)) {
                    this.browser.version = new M({value: match[1]})
                }
                if (this.browser.version.type === "alpha") {
                    this.browser.channel = "Aurora"
                }
                if (this.browser.version.type === "beta") {
                    this.browser.channel = "Beta"
                }
                if (g.match("Fennec")) {
                    this.device.type = "mobile"
                }
                if (g.match("Mobile; rv")) {
                    this.device.type = "mobile"
                }
                if (g.match("Tablet; rv")) {
                    this.device.type = "tablet"
                }
                if (this.device.type === "mobile" || this.device.type === "tablet") {
                    this.browser.name = "Firefox Mobile"
                }
            }
            if (g.match("Namoroka")) {
                this.browser.stock = false;
                this.browser.name = "Firefox";
                if (match = /Namoroka\/([0-9ab.]*)/.exec(g)) {
                    this.browser.version = new M({value: match[1]})
                }
                this.browser.channel = "Namoroka"
            }
            if (g.match("Shiretoko")) {
                this.browser.stock = false;
                this.browser.name = "Firefox";
                if (match = /Shiretoko\/([0-9ab.]*)/.exec(g)) {
                    this.browser.version = new M({value: match[1]})
                }
                this.browser.channel = "Shiretoko"
            }
            if (g.match("Minefield")) {
                this.browser.stock = false;
                this.browser.name = "Firefox";
                if (match = /Minefield\/([0-9ab.]*)/.exec(g)) {
                    this.browser.version = new M({value: match[1]})
                }
                this.browser.channel = "Minefield"
            }
            if (g.match("Firebird")) {
                this.browser.stock = false;
                this.browser.name = "Firebird";
                if (match = /Firebird\/([0-9ab.]*)/.exec(g)) {
                    this.browser.version = new M({value: match[1]})
                }
            }
            if (g.match("SeaMonkey")) {
                this.browser.stock = false;
                this.browser.name = "SeaMonkey";
                if (match = /SeaMonkey\/([0-9.]*)/.exec(g)) {
                    this.browser.version = new M({value: match[1]})
                }
            }
            if (g.match("Netscape")) {
                this.browser.stock = false;
                this.browser.name = "Netscape";
                if (match = /Netscape[0-9]?\/([0-9.]*)/.exec(g)) {
                    this.browser.version = new M({value: match[1]})
                }
            }
            if (g.match("[k|K]onqueror/")) {
                this.browser.name = "Konqueror";
                if (match = /[k|K]onqueror\/([0-9.]*)/.exec(g)) {
                    this.browser.version = new M({value: match[1]})
                }
            }
            if (match = /(?:Chrome|CrMo|CriOS)\/([0-9.]*)/.exec(g)) {
                this.browser.stock = false;
                this.browser.name = "Chrome";
                this.browser.version = new M({value: match[1]});
                if (this.os.name === "Android") {
                    switch (match[1].split(".", 3).join(".")) {
                        case"16.0.912":
                            this.browser.channel = "Beta";
                            break;
                        case"18.0.1025":
                            this.browser.version.details = 1;
                            break;
                        default:
                            this.browser.channel = "Nightly";
                            break
                    }
                } else {
                    switch (match[1].split(".", 3).join(".")) {
                        case"0.2.149":
                        case"0.3.154":
                        case"0.4.154":
                        case"1.0.154":
                        case"2.0.172":
                        case"3.0.195":
                        case"4.0.249":
                        case"4.1.249":
                        case"5.0.375":
                        case"6.0.472":
                        case"7.0.517":
                        case"8.0.552":
                        case"9.0.597":
                        case"10.0.648":
                        case"11.0.696":
                        case"12.0.742":
                        case"13.0.782":
                        case"14.0.835":
                        case"15.0.874":
                        case"16.0.912":
                        case"17.0.963":
                        case"18.0.1025":
                        case"19.0.1084":
                        case"20.0.1132":
                        case"21.0.1180":
                            if (this.browser.version.minor === 0) {
                                this.browser.version.details = 1
                            } else {
                                this.browser.version.details = 2
                            }
                            break;
                        default:
                            this.browser.channel = "Nightly";
                            break
                    }
                }
            }
            if (g.match("chromeframe")) {
                this.browser.stock = false;
                this.browser.name = "Chrome Frame";
                if (match = /chromeframe\/([0-9.]*)/.exec(g)) {
                    this.browser.version = new M({value: match[1]})
                }
            }
            if (g.match("Chromium")) {
                this.browser.stock = false;
                this.browser.channel = "";
                this.browser.name = "Chromium";
                if (match = /Chromium\/([0-9.]*)/.exec(g)) {
                    this.browser.version = new M({value: match[1]})
                }
            }
            if (g.match("BrowserNG")) {
                this.browser.name = "Nokia Browser";
                if (match = /BrowserNG\/([0-9.]*)/.exec(g)) {
                    this.browser.version = new M({value: match[1], details: 3, builds: false})
                }
            }
            if (g.match("NokiaBrowser")) {
                this.browser.name = "Nokia Browser";
                if (match = /NokiaBrowser\/([0-9.]*)/.exec(g)) {
                    this.browser.version = new M({value: match[1], details: 3})
                }
            }
            if (g.match("Maemo[ |_]Browser")) {
                this.browser.name = "MicroB";
                if (match = /Maemo[ |_]Browser[ |_]([0-9.]*)/.exec(g)) {
                    this.browser.version = new M({value: match[1], details: 3})
                }
            }
            if (g.match("NetFront")) {
                this.browser.name = "NetFront";
                this.device.type = "mobile";
                if (match = /NetFront\/([0-9.]*)/.exec(g)) {
                    this.browser.version = new M({value: match[1]})
                }
                if (g.match("InettvBrowser")) {
                    this.device.type = "television"
                }
            }
            if (g.match("Silk")) {
                if (g.match("Silk-Accelerated")) {
                    this.browser.name = "Silk";
                    if (match = /Silk\/([0-9.]*)/.exec(g)) {
                        this.browser.version = new M({value: match[1], details: 2})
                    }
                    this.device.manufacturer = "Amazon";
                    this.device.model = "Kindle Fire";
                    this.device.type = "tablet";
                    this.device.identified = true;
                    if (this.os.name !== "Android") {
                        this.os.name = "Android";
                        this.os.version = null
                    }
                }
            }
            if (g.match("Dolfin")) {
                this.browser.name = "Dolfin";
                if (match = /Dolfin\/([0-9.]*)/.exec(g)) {
                    this.browser.version = new M({value: match[1]})
                }
            }
            if (g.match("Iris")) {
                this.browser.name = "Iris";
                this.device.type = "mobile";
                this.device.model = null;
                this.device.manufacturer = null;
                this.os.name = "Windows Mobile";
                this.os.version = null;
                if (match = /Iris\/([0-9.]*)/.exec(g)) {
                    this.browser.version = new M({value: match[1]})
                }
                if (match = / WM([0-9]) /.exec(g)) {
                    this.os.version = new M({value: match[1] + ".0"})
                } else {
                    this.browser.mode = "desktop"
                }
            }
            if (g.match("Jasmine")) {
                this.browser.name = "Jasmine";
                if (match = /Jasmine\/([0-9.]*)/.exec(g)) {
                    this.browser.version = new M({value: match[1]})
                }
            }
            if (g.match("Boxee")) {
                this.browser.name = "Boxee";
                this.device.type = "television";
                if (match = /Boxee\/([0-9.]*)/.exec(g)) {
                    this.browser.version = new M({value: match[1]})
                }
            }
            if (g.match("Espial")) {
                this.browser.name = "Espial";
                this.os.name = "";
                this.os.version = null;
                if (this.device.type !== "television") {
                    this.device.type = "television";
                    this.device.model = null;
                    this.device.manufacturer = null
                }
                if (match = /Espial\/([0-9.]*)/.exec(g)) {
                    this.browser.version = new M({value: match[1]})
                }
            }
            if (match = /ANTGalio\/([0-9.]*)/.exec(g)) {
                this.browser.name = "ANT Galio";
                this.browser.version = new M({value: match[1], details: 3});
                this.device.type = "television"
            }
            if (match = /NX\/([0-9.]*)/.exec(g)) {
                this.browser.name = "NetFront NX";
                this.browser.version = new M({value: match[1], details: 2});
                if (match = /DTV/i.exec(g)) {
                    this.device.type = "television"
                } else {
                    if (match = /mobile/i.exec(g)) {
                        this.device.type = "mobile"
                    } else {
                        this.device.type = "desktop"
                    }
                }
                this.os.name = null;
                this.os.version = null
            }
            if (g.match(/Obigo/i)) {
                this.browser.name = "Obigo";
                if (match = /Obigo\/([0-9.]*)/i.exec(g)) {
                    this.browser.version = new M({value: match[1]})
                }
                if (match = /Obigo\/([A-Z])([0-9.]*)/i.exec(g)) {
                    this.browser.name = "Obigo " + match[1];
                    this.browser.version = new M({value: match[2]})
                }
                if (match = /Obigo-([A-Z])([0-9.]*)\//i.exec(g)) {
                    this.browser.name = "Obigo " + match[1];
                    this.browser.version = new M({value: match[2]})
                }
            }
            if (g.match("UCWEB")) {
                this.browser.stock = false;
                this.browser.name = "UC Browser";
                if (match = /UCWEB([0-9]*[.][0-9]*)/.exec(g)) {
                    this.browser.version = new M({value: match[1], details: 3})
                }
                if (this.os.name === "Linux") {
                    this.os.name = ""
                }
                this.device.type = "mobile";
                if (match = /^IUC \(U;\s?iOS ([0-9\.]+);/.exec(g)) {
                    this.os.name = "iOS";
                    this.os.version = new M({value: match[1]})
                }
                if (match = /^JUC \(Linux; U; ([0-9\.]+)[^;]*; [^;]+; ([^;]*[^\s])\s*; [0-9]+\*[0-9]+\)/.exec(g)) {
                    var b = L(match[2]);
                    this.os.name = "Android";
                    this.os.version = new M({value: match[1]});
                    if (typeof I[b] !== "undefined") {
                        this.device.manufacturer = I[b][0];
                        this.device.model = I[b][1];
                        if (typeof I[b][2] !== "undefined") {
                            this.device.type = I[b][2]
                        }
                        this.device.identified = true
                    }
                }
            }
            if (g.match(/\) UC /)) {
                this.browser.stock = false;
                this.browser.name = "UC Browser"
            }
            if (match = /UCBrowser\/([0-9.]*)/.exec(g)) {
                this.browser.stock = false;
                this.browser.name = "UC Browser";
                this.browser.version = new M({value: match[1], details: 2})
            }
            if (match = /Ninesky(?:-android-mobile(?:-cn)?)?\/([0-9.]*)/.exec(g)) {
                this.browser.name = "NineSky";
                this.browser.version = new M({value: match[1]});
                if (this.os.name !== "Android") {
                    this.os.name = "Android";
                    this.os.version = null;
                    this.device.manufacturer = null;
                    this.device.model = null
                }
            }
            if (match = /Skyfire\/([0-9.]*)/.exec(g)) {
                this.browser.name = "Skyfire";
                this.browser.version = new M({value: match[1]});
                this.device.type = "mobile";
                this.os.name = "Android";
                this.os.version = null
            }
            if (match = /DolphinHDCN\/([0-9.]*)/.exec(g)) {
                this.browser.name = "Dolphin";
                this.browser.version = new M({value: match[1]});
                this.device.type = "mobile";
                if (this.os.name !== "Android") {
                    this.os.name = "Android";
                    this.os.version = null
                }
            }
            if (match = /Dolphin\/INT/.exec(g)) {
                this.browser.name = "Dolphin";
                this.device.type = "mobile"
            }
            if (match = /(M?QQBrowser)\/([0-9.]*)/.exec(g)) {
                this.browser.name = "QQ Browser";
                var a = match[2];
                if (a.match(/^[0-9][0-9]$/)) {
                    a = a[0] + "." + a[1]
                }
                this.browser.version = new M({value: a, details: 2});
                this.browser.channel = "";
                if (!this.os.name && match[1] === "QQBrowser") {
                    this.os.name = "Windows"
                }
            }
            if (match = /(iBrowser)\/([0-9.]*)/.exec(g)) {
                this.browser.name = "iBrowser";
                var a = match[2];
                if (a.match(/[0-9][0-9]/)) {
                    a = a[0] + "." + a[1]
                }
                this.browser.version = new M({value: a, details: 2});
                this.browser.channel = ""
            }
            if (match = /Puffin\/([0-9.]*)/.exec(g)) {
                this.browser.name = "Puffin";
                this.browser.version = new M({value: match[1], details: 2});
                this.device.type = "mobile";
                if (this.os.name === "Linux") {
                    this.os.name = null;
                    this.os.version = null
                }
            }
            if (g.match("360EE")) {
                this.browser.stock = false;
                this.browser.name = "360 Extreme Explorer";
                this.browser.version = null
            }
            if (match = /Midori\/([0-9.]*)/.exec(g)) {
                this.browser.name = "Midori";
                this.browser.version = new M({value: match[1]});
                if (this.os.name !== "Linux") {
                    this.os.name = "Linux";
                    this.os.version = null
                }
                this.device.manufacturer = null;
                this.device.model = null;
                this.device.type = "desktop"
            }
            var e = [{name: "AdobeAIR", regexp: /AdobeAIR\/([0-9.]*)/}, {
                name: "Awesomium",
                regexp: /Awesomium\/([0-9.]*)/
            }, {name: "Canvace", regexp: /Canvace Standalone\/([0-9.]*)/}, {
                name: "Ekioh",
                regexp: /Ekioh\/([0-9.]*)/
            }, {name: "JavaFX", regexp: /JavaFX\/([0-9.]*)/}, {
                name: "GFXe",
                regexp: /GFXe\/([0-9.]*)/
            }, {name: "LuaKit", regexp: /luakit/}, {
                name: "Titanium",
                regexp: /Titanium\/([0-9.]*)/
            }, {name: "OpenWebKitSharp", regexp: /OpenWebKitSharp/}, {
                name: "Prism",
                regexp: /Prism\/([0-9.]*)/
            }, {name: "Qt", regexp: /Qt\/([0-9.]*)/}, {name: "QtEmbedded", regexp: /QtEmbedded/}, {
                name: "QtEmbedded",
                regexp: /QtEmbedded.*Qt\/([0-9.]*)/
            }, {name: "RhoSimulator", regexp: /RhoSimulator/}, {
                name: "UWebKit",
                regexp: /UWebKit\/([0-9.]*)/
            }, {name: "PhantomJS", regexp: /PhantomJS\/([0-9.]*)/}, {
                name: "Google Web Preview",
                regexp: /Google Web Preview/
            }, {name: "Google Earth", regexp: /Google Earth\/([0-9.]*)/}, {
                name: "EA Origin",
                regexp: /Origin\/([0-9.]*)/
            }, {name: "SecondLife", regexp: /SecondLife\/([0-9.]*)/}, {
                name: "Valve Steam",
                regexp: /Valve Steam/
            }, {name: "Songbird", regexp: /Songbird\/([0-9.]*)/}, {
                name: "Thunderbird",
                regexp: /Thunderbird\/([0-9.]*)/
            }, {name: "Abrowser", regexp: /Abrowser\/([0-9.]*)/}, {
                name: "arora",
                regexp: /[Aa]rora\/([0-9.]*)/
            }, {name: "Baidu Browser", regexp: /M?BaiduBrowser\/([0-9.]*)/i}, {
                name: "Camino",
                regexp: /Camino\/([0-9.]*)/
            }, {name: "Canure", regexp: /Canure\/([0-9.]*)/, details: 3}, {
                name: "CometBird",
                regexp: /CometBird\/([0-9.]*)/
            }, {name: "Comodo Dragon", regexp: /Comodo_Dragon\/([0-9.]*)/, details: 2}, {
                name: "Conkeror",
                regexp: /[Cc]onkeror\/([0-9.]*)/
            }, {
                name: "CoolNovo",
                regexp: /(?:CoolNovo|CoolNovoChromePlus)\/([0-9.]*)/,
                details: 3
            }, {name: "ChromePlus", regexp: /ChromePlus(?:\/([0-9.]*))?$/, details: 3}, {
                name: "Daedalus",
                regexp: /Daedalus ([0-9.]*)/,
                details: 2
            }, {name: "Demobrowser", regexp: /demobrowser\/([0-9.]*)/}, {
                name: "Dooble",
                regexp: /Dooble(?:\/([0-9.]*))?/
            }, {name: "DWB", regexp: /dwb(?:-hg)?(?:\/([0-9.]*))?/}, {
                name: "Epiphany",
                regexp: /Epiphany\/([0-9.]*)/
            }, {name: "FireWeb", regexp: /FireWeb\/([0-9.]*)/}, {
                name: "Flock",
                regexp: /Flock\/([0-9.]*)/,
                details: 3
            }, {name: "Galeon", regexp: /Galeon\/([0-9.]*)/, details: 3}, {
                name: "Helium",
                regexp: /HeliumMobileBrowser\/([0-9.]*)/
            }, {name: "iCab", regexp: /iCab\/([0-9.]*)/}, {
                name: "Iceape",
                regexp: /Iceape\/([0-9.]*)/
            }, {name: "IceCat", regexp: /IceCat ([0-9.]*)/}, {
                name: "Iceweasel",
                regexp: /Iceweasel\/([0-9.]*)/
            }, {name: "InternetSurfboard", regexp: /InternetSurfboard\/([0-9.]*)/}, {
                name: "Iron",
                regexp: /Iron\/([0-9.]*)/,
                details: 2
            }, {name: "Isis", regexp: /BrowserServer/}, {name: "Jumanji", regexp: /jumanji/}, {
                name: "Kazehakase",
                regexp: /Kazehakase\/([0-9.]*)/
            }, {name: "KChrome", regexp: /KChrome\/([0-9.]*)/, details: 3}, {
                name: "K-Meleon",
                regexp: /K-Meleon\/([0-9.]*)/
            }, {name: "Leechcraft", regexp: /Leechcraft(?:\/([0-9.]*))?/, details: 2}, {
                name: "Lightning",
                regexp: /Lightning\/([0-9.]*)/
            }, {name: "Lunascape", regexp: /Lunascape[\/| ]([0-9.]*)/, details: 3}, {
                name: "iLunascape",
                regexp: /iLunascape\/([0-9.]*)/,
                details: 3
            }, {name: "Maxthon", regexp: /Maxthon[\/ ]([0-9.]*)/, details: 3}, {
                name: "MiniBrowser",
                regexp: /MiniBr?owserM\/([0-9.]*)/
            }, {name: "MiniBrowser", regexp: /MiniBrowserMobile\/([0-9.]*)/}, {
                name: "MixShark",
                regexp: /MixShark\/([0-9.]*)/
            }, {
                name: "Motorola WebKit",
                regexp: /MotorolaWebKit\/([0-9.]*)/,
                details: 3
            }, {name: "NetFront LifeBrowser", regexp: /NetFrontLifeBrowser\/([0-9.]*)/}, {
                name: "Netscape Navigator",
                regexp: /Navigator\/([0-9.]*)/,
                details: 3
            }, {name: "Odyssey", regexp: /OWB\/([0-9.]*)/}, {name: "OmniWeb", regexp: /OmniWeb/}, {
                name: "Orca",
                regexp: /Orca\/([0-9.]*)/
            }, {name: "Origyn", regexp: /Origyn Web Browser/}, {
                name: "Palemoon",
                regexp: /Pale[mM]oon\/([0-9.]*)/
            }, {name: "Phantom", regexp: /Phantom\/V([0-9.]*)/}, {
                name: "Polaris",
                regexp: /Polaris\/v?([0-9.]*)/i,
                details: 2
            }, {name: "QtCreator", regexp: /QtCreator\/([0-9.]*)/}, {
                name: "QtQmlViewer",
                regexp: /QtQmlViewer/
            }, {name: "QtTestBrowser", regexp: /QtTestBrowser\/([0-9.]*)/}, {
                name: "QtWeb",
                regexp: /QtWeb Internet Browser\/([0-9.]*)/
            }, {name: "QupZilla", regexp: /QupZilla\/([0-9.]*)/}, {
                name: "Roccat",
                regexp: /Roccat\/([0-9]\.[0-9.]*)/
            }, {name: "Raven for Mac", regexp: /Raven for Mac\/([0-9.]*)/}, {
                name: "rekonq",
                regexp: /rekonq/
            }, {name: "RockMelt", regexp: /RockMelt\/([0-9.]*)/, details: 2}, {
                name: "Sleipnir",
                regexp: /Sleipnir\/([0-9.]*)/,
                details: 3
            }, {name: "SMBrowser", regexp: /SMBrowser/}, {
                name: "Sogou Explorer",
                regexp: /SE 2.X MetaSr/
            }, {name: "Snowshoe", regexp: /Snowshoe\/([0-9.]*)/, details: 2}, {
                name: "Sputnik",
                regexp: /Sputnik\/([0-9.]*)/i,
                details: 3
            }, {name: "Stainless", regexp: /Stainless\/([0-9.]*)/}, {
                name: "SunChrome",
                regexp: /SunChrome\/([0-9.]*)/
            }, {name: "Surf", regexp: /Surf\/([0-9.]*)/}, {
                name: "TaoBrowser",
                regexp: /TaoBrowser\/([0-9.]*)/,
                details: 2
            }, {name: "TaomeeBrowser", regexp: /TaomeeBrowser\/([0-9.]*)/, details: 2}, {
                name: "TazWeb",
                regexp: /TazWeb/
            }, {name: "Viera", regexp: /Viera\/([0-9.]*)/}, {
                name: "Villanova",
                regexp: /Villanova\/([0-9.]*)/,
                details: 3
            }, {
                name: "Wavelink Velocity",
                regexp: /Wavelink Velocity Browser\/([0-9.]*)/,
                details: 2
            }, {name: "WebPositive", regexp: /WebPositive/}, {name: "WebRender", regexp: /WebRender/}, {
                name: "Wyzo",
                regexp: /Wyzo\/([0-9.]*)/,
                details: 3
            }, {name: "Zetakey", regexp: /Zetakey Webkit\/([0-9.]*)/}, {name: "Zetakey", regexp: /Zetakey\/([0-9.]*)/}];
            for (var j = 0; j < e.length; j++) {
                if (match = e[j].regexp.exec(g)) {
                    this.browser.name = e[j].name;
                    this.browser.channel = "";
                    this.browser.stock = false;
                    if (match[1]) {
                        this.browser.version = new M({value: match[1], details: e[j].details || null})
                    } else {
                        this.browser.version = null
                    }
                }
            }
            if (match = /WebKit\/([0-9.]*)/i.exec(g)) {
                this.engine.name = "Webkit";
                this.engine.version = new M({value: match[1]})
            }
            if (match = /Browser\/AppleWebKit([0-9.]*)/i.exec(g)) {
                this.engine.name = "Webkit";
                this.engine.version = new M({value: match[1]})
            }
            if (match = /KHTML\/([0-9.]*)/.exec(g)) {
                this.engine.name = "KHTML";
                this.engine.version = new M({value: match[1]})
            }
            if (/Gecko/.exec(g) && !/like Gecko/i.exec(g)) {
                this.engine.name = "Gecko";
                if (match = /; rv:([^\)]+)\)/.exec(g)) {
                    this.engine.version = new M({value: match[1]})
                }
            }
            if (match = /Presto\/([0-9.]*)/.exec(g)) {
                this.engine.name = "Presto";
                this.engine.version = new M({value: match[1]})
            }
            if (match = /Trident\/([0-9.]*)/.exec(g)) {
                this.engine.name = "Trident";
                this.engine.version = new M({value: match[1]});
                if (this.browser.name === "Internet Explorer") {
                    if (S(this.engine.version) === 6 && parseFloat(this.browser.version) < 10) {
                        this.browser.version = new M({value: "10.0"});
                        this.browser.mode = "compat"
                    }
                    if (S(this.engine.version) === 5 && parseFloat(this.browser.version) < 9) {
                        this.browser.version = new M({value: "9.0"});
                        this.browser.mode = "compat"
                    }
                    if (S(this.engine.version) === 4 && parseFloat(this.browser.version) < 8) {
                        this.browser.version = new M({value: "8.0"});
                        this.browser.mode = "compat"
                    }
                }
                if (this.os.name === "Windows Phone") {
                    if (S(this.engine.version) === 5 && parseFloat(this.os.version) < 7.5) {
                        this.os.version = new M({value: "7.5"})
                    }
                }
            }
            if (this.os.name === "Android" && this.browser.stock) {
                this.browser.hidden = true
            }
            if (this.os.name === "iOS" && this.browser.name === "Opera Mini") {
                this.os.version = null
            }
            if (this.browser.name === "Midori" && this.engine.name !== "Webkit") {
                this.engine.name = "Webkit";
                this.engine.version = null
            }
            if (this.device.type === "television" && this.browser.name === "Opera") {
                this.browser.name = "Opera Devices";
                switch (true) {
                    case this.engine.version.is("2.10"):
                        this.browser.version = new M({value: 3.2});
                        break;
                    case this.engine.version.is("2.9"):
                        this.browser.version = new M({value: 3.1});
                        break;
                    case this.engine.version.is("2.8"):
                        this.browser.version = new M({value: 3});
                        break;
                    case this.engine.version.is("2.7"):
                        this.browser.version = new M({value: 2.9});
                        break;
                    case this.engine.version.is("2.6"):
                        this.browser.version = new M({value: 2.8});
                        break;
                    case this.engine.version.is("2.4"):
                        this.browser.version = new M({value: 10.3});
                        break;
                    case this.engine.version.is("2.3"):
                        this.browser.version = new M({value: 10});
                        break;
                    case this.engine.version.is("2.2"):
                        this.browser.version = new M({value: 9.7});
                        break;
                    case this.engine.version.is("2.1"):
                        this.browser.version = new M({value: 9.6});
                        break;
                    default:
                        this.browser.version = null
                }
                this.os.name = null;
                this.os.version = null
            }
            if (this.options.detectCamouflage) {
                if (match = /Mac OS X 10_6_3; ([^;]+); [a-z]{2}-(?:[a-z]{2})?\)/.exec(g)) {
                    this.browser.name = "";
                    this.browser.version = null;
                    this.browser.mode = "desktop";
                    this.os.name = "Android";
                    this.os.version = null;
                    this.engine.name = "Webkit";
                    this.engine.version = null;
                    this.device.model = match[1];
                    this.device.type = "mobile";
                    var b = L(this.device.model);
                    if (typeof I[b] !== "undefined") {
                        this.device.manufacturer = I[b][0];
                        this.device.model = I[b][1];
                        if (typeof I[b][2] !== "undefined") {
                            this.device.type = I[b][2]
                        }
                        this.device.identified = true
                    }
                    this.features.push("foundDevice")
                }
                if (match = /Linux Ventana; [a-z]{2}-[a-z]{2}; (.+) Build/.exec(g)) {
                    this.browser.name = "";
                    this.browser.version = null;
                    this.browser.mode = "desktop";
                    this.os.name = "Android";
                    this.os.version = null;
                    this.engine.name = "Webkit";
                    this.engine.version = null;
                    this.device.model = match[1];
                    this.device.type = "mobile";
                    var b = L(this.device.model);
                    if (typeof I[b] !== "undefined") {
                        this.device.manufacturer = I[b][0];
                        this.device.model = I[b][1];
                        if (typeof I[b][2] !== "undefined") {
                            this.device.type = I[b][2]
                        }
                        this.device.identified = true
                    }
                    this.features.push("foundDevice")
                }
                if (this.browser.name === "Safari") {
                    if (this.os.name !== "iOS" && /AppleWebKit\/([0-9]+.[0-9]+)/i.exec(g)[1] !== /Safari\/([0-9]+.[0-9]+)/i.exec(g)[1]) {
                        this.features.push("safariMismatch");
                        this.camouflage = true
                    }
                    if (this.os.name === "iOS" && !g.match(/^Mozilla/)) {
                        this.features.push("noMozillaPrefix");
                        this.camouflage = true
                    }
                    if (!/Version\/[0-9\.]+/.exec(g)) {
                        this.features.push("noVersion");
                        this.camouflage = true
                    }
                }
                if (this.browser.name === "Chrome") {
                    if (!/(?:Chrome|CrMo|CriOS)\/([0-9]{1,2}\.[0-9]\.[0-9]{3,4}\.[0-9]+)/.exec(g)) {
                        this.features.push("wrongVersion");
                        this.camouflage = true
                    }
                }
                if (this.options.useFeatures) {
                    if (window.ActiveXObject) {
                        this.features.push("trident");
                        if (typeof this.engine.name !== "undefined" && this.engine.name !== "Trident") {
                            this.camouflage = typeof this.browser.name === "undefined" || this.browser.name !== "Maxthon"
                        }
                    }
                    if (window.opera) {
                        this.features.push("presto");
                        if (typeof this.engine.name !== "undefined" && this.engine.name !== "Presto") {
                            this.camouflage = true
                        }
                        if (this.browser.name === "Internet Explorer") {
                            this.camouflage = true
                        }
                    }
                    if ("getBoxObjectFor" in document || "mozInnerScreenX" in window) {
                        this.features.push("gecko");
                        if (typeof this.engine.name !== "undefined" && this.engine.name !== "Gecko") {
                            this.camouflage = true
                        }
                        if (this.browser.name === "Internet Explorer") {
                            this.camouflage = true
                        }
                    }
                    if ("WebKitCSSMatrix" in window || "WebKitPoint" in window || "webkitStorageInfo" in window || "webkitURL" in window) {
                        this.features.push("webkit");
                        if (typeof this.engine.name !== "undefined" && this.engine.name !== "Webkit") {
                            this.camouflage = true
                        }
                        if (this.browser.name === "Internet Explorer") {
                            this.camouflage = true
                        }
                    }
                    if (this.engine.name === "Webkit" && ({}.toString).toString().indexOf("\n") === -1) {
                        this.features.push("v8");
                        if (this.browser !== null && this.browser.name === "Safari") {
                            this.camouflage = true
                        }
                    }
                    if (this.device.model === "iPad") {
                        if ((screen.width !== 0 && screen.height !== 0) && (screen.width !== 768 && screen.height !== 1024) && (screen.width !== 1024 && screen.height !== 768)) {
                            this.features.push("sizeMismatch");
                            this.camouflage = true
                        }
                    }
                    if (this.device.model === "iPhone" || this.device.model === "iPod") {
                        if ((screen.width !== 0 && screen.height !== 0) && (screen.width !== 320 && screen.height !== 480) && (screen.width !== 480 && screen.height !== 320)) {
                            this.features.push("sizeMismatch");
                            this.camouflage = true
                        }
                    }
                    if (this.os.name === "iOS" && this.os.version) {
                        if (this.os.version.isOlder("4.0") && "sandbox" in document.createElement("iframe")) {
                            this.features.push("foundSandbox");
                            this.camouflage = true
                        }
                        if (this.os.version.isOlder("4.2") && "WebSocket" in window) {
                            this.features.push("foundSockets");
                            this.camouflage = true
                        }
                        if (this.os.version.isOlder("5.0") && !!window.Worker) {
                            this.features.push("foundWorker");
                            this.camouflage = true
                        }
                        if (this.os.version.isNewer("2.1") && !window.applicationCache) {
                            this.features.push("noAppCache");
                            this.camouflage = true
                        }
                    }
                    if (this.os.name !== "iOS" && this.browser.name === "Safari" && this.browser.version) {
                        if (this.browser.version.isOlder("4.0") && !!window.applicationCache) {
                            this.features.push("foundAppCache");
                            this.camouflage = true
                        }
                        if (this.browser.version.isOlder("4.1") && !!(window.history && history.pushState)) {
                            this.features.push("foundHistory");
                            this.camouflage = true
                        }
                        if (this.browser.version.isOlder("5.1") && !!document.documentElement.webkitRequestFullScreen) {
                            this.features.push("foundFullscreen");
                            this.camouflage = true
                        }
                        if (this.browser.version.isOlder("5.2") && "FileReader" in window) {
                            this.features.push("foundFileReader");
                            this.camouflage = true
                        }
                    }
                }
            }
        }
    };

    function L(a) {
        a = typeof a === "undefined" ? "" : a;
        a = a.replace(/_TD$/, "");
        a = a.replace(/_CMCC$/, "");
        a = a.replace(/_/g, " ");
        a = a.replace(/^\s+|\s+$/g, "");
        a = a.replace(/\/[^/]+$/, "");
        a = a.replace(/\/[^/]+ Android\/.*/, "");
        a = a.replace(/^tita on /, "");
        a = a.replace(/^Android on /, "");
        a = a.replace(/^Android for /, "");
        a = a.replace(/^ICS AOSP on /, "");
        a = a.replace(/^Full AOSP on /, "");
        a = a.replace(/^Full Android on /, "");
        a = a.replace(/^Full Cappuccino on /, "");
        a = a.replace(/^Full MIPS Android on /, "");
        a = a.replace(/^Full Android/, "");
        a = a.replace(/^Acer ?/i, "");
        a = a.replace(/^Iconia /, "");
        a = a.replace(/^Ainol /, "");
        a = a.replace(/^Coolpad ?/i, "Coolpad ");
        a = a.replace(/^ALCATEL /, "");
        a = a.replace(/^Alcatel OT-(.*)/, "one touch $1");
        a = a.replace(/^YL-/, "");
        a = a.replace(/^Novo7 ?/i, "Novo7 ");
        a = a.replace(/^GIONEE /, "");
        a = a.replace(/^HW-/, "");
        a = a.replace(/^Huawei[ -]/i, "Huawei ");
        a = a.replace(/^SAMSUNG[ -]/i, "");
        a = a.replace(/^SonyEricsson/, "");
        a = a.replace(/^Lenovo Lenovo/, "Lenovo");
        a = a.replace(/^LNV-Lenovo/, "Lenovo");
        a = a.replace(/^Lenovo-/, "Lenovo ");
        a = a.replace(/^(LG)[ _\/]/, "$1-");
        a = a.replace(/^(HTC.*)\s(?:v|V)?[0-9.]+$/, "$1");
        a = a.replace(/^(HTC)[-\/]/, "$1 ");
        a = a.replace(/^(HTC)([A-Z][0-9][0-9][0-9])/, "$1 $2");
        a = a.replace(/^(Motorola[\s|-])/, "");
        a = a.replace(/^(Moto|MOT-)/, "");
        a = a.replace(/-?(orange(-ls)?|vodafone|bouygues)$/i, "");
        a = a.replace(/http:\/\/.+$/i, "");
        a = a.replace(/^\s+|\s+$/g, "");
        return a
    }

    function S(a) {
        a = a.toString();
        var b = a.split(".");
        var c = b.shift();
        return parseFloat(c + "." + b.join(""))
    }

    return E
})();
var tracker_ua_device = function (h) {
    var n = tracker_ua_base;
    var j = new n(h);
    var i;
    var k;
    if (j.device.type === "mobile" || j.device.type === "tablet") {
        if (i = h.match(/(ZTE|Samsung|Motorola|HTC|Coolpad|Huawei|Lenovo|LG|Sony Ericsson|Oppo|TCL|Vivo|Sony|Meizu|Nokia)/i)) {
            j.device.manufacturer = i[1];
            if (j.device.model && j.device.model.indexOf(i[1]) >= 0) {
                j.device.model = j.device.model.replace(i[1], "")
            }
        }
        if (i = h.match(/(iPod|iPad|iPhone)/i)) {
            j.device.manufacturer = "Apple";
            j.device.model = i[1]
        } else {
            if (i = h.match(/[-\s](Galaxy[\s-_]nexus|Galaxy[\s-_]\w*[\s-_]\w*|Galaxy[\s-_]\w*|SM-\w*|GT-\w*|s[cgp]h-\w*|shw-\w*|ATIV|i9070|omnia|s7568|A3000|A3009|A5000|A5009|A7000|A7009|A8000|C101|C1116|C1158|E400|E500F|E7000|E7009|G3139D|G3502|G3502i|G3508|G3508J|G3508i|G3509|G3509i|G3558|G3559|G3568V|G3586V|G3589W|G3606|G3608|G3609|G3812|G388F|G5108|G5108Q|G5109|G5306W|G5308W|G5309W|G550|G600|G7106|G7108|G7108V|G7109|G7200|G720NO|G7508Q|G7509|G8508S|G8509V|G9006V|G9006W|G9008V|G9008W|G9009D|G9009W|G9198|G9200|G9208|G9209|G9250|G9280|I535|I679|I739|I8190N|I8262|I879|I879E|I889|I9000|I9060|I9082|I9082C|I9082i|I9100|I9100G|I9108|I9128|I9128E|I9128i|I9152|I9152P|I9158|I9158P|I9158V|I9168|I9168i|I9190|I9192|I9195|I9195I|I9200|I9208|I9220|I9228|I9260|I9268|I9300|I9300i|I9305|I9308|I9308i|I939|I939D|I939i|I9500|I9502|I9505|I9507V|I9508|I9508V|I959|J100|J110|J5008|J7008|N7100|N7102|N7105|N7108|N7108D|N719|N750|N7505|N7506V|N7508V|N7509V|N900|N9002|N9005|N9006|N9008|N9008S|N9008V|N9009|N9100|N9106W|N9108V|N9109W|N9150|N916|N9200|P709|P709E|P729|S6358|S7278|S7278U|S7562C|S7562i|S7898i|b9388)[\s\)]/i)) {
                j.device.manufacturer = "Samsung";
                j.device.model = i[1].replace(/Galaxy S VI/i, "Galaxy S6").replace(/Galaxy S V/i, "Galaxy S5").replace(/Galaxy S IV/i, "Galaxy S4").replace(/Galaxy s III/i, "Galaxy S3").replace(/Galaxy S II/i, "Galaxy S2").replace(/Galaxy S I/i, "Galaxy S1").replace(/([a-z]+[0-9]{3})[0-9]?[a-z]*/i, "$1")
            } else {
                if (j.device.manufacturer && j.device.manufacturer.toLowerCase() === "samsung" && j.device.model) {
                    j.device.model = j.device.model.replace(/Galaxy S VI/i, "Galaxy S6").replace(/Galaxy S V/i, "Galaxy S5").replace(/Galaxy S IV/i, "Galaxy S4").replace(/Galaxy s III/i, "Galaxy S3").replace(/Galaxy S II/i, "Galaxy S2").replace(/Galaxy S I/i, "Galaxy S1").replace(/([a-z]+[0-9]{3})[0-9]?[a-z]*/i, "$1")
                } else {
                    if (i = h.match(/(Huawei[\s-_](\w*[-_]?\w*)|\s(7D-\w*|ALE-\w*|ATH-\w*|CHE-\w*|CHM-\w*|Che1-\w*|Che2-\w*|D2-\w*|G616-\w*|G620S-\w*|G621-\w*|G660-\w*|G750-\w*|GRA-\w*|Hol-\w*|MT2-\w*|MT7-\w*|PE-\w*|PLK-\w*|SC-\w*|SCL-\w*|H60-\w*|H30-\w*)[\s\)])/i)) {
                        j.device.manufacturer = "Huawei";
                        if (i[2]) {
                            j.device.model = i[2]
                        } else {
                            if (i[3]) {
                                j.device.model = i[3]
                            }
                        }
                        if (i = j.device.model.match(/(\w*)[\s-_]+[a-z0-9]+/i)) {
                            j.device.model = i[1]
                        }
                    } else {
                        if (i = h.match(/;\s(mi|m1|m2|m3|m4|hm)(\s*\w*)[\s\)]/i)) {
                            if (k = h.match(/(meitu|MediaPad)/i)) {
                                j.device.manufacturer = k[1];
                                j.device.model = ""
                            } else {
                                if (i[2].length > 0 && !((/\s/).test(i[2]))) {
                                    if (k = i[2].match(/(\d)/i)) {
                                        j.device.model = i[1] + "-" + k[1]
                                    }
                                } else {
                                    j.device.manufacturer = "Xiaomi";
                                    if (i[2] && i[2].length > 0) {
                                        i[2] = i[2].replace(/\s/, "");
                                        j.device.model = (i[1].substr(i[1].length - 2) + "-" + i[2]).replace(/m(\d)-/i, "MI-$1")
                                    } else {
                                        j.device.model = (i[1].substr(i[1].length - 2)).replace(/m(\d)/i, "MI-$1")
                                    }
                                    if (/(mi|hm)(-\d)/i.test(j.device.model)) {
                                        if (i = j.device.model.match(/(mi|hm)(-\ds)/i)) {
                                            j.device.model = i[1] + i[2]
                                        } else {
                                            if (i = j.device.model.match(/(mi|hm)(-\d{2})/i)) {
                                                j.device.model = i[1]
                                            } else {
                                                if (i = j.device.model.match(/(mi|hm)(-\d)[A-Z]/i)) {
                                                    j.device.model = i[1] + i[2]
                                                }
                                            }
                                        }
                                    }
                                    if (i = j.device.model.match(/(mi|hm)(-\dg)/i)) {
                                        j.device.model = i[1]
                                    }
                                }
                            }
                        } else {
                            if (/build\/HM\d{0,7}\)/i.test(h)) {
                                j.device.manufacturer = "Xiaomi";
                                j.device.model = "HM"
                            } else {
                                if (i = h.match(/redmi\s?(\d+)?/i)) {
                                    j.device.manufacturer = "Xiaomi";
                                    j.device.model = "HM-" + i[1]
                                } else {
                                    if (j.device.manufacturer && j.device.manufacturer.toLowerCase() === "xiaomi" && j.device.model) {
                                        if (i = j.device.model.match(/mi-one/i)) {
                                            j.device.model = "MI-1"
                                        } else {
                                            if (i = j.device.model.match(/mi-two/i)) {
                                                j.device.model = "MI-2"
                                            } else {
                                                if (i = j.device.model.match(/\d{6}/i)) {
                                                    j.device.model = ""
                                                } else {
                                                    if (i = j.device.model.match(/redmi/i)) {
                                                        j.device.model = j.device.model.toUpperCase().replace(/redmi/i, "HM")
                                                    } else {
                                                        if (i = j.device.model.match(/(m\d)[\s-_](s?)/i)) {
                                                            j.device.model = i[1].replace(/m/, "MI-") + i[2]
                                                        } else {
                                                            if (i = j.device.model.match(/(hm|mi)[\s-_](\d?)[a-rt-z]/i)) {
                                                                if (k = j.device.model.match(/(mi|hm)[\s-_](note|pad)(\d?s?)/i)) {
                                                                    j.device.model = k[1] + "-" + k[2] + k[3]
                                                                } else {
                                                                    j.device.model = i[2] ? i[1] + "-" + i[2] : i[1]
                                                                }
                                                            } else {
                                                                if (i = j.device.model.match(/hm/i)) {
                                                                    if (i = j.device.model.match(/(hm)[\s-_](\d{2})/i)) {
                                                                        j.device.model = "HM"
                                                                    } else {
                                                                        if (i = j.device.model.match(/(hm)[\s-_](\ds)/i)) {
                                                                            j.device.model = "HM-" + i[2]
                                                                        } else {
                                                                            if (i = j.device.model.match(/(hm)[\s-_](\d)[a-z]/i)) {
                                                                                j.device.model = "HM-" + i[2]
                                                                            } else {
                                                                                j.device.model = "HM"
                                                                            }
                                                                        }
                                                                    }
                                                                    if (/hm-\dg/.test(j.device.model)) {
                                                                        j.device.model = "HM"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    } else {
                                        if (i = h.match(/(vivo[\s-_](\w*)|\s(E1\w?|E3\w?|E5\w?|V1\w?|V2\w?|S11\w?|S12\w?|S1\w?|S3\w?|S6\w?|S7\w?|S9\w?|X1\w?|X3\w?|X520\w?|X5\w?|X5Max|X5Max+|X5Pro|X5SL|X710F|X710L|Xplay|Xshot|Xpaly3S|Y11\w?|Y11i\w?|Y11i\w?|Y13\w?|Y15\w?|Y17\w?|Y18\w?|Y19\w?|Y1\w?|Y20\w?|Y22\w?|Y22i\w?|Y23\w?|Y27\w?|Y28\w?|Y29\w?|Y33\w?|Y37\w?|Y3\w?|Y613\w?|Y622\w?|Y627\w?|Y913\w?|Y923\w?|Y927\w?|Y928\w?|Y929\w?|Y937\w?)[\s\)])/i)) {
                                            j.device.manufacturer = "Vivo";
                                            j.device.model = i[1];
                                            j.device.model = j.device.model.replace(/(viv[\s-_]|vivo[\s-_]|bbg[\s-_])/i, "");
                                            if (i = j.device.model.match(/([a-z]+[0-9]+)i?[a-z]?[\s-_]?/i)) {
                                                j.device.model = i[1]
                                            }
                                        } else {
                                            if (i = h.match(/(Oppo[\s-_](\w*)|\s(1100|1105|1107|3000|3005|3007|6607|A100|A103|A105|A105K|A109|A109K|A11|A113|A115|A115K|A121|A125|A127|A129|A201|A203|A209|A31|A31c|A31t|A31u|A51kc|A520|A613|A615|A617|E21W|Find|Mirror|N5110|N5117|N5207|N5209|R2010|R2017|R6007|R7005|R7007|R7c|R7t|R8000|R8007|R801|R805|R807|R809T|R8107|R8109|R811|R811W|R813T|R815T|R815W|R817|R819T|R8200|R8205|R8207|R821T|R823T|R827T|R830|R830S|R831S|R831T|R833T|R850|Real|T703|U2S|U521|U525|U529|U539|U701|U701T|U705T|U705W|X9000|X9007|X903|X905|X9070|X9077|X909|Z101|R829T)[\s\)])/i)) {
                                                j.device.manufacturer = "Oppo";
                                                if (i[2]) {
                                                    j.device.model = i[2]
                                                } else {
                                                    if (i[3]) {
                                                        j.device.model = i[3]
                                                    }
                                                }
                                                if (i = j.device.model.match(/([a-z]+[0-9]+)-?(plus)/i)) {
                                                    j.device.model = i[1] + "-" + i[2]
                                                } else {
                                                    if (i = j.device.model.match(/(\w*-?[a-z]+[0-9]+)/i)) {
                                                        j.device.model = i[1]
                                                    }
                                                }
                                            } else {
                                                if (j.device.manufacturer && j.device.manufacturer.toLowerCase() === "oppo" && j.device.model) {
                                                    if (i = j.device.model.match(/([a-z]+[0-9]+)-?(plus)/i)) {
                                                        j.device.model = i[1] + "-" + i[2]
                                                    } else {
                                                        if (i = j.device.model.match(/(\w*-?[a-z]+[0-9]+)/i)) {
                                                            j.device.model = i[1]
                                                        }
                                                    }
                                                } else {
                                                    if (i = h.match(/(Lenovo[\s-_](\w*[-_]?\w*)|\s(A3580|A3860|A5500|A5600|A5860|A7600|A806|A800|A808T|A808T-I|A936|A938t|A788t|K30-E|K30-T|K30-W|K50-T3s|K50-T5|K80M|K910|K910e|K920|S90-e|S90-t|S90-u|S968T|X2-CU|X2-TO|Z90-3|Z90-7)[\s\)])/i)) {
                                                        j.device.manufacturer = "Lenovo";
                                                        if (i[2]) {
                                                            j.device.model = i[2]
                                                        } else {
                                                            if (i[3]) {
                                                                j.device.model = i[3]
                                                            }
                                                        }
                                                        if (i = j.device.model.match(/([a-z]+[0-9]+)/i)) {
                                                            j.device.model = i[1]
                                                        }
                                                    } else {
                                                        if (i = h.match(/(Coolpad[\s-_](\w*)|\s(7295C|7298A|7620L|8908|8085|8970L|9190L|Y80D)[\s\)])/i)) {
                                                            j.device.manufacturer = "Coolpad";
                                                            if (i[2]) {
                                                                j.device.model = i[2]
                                                            } else {
                                                                if (i[3]) {
                                                                    j.device.model = i[3]
                                                                }
                                                            }
                                                            if (i = j.device.model.match(/([a-z]?[0-9]+)/i)) {
                                                                j.device.model = i[1]
                                                            }
                                                        } else {
                                                            if (j.device.manufacturer && j.device.manufacturer.toLowerCase() === "coolpad" && j.device.model) {
                                                                if (i = j.device.model.match(/([a-z]?[0-9]+)/i)) {
                                                                    j.device.model = i[1]
                                                                }
                                                            } else {
                                                                if (i = h.match(/\s(mx\d*\w*|mz-(\w*))\s(\w*)\s*\w*\s*build/i)) {
                                                                    j.device.manufacturer = "Meizu";
                                                                    var l = i[2] ? i[2] : i[1];
                                                                    if (i[3]) {
                                                                        j.device.model = l + "-" + i[3]
                                                                    } else {
                                                                        j.device.model = l + ""
                                                                    }
                                                                } else {
                                                                    if (i = h.match(/M463C|M35\d/i)) {
                                                                        j.device.manufacturer = "Meizu";
                                                                        j.device.model = i[1]
                                                                    } else {
                                                                        if (i = h.match(/(Htc[-_\s](\w*)|\s(601e|606w|608t|609d|610t|6160|619d|620G|626d|626s|626t|626w|709d|801e|802d|802t|802w|809D|816d|816e|816t|816v|816w|826d|826s|826t|826w|828w|901e|919d|A310e|A50AML|A510e|A620d|A620e|A620t|A810e|A9191|Aero|C620d|C620e|C620t|D316d|D516d|D516t|D516w|D820mt|D820mu|D820t|D820ts|D820u|D820us|E9pt|E9pw|E9sw|E9t|HD7S|M8Et|M8Sd|M8St|M8Sw|M8d|M8e|M8s|M8si|M8t|M8w|M9W|M9ew|Phablet|S510b|S510e|S610d|S710d|S710e|S720e|S720t|T327t|T328d|T328t|T328w|T329d|T329t|T329w|T528d|T528t|T528w|T8698|WF5w|X315e|X710e|X715e|X720d|X920e|Z560e|Z710e|Z710t|Z715e)[\s\)])/)) {
                                                                            j.device.manufacturer = "Htc";
                                                                            j.device.model = i[1]
                                                                        } else {
                                                                            if (i = h.match(/(Gionee[\s-_](\w*)|\s(GN\d+\w*)[\s\)])/i)) {
                                                                                j.device.manufacturer = "Gionee";
                                                                                if (i[2]) {
                                                                                    j.device.model = i[2]
                                                                                } else {
                                                                                    if (i[3]) {
                                                                                        j.device.model = i[3]
                                                                                    }
                                                                                }
                                                                            } else {
                                                                                if (i = h.match(/(LG[-_](\w*)|\s(D728|D729|D802|D855|D856|D857|D858|D859|E985T|F100L|F460|H778|H818|H819|P895|VW820)[\s\)])/i)) {
                                                                                    j.device.manufacturer = "Lg";
                                                                                    if (i[2]) {
                                                                                        j.device.model = i[2]
                                                                                    } else {
                                                                                        if (i[3]) {
                                                                                            j.device.model = i[3]
                                                                                        }
                                                                                    }
                                                                                } else {
                                                                                    if (i = h.match(/(Tcl[\s-_](\w*)|\s(H916T|P588L|P618L|P620M|P728M)[\s\)])/)) {
                                                                                        j.device.manufacturer = "Tcl";
                                                                                        j.device.model = i[1]
                                                                                    } else {
                                                                                        if (i = h.match(/(V9180|N918)/i)) {
                                                                                            j.device.manufacturer = "Zte";
                                                                                            j.device.model = i[1]
                                                                                        } else {
                                                                                            if (j.device.manufacturer && j.device.manufacturer.toLowerCase() === "zte" && j.device.model) {
                                                                                                if (i = j.device.model.match(/([a-z]?[0-9]+)/i)) {
                                                                                                    j.device.model = i[1]
                                                                                                }
                                                                                            } else {
                                                                                                if (i = h.match(/(UIMI\w*|umi\w*)[\s-_](\w*)\s*\w*\s*build/i)) {
                                                                                                    j.device.manufacturer = "Uimi";
                                                                                                    if (i[2]) {
                                                                                                        j.device.model = i[1] + "-" + i[2]
                                                                                                    } else {
                                                                                                        j.device.model = i[1] + ""
                                                                                                    }
                                                                                                } else {
                                                                                                    if (i = h.match(/eton[\s-_](\w*)/i)) {
                                                                                                        j.device.manufacturer = "Eton";
                                                                                                        j.device.model = i[1]
                                                                                                    } else {
                                                                                                        if (i = h.match(/(SM705|SM701|YQ601|YQ603)/i)) {
                                                                                                            j.device.manufacturer = "Smartisan";
                                                                                                            j.device.model = ({
                                                                                                                SM705: "T1",
                                                                                                                SM701: "T1",
                                                                                                                YQ601: "U1",
                                                                                                                YQ603: "U1"
                                                                                                            })[i[1]] || i[1]
                                                                                                        } else {
                                                                                                            if (i = h.match(/(Asus[\s-_](\w*)|\s(A500CG|A500KL|A501CG|A600CG|PF400CG|PF500KL|T001|X002|X003|ZC500TG|ZE550ML|ZE551ML)[\s\)])/i)) {
                                                                                                                j.device.manufacturer = "Asus";
                                                                                                                if (i[2]) {
                                                                                                                    j.device.model = i[2]
                                                                                                                } else {
                                                                                                                    if (i[3]) {
                                                                                                                        j.device.model = i[3]
                                                                                                                    }
                                                                                                                }
                                                                                                            } else {
                                                                                                                if (i = h.match(/(Nubia[-_\s](\w*)|(NX501|NX505J|NX506J|NX507J|NX503A|nx\d+\w*)[\s\)])/i)) {
                                                                                                                    j.device.manufacturer = "Nubia";
                                                                                                                    if (i[2]) {
                                                                                                                        j.device.model = i[2]
                                                                                                                    } else {
                                                                                                                        if (i[3]) {
                                                                                                                            j.device.model = i[3]
                                                                                                                        }
                                                                                                                    }
                                                                                                                } else {
                                                                                                                    if (i = h.match(/(HT-\w*)|Haier[\s-_](\w*-?\w*)/i)) {
                                                                                                                        j.device.manufacturer = "Haier";
                                                                                                                        if (i[1]) {
                                                                                                                            j.device.model = i[1]
                                                                                                                        } else {
                                                                                                                            if (i[2]) {
                                                                                                                                j.device.model = i[2]
                                                                                                                            }
                                                                                                                        }
                                                                                                                    } else {
                                                                                                                        if (i = h.match(/K-Touch[\s-_](tou\s?ch\s?(\d)|\w*)/i)) {
                                                                                                                            j.device.manufacturer = "K-Touch";
                                                                                                                            if (i[2]) {
                                                                                                                                j.device.model = "Ktouch" + i[2]
                                                                                                                            } else {
                                                                                                                                j.device.model = i[1]
                                                                                                                            }
                                                                                                                        } else {
                                                                                                                            if (i = h.match(/Doov[\s-_](\w*)/i)) {
                                                                                                                                j.device.manufacturer = "Doov";
                                                                                                                                j.device.model = i[1]
                                                                                                                            } else {
                                                                                                                                if (/koobee/i.test(h)) {
                                                                                                                                    j.device.manufacturer = "koobee"
                                                                                                                                } else {
                                                                                                                                    if (/C69/i.test(h)) {
                                                                                                                                        j.device.manufacturer = "Sony"
                                                                                                                                    } else {
                                                                                                                                        if (/N787|N818S/i.test(h)) {
                                                                                                                                            j.device.manufacturer = "Haojixing"
                                                                                                                                        } else {
                                                                                                                                            if (i = h.match(/(hs-|Hisense[\s-_])(\w*)/i)) {
                                                                                                                                                j.device.manufacturer = "Hisense";
                                                                                                                                                j.device.model = i[2]
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (j.device.manufacturer) {
            j.device.manufacturer = j.device.manufacturer.substr(0, 1).toUpperCase() + j.device.manufacturer.substr(1).toLowerCase()
        }
        if (j.device.model) {
            j.device.model = j.device.model.toUpperCase().replace(/-+|_+|\s+/g, " ");
            j.device.model = j.device.model.match(/\s*(\w*\s*\w*)/)[1].replace(/\s+/, "-");
            if (j.device.manufacturer === "Samsung") {
                j.device.model = ({
                    "SCH-I95": "GT-I950",
                    "SCH-I93": "GT-I930",
                    "SCH-I86": "GT-I855",
                    "SCH-N71": "GT-N710",
                    "SCH-I73": "GT-S789",
                    "SCH-P70": "GT-I915"
                })[j.device.model] || j.device.model
            } else {
                if (j.device.manufacturer === "Huawei") {
                    j.device.model = ({
                        CHE1: "CHE",
                        CHE2: "CHE",
                        G620S: "G621",
                        C8817D: "G621"
                    })[j.device.model] || j.device.model
                }
            }
        }
        if (j.device.manufacturer && j.device.manufacturer === "Xiaomi") {
            if (i = j.device.model.match(/(hm|mi)-(note)/i)) {
                j.device.model = i[1] + "-" + i[2]
            } else {
                if (i = j.device.model.match(/(hm|mi)-(\ds?)/i)) {
                    j.device.model = i[1] + "-" + i[2]
                } else {
                    if (i = j.device.model.match(/(hm|mi)-(\d)[a-rt-z]/i)) {
                        j.device.model = i[1] + "-" + i[2]
                    }
                }
            }
        }
    }
    if (j.device.type === "desktop") {
        if (i = /360se(?:[ \/]([\w.]+))?/i.exec(h)) {
            j.browser.name = "360 security Explorer";
            j.browser.version = {original: i[1]}
        } else {
            if (i = /the world(?:[ \/]([\w.]+))?/i.exec(h)) {
                j.browser.name = "the world";
                j.browser.version = {original: i[1]}
            } else {
                if (i = /tencenttraveler ([\w.]+)/i.exec(h)) {
                    j.browser.name = "tencenttraveler";
                    j.browser.version = {original: i[1]}
                } else {
                    if (i = /LBBROWSER/i.exec(h)) {
                        j.browser.name = "LBBROWSER"
                    }
                }
            }
        }
    } else {
        if (j.device.type === "mobile" || j.device.type === "tablet") {
            if (i = /BaiduHD\s+([\w.]+)/i.exec(h)) {
                j.browser.name = "BaiduHD";
                j.browser.version = {original: i[1]}
            } else {
                if (i = /360.s*aphone\s*browser\s*\(version\s*([\w.]+)\)/i.exec(h)) {
                    j.browser.name = "360 Browser";
                    j.browser.version = {original: i[1]}
                } else {
                    if (i = /flyflow\/([\w.]+)/i.exec(h)) {
                        j.browser.name = "Baidu Browser";
                        j.browser.version = {original: i[1]}
                    } else {
                        if (i = /baiduhd ([\w.]+)/i.exec(h)) {
                            j.browser.name = "Baidu HD";
                            j.browser.version = {original: i[1]}
                        } else {
                            if (i = /baidubrowser\/([\d\.]+)\s/i.exec(h)) {
                                j.browser.name = "baidubrowser";
                                j.browser.version = {original: i[1]}
                            } else {
                                if (i = /LieBaoFast\/([\w.]+)/i.exec(h)) {
                                    j.browser.name = "LieBao Fast";
                                    j.browser.version = {original: i[1]}
                                } else {
                                    if (i = /LieBao\/([\w.]+)/i.exec(h)) {
                                        j.browser.name = "LieBao";
                                        j.browser.version = {original: i[1]}
                                    } else {
                                        if (i = /Sogou\w+\/([0-9\.]+)/i.exec(h)) {
                                            j.browser.name = "SogouMobileBrowser";
                                            j.browser.version = {original: i[1]}
                                        } else {
                                            if (i = /bdbrowser\w+\/([0-9\.]+)/i.exec(h)) {
                                                j.browser.name = "百度国际";
                                                j.browser.version = {original: i[1]}
                                            } else {
                                                if (j.os.name === "Android" && /safari/i.test(h) && (i = /chrome\/([0-9\.]+)/i.exec(h))) {
                                                    if (k = h.match(/\s+(\w+Browser)\/?([\d\.]*)/)) {
                                                        j.browser.name = k[1];
                                                        if (k[2]) {
                                                            j.browser.version = {original: k[2]}
                                                        } else {
                                                            j.browser.version = {original: i[1]}
                                                        }
                                                    } else {
                                                        j.browser.name = "Android Chrome";
                                                        j.browser.version = {original: i[1]}
                                                    }
                                                } else {
                                                    if (j.os.name === "Android" && /safari/i.test(h) && (i = /version\/([0-9\.]+)/i.exec(h))) {
                                                        if (k = h.match(/\s+(\w+Browser)\/?([\d\.]*)/)) {
                                                            j.browser.name = k[1];
                                                            if (k[2]) {
                                                                j.browser.version = {original: k[2]}
                                                            } else {
                                                                j.browser.version = {original: i[1]}
                                                            }
                                                        } else {
                                                            j.browser.name = "Android Browser";
                                                            j.browser.version = {original: i[1]}
                                                        }
                                                    } else {
                                                        if (/(ipad|iphone).* applewebkit\/.* mobile/i.test(h)) {
                                                            j.browser.name = "Safari"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if (i = h.match(/baiduboxapp\/?([\d\.]*)/i)) {
        j.browser.name = "百度框";
        if (i[1]) {
            j.browser.version = {original: i[1]}
        }
    } else {
        if (/BaiduLightAppRuntime/i.test(h)) {
            j.browser.name = "轻应用runtime"
        } else {
            if (/Weibo/i.test(h)) {
                j.browser.name = "微博"
            } else {
                if (/MQQ/i.test(h)) {
                    j.browser.name = "手机QQ"
                } else {
                    if (/hao123/i.test(h)) {
                        j.browser.name = "hao123"
                    }
                }
            }
        }
    }
    if (i = /MicroMessenger\/([\w.]+)/i.exec(h)) {
        j.browser.name = "微信";
        var m = (i[1]).replace(/_/g, ".");
        k = /(\d+\.\d+\.\d+\.\d+)/.exec(m);
        if (k) {
            m = k[1]
        }
        j.browser.version = {original: m}
    }
    if (i = /UCBrowser\/([\w.]+)/i.exec(h)) {
        j.browser.name = "UC Browser";
        j.browser.version = {original: i[1]}
    }
    if (i = /OPR\/([\w.]+)/i.exec(h)) {
        j.browser.name = "Opera";
        j.browser.version = {original: i[1]}
    } else {
        if (i = /OPiOS\/([\w.]+)/i.exec(h)) {
            j.browser.name = "Opera";
            j.browser.version = {original: i[1]}
        } else {
            if (/Trident\/7/i.test(h) && /rv:11/i.test(h)) {
                j.browser.name = "Internet Explorer";
                j.browser.version = {major: "11", original: "11"}
            } else {
                if (/Edge\/12/i.test(h) && /Windows Phone|Windows NT/i.test(h)) {
                    j.browser.name = "Microsoft Edge";
                    j.browser.version = {major: "12", original: "12"}
                } else {
                    if (i = /miuibrowser\/([\w.]+)/i.exec(h)) {
                        j.browser.name = "miui browser";
                        j.browser.version = {original: i[1]}
                    }
                }
            }
        }
    }
    if (!j.browser.name) {
        if (i = /Safari\/([\w.]+)/i.exec(h) && /Version/i.test(h)) {
            j.browser.name = "Safari"
        }
    }
    if (j.browser.name && !j.browser.version) {
        if (i = /Version\/([\w.]+)/i.exec(h)) {
            j.browser.version = {original: i[1]}
        }
    }
    if (j.os.name === "Windows" || /Windows/i.test(h)) {
        j.os.name = "Windows";
        if (/NT 6.3/i.test(h)) {
            j.os.version = {alias: "8.1", original: "8.1"}
        } else {
            if (/NT 6.4/i.test(h) || /NT 10.0/i.test(h)) {
                j.os.version = {alias: "10", original: "10"}
            }
        }
    } else {
        if (j.os.name === "Mac OS X") {
            j.os.name = "Mac OS X";
            if (i = /Mac OS X[\s\_\-\/](\d+[\.\-\_]\d+[\.\-\_]?\d*)/i.exec(h)) {
                j.os.version = {alias: i[1].replace(/_/g, "."), original: i[1].replace(/_/g, ".")}
            } else {
                j.os.version = {alias: "", original: ""}
            }
        } else {
            if (/Android/i.test(j.os.name)) {
                if (i = h.match(/Android[\s\_\-\/i686]?[\s\_\-\/](\d+[\.\-\_]\d+[\.\-\_]?\d*)/i)) {
                    j.os.version = {alias: i[1], original: i[1]}
                }
            }
        }
    }
    return j
};
/*! { "name": "vissense", "version": "0.10.0", "homepage": "https://vissense.github.io/vissense","copyright": "(c) 2016 tbk" } */
!function (h, l, g) {
    var j = function (a) {
        var b = g(a, a.document);
        return b.noConflict = function () {
            return b
        }, b
    };
    if ("function" == typeof define && define.amd) {
        define([], function () {
            return j
        })
    } else {
        if ("object" == typeof exports) {
            module.exports = function (a) {
                return j(a)
            }
        } else {
            var k = h[l], i = g(h, h.document);
            h[l] = i, h[l].noConflict = function () {
                return h[l] = k, i
            }
        }
    }
}(this, "VisSense", function (Y, K, ad) {
    function af(a, b) {
        return function () {
            var c = arguments;
            return ak(function () {
                a.apply(ad, c)
            }, b || 0)
        }
    }

    function ag(a, c) {
        var b = ah;
        return function () {
            var d = this, e = arguments;
            b(), b = ak(function () {
                a.apply(d, e)
            }, c)
        }
    }

    function U(d, a) {
        var b = W(a), c = W(d);
        return b || c ? b && c ? (X(Object.keys(a), function (e) {
            d[e] === ad && (d[e] = a[e])
        }), d) : b ? a : d : a
    }

    function ak(a, c) {
        var b = setTimeout(function () {
            a()
        }, c || 0);
        return function () {
            clearTimeout(b)
        }
    }

    function aa(b, a) {
        return function () {
            return (ap(b) ? b() : b) ? a() : ad
        }
    }

    function R(c, g, e) {
        for (var d = -1, a = Object.keys(g), h = a.length, f = ap(e); ++d < h;) {
            var b = a[d];
            c[b] = f ? e(c[b], g[b], b, c, g) : g[b]
        }
        return c
    }

    function X(e, f, c) {
        for (var b = 0, a = e.length; a > b; b++) {
            var d = f.call(c, e[b], b, e);
            if (d !== ad) {
                return d
            }
        }
    }

    function M(a) {
        return a
    }

    function an(a) {
        return a !== ad
    }

    function S(a) {
        return a && "object" == typeof a && "number" == typeof a.length && "[object Array]" === Object.prototype.toString.call(a) || !1
    }

    function J(a) {
        return a && 1 === a.nodeType || !1
    }

    function ap(a) {
        return "function" == typeof a || !1
    }

    function W(a) {
        var b = typeof a;
        return "function" === b || a && "object" === b || !1
    }

    function ah() {
    }

    function al() {
        return new Date().getTime()
    }

    function O(a) {
        var c, b = !1;
        return function () {
            return b || (c = a.apply(ad, arguments), b = !0), c
        }
    }

    function ae(e, a, d) {
        var b = ah, c = !1;
        return function () {
            var f = al(), h = arguments, g = function () {
                c = f, e.apply(d, h)
            };
            c && c + a > f ? (b(), b = ak(g, a)) : (c = f, ak(g, 0))
        }
    }

    function T(a) {
        var b = a || Y;
        return {height: b.innerHeight, width: b.innerWidth}
    }

    function ac(b, a) {
        return (a || Y).getComputedStyle(b, null)
    }

    function L(b, a) {
        return b.getPropertyValue(a)
    }

    function Q(d, b) {
        b || (b = ac(d));
        var a = L(b, "display");
        if ("none" === a) {
            return !1
        }
        var c = d.parentNode;
        return J(c) ? Q(c) : !0
    }

    function ao(c, a) {
        if (c === (a || Y).document) {
            return !0
        }
        if (!c || !c.parentNode) {
            return !1
        }
        var b = ac(c, a), d = L(b, "visibility");
        return "hidden" === d || "collapse" === d ? !1 : Q(c, b)
    }

    function ai(a, b) {
        return !a || a.width <= 0 || a.height <= 0 ? !1 : a.bottom > 0 && a.right > 0 && a.top < b.height && a.left < b.width
    }

    function N(c, f) {
        var a = c.getBoundingClientRect(), d = T(f);
        if (!ai(a, d) || !ao(c)) {
            return 0
        }
        var e = 0, b = 0;
        return a.top >= 0 ? e = Math.min(a.height, d.height - a.top) : a.bottom > 0 && (e = Math.min(d.height, a.bottom)), a.left >= 0 ? b = Math.min(a.width, d.width - a.left) : a.right > 0 && (b = Math.min(d.width, a.right)), e * b / (a.height * a.width)
    }

    function V(a) {
        return !aj(a || Y).isHidden()
    }

    function P(b, c) {
        if (!(this instanceof P)) {
            return new P(b, c)
        }
        if (!J(b)) {
            throw new Error("not an element node")
        }
        this._element = b, this._config = U(c, {
            fullyvisible: 1,
            hidden: 0,
            referenceWindow: Y,
            percentageHook: N,
            precision: 3,
            visibilityHooks: []
        });
        var a = this._config.precision <= 0 ? 1 : Math.pow(10, this._config.precision || 3);
        this._round = function (e) {
            return Math.round(e * a) / a
        };
        var d = aj(this._config.referenceWindow);
        this._config.visibilityHooks.push(function () {
            return !d.isHidden()
        })
    }

    function ab(c, b) {
        var a = c.state(), d = a.percentage;
        return b && d === b.percentage && b.percentage === b.previous.percentage ? b : a.hidden ? P.VisState.hidden(d, b) : a.fullyvisible ? P.VisState.fullyvisible(d, b) : P.VisState.visible(d, b)
    }

    function Z(d, c) {
        var b = U(c, {strategy: [new Z.Strategy.PollingStrategy(), new Z.Strategy.EventStrategy()], async: !1});
        this._visobj = d, this._state = {}, this._started = !1;
        var a = "*#" + al();
        this._pubsub = new am({
            async: b.async,
            anyTopicName: a
        }), this._events = [a, "start", "stop", "update", "hidden", "visible", "fullyvisible", "percentagechange", "visibilitychange"], this._strategy = new Z.Strategy.CompositeStrategy(b.strategy), this._strategy.init(this), this._pubsub.on("update", function (g) {
            var e = g._state.percentage, f = g._state.previous.percentage;
            e !== f && g._pubsub.publish("percentagechange", [g, e, f])
        }), this._pubsub.on("update", function (e) {
            e._state.code !== e._state.previous.code && e._pubsub.publish("visibilitychange", [e])
        }), this._pubsub.on("visibilitychange", function (e) {
            e._state.visible && !e._state.previous.visible && e._pubsub.publish("visible", [e])
        }), this._pubsub.on("visibilitychange", function (e) {
            e._state.fullyvisible && e._pubsub.publish("fullyvisible", [e])
        }), this._pubsub.on("visibilitychange", function (e) {
            e._state.hidden && e._pubsub.publish("hidden", [e])
        }), X(this._events, function (e) {
            ap(b[e]) && this.on(e, b[e])
        }, this)
    }

    var aj = function (a) {
        return function (d, f) {
            var g = function (h, i) {
                    return {property: h, event: i}
                }, b = "visibilitychange",
                e = [g("webkitHidden", "webkit" + b), g("msHidden", "ms" + b), g("mozHidden", "moz" + b), g("hidden", b)],
                c = X(e, function (h) {
                    return d[h.property] !== f ? {
                        isHidden: function () {
                            return !!d[h.property] || !1
                        }, onVisibilityChange: function (i) {
                            return d.addEventListener(h.event, i, !1), function () {
                                d.removeEventListener(h.event, i, !1)
                            }
                        }
                    } : void 0
                });
            return c || {
                isHidden: function () {
                    return !1
                }, onVisibilityChange: function () {
                    return ah
                }
            }
        }((a || Y).document)
    }, am = function (a) {
        function b(d) {
            this._cache = {}, this._onAnyCache = [], this._config = U(d, {async: !1, anyTopicName: "*"})
        }

        var c = function (e, d) {
            X(e, function (f) {
                f(d)
            })
        };
        return b.prototype.on = function (d, e) {
            if (!ap(e)) {
                return ah
            }
            var f = function (i) {
                return e.apply(a, i || [])
            }, g = this._config.async ? af(f) : f, h = function (j, i, k) {
                return function () {
                    var l = i.indexOf(j);
                    return l > -1 ? (i.splice(l, 1), !0) : !1
                }
            };
            return d === this._config.anyTopicName ? (this._onAnyCache.push(g), h(g, this._onAnyCache, "*")) : (this._cache[d] || (this._cache[d] = []), this._cache[d].push(g), h(g, this._cache[d], d))
        }, b.prototype.publish = function (g, h) {
            var f = (this._cache[g] || []).concat(g === this._config.anyTopicName ? [] : this._onAnyCache),
                d = !!this._config.async, e = d ? af(c) : function (i, j) {
                    return c(i, j), ah
                };
            return e(f, h || [])
        }, b
    }();
    P.prototype.state = function () {
        var a = X(this._config.visibilityHooks, function (b) {
            return b(this._element) ? void 0 : P.VisState.hidden(0)
        }, this);
        return a || function (d, e, c) {
            var b = d._round(c.percentageHook(e, c.referenceWindow));
            return b <= c.hidden ? P.VisState.hidden(b) : b >= c.fullyvisible ? P.VisState.fullyvisible(b) : P.VisState.visible(b)
        }(this, this._element, this._config)
    }, P.prototype.percentage = function () {
        return this.state().percentage
    }, P.prototype.element = function () {
        return this._element
    }, P.prototype.referenceWindow = function () {
        return this._config.referenceWindow
    }, P.prototype.isFullyVisible = function () {
        return this.state().fullyvisible
    }, P.prototype.isVisible = function () {
        return this.state().visible
    }, P.prototype.isHidden = function () {
        return this.state().hidden
    }, P.fn = P.prototype, P.of = function (a, b) {
        return new P(a, b)
    };
    var I = {HIDDEN: [0, "hidden"], VISIBLE: [1, "visible"], FULLY_VISIBLE: [2, "fullyvisible"]};
    return P.VisState = function () {
        function a(b, d, c) {
            return c && delete c.previous, {
                code: b[0],
                state: b[1],
                percentage: d,
                previous: c || {},
                fullyvisible: b[0] === I.FULLY_VISIBLE[0],
                visible: b[0] === I.VISIBLE[0] || b[0] === I.FULLY_VISIBLE[0],
                hidden: b[0] === I.HIDDEN[0]
            }
        }

        return {
            hidden: function (c, b) {
                return a(I.HIDDEN, c, b)
            }, visible: function (c, b) {
                return a(I.VISIBLE, c, b)
            }, fullyvisible: function (c, b) {
                return a(I.FULLY_VISIBLE, c, b)
            }
        }
    }(), Z.prototype.visobj = function () {
        return this._visobj
    }, Z.prototype.publish = function (c, b) {
        var a = this._events.indexOf(c) >= 0;
        if (a) {
            throw new Error('Cannot publish internal event "' + c + '" from external scope.')
        }
        return this._pubsub.publish(c, b)
    }, Z.prototype.state = function () {
        return this._state
    }, Z.prototype.start = function (b) {
        if (this._started) {
            return this
        }
        var a = U(b, {async: !1});
        return this._cancelAsyncStart && this._cancelAsyncStart(), a.async ? this.startAsync() : (this._started = !0, this.update(), this._pubsub.publish("start", [this]), this._strategy.start(this), this)
    }, Z.prototype.startAsync = function (c) {
        this._cancelAsyncStart && this._cancelAsyncStart();
        var b = this, a = ak(function () {
            b.start(R(U(c, {}), {async: !1}))
        });
        return this._cancelAsyncStart = function () {
            a(), b._cancelAsyncStart = null
        }, this
    }, Z.prototype.stop = function () {
        this._cancelAsyncStart && this._cancelAsyncStart(), this._started && (this._strategy.stop(this), this._pubsub.publish("stop", [this])), this._started = !1
    }, Z.prototype.update = function () {
        this._started && (this._state = ab(this._visobj, this._state), this._pubsub.publish("update", [this]))
    }, Z.prototype.on = function (b, a) {
        return this._pubsub.on(b, a)
    }, Z.Builder = function () {
        var a = function (h, e) {
            var f = null, i = h.strategy === !1, g = !i && (h.strategy || e.length > 0);
            if (g) {
                var b = !!h.strategy, c = S(h.strategy), d = b ? c ? h.strategy : [h.strategy] : [];
                f = d.concat(e)
            } else {
                f = i ? [] : h.strategy
            }
            return f
        };
        return function (d) {
            var c = {}, e = [], b = [], g = !1, f = null;
            return {
                set: function (i, h) {
                    return c[i] = h, this
                }, strategy: function (h) {
                    return e.push(h), this
                }, on: function (h, i) {
                    return b.push([h, i]), this
                }, build: function (h) {
                    var i = function () {
                        var k = a(c, e);
                        c.strategy = k;
                        var l = d.monitor(c);
                        return X(b, function (m) {
                            l.on(m[0], m[1])
                        }), g = !0, f = l
                    }, j = g ? f : i();
                    return ap(h) ? h(j) : j
                }
            }
        }
    }(), Z.Strategy = function () {
    }, Z.Strategy.prototype.init = ah, Z.Strategy.prototype.start = ah, Z.Strategy.prototype.stop = ah, Z.Strategy.CompositeStrategy = function (a) {
        this._strategies = S(a) ? a : [a]
    }, Z.Strategy.CompositeStrategy.prototype = Object.create(Z.Strategy.prototype), Z.Strategy.CompositeStrategy.prototype.init = function (a) {
        X(this._strategies, function (b) {
            ap(b.init) && b.init(a)
        })
    }, Z.Strategy.CompositeStrategy.prototype.start = function (a) {
        X(this._strategies, function (b) {
            ap(b.start) && b.start(a)
        })
    }, Z.Strategy.CompositeStrategy.prototype.stop = function (a) {
        X(this._strategies, function (b) {
            ap(b.stop) && b.stop(a)
        })
    }, Z.Strategy.PollingStrategy = function (a) {
        this._config = U(a, {interval: 1000}), this._started = !1
    }, Z.Strategy.PollingStrategy.prototype = Object.create(Z.Strategy.prototype), Z.Strategy.PollingStrategy.prototype.start = function (a) {
        return this._started || (this._clearInterval = function (c) {
            var b = setInterval(function () {
                a.update()
            }, c);
            return function () {
                clearInterval(b)
            }
        }(this._config.interval), this._started = !0), this._started
    }, Z.Strategy.PollingStrategy.prototype.stop = function () {
        return this._started ? (this._clearInterval(), this._started = !1, !0) : !1
    }, Z.Strategy.EventStrategy = function (a) {
        this._config = U(a, {throttle: 50}), this._config.debounce > 0 && (this._config.throttle = +this._config.debounce), this._started = !1
    }, Z.Strategy.EventStrategy.prototype = Object.create(Z.Strategy.prototype), Z.Strategy.EventStrategy.prototype.start = function (a) {
        return this._started || (this._removeEventListeners = function (e) {
            var c = a.visobj().referenceWindow(), d = aj(c), b = d.onVisibilityChange(e);
            return c.addEventListener("scroll", e, !1), c.addEventListener("resize", e, !1), c.addEventListener("touchmove", e, !1), function () {
                c.removeEventListener("touchmove", e, !1), c.removeEventListener("resize", e, !1), c.removeEventListener("scroll", e, !1), b()
            }
        }(ae(function () {
            a.update()
        }, this._config.throttle)), this._started = !0), this._started
    }, Z.Strategy.EventStrategy.prototype.stop = function () {
        return this._started ? (this._removeEventListeners(), this._started = !1, !0) : !1
    }, P.VisMon = Z, P.PubSub = am, P.fn.monitor = function (a) {
        return new Z(this, a)
    }, P.Utils = {
        async: af,
        debounce: ag,
        defaults: U,
        defer: ak,
        extend: R,
        forEach: X,
        fireIf: aa,
        identity: M,
        isArray: S,
        isDefined: an,
        isElement: J,
        isFunction: ap,
        isObject: W,
        isPageVisible: V,
        isVisibleByStyling: ao,
        noop: ah,
        now: al,
        once: O,
        throttle: ae,
        percentage: N,
        VisibilityApi: aj(),
        createVisibilityApi: aj,
        _viewport: T,
        _isInViewport: ai,
        _isDisplayed: Q,
        _computedStyle: ac,
        _styleProperty: L
    }, P
});
(function (root) {
    var helper = {};
    helper.uuid = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == "x" ? r : (r & 3 | 8);
            return v.toString(16)
        })
    };
    helper.getCookie = function (name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) {
            return unescape(arr[2])
        } else {
            return null
        }
    };
    helper.setCookie = function (name, value, time) {
        var domain = document.domain.split(".").slice(-2).join(".");
        if (time) {
            var exp = new Date();
            exp.setTime(exp.getTime() + time);
            document.cookie = name + "=" + escape(value) + ";domain=" + domain + ";path=/;expires=" + exp.toUTCString()
        } else {
            document.cookie = name + "=" + escape(value) + ";domain=" + domain + ";path=/;"
        }
    };
    helper.getQueryString = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2])
        }
        return null
    };
    helper.addQueryString = function (e, n, t) {
        if (t == undefined || t == null) {
            t = ""
        }
        if (e.indexOf("?") != -1 || e.indexOf("=") != -1) {
            return e + "&" + n + "=" + t
        } else {
            return e + "?" + n + "=" + t
        }
    };
    helper.each = function (loopable, callback, self) {
        var additionalArgs = Array.prototype.slice.call(arguments, 3);
        if (loopable) {
            if (loopable.length === +loopable.length) {
                for (var i = 0; i < loopable.length; i++) {
                    callback.apply(self, [loopable[i], i].concat(additionalArgs))
                }
            } else {
                for (var item in loopable) {
                    callback.apply(self, [loopable[item], item].concat(additionalArgs))
                }
            }
        }
    };
    helper.extend = function (base) {
        helper.each(Array.prototype.slice.call(arguments, 1), function (extensionObject) {
            helper.each(extensionObject, function (value, key) {
                if (extensionObject.hasOwnPrototype(key)) {
                    base[key] = value
                }
            })
        });
        return base
    };
    helper.indexOf = function (arrayToSearch, item) {
        if (Array.prototype.indexOf) {
            return arrayToSearch.indexOf(item)
        } else {
            for (var i = 0; i < arrayToSearch.length; i++) {
                if (arrayToSearch[i] === item) {
                    return i
                }
            }
            return -1
        }
    };
    helper.send = function (server, obj) {
        var protocol = window.location.protocol;
        obj.c_t = new Date().getTime();
        obj.u_a = "";
        var img = new Image(0, 0);
        img.src = protocol + server + "?" + helper.objectToQuery(obj)
    };
    helper.objectToQuery = function (jsonObj) {
        var args = "";
        for (var i in jsonObj) {
            if (args != "") {
                args += "&"
            }
            args += i + "=" + encodeURIComponent(jsonObj[i])
        }
        return args
    };
    helper.getXPath = function (element) {
        if (element == document.body) {
            return "/html/" + element.tagName.toLowerCase()
        }
        if (!element.parentNode) {
            return ""
        }
        var ix = 1, siblings = element.parentNode.childNodes;
        for (var i = 0, l = siblings.length; i < l; i++) {
            var sibling = siblings[i];
            if (sibling == element) {
                return helper.getXPath(element.parentNode) + "/" + element.tagName.toLowerCase() + "[" + (ix) + "]"
            } else {
                if (sibling.nodeType == 1 && sibling.tagName == element.tagName) {
                    ix++
                }
            }
        }
    };
    helper.getData = function (element) {
        if (element) {
            var data = element.getAttribute("_tracker_data_");
            if (data) {
                try {
                    data = eval("(" + data + ")");
                    data = helper.objectToQuery(data);
                    return data
                } catch (e) {
                    return data
                }
            }
        }
        return ""
    };
    helper.isChrome = function () {
        return window.navigator.userAgent.indexOf("Chrome") !== -1
    };
    helper.isWeixin = function () {
        return /micromessenger/i.test(navigator.userAgent)
    };
    helper.on = function (target, type, handler) {
        if (target.addEventListener) {
            target.addEventListener(type, handler, false)
        } else {
            target.attachEvent("on" + type, function (event) {
                return handler.call(target, setEvent)
            }, false)
        }
    };
    helper.onload = function (callback) {
        if (typeof window.addEventListener != "undefined") {
            window.addEventListener("load", callback, false)
        } else {
            if (typeof document.addEventListener != "undefined") {
                document.addEventListener("load", callback, false)
            } else {
                if (typeof window.attachEvent != "undefined") {
                    window.attachEvent("onload", callback)
                } else {
                    var _callback = window.onload;
                    if (typeof window.onload != "function") {
                        window.onload = callback
                    } else {
                        window.onload = function () {
                            _callback();
                            callback()
                        }
                    }
                }
            }
        }
    };
    helper.onunload = function (callback) {
        if (helper.isWeixin()) {
            if (typeof window.addEventListener != "undefined") {
                window.addEventListener("unload", callback, false)
            } else {
                if (typeof document.addEventListener != "undefined") {
                    document.addEventListener("unload", callback, false)
                } else {
                    if (typeof window.attachEvent != "undefined") {
                        window.attachEvent("onunload", callback)
                    } else {
                        var _callback = window.onunload;
                        if (typeof window.onunload != "function") {
                            window.onunload = callback
                        } else {
                            window.onunload = function () {
                                _callback();
                                callback()
                            }
                        }
                    }
                }
            }
        } else {
            if (typeof window.addEventListener != "undefined") {
                window.addEventListener("beforeunload", callback, false)
            } else {
                if (typeof document.addEventListener != "undefined") {
                    document.addEventListener("beforeunload", callback, false)
                } else {
                    if (typeof window.attachEvent != "undefined") {
                        window.attachEvent("onbeforeunload", callback)
                    } else {
                        var _callback = window.onbeforeunload;
                        if (typeof window.onbeforeunload != "function") {
                            window.onbeforeunload = callback
                        } else {
                            window.onbeforeunload = function () {
                                _callback();
                                callback()
                            }
                        }
                    }
                }
            }
        }
    };
    helper.getNetType = function () {
        var type = null;
        var ua = window.navigator.userAgent;
        if (/NetType/.test(ua)) {
            var types = ua.match(/NetType\/(\S*)/);
            if (types.length >= 1) {
                type = types[1]
            }
        }
        if (type == null) {
            var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection || {type: "unknown"};
            type = connection.type || connection.effectiveType || "unknown"
        }
        return type.toLowerCase()
    };
    helper.getSocialNetworkingSite = function () {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            var url = document.URL || "";
            var ref = document.referrer || "";
            if (ref.indexOf("http://mp.weixinbridge.com/mp/wapredirect?") == 0) {
                return "weixin-article"
            } else {
                if (url.indexOf("from=timeline") > 0) {
                    return "weixin-timeline"
                } else {
                    if (url.indexOf("from=singlemessage") > 0) {
                        return "weixin-singlemessage"
                    } else {
                        if (url.indexOf("from=groupmessage") > 0) {
                            return "weixin-groupmessage"
                        }
                    }
                }
            }
            return "weixin-unknown"
        }
        if (ua.match(/Weibo/i) == "weibo") {
            return "weibo"
        }
        if (ua.match(/QQ\//i) == "qq/") {
            return "qq"
        }
        if (ua.match(/qzone\//i) == "qzone/") {
            return "qzone"
        }
        if (ua.match(/tieba\//i) == "tieba/") {
            return "tieba"
        }
        if (ua.match(/momoWebView\//i) == "momowebview/") {
            return "momo"
        }
        if (ua.match(/douban/i) == "douban") {
            return "douban"
        }
        if (ua.match(/zhihu/i) == "zhihu") {
            return "zhihu"
        }
        if (ua.match(/AlipayClient\//i) == "alipayclient/") {
            return "alipay"
        }
        if (ua.match(/DingTalk\//i) == "dingtalk/") {
            return "dingtalk"
        }
        if (ua.match(/qdesk/i) == "qdesk") {
            return "qdesk"
        }
        if (ua.match(/qqnews\//i) == "qqnews/") {
            return "qqnews"
        }
        return "unknown"
    };
    helper.getTrackerData = function (key) {
        var tracker = window._tracker_ || [];
        for (var i = 0; i < tracker.length; i++) {
            var row = tracker[i];
            if (row && row.length && row.length >= 2) {
                if (key == row[0]) {
                    return row[1]
                }
            }
        }
        return null
    };
    helper.getSessionId = function () {
        return helper.getTrackerData("session_id") || helper.getCookie("_tracker_session_id_")
    };
    helper.getUserId = function () {
        return helper.getTrackerData("user_id") || helper.getCookie("_tracker_user_id_")
    };
    helper.getClientType = function () {
        return helper.getTrackerData("client_type") || ""
    };
    helper.getClientEdition = function () {
        return helper.getTrackerData("client_edition") || ""
    };
    helper.getWxUserInfo = function () {
        return helper.getTrackerData("wx_user_info") || {}
    };
    helper.getWxReadFrom = function () {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            var url = document.URL || "";
            var ref = document.referrer || "";
            if (ref.indexOf("http://mp.weixinbridge.com/mp/wapredirect?") == 0) {
                return "article"
            } else {
                if (url.indexOf("from=timeline") > 0) {
                    return "timeline"
                } else {
                    if (url.indexOf("from=singlemessage") > 0) {
                        return "singlemessage"
                    } else {
                        if (url.indexOf("from=groupmessage") > 0) {
                            return "groupmessage"
                        }
                    }
                }
            }
            return "unknown"
        }
        return ""
    };
    var collect = {
        time: new Date().getTime(),
        server: "//datalog.eqxiu.com/p.gif",
        pages: {time: 0, total: 1, curr: 0, depth: 1, ids: [], dur: [0]},
        triggers: {total: 0, id_type: [], counts: []},
        sdk: "tracker-view.js",
        ver: "1.1.1"
    };
    collect.params = function () {
        var p = {};
        p.sdk = collect.sdk;
        p.ver = collect.ver;
        p.d_i = helper.getCookie("_tracker_distinct_id_");
        if (document) {
            p.url = document.URL || "";
            p.tit = document.title || "";
            p.ref = document.referrer || ""
        }
        if (window && window.screen) {
        }
        if (navigator) {
            p.u_a = navigator.userAgent || ""
        }
        if (window && window.location.host) {
        }
        var device = tracker_ua_device(p.u_a);
        if (device && device.browser) {
            p.bro = device.browser.name || ""
        }
        if (device && device.os) {
            p.os = device.os.name || "";
            if (device.os.version) {
                p.o_v = device.os.version.original || ""
            }
        }
        if (device && device.engine) {
            p.eng = device.engine.name || ""
        }
        if (device && device.device) {
            p.man = device.device.manufacturer || "";
            p.mod = device.device.model || ""
        }
        p.sns = helper.getSocialNetworkingSite();
        p.n_t = helper.getNetType();
        p.s_i = helper.getSessionId();
        p.u_i = helper.getUserId();
        p.c_p = helper.getClientType();
        p.c_e = helper.getClientEdition();
        var wxUserInfo = helper.getWxUserInfo();
        p.wx_o_i = wxUserInfo.openid || "";
        p.wx_n_n = wxUserInfo.nickname || "";
        p.wx_sex = wxUserInfo.sex || "";
        p.wx_pro = wxUserInfo.province || "";
        p.wx_cit = wxUserInfo.city || "";
        p.wx_cou = wxUserInfo.country || "";
        p.wx_hea = wxUserInfo.headimgurl || "";
        p.wx_u_i = wxUserInfo.unionid || "";
        p.wx_r_f = helper.getWxReadFrom();
        p.scene_id = window.scene && window.scene.id || "";
        p.scene_code = window.scene && window.scene.code || "";
        p.scene_bizType = window.scene && window.scene.bizType;
        p.scene_property_eqAdType = window.scene && window.scene.property && window.scene.property.eqAdType;
        p.scene_ext_yqc_ad = window.scene && window.scene.ext && window.scene.ext.yqc && window.scene.ext.yqc.ad;
        p.scene_member_type = window.scene && window.scene.memberType;
        p.scene_user_type = window.scene && window.scene.userType;
        p.foto_id = window.zjxInfo && window.zjxInfo.id || "";
        p.foto_code = window.zjxInfo && window.zjxInfo.code || "";
        return p
    };
    collect.addElementClickListener = function () {
        var that = this;
        var nodeList = document.querySelectorAll("div, span, a, img, button, input[type='button'], input[type='submit'], input[type='reset'], *[_tracker_data_]");
        helper.each(nodeList, function (element, index) {
            if ((element && element.tagName.toLowerCase() == "div" || element.tagName.toLowerCase() == "span")) {
                var id = element.getAttribute("id") || "";
                var clz = element.getAttribute("class") || "";
                var tracker_data = element.getAttribute("_tracker_data_") || "";
                if (tracker_data == "" && id.indexOf("btn") < 0 && id.indexOf("button") < 0 && clz.indexOf("btn") < 0 && clz.indexOf("button") < 0) {
                    return
                }
            }
            if (!element.getAttribute("_tracker_click_")) {
                helper.on(element, "click", function (event) {
                    var params = that.params();
                    params.e_t = "element_click";
                    params.e_p = helper.getXPath(element);
                    params.e_d = helper.getData(element);
                    params.scene_page_total = that.pages.total;
                    params.scene_page_curr = that.pages.curr;
                    var e = event || window.event;
                    helper.send(that.server, params);
                    return false
                });
                element.setAttribute("_tracker_click_", "_tracker_click_")
            }
        })
    };
    collect.addScenePageViewListener = function () {
        var that = this;
        var nodeList = document.querySelectorAll("section.main-page div.m-img");
        that.pages.total = nodeList.length;
        helper.each(nodeList, function (element, index) {
            if (!element.getAttribute("_tracker_view_")) {
                var pageId = 0;
                try {
                    pageId = element.firstElementChild.getAttribute("data-scene-id")
                } catch (e) {
                }
                if (pageId == "") {
                    pageId = 0
                }
                if (index < that.pages.dur.length) {
                    that.pages.dur[index] = 0;
                    that.pages.ids[index] = pageId
                } else {
                    that.pages.dur.push(0);
                    that.pages.ids.push(pageId)
                }
                var visibility = VisSense(element, {fullyvisible: 1});
                var visibility_monitor = visibility.monitor({
                    fullyvisible: function (visibility_monitor) {
                        that.pages.curr = index;
                        if (that.pages.curr + 1 > that.pages.depth) {
                            that.pages.depth = that.pages.curr + 1
                        }
                        that.pages.time = new Date().getTime()
                    }, hidden: function () {
                        if (that.pages.time > 0) {
                            that.pages.dur[index] += new Date().getTime() - that.pages.time
                        }
                    }
                }).start();
                element.setAttribute("_tracker_view_", "_tracker_view_")
            }
        })
    };
    collect.launch = function () {
        var that = this;
        var params = that.params();
        params.e_t = "launch";
        helper.send(that.server, params)
    };
    collect.pageView = function () {
        var that = this;
        that.pages.total = document.querySelectorAll("section.main-page div.m-img").length;
        var params = that.params();
        params.e_t = "page_view";
        params.scene_page_total = that.pages.total;
        helper.send(that.server, params)
    };
    collect.pageLeave = function () {
        var that = this;
        if (that.pages.total == 0) {
            return
        }
        if (that.pages.time > 0) {
            that.pages.dur[that.pages.curr] += new Date().getTime() - that.pages.time
        }
        var params = that.params();
        params.e_t = "page_leave";
        params.dur = new Date().getTime() - that.time;
        params.scene_page_total = that.pages.total;
        params.scene_page_curr = that.pages.curr;
        params.scene_page_depth = that.pages.depth;
        params.scene_page_dura = that.pages.dur.join(",");
        params.scene_page_ids = that.pages.ids.join(",");
        params.scene_trigger_total = that.triggers.total;
        var trigger_counts = [];
        for (var i = 0; i < that.triggers.id_type.length; i++) {
            trigger_counts.push(that.triggers.id_type[i] + "," + that.triggers.counts[i])
        }
        params.scene_trigger_counts = trigger_counts.join(";");
        helper.send(that.server, params);
        delete this
    };
    collect.getShareUrl = function (e) {
        var that = this;
        var n = e;
        try {
            var t = "";
            if (e.indexOf("#") != -1) {
                t = e.split("#")[1];
                e = e.split("#")[0]
            }
            var share_level = parseInt(helper.getCookie("_tracker_share_level_"));
            if (e.indexOf("share_level=") != -1) {
                e = e.replace("share_level=" + share_level, "share_level=" + (share_level + 1))
            } else {
                e = helper.addQueryString(e, "share_level", 1)
            }
            var from_user = helper.getCookie("_tracker_from_user_");
            if (e.indexOf("from_user=") != -1) {
                e = e.replace("from_user=" + from_user, "from_user=" + helper.getCookie("_tracker_distinct_id_"))
            } else {
                e = helper.addQueryString(e, "from_user", helper.getCookie("_tracker_distinct_id_"))
            }
            var from_id = helper.getCookie("_tracker_from_id_");
            var share_id = helper.uuid();
            helper.setCookie("_tracker_share_id_", share_id);
            if (e.indexOf("from_id") != -1) {
                e = e.replace("from_id=" + from_id, "from_id=" + share_id)
            } else {
                e = helper.addQueryString(e, "from_id", share_id)
            }
            var share_time = new Date().getTime();
            helper.setCookie("_tracker_share_time_", share_time);
            if (e.indexOf("share_time=") != -1) {
                e = e.replace(/share_time=[a-zA-Z0-9-]{13}/, "share_time=" + share_time)
            } else {
                e = helper.addQueryString(e, "share_time", share_time)
            }
            if (t != "") {
                e += "#" + t
            }
            return e
        } catch (i) {
            return n
        }
    };
    collect.share = function (to) {
        var that = this;
        var params = that.params();
        if (to == "weibo") {
            to = "unknown"
        }
        params.e_t = "share";
        params.from_user = helper.getCookie("_tracker_from_user_") || "";
        params.share_user = helper.getCookie("_tracker_distinct_id_") || "";
        params.from_id = helper.getCookie("_tracker_from_id_") || "";
        params.share_id = helper.getCookie("_tracker_share_id_") || "";
        params.share_to = to || "unknown";
        params.share_level = (parseInt(helper.getCookie("_tracker_share_level_")) + 1) || 1;
        params.share_time = helper.getCookie("_tracker_share_time_") || "";
        var memberType = window.scene && window.scene.memberType;
        var userType = window.scene && window.scene.userType;
        if ("7" == memberType || "8" == memberType || "9" == memberType || "99" == userType) {
            helper.send(that.server, params)
        }
        if (document.domain.endsWith(".scene.eqh5.cn")) {
            helper.send(that.server, params)
        }
    };
    collect.trigger = function (id, type) {
        var that = this;
        if (!id || !type) {
            return
        }
        that.triggers.total += 1;
        var key = id + "," + type;
        var index = that.triggers.id_type.indexOf(key);
        if (index < 0) {
            that.triggers.id_type.push(key);
            that.triggers.counts.push(1)
        } else {
            that.triggers.counts[index] += 1
        }
    };
    helper.onload(function () {
        try {
            var _tracker_distinct_id_ = helper.getCookie("_tracker_distinct_id_");
            if (_tracker_distinct_id_ == null) {
                _tracker_distinct_id_ = helper.uuid();
                helper.setCookie("_tracker_distinct_id_", _tracker_distinct_id_, 100 * 365 * 24 * 60 * 60 * 1000)
            }
            var _tracker_launch_ = helper.getCookie("_tracker_launch_");
            if (_tracker_launch_ == null) {
                collect.launch();
                _tracker_launch_ = "1";
                if (helper.isChrome()) {
                    helper.setCookie("_tracker_launch_", _tracker_launch_, 24 * 60 * 60 * 1000)
                } else {
                    helper.setCookie("_tracker_launch_", _tracker_launch_)
                }
            }
            var _tracker_session_id_ = helper.getCookie("JSESSIONID") || helper.getCookie("_tracker_session_id_") || helper.uuid();
            if (helper.isChrome()) {
                helper.setCookie("_tracker_session_id_", _tracker_session_id_, 24 * 60 * 60 * 1000)
            } else {
                helper.setCookie("_tracker_session_id_", _tracker_session_id_)
            }
            var _tracker_user_id_ = null;
            if (window.localStorage) {
                var userInfo = window.localStorage.getItem("userLabel.showInfo");
                if (userInfo) {
                    if (typeof(userInfo) != "object") {
                        userInfo = eval("(" + userInfo + ")")
                    }
                    if (typeof(userInfo) == "object") {
                        for (var p in userInfo) {
                            if (p.length == "ff8080815a4a077a015a5a90c2430000".length) {
                                _tracker_user_id_ = p;
                                break
                            }
                        }
                    }
                }
            }
            _tracker_user_id_ = _tracker_user_id_ || helper.getCookie("_tracker_user_id_") || "";
            if (helper.isChrome()) {
                helper.setCookie("_tracker_user_id_", _tracker_user_id_, 24 * 60 * 60 * 1000)
            } else {
                helper.setCookie("_tracker_user_id_", _tracker_user_id_)
            }
            var share_level = helper.getQueryString("share_level") || 0;
            try {
                share_level = parseInt(share_level)
            } catch (e) {
                share_level = 0
            }
            helper.setCookie("_tracker_share_level_", share_level);
            var from_user = helper.getQueryString("from_user") || "";
            helper.setCookie("_tracker_from_user_", from_user);
            var from_id = helper.getQueryString("from_id") || "";
            helper.setCookie("_tracker_from_id_", from_id);
            collect.addElementClickListener();
            collect.addScenePageViewListener();
            if (window.scene) {
                setTimeout(function () {
                    collect.pageView()
                }, 1500)
            } else {
                collect.pageView()
            }
            collect.time = new Date().getTime()
        } catch (e) {
            console.error(e)
        }
    });
    helper.onunload(function () {
        try {
            collect.pageLeave()
        } catch (e) {
            console.error(e)
        }
    });
    helper.on(document, "DOMNodeInserted", function (e) {
        try {
            collect.addElementClickListener();
            collect.addScenePageViewListener()
        } catch (e) {
            console.error(e)
        }
    });
    window._tracker_api_ = collect
})(window);
