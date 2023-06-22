window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
}, false); // to prevent right click events on all over page.

const menu_bar = document.querySelector('.menu-bar');
// menu_bar.addEventListener('click', () => {
//     // document.querySelector('.nav-drop').style.display = 'flex';
// });

$(document).ready(() => {
    $(window).on("resize", () => {
        if ($(window).width() > 800) {
            $(".nav-drop").hide();
        }
    });

    $(".menu-bar").click(() => {
        $(".nav-drop").toggle();
    });
    // $(".menu-bar").click(() => {
    //     $(".nav").toggleClass(".nav-bar");
    // });

});

const links = document.querySelectorAll('.sec');
links.forEach(function (link) {
    link.addEventListener('click', function () {
        // link.classList.remove('active');
        links.forEach(function (link) {
            link.classList.remove('active');
        });
        this.classList.toggle('active');
    });
}); // by using the 'function' keyword for the event listener functions, 'this' will correctly refer to the element that triggered the event. Here '() =>' isn't works properly.


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

