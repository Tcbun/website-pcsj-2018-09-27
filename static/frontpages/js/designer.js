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