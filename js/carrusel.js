/*
*
* @JS (Carrusel)
*
*/

$('.logo-slider').slick({
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplayspeed: 1000,
    infinite: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                autoplayspeed: 1000,
                dots: true
            }
        },
            {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});