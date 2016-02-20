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
        console.log(value);
        percent = Math.round(value/docHeight*100);
        hideTitle(value, percent);
        stickyRelocate(value);
        pickTab(value);
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

function hideTitle(height, percent) {
//        console.log(percent);
    if (height > 2150) {
        $('.logo').removeClass('in');
    }else if (height <2105) {
        $('.logo').addClass('in');
    }
//    console.log(100-percent);
    $("#climber").stop().animate({"top": 80-percent + "%"}, "slow");
}
function stickyRelocate(height) {
    var window_top = $(window).scrollTop();
    var div_top = $('#social-buttons').offset().top;
    if (height > 1260) {
        $('#social-buttons').addClass('stick');
//        $('#social-buttons').width('45px');
    } else {
        $('#social-buttons').removeClass('stick');
//        $('#social-buttons').width('100%');
    }
}
function pickTab(height) {
    if (height > 590 && height < 650) {
        $('#skills-toggle').addClass("active");
        $('#about-toggle').removeClass("active");
        $('#interests-toggle').removeClass("active");
        $('#skills').addClass("in");
        $('#skills').addClass("active");
        $('#about').removeClass("active");
        $('#about').removeClass("active");
        $('#interests').removeClass("in");
        $('#interests').removeClass("in");
    } else if (height > 650) {
        $('#interests-toggle').addClass("active");
        $('#skills-toggle').removeClass("active");
        $('#interests').addClass("in");
        $('#interests').addClass("active");
        $('#skills').removeClass("active");
        $('#skills').removeClass("in");
    } else {
        $('#about-toggle').addClass("active");
        $('#skills-toggle').removeClass("active");
        $('#about').addClass("in");
        $('#about').addClass("active");
        $('#skills').removeClass("active");
        $('#skill').removeClass("in");
    }
}