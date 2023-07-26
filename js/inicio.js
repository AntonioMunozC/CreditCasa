/*$(function(){
    var $gallery = $('.gallery a').simpleLightbox();

    $gallery.on('show.simplelightbox', function(){
        console.log('Requested for showing');
    })
    .on('shown.simplelightbox', function(){
        console.log('Shown');
    })
    .on('close.simplelightbox', function(){
        console.log('Requested for closing');
    })
    .on('closed.simplelightbox', function(){
        console.log('Closed');
    })
    .on('change.simplelightbox', function(){
        console.log('Requested for change');
    })
    .on('next.simplelightbox', function(){
        console.log('Requested for next');
    })
    .on('prev.simplelightbox', function(){
        console.log('Requested for prev');
    })
    .on('nextImageLoaded.simplelightbox', function(){
        console.log('Next image loaded');
    })
    .on('prevImageLoaded.simplelightbox', function(){
        console.log('Prev image loaded');
    })
    .on('changed.simplelightbox', function(){
        console.log('Image changed');
    })
    .on('nextDone.simplelightbox', function(){
        console.log('Image changed to next');
    })
    .on('prevDone.simplelightbox', function(){
        console.log('Image changed to prev');
    })
    .on('error.simplelightbox', function(e){
        console.log('No image found, go to the next/prev');
        console.log(e);
    });
});

$(window).load(function() {
    $(".loader").fadeOut(3000);
});*/
const hamburger = document.querySelector(".bars__menu");
const menu = document.querySelector(".menu");

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
   
});

document.querySelectorAll(".ul-a").forEach(n => n.
    addEventListener("click", () =>{
        hamburger.classList.remove("active");
        menu.classList.remove("active");
        line1__bars.classList.remove("activeline1__bars-menu");
        line2__bars.classList.remove("activeline2__bars-menu");
        line3__bars.classList.remove("activeline3__bars-menu");
}));

document.querySelectorAll(".langs").forEach(n => n.
    addEventListener("click", () =>{
        hamburger.classList.remove("active");
        menu.classList.remove("active");
        line1__bars.classList.remove("activeline1__bars-menu");
        line2__bars.classList.remove("activeline2__bars-menu");
        line3__bars.classList.remove("activeline3__bars-menu");
}));
