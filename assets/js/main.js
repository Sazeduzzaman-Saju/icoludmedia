(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        var brandSlider = $('.hero-slider');
        brandSlider.owlCarousel({
            items: 3,
            nav: false,
            dot: false,
            loop: true,
            margin: 20,
            autoplay: false,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            stagePadding: 50,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,

                },
                768: {
                    items: 2,

                },
                992: {
                    items: 3,

                }
            }
        })
        function brandSliderClasses() {
            brandSlider.each(function () {
                var total = $(this).find('.owl-item.active').length;
                $(this).find('.owl-item').removeClass('firstactiveitem');
                $(this).find('.owl-item').removeClass('lastactiveitem');
                $(this).find('.owl-item.active').each(function (index) {
                    if (index === 0) {
                        $(this).addClass('firstactiveitem')
                    }
                    if (index === total - 1 && total > 1) {
                        $(this).addClass('lastactiveitem')
                    }
                })
            })
        }
        brandSliderClasses();
        brandSlider.on('translated.owl.carousel', function (event) {
            brandSliderClasses()
        });


        // $(".hero-slider").owlCarousel({
        //     items:3,
        //     nav:false,
        //     dot:false,
        //     loop:true,
        //     margin:20,
        //     autoplay:false,
        //     autoplayTimeout:3000,
        //     smartSpeed:1000,
        //     stagePadding: 50,
        //     responsiveClass:true,
        //     responsive:{
        //         0:{
        //             items:1,

        //         },
        //         768:{
        //             items:2,

        //         },
        //         1000:{
        //             items:3,

        //         }
        //     }


        // }); 

        $(".project-slider").owlCarousel({
            items: 3,
            nav: false,
            dot: false,
            loop: true,
            margin: 24,
            autoplay: false,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            stagePadding: 50,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,

                },
                768: {
                    items: 2,

                },
                1000: {
                    items: 3,

                }
            }


        });

        $(".blog-slider").owlCarousel({
            items: 1,
            nav: false,
            dot: false,
            loop: true,
            margin: 24,
            autoplay: false,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            stagePadding: 40,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,

                },
                768: {
                    items: 1,

                },
                1000: {
                    items: 1,

                }
            }


        });




    });




}(jQuery));

