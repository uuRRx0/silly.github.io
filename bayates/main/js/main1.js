//导航特效
// var navbarItems = $(".header .navbar .navbarList .navbarItem a");
// var hr = $("<div  class='hr'></div>").text("");
// navbarItems.append(hr);
// var hrAnime = function(){
//   anime({
//   targets: '.header .navbar .navbarList .navbarItem a .active',
//   width: '100%',
//   easing: 'easeInOutQuad',
//   });
// };
// hrAnime();
// navbarItems.mouseover(function(){
//   $(this).find(".hr").addClass("active");
//   hrAnime();
// });
// navbarItems.mouseout(function(){
//   $(".header .navbar .navbarList .navbarItem a .active").remove();
//   navbarItems.append(hr);
// });
var navbarItemAppend = function(){
  var activeText = $("<div  id='navbarItemActive'></div>").text("");
  $('.navbarList .active a').append(activeText);
}
var navbarItemActiveAnime = function(){
  navbarItemAppend();
  anime({
  targets: '#navbarItemActive',
  width: '100%',
  easing: 'easeInOutQuad',
  });
};
navbarItemActiveAnime();

// 轮播特效
var flashImgs = $(".main .banner .flash img");
var pointBtns = $(".main .banner .pointBtn span");
var goNextBtn = $(".banner a.goNext");
var goPreBtn = $(".banner a.goPre");
var titles = $(".main .banner .titles h1");
var texts = $(".main .banner .texts p");
var flashWidth = 1519;
var _index = 0;
var _preIndex = 0;
var scrollPlay = function(){
  if (_index > 2 && _preIndex == 2){
    _index = 0;
    leftOut();
    activeR();
  } else if (_index < 0 && _preIndex == 0 ){
    _index = 2;
    rightOut();
    activeL();
  } else if (_index > _preIndex){
    leftOut();
    activeR();
  } else if (_index < _preIndex) {
    rightOut();
    activeL();
  }
  pointBtns.eq(_index).addClass("hover").siblings("span").removeClass("hover");
};
pointBtns.mouseover(function(){
  _index = $(this).index();
  scrollPlay();
  _preIndex = _index;
});

//左右切换
goNextBtn.click(function(e){
  e.preventDefault();
  _index++;
  scrollPlay();
  _preIndex = _index;
});

goPreBtn.click(function(e){
  e.preventDefault();
  _index--;
  scrollPlay();
  _preIndex = _index;
});

//动画

var leftOut = function(){
  flashImgs.eq(_preIndex).addClass("leftOut")
  .siblings("img").removeClass("leftOut");
  titles.eq(_preIndex).addClass("leftOut")
  .siblings("h1").removeClass("leftOut");
  texts.eq(_preIndex).addClass("leftOut")
  .siblings("p").removeClass("leftOut");
  anime({
    targets: '.main .banner .flash img.leftOut',
    translateX: -2*1519,
    duration: 1800,
  });
  anime({
    targets: '.main .banner .titles h1.leftOut',
    translateY: 160,
    duration: 2000,
  });
  anime({
    targets: '.main .banner .texts p.leftOut',
    translateX: -2*1219,
    duration: 2000,
  });
  console.log(_preIndex);
}

var rightOut = function(){
  flashImgs.eq(_preIndex).addClass("rightOut")
  .siblings("img").removeClass("rightOut");
  titles.eq(_preIndex).addClass("rightOut")
  .siblings("h1").removeClass("rightOut");
  texts.eq(_preIndex).addClass("rightOut")
  .siblings("p").removeClass("rightOut");
  anime({
    targets: '.main .banner .flash img.rightOut',
    translateX: 0,
    duration: 1800,
  })
  anime({
    targets: '.main .banner .titles h1.rightOut',
    translateY: ['80','0'],
    duration: 2000,
  })
  anime({
    targets: '.main .banner .texts p.rightOut',
    translateX: ['-1219','0'],
    duration: 2000,
  })
}
var activeR = function(){
  flashImgs.eq(_index).addClass("activeR")
  .siblings("img").removeClass("activeR");
  titles.eq(_index).addClass("activeR")
  .siblings("h1").removeClass("activeR");
  texts.eq(_index).addClass("activeR")
  .siblings("p").removeClass("activeR");
  anime({
    targets: '.main .banner .flash img.activeR',
    translateX: ['0','-1519'],
    duration: 1800,
  })
  anime({
    targets: '.main .banner .titles h1.activeR',
    translateY: ['0','80'],
    duration: 2000,
  })
  anime({
    targets: '.main .banner .texts p.activeR',
    translateX: ['0','-1219'],
    duration: 2000,
  })
}
var activeL = function(){
  flashImgs.eq(_index).addClass("activeL")
  .siblings("img").removeClass("activeL");
  titles.eq(_index).addClass("activeL")
  .siblings("h1").removeClass("activeL");
  texts.eq(_index).addClass("activeL")
  .siblings("p").removeClass("activeL");
  anime({
    targets: '.main .banner .flash img.activeL',
    translateX: ['-3038','-1519'],
    duration: 1800,
  })
  anime({
    targets: '.main .banner .titles h1.activeL',
    translateY: ['160','80'],
    duration: 2000,
  })
  anime({
    targets: '.main .banner .texts p.activeL',
    translateX: ['-2*1219','-1219'],
    duration: 2000,
  })
};
activeR();
var show = function(){
  $(window).scroll(function() {
      if ( $(this).scrollTop() > 400){
          $('.main .brandIntroduction .part').fadeIn(2000);
      } else if ( $(this).scrollTop() < 100){
          $('.main .brandIntroduction .part').stop().fadeOut(10);
      }
      if ( $(this).scrollTop() > 1000){
          $('.main .brandCooperation .content .whiteFloor').fadeIn(2000);
      } else if ( $(this).scrollTop() < 600){
          $('.main .brandCooperation .content .whiteFloor').stop().fadeOut(10);
      }
      if ( $(this).scrollTop() > 1700){
          $('.main .featuredGoods .warp .content').fadeIn(2000);
      } else if ( $(this).scrollTop() < 1300){
          $('.main .featuredGoods .warp .content').stop().fadeOut(10);
      }
      if ( $(this).scrollTop() > 2200){
          $('.main .brandStory .content').fadeIn(2000);
      } else if ( $(this).scrollTop() < 1800){
          $('.main .brandStory .content').stop().fadeOut(10);
      }
      if ( $(this).scrollTop() > 2600){
          $('.main .skinCareTips .content').fadeIn(2000);
      } else if ( $(this).scrollTop() < 2200){
          $('.main .skinCareTips .content').stop().fadeOut(10);
      }
    }
);
};
setInterval(show,100)
