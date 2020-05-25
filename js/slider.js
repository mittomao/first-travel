$(function () {
    $('#banner_6--owl').owlCarousel({
        loop:true,
        margin:0,
        stagePadding :0,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('#destination__slider--owl').owlCarousel({
        loop:true,
        margin:0,
        stagePadding :0,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
  })