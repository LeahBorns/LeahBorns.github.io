$(".jumper").on("click", function( e ) {

    e.preventDefault();

    $("body, html").animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 600);

});


var mobileBtn = document.querySelector('.mobile-btn');
var menu = document.querySelector('ul#nav-links');

var closeBtn = document.querySelector('.close');
var overlay = document.querySelector('.overlay');

mobileBtn.addEventListener('click', function() {
    menu.className += ' open';
    overlay.className += ' open';
})

closeBtn.addEventListener('click', function() {
    menu.className += 'menu';
    overlay.className = 'overlay';
})

window.addEventListener('click', function(event) {
    if(event.target === overlay) {
        menu.className += 'menu';
        overlay.className = 'overlay';
    }
})
