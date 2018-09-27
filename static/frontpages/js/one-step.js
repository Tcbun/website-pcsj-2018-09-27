$(document).on("click", ".server-Intro ul li", function () {
    $(".server-Intro ul li").removeClass("li-active");
    $(this).addClass("li-active");
    var index = $(this).index();
    if (index === 0) {
        $("html,body").animate({
            "scrollTop": 1000 + "px"
        })
    } else if (index === 1) {
        $("html,body").animate({
            "scrollTop": 2385 + "px"
        })
    } else if (index === 2) {
        $("html,body").animate({
            "scrollTop": 3650 + "px"
        })        
    } else if  (index === 3) {
        $("html,body").animate({
            "scrollTop": 7900 + "px"
        })        
    }
})