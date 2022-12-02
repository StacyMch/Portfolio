$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

//слайдер
$(document).ready(function(){
    $('.slider').slick({
        arrows: true, //отображение стрелок
        dots: true, //отображение точек
        adaptiveHeight: false, //слайдер подстраивается по высоте под высоту активного слайда
        slidesToShow: 2, //сколько слайдов будет показано в одном ряду
        slidesToScroll: 1, //сколько слайдов пролистывается по одному нажатию на стрелку
        speed: 1000, //скорость прокрутки (в мс)
        easing: 'linear', //тип анимации
        infinite: true, //будет ли слайдер пролистываться бесконечно
        autoplay: true, //автоматическое пролистывание
        autoplaySpeed: 1000, //интервал автопролистывания
        pauseOnFocus: true, //прекращение автопролистывания при focus
        pauseOnHover: true, //прекращение автопролистывания при hover
        pauseOnDotsHover: true, //прекращение автопролистывания при hover на точках
        draggable: false, //возможность перетаскивать слайды мышью на ПК
        swipe: true, //возможность свайпать слайды через тачскрин
        touchThreshold: 2, //необходимый размах свайпа для активации пролистывания
        touchMove: true, //возможность двигать слайды туда-сюда пальцем
        waitForAnimate: true, //будет ли скорость пролистывания быстрее, чем заданная в анимации, при более быстрых кликах/свайпах
        responsive: [
            {
                breakpoint: 1020,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});


