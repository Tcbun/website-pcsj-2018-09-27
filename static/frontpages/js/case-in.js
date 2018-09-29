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

$(".side-bottom input").click(function ()
    $(this).attr("placeholder","");
    clickNoPlaceholder($(".side-bottom input"))
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