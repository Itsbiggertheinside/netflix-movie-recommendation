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
    $('.selectric-wrapper:nth-child(2) .selectric-scroll li').on('mouseover', function() {
            let _this = $(this);
            let _dataOwner = $(_this).closest('.selectric-wrapper').find('.selectric-hide-select option').get($(_this).attr('data-index'));
            if ($(_dataOwner).attr('data-url') != '') {
                $('#television__container__tv__genre').attr('src', $(_dataOwner).attr('data-url')).css('opacity', '1');
            } else {
                $('#television__container__tv__genre').css('opacity', '0');
            }
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

        $('#film-search-form').submit();

        
        $('header').addClass('hide');
        $('#search_parameters').addClass('hide');
        $('.television__container').removeClass('m6');
        $('.television__container__tv').css({'width': '100%'});
        $('.television__container__tv img').animate({
            width: '100%'
        }, 700);
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


