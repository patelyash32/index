mybutton = document.getElementById("mybtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction()
{
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    {
        mybutton.style.display = "block" ;
    }
    else
    {
        mybutton.style.display = "none" ;
    }
}

function topFunction()
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$(document).ready(function(){

    $(".nav-link").click(function(){
        $(".navbar-toggler").click();
    });

});

$('.counter').counterUp({
    delay: 10,
    time: 2000
});