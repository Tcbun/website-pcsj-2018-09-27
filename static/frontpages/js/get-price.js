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