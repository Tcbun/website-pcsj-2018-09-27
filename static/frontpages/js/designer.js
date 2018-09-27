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