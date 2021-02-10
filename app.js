$(document).ready(() => {

    // Header title animation
    $('.header__item').each(function(i) {
        let _this = $(this);
        setTimeout(() => {
            _this.addClass('header__title_animation');
        }, 500 * i);
    });

    // Custom select box - Jquery Selectiric
    $('select').selectric({
        disableOnMobile: false,
        nativeOnMobile: false,
    });

    // Television image
    $('#select__genre option').on('mouseover', function() {
            let _this = $(this);
            $('#television__container__tv__genre').attr('src', $(_this).attr('data-url'));
            console.log('asdasd');
    });
    // }, function() {
    //         $('#television__container__tv__genre').attr('src', '');
    // });

    // Search form
    $('#television_button__search').on('click', function() {
        $('#platform').val($('#select__platform').val());
        $('#genre').val($('#select__genre').val());
        $('#language').val($('#select__language').val());
        $('#score').val($('#score__slider_value').text());
    });

});


// ScrollOut js & Animate.css
ScrollOut({

    threshold: .5,
    targets: '.scrollable',

});


// noUiSlider configurations
let slider = document.getElementById('score__slider');
let sliderValue = document.getElementById('score__slider_value');

noUiSlider.create(slider, {
    start: 5,
    connect: [false, true],
    range: {
        'min': 0,
        'max': 10
    }
});

slider.noUiSlider.on('update', function (value) {
    sliderValue.innerHTML = value;
});


