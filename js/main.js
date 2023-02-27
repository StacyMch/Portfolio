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

function sendToTelegram() {

    let name = document.getElementById('typeYourName').value;

    let email = document.getElementById('typeYourEmail').value;

    let message = document.getElementById('message').value;

    let text = 'Сообщение от ' + name + ' с почтой ' + email + ': ' + message;
    console.log(text);

    //создаём объкт, который умеет отправлять запросы
    let requestObj = new XMLHttpRequest();

    //собираем ссылку для запроса
    let link = 'https://api.telegram.org/bot5894230568:AAEmbQKqkq873LKhTEHfikLr7SUgG17sz2g/sendMessage?chat_id=224039891&text=' + text;

    console.log(link);

    //конфигурируем объект
    requestObj.open('GET', link, false);
        
    //отправляем запрос
    requestObj.send();

    //выводим ответ в консоль
    console.log('Отправлено');

    //чистим поля
    document.getElementById('typeYourName').value = '';
    document.getElementById('typeYourEmail').value = '';
    document.getElementById('message').value = '';

}

function redPillow() {
    document.location='#back'
}

function bluePillow() {

}