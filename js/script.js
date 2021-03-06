$(".carousel").owlCarousel({
    margin:10,
    loop:true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav:false
        },
        400:{
            items: 2,
            nav:false
        },
        600:{
            items: 3,
            nav:false
        }, 
        800:{
            items: 4,
            nav:false
        }, 
        1000:{
            items: 5,
            nav:false
        }, 
        1200:{
            items: 6,
            nav:false
        }
    }
});