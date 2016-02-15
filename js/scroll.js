var tts = 0;
console.log(tts);
$(window).scroll(function(){
    if (tts < 10) {
        $(".bgBack").stop().animate({"marginTop": ($(window).scrollTop())/4 + "px"}, "slow" );
        $(".floor").stop().animate({"marginTop": ($(window).scrollTop())/20 + "px"}, "slow" );
        $(".forestBack").stop().animate({"marginTop": ($(window).scrollTop())/4 + "px"}, "slow" );
        $(".forestMid").stop().animate({"marginTop": ($(window).scrollTop())/6 + "px"}, "slow" );
        console.log($('floor').css('margin-top'));
        $(".forestFront").stop().animate({"marginTop": ($(window).scrollTop())/10 + "px"}, "slow" );
        $(".tower").stop().animate({"marginTop": ($(window).scrollTop())/6 + "px"}, "slow" );
        //  $(".main").stop().animate({"marginTop": ($(window).scrollTop()) + "px"}, "slow" );
        tts++;
  }
});