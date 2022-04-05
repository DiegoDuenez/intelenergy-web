/*
*
* @JS (Fullscreen)
*
*/

var navigation_logo = $(".navigation__logo")

$(function () {

    $(".fullscreen__link").hover(function(){
        $(".cursor").css("display", "none");
        
    }, function(){
        $(".cursor").css("display", "block");
    });

    $(".fullscreen__input").hover(function(){
        $(".cursor").css("display", "none");
    }, function(){
        $(".cursor").css("display", "block");
    });
    $(".fullscreen__social-media i").hover(function(){
        $(".cursor").css("display", "none");
    }, function(){
        $(".cursor").css("display", "block");
    });

    $(".fullscreen").click(function(){
        $("#fullscreen").removeClass('open');
        $("#navigation-image").attr("src","assets/menu_verde.png");
        $("#navigation-image").css("display", "block");
        $("body").css('overflow','scroll')
        $(".cursor").css("display", "none");
        navigation_logo.css("display","block")
    })
    $(".fullscreen__input").click(function(event){
        event.stopPropagation();
    })

    $(".fullscreen-open").click(function () {
        if($("#fullscreen").hasClass('open')){
            $("#fullscreen").removeClass('open');
            $("#navigation-image").attr("src","assets/menu_verde.png");
            $("#navigation-image").css("display", "block");
            $("body").css('overflow','scroll')
            $(".cursor").css("display", "none");
            navigation_logo.css('display','block')
            
        }
        else{
            $("#fullscreen").addClass('open');
            //$("#navigation-image").attr("src","assets/menu_blanco.png");
            //$("body").css('overflow','hidden')
            $(".cursor").css("display", "block");
            $("#navigation-image").css("display", "none");
            navigation_logo.css("display","none")
            
            const cursor = document.querySelector(".cursor")
            
            document.addEventListener('mousemove', (e)=>{
                cursor.style.left = e.clientX + "px";
                cursor.style.top =  e.clientY + "px";
            })
        }
    })

    $(".fullscreen__link").click(function(){
        if($("#fullscreen").hasClass('open')){
            $("#fullscreen").removeClass('open');
            $("#navigation-image").attr("src","assets/menu_verde.png");
            $("#navigation-image").css("display", "block");
            navigation_logo.css("display","block")
            $("body").css('overflow','scroll')
        }
        else{
            $("#fullscreen").addClass('open');
            $("#navigation-image").attr("src","assets/menu_blanco.png");
            $("#navigation-image").css("display", "none");
            $("body").css('overflow','hidden')
        }
    })

})
