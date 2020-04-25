window.onload = function () {
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
}

$(document).ready(function(){
  // 动画
  function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

// aboutBanner动画
  var aboutBanner =$(".about-banner");
  aboutBanner.smoove({
    moveX: '100%',
    moveY: '100px',
  });
  aboutBanner.find(".text").addClass("animated fadeIn delay-1s");
});

// brand-story 动画
$(".brand-story .header h3").smoove({
  moveX: '100%',
  offset: '15%',
});

$(".brand-story .header p").eq(0).smoove({
  moveX: '100%',
  offset: '15%',
});

$(".brand-story .header p").eq(1).smoove({
  moveX: '100%',
  offset: '15%',
});

$(".brand-story .header img").smoove({
  moveX: '100%',
  offset: '15%',
});

$(".brand-story .main li").eq(0).smoove({
  moveX: '-100%',
  offset: '15%',
});

$(".brand-story .main li").eq(1).smoove({
  moveX: '-100%',
  offset: '15%',
});

$(".brand-story .main li").eq(2).smoove({
  moveX: '-100%',
  offset: '15%',
});

$(".brand-story .main li").eq(3).smoove({
  moveX: '-100%',
  offset: '10%',
});

// company-culture动画

$(".company-culture .header").smoove({
  // moveX: '100%',
  offset: '15%',
});

$(".company-culture .item-1").smoove({
  // moveX: '100%',
  offset: '15%',
});

$(".company-culture .item-2").smoove({
  moveX: '100%',
  offset: '15%',
});

$(".company-culture .item-3").smoove({
  moveX: '-100%',
  offset: '15%',
});

$(".company-culture .item-4").smoove({
  // moveX: '-100%',
  offset: '15%',
});


// feedback动画


$(".feedback .header").smoove({
  // moveX: '-100%',
  offset: '15%',
});

$(".feedback .item").smoove({
  moveY: '100%',
  offset: '15%',
});

// latest-events动画


$(".latest-events .header").smoove({
  moveX: '100%',
  offset: '30%',
});

$(".latest-events .item").smoove({
  moveY: '100%',
  offset: '30%',
});
// container-fluid动画


$(".container-fluid .subscription").smoove({
  moveX: '-100%',
  offset: '30%',
});

$(".container-fluid .address").smoove({
  moveX: '100%',
  offset: '30%',
});

// skincare动画



$(".main .skincare-banner").smoove({
  moveX: '100%',
});

$(".main .skincare-banner").find(".text").addClass("animated fadeIn delay-1s");

//隐藏显示
$(".main .skincare .content .item p").css("display","none");
$(".main .skincare .content .item ul").css("display","none");
$(".main .skincare .content .item img").css("display","none");
$(".main .skincare .content .item a.btn").click(function(){
  $(".main .skincare .content .item a.btn").siblings().not("h6").fadeToggle("slow");

});

// 卡片动画

$(".main .card-group .card").smoove({
});


// 卡片动画

$(".main .join").smoove({
  offset: '30%',
});

$(".main .join .content").smoove({
  offset: '60%',
});

//more-about动画

$(".main .more-about h3").smoove({
  offset: '30%',
});

$(".main .more-about p").smoove({
  offset: '35%',
});

$(".main .more-about a").smoove({
  offset: '40%',
});

$(".main .more-about img").smoove({
  offset: '60%',
});


//product-warp动画

$(".main .product-warp").smoove({
  offset: '30%',
});
