//导航栏
$(document).on("click", ".nav-list ul li a", function () {
    $(".nav-list ul li").removeClass("active");
    $(this).parent("li").addClass("active");
})
$(".nav-list ul li a").hover(function () {
    $(".nav-list ul li").removeClass("active");
    $(this).parent("li").addClass("active");
}, function () {

})
//搜索框
$(".fa-search").click(function () {
    if ($(".nav-list").is(":hidden")) {
        $(".nav-list").fadeIn();
        $(".search-div").fadeOut();
    } else {
        $(".nav-list").fadeOut();
        $(".nav-search-from input").css({
            "borderBottom": '1px solid #DDDDDD',
            "borderLeft": "none",
            "borderTop": 'none'
        })
        $(".search-div").fadeIn();
    }
})
$(".buttons ul li a").hover(function () {
    $(".buttons ul li a").removeClass("pageNow");
    $(this).addClass("pageNow");
})
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
$(".appointment").click(function () {
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
