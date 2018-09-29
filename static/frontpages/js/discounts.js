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

