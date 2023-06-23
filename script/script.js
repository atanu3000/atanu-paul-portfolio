window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
}, false); // to prevent right click events on all over page.

const menu_bar = document.querySelector('.menu-bar');
const links = document.querySelectorAll('.sec');

$(document).ready(() => {
    $(window).on("resize", () => {
        if ($(window).width() > 800) {
            $(".nav-drop").hide();
        }
    });

    $(".menu-bar").click(() => {
        $(".nav-drop").toggle();
    });
    $(".sec").click(() => {
        $(".nav-drop").hide();
    });
});


links.forEach(function (link) {
    link.addEventListener('click', function () {
        links.forEach(function (link) {
            link.classList.remove('active');
        });
        this.classList.toggle('active');
    });
}); // by using the 'function' keyword for the event listener functions, 'this' will correctly refer to the element that triggered the event. Here '() =>' isn't works properly.

// window.addEventListener('scroll', function() {
//     console.log('Scroll event triggered');
//     var sections = document.querySelectorAll('section');
//     var navigationLinks = document.querySelectorAll('.nav a');

//     sections.forEach(function(section) {
//       var rect = section.getBoundingClientRect();
//       if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
//         var sectionId = section.getAttribute('id');
//         navigationLinks.forEach(function(link) {
//             link.parentElement.classList.remove('active');
//         });
//         document.querySelector('.nav a[href="#' + sectionId + '"]').parentElement.classList.add('active');
//       }
//     });
//   });
  
// $(window).scroll(function(){

//     $('section').each(function() {
//         if($(window).scrollTop() >= $(this).offset().top + $(this).height() || $(window).scrollTop() < $(this).offset().top)
//             $(this).removeClass('active');
//         else
//             $(this).addClass('active');
//     });
// });

const body = document.querySelector('body');
const dayNight = document.querySelectorAll('.dayNight');

dayNight.forEach(btn => {
    btn.addEventListener('click', () => {
        body.classList.toggle('night');
    });
});




// const label = document.querySelectorAll('label');

// label.forEach(label => {

// });

