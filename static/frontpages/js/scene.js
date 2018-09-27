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
$(".buttons ul li a").hover(function(){
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
        if ($(this).height() > (liHeight*2-1)) {
            $(this).height(liHeight).css({
                "overflow": "hidden"
            }).hover(function () {
                $(this).stop().animate({
                    "height":thisHeight,
                    "overflow": "visible"
                })
                $(this).find(".choice-row-left div:first-child").animate({
                    "height":thisHeight
                })
            }, function () {
                $(this).stop().animate({
                    "height":liHeight,
                    "overflow": "visible"
                })
            })
        }
    })
})