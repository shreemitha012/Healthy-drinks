$('.owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 2000,
    dots: false,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        980: {
            items: 2
        },
        1440: {
            items: 3
        }
    }
})