/*
*
* @JS (Index)
*
*/

$(document).ready(function(){
    AOS.init()
})



var lastScrollTop = 0
var navigation = $(".navigation__logo")

window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || this.document.documentElement.scrollTop
    if (scrollTop > "500") {
        if(this.screen.width < 720){
            navigation.css("top", "1.5rem");
        }
        else{
            navigation.css("top", "3rem");
        }
        
    }
    else{
        
        navigation.css("top", "-10rem");

    }
    lastScrollTop = scrollTop
})