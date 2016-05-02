
$(document).on('ready', function() {  
    var winHeight = $(window).height(), 
        docHeight = $(document).height(),
        max, value, percent;
    max = docHeight - winHeight;
    scrollController();
    $('.popoverData').popover();
    $('#popoverOption').popover({ trigger: "hover" });

    $(document).on('scroll', function(){
        scrollController();
    });
    $(window).on('resize', throttle(function() {
        winHeight = $(window).height(),
        docHeight = $(document).height();
        max = docHeight - winHeight;
        value =  $(window).scrollTop();
    }, 250));
    function scrollController() {
        value = $(window).scrollTop();
        console.log(value);
        percent = Math.round(value/docHeight*100);
        hideTitle(value, percent);
        stickyRelocate(value);
        pickTab(value);
        makeFullscreen(value);
        animateForest(value);
        hideClimber(value);
    }
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
function hideClimber(height) {
    if (height > 30) {
        $('.climber-origin').removeClass('in');
    } else {
        $('.climber-origin').addClass('in');
    }
    if (height > 100) {
        $('.holding').addClass('in');
    } else { 
        $('.holding').removeClass('in');
    }
}
function hideTitle(height, percent) {
    if (height > 2150) {
        $('.logo').removeClass('in');
    }else {
        $('.logo').addClass('in');
    }
    $("#climber").stop().animate({"top": 80-percent + "%"}, "slow");
}
function stickyRelocate(height) {
    var window_top = $(window).scrollTop();
    var div_top = $('#social-buttons').offset().top;
    if (height > 1400) {
        $('#social-buttons').addClass('stick');
    } else {
        $('#social-buttons').removeClass('stick');
    }
}
function pickTab(height) {
    if (height > 620 && height < 729) {
        $('#skills-toggle').addClass("active");
        $('#about-toggle').removeClass("active");
        $('#interests-toggle').removeClass("active");
        $('#skills').addClass("in");
        $('#skills').addClass("active");
        $('#about').removeClass("active");
        $('#about').removeClass("active");
        $('#interests').removeClass("in");
        $('#interests').removeClass("in");
    } else if (height > 730) {
        $('#interests-toggle').addClass("active");
        $('#skills-toggle').removeClass("active");
        $('#interests').addClass("in");
        $('#interests').addClass("active");
        $('#skills').removeClass("active");
        $('#skills').removeClass("in");
        $('#about').removeClass("active");
        $('#about').removeClass("active");
        $('#about-toggle').removeClass("active");
    } else {
        $('#about-toggle').addClass("active");
        $('#skills-toggle').removeClass("active");
        $('#interests-toggle').removeClass("active");
        $('#about').addClass("in");
        $('#about').addClass("active");
        $('#skills').removeClass("active");
        $('#skill').removeClass("in");
        $('#interests').removeClass("in");
        $('#interests').removeClass("in");
    }
}
function makeFullscreen(height) {
    if (height > 540 && height < 810) {
        $('#mainBox').addClass('fullscreen');
        $('#mainBox').addClass('fixed-box');
    } else {
         $('#mainBox').removeClass('fullscreen');
         $('#mainBox').removeClass('fixed-box');
    }
}
function animateForest(height) {
    if (height < 520) {
        $(".bgBack").stop().animate({"marginTop": ($(window).scrollTop())/2 + "px"}, "slow" );
        $(".floor").stop().animate({"marginTop": ($(window).scrollTop())/10 + "px"}, "slow" );
        $(".forestBack").stop().animate({"marginTop": ($(window).scrollTop())/4 + "px"}, "slow" );
        $(".forestMid").stop().animate({"marginTop": ($(window).scrollTop())/6 + "px"}, "slow" );
        $(".forestFront").stop().animate({"marginTop": ($(window).scrollTop())/10 + "px"}, "slow" );
        $(".tower").stop().animate({"marginTop": ($(window).scrollTop())/6 + "px"}, "slow" );
    }
}