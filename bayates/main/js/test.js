var cssSelector = function() {
  anime({
    targets: '.box',
    translateX: 270,
    delay: anime.stagger(100, {direction: 'reverse'})
  });
}
$(".box").click(cssSelector);
