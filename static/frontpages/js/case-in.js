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
    $(".swiper-wrapper").on("click",".swiper-slide",function(){
        var nowSrc = $(this).find("img").attr("src");
        $(".main > img").attr("src", nowSrc);
    })
})

