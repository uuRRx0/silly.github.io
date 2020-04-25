$(".navbar-toggler").click(function(){
    var page = $(".page");
    if (page.hasClass("headerOn")) {
        page.removeClass("headerOn");
    } else {
        page.addClass("headerOn");
    }
});

window.onload = function () {
    //回到顶部 开始
    $("#gotop").click(function () {
        jQuery("html,body").animate({
            scrollTop: 0
        }, 1000);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#gotop').fadeIn("fast");
        } else {
            $('#gotop').stop().fadeOut("fast");
        }
    });
    // 回到顶部 结束
}