let ubicacionPrincipal = window.pageYOffset;
const hamburger2 = document.querySelector(".bars__menu");
const menu2 = document.querySelector(".menu");
var line1__bars2 = document.querySelector(".line1__bars-menu");
var line2__bars2 = document.querySelector(".line2__bars-menu");
var line3__bars2 = document.querySelector(".line3__bars-menu");

window.onscroll = function(){
    let DesplazamientoActual = window.pageYOffset;
    
    if(ubicacionPrincipal >= DesplazamientoActual){
        document.getElementById('header').style.top= '0';
    }
    else{
        document.getElementById('header').style.top= '-7rem';
        hamburger2.classList.remove("active");
        menu2.classList.remove("active");
        line1__bars2.classList.remove("activeline1__bars-menu");
        line2__bars2.classList.remove("activeline2__bars-menu");
        line3__bars2.classList.remove("activeline3__bars-menu");
    }
    ubicacionPrincipal=DesplazamientoActual;
    
}