$(document).ready(function () {


    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });


    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');


        if( $(window).scrollTop() > 0){
            $('.top').show();
        }else{
            $('.top').hide();
        }
    });


    // smooth scrolling

    $('a[href*="#"]').on('click', function (e) {

        e.preventDefult();

        $('html, body').animate({

            scrollTop: $($(this).attr('href')).offset().top
        },
            500,
            'linear'
        );
    });

});

// const menu = document.querySelector('#menu');
// const header = document.querySelector('#header');

// menu.addEventListener('click', e => {
//     // alert("Hello");
//     header.classList.toggle('toggle');
//     console.log(header.className)
// });