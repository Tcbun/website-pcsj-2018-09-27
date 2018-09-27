//判断地区有几行
// $(".choice-row-right").each(function (index, element) {
//     var rightHeight = $(this).height();
//     console.log(rightHeight);
//     var rightPadding = rightHeight / 4;
//     if (rightHeight > 30) {
//         $(".choice-row-left").eq(index).css({
//             "height": rightHeight,
//             "padding": rightPadding + "px 0"
//         })
//     };
// })
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