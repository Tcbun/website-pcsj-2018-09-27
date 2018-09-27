$(".toggleSlide").click(function () {
    var job = $(this).parent().siblings(".job-intro");
    // alert( $(".job-intro").is(":hidden"));判断元素是否隐藏状态
    if (job.is(":hidden")) {
        $(this).text("折叠");
    } else {
        $(this).text("展开");
    }
    job.slideToggle();
})
var nowImg = null;
$(".right-nav ul li:nth-of-type(1)").hover(function () {
    nowImg = $(this).find("img").attr("src");
    $(this).find("img").attr("src", "./static/frontpages/images/aboutus/icon-h-1.png");
}, function () {
    $(this).find("img").attr("src", nowImg);
})
$(".right-nav ul li:nth-of-type(2)").hover(function () {
    nowImg = $(this).find("img").attr("src");
    $(this).find("img").attr("src", "./static/frontpages/images/aboutus/icon-h-2.png");
}, function () {
    $(this).find("img").attr("src", nowImg);
})
$(".right-nav ul li:nth-of-type(3)").hover(function () {
    nowImg = $(this).find("img").attr("src");
    $(this).find("img").attr("src", "./static/frontpages/images/aboutus/icon-h-3.png");
}, function () {
    $(this).find("img").attr("src", nowImg);
})
$(".right-nav ul li:nth-of-type(4)").hover(function () {
    nowImg = $(this).find("img").attr("src");
    $(this).find("img").attr("src", "./static/frontpages/images/aboutus/icon-h-4.png");
}, function () {
    $(this).find("img").attr("src", nowImg);
})
//百度地图

//创建和初始化地图函数：
function initMap() {
    createMap();//创建地图
    setMapEvent();//设置地图事件
    addMapControl();//向地图添加控件
    addMarker();//向地图中添加marker
}

//创建地图函数：
function createMap() {
    var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
    var point = new BMap.Point(121.25631, 30.196351);//定义一个中心点坐标
    map.centerAndZoom(point, 18);//设定地图的中心点和坐标并将地图显示在地图容器中
    window.map = map;//将map变量存储在全局
}

//地图事件设置函数：
function setMapEvent() {
    map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
    map.enableScrollWheelZoom();//启用地图滚轮放大缩小
    map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
    map.enableKeyboard();//启用键盘上下左右键移动地图
}

//地图控件添加函数：
function addMapControl() {
    //向地图中添加缩放控件
    var ctrl_nav = new BMap.NavigationControl({ anchor: BMAP_ANCHOR_TOP_LEFT, type: BMAP_NAVIGATION_CONTROL_LARGE });
    map.addControl(ctrl_nav);
    //向地图中添加缩略图控件
    var ctrl_ove = new BMap.OverviewMapControl({ anchor: BMAP_ANCHOR_BOTTOM_RIGHT, isOpen: 1 });
    map.addControl(ctrl_ove);
    //向地图中添加比例尺控件
    var ctrl_sca = new BMap.ScaleControl({ anchor: BMAP_ANCHOR_BOTTOM_LEFT });
    map.addControl(ctrl_sca);
}

//标注点数组
var markerArr = [{ title: "浙江品创饰家装饰工程有限公司", content: "地址：慈溪市海关北路369号<br/>电话：0574-63861216", point: "121.254913|30.196117", isOpen: 0, icon: { w: 23, h: 26, l: 45, t: 20, x: 6, lb: 5 } }
];
//创建marker
function addMarker() {
    for (var i = 0; i < markerArr.length; i++) {
        var json = markerArr[i];
        var p0 = json.point.split("|")[0];
        var p1 = json.point.split("|")[1];
        var point = new BMap.Point(p0, p1);
        var iconImg = createIcon(json.icon);
        var marker = new BMap.Marker(point, { icon: iconImg });
        var iw = createInfoWindow(i);
        var label = new BMap.Label(json.title, { "offset": new BMap.Size(json.icon.lb - json.icon.x + 10, -40) });
        marker.setLabel(label);
        map.addOverlay(marker);
        label.setStyle({
            borderColor: "#808080",
            color: "#333",
            cursor: "pointer"
        });

        (function () {
            var index = i;
            var _iw = createInfoWindow(i);
            var _marker = marker;
            _marker.addEventListener("click", function () {
                this.openInfoWindow(_iw);
            });
            _iw.addEventListener("open", function () {
                _marker.getLabel().hide();
            })
            _iw.addEventListener("close", function () {
                _marker.getLabel().show();
            })
            label.addEventListener("click", function () {
                _marker.openInfoWindow(_iw);
            })
            if (!!json.isOpen) {
                label.hide();
                _marker.openInfoWindow(_iw);
            }
        })()
    }
}
//创建InfoWindow
function createInfoWindow(i) {
    var json = markerArr[i];
    var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>" + json.content + "</div>");
    return iw;
}
//创建一个Icon
function createIcon(json) {
    var icon = new BMap.Icon("static/frontpages/images/contactus/us_mk_icon.png", new BMap.Size(json.w, json.h), { imageOffset: new BMap.Size(-json.l, -json.t), infoWindowOffset: new BMap.Size(json.lb + 5, 1), offset: new BMap.Size(json.x, json.h) })
    return icon;
}

initMap();//创建和初始化地图

//左侧导航栏
$(function () {
    var navHeight = $(".nav-wrap").height();
    var bannerHeight = $(".banner").height();
    var TCPHeight = $(".company-profile").height();
    var Job = $(".job").height();
    var distance = 115;
    $("#toCompany-profile").click(function () {
        $("#toCompany-profile,#toJob,#toContactus").removeClass("nowLocation");
        $(this).addClass("nowLocation");
        $("html,body").animate({ "scrollTop": navHeight + bannerHeight })
    })
    $("#toJob").click(function () {
        $("#toCompany-profile,#toJob,#toContactus").removeClass("nowLocation");
        $(this).addClass("nowLocation");
        $("html,body").animate({ "scrollTop": navHeight + bannerHeight + TCPHeight + distance })
    })
    $("#toContactus").click(function () {
        $("#toCompany-profile,#toJob,#toContactus").removeClass("nowLocation");
        $(this).addClass("nowLocation");
        $("html,body").animate({ "scrollTop": navHeight + bannerHeight + TCPHeight + Job + distance * 2 })
    })
    $(document).scroll(function () {
        if ($(document).scrollTop() >= navHeight + bannerHeight - 250) {
            $(".left-nav,.right-nav").fadeIn(1500);
        } else {
            $(".left-nav,.right-nav").css("display", "none");
        }

        if ($(document).scrollTop() >= navHeight + bannerHeight && $(document).scrollTop() <= navHeight + bannerHeight + TCPHeight + distance) {
            $("#toCompany-profile,#toJob,#toContactus").removeClass("nowLocation");
            $("#toCompany-profile").addClass("nowLocation")
        } else if ($(document).scrollTop() >= navHeight + bannerHeight + TCPHeight + distance && $(document).scrollTop() <= navHeight + bannerHeight + TCPHeight + Job + distance * 2) {
            $("#toCompany-profile,#toJob,#toContactus").removeClass("nowLocation");
            $("#toJob").addClass("nowLocation")
        } else if ($(document).scrollTop() >= navHeight + bannerHeight + TCPHeight + Job + distance * 2 && $(document).scrollTop() <= $(document).height()) {
            $("#toCompany-profile,#toJob,#toContactus").removeClass("nowLocation");
            $("#toContactus").addClass("nowLocation")
        }
    })
})
