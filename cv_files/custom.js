(function ($) {
    "use strict";
// Parallax Activation
    if ($.fn.stellar) {
        $(window).stellar({
            responsive: true,
            positionProperty: 'position',
            horizontalScrolling: false
        });
    }

    /*-------------------------------
       Portfolio Isotope
       ---------------------------------*/
    $('.portfolio-menu li').on('click', function(e) {
        $(".portfolio-menu li").removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr('data-filter');
        $(".grid").isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });
    /*-------------------------------
    Masonary Portfolio
    ---------------------------------*/
    $('.grid').isotope({
        itemSelector: '.grid-item',
        resizesContainer: false,
    });

    //    Slider Area
    var testimonial = $(".testimonial-wrap");
    testimonial.owlCarousel({
        dots: true,
        loop: true,
        nav: true,
        navText: ["<span class='ti-angle-left'></span>", "<span class='ti-angle-right'></span>"],
        autoplay: true,
        items: 1,
    });

    // Scroll Up
    $.scrollUp({
        scrollText: "<span class='ti-angle-up'></span>",
        scrollDistance: 300,

    });
    // CounterUp
    $('.counter').counterUp({
        delay: 50,
        time: 3000
    });

    $('[data-toggle="tooltip"]').tooltip();

    /* ======= Fixed page nav when scrolled ======= */
    $(window).on('scroll resize load', function() {

        $('.main-menu-wrap .navbar').removeClass('fixed');

        var scrollTop = $(this).scrollTop();
        var topDistance = $('.main-menu-wrap .navbar').offset().top;

        if ( (topDistance) > scrollTop ) {
            $('.main-menu-wrap .navbar').removeClass('fixed');
        }
        else {
            $('.main-menu-wrap .navbar').addClass('fixed');
        }
    });
    /*=========== SMOOTH SCROLLING ===========*/
    $('li.smooth-menu a').bind("click", function (event) {
        var $anchor = $(this);
        var headerH = '70';
        $('html,body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });

    /*=========== SMOOTH SCROLLING ===========*/
    $('li.card-menu a').bind("click", function (event) {
        var $anchor = $(this);
        var headerH = '0';
        $('html,body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });

    /*
     Toggle Sidebar Nav
    */
    $('body').delegate('.toggle-sidebar', 'click', function () {
        $('.sidebar-nav').toggleClass('collapsed');

        if (localStorage.getItem("asideMode") === 'collapsed') {
            localStorage.setItem("asideMode", 'expanded')
        } else {
            localStorage.setItem("asideMode", 'collapsed')
        }
        return false;
    });

    var p;
    $('body').delegate('.hide-sidebar-nav', 'click', function () {
        if (p) {
            p.prependTo(".wrapper");
            p = null;
        } else {
            p = $(".sidebar-nav").detach();
        }
    });

    $.fn.setAsideMode = function () {
        if (localStorage.getItem("asideMode") === null) {

        }
        else if (localStorage.getItem("asideMode") === 'collapsed') {
            $('.sidebar-nav').addClass('collapsed');
        }
        else {
            $('.sidebar-nav').removeClass('collapsed');
        }
    }
    if ($(window).width() > 992) {
        $.fn.setAsideMode();
    }
    //WOW Js
    new WOW().init();
    jQuery(window).on('load',function(e) {
        //Preloader
        $('#resume-preloader-container').fadeOut('slow');

    });
})(jQuery);
