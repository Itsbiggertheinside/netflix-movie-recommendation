$(document).ready(() => {

    // Header title animation
    $('.header__item').each(function(i) {
        let _this = $(this);
        setTimeout(() => {
            _this.addClass('header__title_animation');
        }, 500 * i);
    });

    // Custom select box
    $('.select_box__selected').on('click', function() {
        let _this = $(this);
        let _options = $(_this).closest('.select_box').find('.select_box__option_container');


        $('.select_box__option_container').slideUp(120);
        $(_options).slideDown(350);

        // if ($(_options).css('display') == 'none') {
        //     $(_options).css('display', 'block');
        // } else {
        //     $(_options).css('display', 'none');
        // }
    });

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