window.addEventListener('scroll',function(){
    let bullets = document.getElementById('bullets-container');
    let bulletsPosicion = bullets.getBoundingClientRect().top;
    let beneficios = document.getElementById('row');
    let beneficiosPosicion = beneficios.getBoundingClientRect().top;
    let acerca = document.getElementById('acerca');
    let acercaPosicion = acerca.getBoundingClientRect().top;
    let form = document.getElementById('contact-div');
    let formPosicion = acerca.getBoundingClientRect().top;

    let tamañoDePantalla = window.innerHeight;

    if(bulletsPosicion < tamañoDePantalla){
        bullets.style.animation = 'showleft 1.5s cubic-bezier(.3,.3,.28,1)'
    }

    if(beneficiosPosicion < tamañoDePantalla){
        beneficios.style.animation = 'showup 1s cubic-bezier(.3,.3,.28,1)'
    }

    if(acercaPosicion < tamañoDePantalla){
        acerca.style.animation = 'showdown 1s cubic-bezier(.3,.3,.28,1)'
    }

    if(formPosicion < tamañoDePantalla){
        form.style.animation = 'showleft 1s cubic-bezier(.3,.3,.28,1)'
    }
 })