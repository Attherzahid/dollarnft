jQuery(document).ready(function ($) {
    // Parallex ========
    var image = document.getElementsByClassName('parallexBg');
    new simpleParallax(image);

    // AOS
    $('.batenomics #slider').slick({
        responsive: [
            {
                breakpoint: 992, // The width of 992px and below
                settings: {
                    dots: false,
                    arrows: true,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 9999, // A large number indicates the default settings for larger screens
                settings: "unslick" // This turns off slick
            }
        ]
    });
    $('.how-to-buy #slider').slick({
        responsive: [
            {
                breakpoint: 992, // The width of 992px and below
                settings: {
                    dots: false,
                    arrows: true,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 9999, // A large number indicates the default settings for larger screens
                settings: "unslick" // This turns off slick
            }
        ]
    });

    $('.utilities #timeline').slick({
        responsive: [
            {
                breakpoint: 992, // The width of 992px and below
                settings: {
                    dots: false,
                    arrows: true,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 9999, // A large number indicates the default settings for larger screens
                settings: "unslick" // This turns off slick
            }
        ]
    });


    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        triggerElement: ".footer",
        triggerHook: 1,
        duration: function() {
            return $("#sec1").outerHeight();
        }
    })
    .setClassToggle("body", "active")
    // .addIndicators()
    .addTo(controller);
});
