//var tts = 0;
//console.log(tts);
//$(window).scroll(function(){
//    if (tts < 10) {
//        $(".bgBack").stop().animate({"marginTop": ($(window).scrollTop())/4 + "px"}, "slow" );
//        $(".floor").stop().animate({"marginTop": ($(window).scrollTop())/20 + "px"}, "slow" );
//        $(".forestBack").stop().animate({"marginTop": ($(window).scrollTop())/4 + "px"}, "slow" );
//        $(".forestMid").stop().animate({"marginTop": ($(window).scrollTop())/6 + "px"}, "slow" );
//        console.log($('floor').css('margin-top'));
//        $(".forestFront").stop().animate({"marginTop": ($(window).scrollTop())/10 + "px"}, "slow" );
//        $(".tower").stop().animate({"marginTop": ($(window).scrollTop())/6 + "px"}, "slow" );
//        //  $(".main").stop().animate({"marginTop": ($(window).scrollTop()) + "px"}, "slow" );
//        tts++;
//  }
//});
$(document).on('ready', function() {  
    var winHeight = $(window).height(), 
        docHeight = $(document).height(),
        max, value, percent;
    max = docHeight - winHeight;

    $(document).on('scroll', function(){
        value = $(window).scrollTop();
        percent = Math.round(value/docHeight*100);
//        console.log(percent);
        if (percent > 38) {
            $('.logo').removeClass('in');
        }else if (percent <38) {
            $('.logo').addClass('in');
        }
        console.log(100-percent);
        $("#climber").stop().animate({"top": 80-percent + "%"}, "slow");
    });
    $(window).on('resize', throttle(function() {
        winHeight = $(window).height(),
        docHeight = $(document).height();
        max = docHeight - winHeight;
        value =  $(window).scrollTop();
    }, 250));
});

function throttle(fn, threshhold, scope) {
    threshhold || (threshhold = 250);
    var last, deferTimer;
    return function () {
        var context = scope || this;
        var now = +new Date,
              args = arguments;
        if (last && now < last + threshhold) {

            clearTimeout(deferTimer);
            deferTimer = setTimeout(function () {
                last = now;
                fn.apply(context, args);
            }, threshhold);
        } else {
            last = now;
            fn.apply(context, args);
        }
    };
}
