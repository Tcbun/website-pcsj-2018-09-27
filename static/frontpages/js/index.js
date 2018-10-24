// 导航条鼠标事件
// $(function () {
//     var logo = $(".nav > img:nth-of-type(1)");
//     function scrollAdd() {
//         disTop = $(window).scrollTop();
//         if (disTop > 0) {
//             // alert("不在顶部")
//             $(".nav-wrap").addClass("hoverImportant");
//             logo.attr("src", "static/frontpages/images/index/logo.png");
//         } else {
//             // alert("在顶部")
//             $(".nav-wrap").removeClass("hoverImportant");
//             logo.attr("src", "static/frontpages/images/index/logo-w.png");
//             $(".nav-wrap").hover(function () {
//                 $(".nav-wrap").addClass("hoverImportant");
//                 logo.attr("src", "static/frontpages/images/index/logo.png");
//             }, function () {
//                 logo.attr("src", "static/frontpages/images/index/logo-w.png");
//                 $(".nav-wrap").removeClass("hoverImportant");
//             })
//         }
//     }
//     $(document).ready(scrollAdd);
//     $(document).scroll(scrollAdd);
// })

//搜索框
$(function () {
    function search() {
        if ($(".nav ul").is(":hidden")) {
            $(".nav ul").fadeIn();
            $(".search-div").fadeOut();
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
$(".nav ul li").hover(function () {
    $(this).find(".down-menu").fadeIn();
}, function () {
    $(this).find(".down-menu").css("display", "none");
})
//banner中的马上报价
$(function () {
    function bannerGetPrice() {
        var yourArea = $(".budget input:nth-of-type(1)");
        var yourPhone = $(".budget input:nth-of-type(2)");
        var regPhone = /^1[3|4|5|7|8][0-9]{9}$/;
        console.log(yourArea.val());
        if (yourArea.val() == "") {
            alert("请输入您的面积！");
        } else if (!regPhone.test(yourPhone.val())) {
            alert("请输入正确的手机号码！")
        } else if (!yourArea.val() == "" && regPhone.test(yourPhone.val())) {
            $(".banner-form").submit();
        }
    }
    $(document).on("click", ".banner-get-price", bannerGetPrice)
})
//banner中的马上报价-鼠标移开自动加平方
$(function () {
    function addM2() {
        inputAdd = $("#amount");
        if (inputAdd.val().indexOf("平方") !== -1) {

        } else if (inputAdd.val() == "") {

        } else {
            inputAdd.val(inputAdd.val() + "平方").css({
                "color": "inherit",
                "fontSize": "14px"
            });
        }
    }
    $("#amount").bind("blur", addM2);
})
// 滑块
$(function () {
    $('#slider-range-min').slider({
        range: 'min',
        value: 20,
        min: 0,
        max: 100,
        slide: function (event, ui) {
            $('#amount').val(ui.value * 5 + ',0平方');
            $('.a, .b, .c, .d').width(ui.value + '%');
        }
    });
    $('.ui-slider-handle').text('<>');
    // $('#amount').val('$' + $('#slider-range-min').slider('value') + ',000');
});
//点击设计师图片替换大图
$(function () {
    function togglePic() {
        var nowIndex = $(this).index();
        if (nowIndex === 0) {
            $(".design-member-left img").attr("src", "static/frontpages/images/index/bteam-ll.jpg");
        } else if (nowIndex === 1) {
            $(".design-member-left img").attr("src", "static/frontpages/images/index/bteam-xfm.jpg");
        } else if (nowIndex === 2) {
            $(".design-member-left img").attr("src", "static/frontpages/images/index/bteam-yzl.jpg");
        } else if (nowIndex === 3) {
            $(".design-member-left img").attr("src", "static/frontpages/images/index/bteam-zy.jpg");
        }
    }
    $(".design-member ul li").click(togglePic)
})
//服务流程
$(function () {
    $(".server-list ul li").hover(function () {
        $(this).animate({
            "marginTop": "-15px"
        })
    }, function () {
        $(this).animate({
            "marginTop": "0"
        })
    })
})
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
            $(".qbj").text((yourArea * 300 + yourArea * 711 + yourArea * 388 + yourArea * 29.9 + yourArea * 33.6).toFixed(1));
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
// banner下面的4块导航
$(".yd-wrap a").hover(function () {
    $(this).stop().animate({
        "margin-top": "-10px",
    }, 1000).css({
        "box-shadow": "0 2px 21px 1px rgba(208, 208, 208, 0.9)"
    })
}, function () {
    $(this).stop().animate({
        "margin-top": "0px"
    }, 500,function(){
        $(this).css({
            "box-shadow": "none"
        })
    })
})
