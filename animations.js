TweenMax.from("#title-h1", 1, {ease: Circ.easeOut, x:-100, opacity: 0});
TweenMax.from("#title-h2", 1, {ease: Circ.easeOut, x:100, opacity: 0});

let bounce = new TimelineMax({
  repeat: -1,
  yoyo: true
});

bounce.to('#down-chev', .5, {y: 15, opacity: 1})