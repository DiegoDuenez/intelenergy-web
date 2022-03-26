<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--===== FONTAWESOME ICONS =====-->
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.1.0/css/all.css">
    <!--====== AOS CSS ======-->
    <link rel="stylesheet" href="libs/aos/dist/aos.css">
    <!--====== GLIDER CSS ======-->
    <link rel="stylesheet" href="libs/glider/glider.min.css">
    <!--====== SLICK CSS ======-->
    <link rel="stylesheet" href="libs/slick-1.8.1/slick/slick.css">
    <link rel="stylesheet" href="libs/slick-1.8.1/slick/slick-theme.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <!--====== MAIN CSS ======-->
    <link rel="stylesheet" href="css/index.css">
    <title>IntelEnergy</title>
</head>
<body>


    <?php include('templates/components/navigation.html') ?>

    <?php include('templates/components/banner.html') ?>

    <?php include('templates/layouts/nosotros.php') ?>

    <?php include('templates/layouts/servicios.php') ?>

    <?php include('templates/layouts/soluciones.php') ?>

    <?php include('templates/layouts/capacitacion.php') ?>

    <?php include('templates/layouts/productos.php') ?>

    

    <!--=== JQUERY ===-->
    <script src="libs/jquery/jquery,min.js"></script>
    <!--=== AOS JS ===-->
    <script src="libs/aos/dist/aos.js"></script>
    <!--=== GLIDER JS ===-->
    <script src="libs/glider/glider.min.js"></script>
    <!--=== SLICK JS ===-->
    <script src="libs/slick-1.8.1/slick/slick.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    
    <!--=== MAIN JS ===-->
    <script src="js/index.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"></script>
    <script>
    $('.logo-slider').slick({
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
    </script>
</body>
</html>