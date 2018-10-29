// nav.js
//搜索框
$(function () {
    function search() {
        if ($(".nav ul").is(":hidden")) {
            $(".nav ul").fadeIn(500);
            $(".search-div").fadeOut(500);
            $(".nav > ul > li > .down-menu").css("display","none");
        } else {
            $(".nav ul").fadeOut();
            $(".nav-search-from input").css({
                "borderBottom": '1px solid #DDDDDD',
                "borderLeft": "none",
                "borderTop": 'none'
            })
            $(".search-div").fadeIn();
        }
    }
    $(".fa-search").click(search)
})

//子菜单栏
$(".nav ul li").hover(function(){
    $(this).find(".down-menu").fadeIn();
},function(){
    $(this).find(".down-menu").fadeOut();
})

// btn.js
$(".buttons ul li").hover(function(){
    $(".buttons ul li").removeClass("active");
    $(this).addClass("active");
})

// 分隔符

// case.js
$(".buttons ul li a").hover(function () {
    $(".buttons ul li a").removeClass("pageNow");
    $(this).addClass("pageNow");
})
$(".choice ul li a").click(function(){
    $(this).addClass("on");
})
$(document).ready(function () {
    $(".choice-row").each(function (index, element) {
        var liHeight = 45;
        var thisHeight = $(this).height();
        // alert(liHeight)
        if ($(this).height() > (liHeight * 2 - 1)) {
            $(this).height(liHeight).css({
                "overflow": "hidden"
            }).hover(function () {
                $(this).stop().animate({
                    "height": thisHeight,
                    "overflow": "visible"
                })
            }, function () {
                $(this).stop().animate({
                    "height": liHeight,
                    "overflow": "visible"
                })
            })
        }
    })
})

// 分隔符

// case-in.js
$(document).ready(function () {
    function toggleSrc() {
        var imgSrc = $(".swiper-slide-active > img").attr("src");
        $(".main > img").attr("src", imgSrc);
    }

    toggleSrc();
    $(".pre").click(function () {
        swiper.slidePrev();
        toggleSrc();
    });
    $(".next").click(function () {
        swiper.slideNext();
        toggleSrc();
    });
    $(".swiper-wrapper").on("click", ".swiper-slide", function () {
        var nowSrc = $(this).find("img").attr("src");
        $(".main > img").attr("src", nowSrc);
    })
})

$(".side-bottom input").click(function () {
    $(this).attr("placeholder","");
    clickNoPlaceholder($(".side-bottom input"));
})

function clickNoPlaceholder (input){
    var inputList = input;
    inputList.click(function () {
        $(this).attr("placeholder","");
    })
    inputList.eq(0).blur(function () {
        if ( $(this).val() === "") {
            $(this).attr("placeholder", "姓名")
        }
    })
    inputList.eq(1).blur(function () {
        if ( $(this).val() === "") {
            $(this).attr("placeholder", "联系方式")
        }
    })
}

$(".side-bottom button").click(function () {
    Validate($(".side-bottom input"))
})
function Validate(input) {
    var inputList = input;
    var regPhone = /^1[3|4|5|7|8][0-9]{9}$/;
    if (inputList.eq(0).val() !== "") {

    } else {
        alert("请正确输入您的姓名！")
    }
    if (inputList.eq(1).val() !== "" && regPhone.test(inputList.eq(1).val())) {

    } else {
        alert("请输入正确的手机号码！")
    }
}

// 分隔符

// designer.js
//表单验证
$(".designer-intro-right-bottom input").click(function () {
    $(this).attr("placeholder","");
    clickNoPlaceholder($(".designer-intro-right-bottom"));
})

function clickNoPlaceholder (input){
    var inputList = input;
    inputList.click(function () {
        $(this).attr("placeholder","");
    })
    inputList.eq(0).blur(function () {
        if ( $(this).val() === "") {
            $(this).attr("placeholder", "姓名")
        }
    })
    inputList.eq(1).blur(function () {
        if ( $(this).val() === "") {
            $(this).attr("placeholder", "联系方式")
        }
    })
}
$(".designer-intro-right-bottom button").click(function () {
    Validate($(".designer-intro-right-bottom input"))
})
function Validate(input) {
    var inputList = input;
    var regPhone = /^1[3|4|5|7|8][0-9]{9}$/;
    if (inputList.eq(0).val() !== "") {

    } else {
        alert("请正确输入您的姓名！")
    }
    if (inputList.eq(1).val() !== "" && regPhone.test(inputList.eq(1).val())) {

    } else {
        alert("请输入正确的手机号码！")
    }
}

// 分隔符

// discounts.js
//表单验证
$(".from-in-banner input").click(function () {
    $(this).attr("placeholder","");
    clickNoPlaceholder($(".from-in-banner"));
})

function clickNoPlaceholder (input){
    var inputList = input;
    inputList.click(function () {
        $(this).attr("placeholder","");
    })
    inputList.eq(0).blur(function () {
        if ( $(this).val() === "") {
            $(this).attr("placeholder", "姓名")
        }
    })
    inputList.eq(1).blur(function () {
        if ( $(this).val() === "") {
            $(this).attr("placeholder", "联系方式")
        }
    })
}
$(".from-in-banner button").click(function () {
    Validate($(".from-in-banner input"))
})
function Validate(input) {
    var inputList = input;
    var regPhone = /^1[3|4|5|7|8][0-9]{9}$/;
    if (inputList.eq(0).val() !== "") {

    } else {
        alert("请正确输入您的姓名！")
    }
    if (inputList.eq(1).val() !== "" && regPhone.test(inputList.eq(1).val())) {

    } else {
        alert("请输入正确的手机号码！")
    }
}

//底部表单验证
$(".bottom-form-right input").click(function () {
    $(this).attr("placeholder","");
    clickNoPlaceholder($(".bottom-form-right"));
})

function clickNoPlaceholder (input){
    var inputList = input;
    inputList.click(function () {
        $(this).attr("placeholder","");
    })
    inputList.eq(0).blur(function () {
        if ( $(this).val() === "") {
            $(this).attr("placeholder", "姓名")
        }
    })
    inputList.eq(1).blur(function () {
        if ( $(this).val() === "") {
            $(this).attr("placeholder", "联系方式")
        }
    })
}
$(".bottom-form-right button").click(function () {
    Validate($(".bottom-form-right input"))
})
function Validate(input) {
    var inputList = input;
    var regPhone = /^1[3|4|5|7|8][0-9]{9}$/;
    if (inputList.eq(0).val() !== "") {

    } else {
        alert("请正确输入您的姓名！")
    }
    if (inputList.eq(1).val() !== "" && regPhone.test(inputList.eq(1).val())) {

    } else {
        alert("请输入正确的手机号码！")
    }
}

// 分隔符

// get-price.js
//智能报价器
$(function () {
    //页面载入-价格跳动
    var animatePrice = null;
    function AutoCalc() {
        var randomFlf = 0;
        var randomZcf = 0;
        var randomRgf = 0;
        var randomSjf = 0;
        var randomGlf = 0;
        var randomQbj = 0;
        animatePrice = setInterval(function () {
            randomQbj = Math.floor(Math.random() * (1000000 + - 60000) + 60000);
            randomFlf = Math.floor(randomQbj * 0.2);
            randomZcf = Math.floor(randomQbj * 0.5);
            randomRgf = Math.floor(randomQbj * 0.3);
            randomSjf = Math.floor(randomQbj * 0.03);
            randomGlf = Math.floor(randomQbj * 0.024);
            $(".qbj").text(randomFlf + randomZcf + randomRgf + randomSjf + randomGlf);
            $(".flf").text(randomFlf);
            $(".zcf").text(randomZcf);
            $(".rgf").text(randomRgf);
            $(".sjf").text(randomSjf);
            $(".glf").text(randomGlf);
        }, 500)
    }
    $(document).ready(AutoCalc);
    //点击计算报价
    function intelligentGetPrice() {
        clearInterval(AutoCalc);
        //验证面积、手机号、姓名
        var regPhone = /^1[3|4|5|7|8][0-9]{9}$/;
        var noC = /[\u4e00-\u9fa5]/g;
        var yourArea = $("#customer-area").val();
        var yourName = $("#customer-name").val();
        var yourPhone = $("#customer-phone").val();
        yourArea = yourArea.replace(noC, "");
        Number(yourArea);
        if (yourArea === "") {
            alert("请输入您的面积！");
        } else if (yourName === "") {
            alert("请输入您的姓名");
        } else if (yourPhone === "" || !regPhone.test(yourPhone)) {
            alert("请输入正确的手机号码！");
        } else if (yourArea !== "" && yourName !== "" && yourPhone !== "" && regPhone.test(yourPhone)) {
            clearInterval(animatePrice);
            $(".flf").text((yourArea * 300).toFixed(2));
            $(".zcf").text((yourArea * 711).toFixed(2));
            $(".rgf").text((yourArea * 388).toFixed(2));
            $(".sjf").text((yourArea * 29.9).toFixed(2));
            $(".glf").text((yourArea * 33.6).toFixed(2));
            $(".qbj").text((yourArea * 300 + yourArea * 711 + yourArea * 388  + yourArea * 29.9 + yourArea * 33.6).toFixed(1));
        }
    }
    $(document).on("click", ".get-price-form form button", intelligentGetPrice);
})
//智能报价器，加平方
$(function () {
    function addM3() {
        inputAdd = $("#customer-area");
        if (inputAdd.val().indexOf("平方") !== -1) {

        } else if (inputAdd.val() == "") {

        } else {
            inputAdd.val(inputAdd.val() + "平方").css({
                "color": "inherit",
                "fontSize": "14px"
            });
        }
    }
    $("#customer-area").bind("blur", addM3);
})

// 分隔符

// scene.js
//li
$(document).ready(function () {
    $(".choice-row").each(function (index, element) {
        // alert(1);
        var liHeight = 45;
        var thisHeight = $(this).height();
        // alert(liHeight)
        if ($(this).height() > (liHeight * 2 - 1)) {
            $(this).height(liHeight).css({
                "overflow": "hidden"
            }).hover(function () {
                $(this).stop().animate({
                    "height": thisHeight,
                    "overflow": "visible"
                })
                $(this).find(".choice-row-left div:first-child").animate({
                    "height": thisHeight
                })
            }, function () {
                $(this).stop().animate({
                    "height": liHeight,
                    "overflow": "visible"
                })
            })
        }
    })
})
//立即预约
$(".appointment,.scene-details button,.Measuring-house-section-process button").click(function () {
    $(".appointment-dialog-wrap").fadeIn();
})
//关闭按钮
$(".appointment-close").click(function () {
    $(".appointment-form").show();
    $(".appointment-success").hide();
    $(".appointment-dialog-wrap").fadeOut();
})
//验证表单输入
$(".appointment-dialog input").click(function () {
    $(this).attr("placeholder", "")
})
$(".appointment-dialog input:eq(0)").blur(function () {
    if ($(this).attr("placeholder") === "" && $(this).val() === "") {
        $(this).attr("placeholder", "姓名");
    }
});
$(".appointment-dialog input:eq(1)").blur(function () {
    if ($(this).attr("placeholder") === "" && $(this).val() === "") {
        $(this).attr("placeholder", "电话号码");
    }
});
$(".appointment-dialog button").click(function () {
    var regPhone = /^1[3|4|5|7|8][0-9]{9}$/;
    if ( $(".appointment-dialog input:eq(0)").val() !== "") {
        // alert(1);
        $(".appointment-form p:nth-of-type(1)").css("display","none");
        $(".appointment-form h3:nth-of-type(2)").css("margin-top","50px");
        $(".appointment-dialog input:eq(0)").css("margin-bottom","20px");
    } else {
        $(".appointment-form input:nth-of-type(1)").css("margin-bottom",0);
        $(".appointment-form p:nth-of-type(1)").show();
        $(".appointment-form h3:nth-of-type(2)").css("margin-top","17px");
    }
    if ( $(".appointment-dialog input:eq(1)").val() !== "" && regPhone.test( $(".appointment-dialog input:eq(1)").val())) {
        $(".appointment-form p:nth-of-type(2)").hide();
        $(".appointment-form h3:nth-of-type(2)").css("margin-top","50px");
    } else {
        $(".appointment-form p:nth-of-type(2)").show();
        $(".appointment-form h3:nth-of-type(2)").css("margin-top","17px");
    }
    if ( $(".appointment-dialog input:eq(0)").val() !== "" && $(".appointment-dialog input:eq(1)").val() !== "" && regPhone.test( $(".appointment-dialog input:eq(1)").val())) {
        var input1 = $(".appointment-form input:nth-of-type(1)").val();
        var input2 = $(".appointment-form input:nth-of-type(2)").val();
        $(".appointment-form").hide();
        $(".appointment-success").show();
    }
})
//预约成功后确定关闭弹出框
$(".appointment-success button").click(function () {
    $(".appointment-form").show();
    $(".appointment-success").hide();
    $(".appointment-dialog-wrap").hide();
})

// 分隔符
// complete.js
$(function () {
    function RandomCircle(width, height, DOM) {
        this.width = width;
        this.height = height;
        this.DOM = DOM;
        this.strClassName = null;
    }
    RandomCircle.prototype.CreateCircle = function () {
        var randomTop = Math.floor(Math.random() * (700 - 0) + 0);
        var randomLeft = Math.floor(Math.random() * (1100 - 0) + 0);
        var parentEle = this.DOM;
        var strClassName = "circle" + randomTop;
        var strCircle = $('<div class=' + strClassName + '></div>');
        parentEle.append(strCircle);
        $("." + strClassName).css({
            "position": "absolute",
            "width": this.width,
            "height": this.height,
            "top": randomTop,
            "left": randomLeft,
            "background": "rgba(171,208,170,0.5)",
            "border-radius": "50%"
        }).addClass("moveCircle");

        var randomMoveTop = Math.floor(Math.random() * (100 + 100) - 100);
        var randomMoveLeft = Math.floor(Math.random() * (100 + 100) - 100);
        var topNow = parseInt($("." + strClassName).css("top"));
        var leftNow = parseInt($("." + strClassName).css("left"));

        function moveCircle() {
            $("." + strClassName).animate({
                "top": topNow + randomMoveTop + "px",
                "left": leftNow + randomMoveLeft + "px"
            },2000)
            if (parseInt($("." + strClassName).css("top")) >= topNow + randomMoveTop || parseInt($("." + strClassName).css("left")) >= leftNow + randomMoveLeft) {
                $("." + strClassName).animate({
                    "top": topNow + "px",
                    "left":leftNow + "px"
                },2000);
            }
        }
        setInterval(moveCircle, 1000)
    }

    //调用
    $(document).ready(function () {
        var c1 = new RandomCircle(80, 80, $(".six"));
        c1.CreateCircle();
        var c2 = new RandomCircle(80, 80, $(".six"));
        c2.CreateCircle();
        var c3 = new RandomCircle(80, 80, $(".six"));
        c3.CreateCircle();
        var c4 = new RandomCircle(80, 80, $(".six"));
        c4.CreateCircle();
        var c5 = new RandomCircle(80, 80, $(".six"));
        c5.CreateCircle();
        var c6 = new RandomCircle(80, 80, $(".six"));
        c6.CreateCircle();
    })
})


//表单验证
$(".banner-form input").click(function () {
    $(this).attr("placeholder","");
    clickNoPlaceholder($(".banner-form"));
})

function clickNoPlaceholder (input){
    var inputList = input;
    inputList.click(function () {
        $(this).attr("placeholder","");
    })
    inputList.eq(0).blur(function () {
        if ( $(this).val() === "") {
            $(this).attr("placeholder", "姓名")
        }
    })
    inputList.eq(1).blur(function () {
        if ( $(this).val() === "") {
            $(this).attr("placeholder", "联系方式")
        }
    })
}
$(".banner-form button").click(function () {
    Validate($(".banner-form input"))
})
function Validate(input) {
    var inputList = input;
    var regPhone = /^1[3|4|5|7|8][0-9]{9}$/;
    if (inputList.eq(0).val() !== "") {

    } else {
        alert("请正确输入您的姓名！")
    }
    if (inputList.eq(1).val() !== "" && regPhone.test(inputList.eq(1).val())) {

    } else {
        alert("请输入正确的手机号码！")
    }
}

// 分隔符

// one-step.js
$(document).on("click", ".server-Intro ul li", function () {
    $(".server-Intro ul li").removeClass("li-active");
    $(this).addClass("li-active");
    var index = $(this).index();
    if (index === 0) {
        $("html,body").animate({
            "scrollTop": 1000 + "px"
        })
    } else if (index === 1) {
        $("html,body").animate({
            "scrollTop": 2385 + "px"
        })
    } else if (index === 2) {
        $("html,body").animate({
            "scrollTop": 3650 + "px"
        })        
    } else if  (index === 3) {
        $("html,body").animate({
            "scrollTop": 7900 + "px"
        })        
    }
})

// 分割符
// learn.js
//四个标签
$(".four-tabs ul li:nth-of-type(1)").hover(function(){
    $(".four-tabs ul li").css("borderBottom","none");
    $(this).css("borderBottom","2px solid #b7bef2");
})
$(".four-tabs ul li:nth-of-type(2)").hover(function(){
    $(".four-tabs ul li").css("borderBottom","none");
    $(this).css("borderBottom","2px solid #a8e8e5");
})
$(".four-tabs ul li:nth-of-type(3)").hover(function(){
    $(".four-tabs ul li").css("borderBottom","none");
    $(this).css("borderBottom","2px solid #f9d99e");
})
$(".four-tabs ul li:nth-of-type(4)").hover(function(){
    $(".four-tabs ul li").css("borderBottom","none");
    $(this).css("borderBottom","2px solid #f2adc9");
})
$(".four-tabs ul li:nth-of-type(1)").hover(function(){
    $(this).addClass("bb1");
})
$(".four-tabs ul li:nth-of-type(2)").hover(function(){
    $(this).addClass("bb2");
})
$(".four-tabs ul li:nth-of-type(3)").hover(function(){
    $(this).addClass("bb3");
})
$(".four-tabs ul li:nth-of-type(4)").hover(function(){
    $(this).addClass("bb4");
})

// 分隔符
// detail.js

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
