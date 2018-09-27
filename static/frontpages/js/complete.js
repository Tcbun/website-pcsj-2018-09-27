$(function () {
    function RandomCircle(width, height, DOM) {
        this.width = width;
        this.height = height;
        this.DOM = DOM;
        this.strClassName = null;
    }
    RandomCircle.prototype.CreateCircle = function () {
        var randomTop = Math.floor(Math.random() * (700 - 0) + 0);
        var randomLeft = Math.floor(Math.random() * (1100 - 0) + 0);
        var parentEle = this.DOM;
        var strClassName = "circle" + randomTop;
        var strCircle = $('<div class=' + strClassName + '></div>');
        parentEle.append(strCircle);
        $("." + strClassName).css({
            "position": "absolute",
            "width": this.width,
            "height": this.height,
            "top": randomTop,
            "left": randomLeft,
            "background": "rgba(171,208,170,0.5)",
            "border-radius": "50%"
        }).addClass("moveCircle");

        var randomMoveTop = Math.floor(Math.random() * (100 + 100) - 100);
        var randomMoveLeft = Math.floor(Math.random() * (100 + 100) - 100);
        var topNow = parseInt($("." + strClassName).css("top"));
        var leftNow = parseInt($("." + strClassName).css("left"));

        function moveCircle() {
            $("." + strClassName).animate({
                "top": topNow + randomMoveTop + "px",
                "left": leftNow + randomMoveLeft + "px"
            },2000)
            if (parseInt($("." + strClassName).css("top")) >= topNow + randomMoveTop || parseInt($("." + strClassName).css("left")) >= leftNow + randomMoveLeft) {
                $("." + strClassName).animate({
                    "top": topNow + "px",
                    "left":leftNow + "px"
                },2000);
            }
        }
        setInterval(moveCircle, 1000)
    }

    //调用
    $(document).ready(function () {
        var c1 = new RandomCircle(80, 80, $(".six"));
        c1.CreateCircle();
        var c2 = new RandomCircle(80, 80, $(".six"));
        c2.CreateCircle();
        var c3 = new RandomCircle(80, 80, $(".six"));
        c3.CreateCircle();
        var c4 = new RandomCircle(80, 80, $(".six"));
        c4.CreateCircle();
        var c5 = new RandomCircle(80, 80, $(".six"));
        c5.CreateCircle();
        var c6 = new RandomCircle(80, 80, $(".six"));
        c6.CreateCircle();
    })
})

