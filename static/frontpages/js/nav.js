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