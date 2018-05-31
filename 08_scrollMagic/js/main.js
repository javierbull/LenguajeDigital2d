// init controller
var controller = new ScrollMagic.Controller();
  //build Scene
  var scene = new ScrollMagic.Scene({
            triggerElement: "#frame"
          })
          .setTween("#frame", 1, {borderRadius: "50%", backgroundColor:"green", scale: 1.5}) // trigger a TweenMax.to tween
          .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
          .addTo(controller);
