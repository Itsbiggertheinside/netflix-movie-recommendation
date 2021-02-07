let cursor = document.querySelector('.platform_cursor');
let platform = $('.platform__cursor_hoverable');
let genre = $('.film__genre');


// Platform Choice
if (cursor) {
    document.addEventListener('mousemove', function(e) {
        cursor.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;`
    });
}

$(platform).on('mouseenter', function() {
    $('body').css({'background': $(this).attr('data-color'), 'color': 'white', 'transition': '.3s'});
});

$(platform).on('mouseleave', function() {
    $('body').css({
        'background': 'linear-gradient(to top, #00153d, #002a53, #004167, #005879, #006f88, #00778e, #007f94, #008799, #00829b, #007c9b, #00779c, #00719b)', 
        'background-size': '100% 150%',
        'color': 'whitesmoke'
    });
});


// Genre Choice
$(genre).on('mouseenter', function() {
    setTimeout(() => {
        $('.film__genre_bg_image').attr('src', $(this).attr('data-src'));
        $('.film__genre_background').fadeIn(150);
    }, 120);
});
$(genre).on('mouseleave', function() {
    $('.film__genre_background').fadeOut(100);
});


// Score Choice
var tapSlider = document.querySelector('.score__slider');
var scoreValue = $('.score__slider_value');

noUiSlider.create(tapSlider, {
    start: 5,
    behaviour: 'tap',
    connect: [false, true],
    range: {
        'min': 0,
        'max': 10
    }
});

$(scoreValue).text(tapSlider.noUiSlider.get());

tapSlider.noUiSlider.on('slide', () => {
    $(scoreValue).text(tapSlider.noUiSlider.get());
});


// ----------------- STARTER ------------------
$('#first').css('display', 'block');

$('.platform__cursor_hoverable').on('click', function() {
    $('#first').css('display', 'none');
    $('#second').css('display', 'block');
});

$('.film__genre').on('click', function() {
    
    // $('body').css({
    //     'background': 'linear-gradient(to right bottom, #6bcf5c, #6ad45a, #68d957, #67de55, #65e352) no-repeat',
    //     'background-size': '100% 150%',
    //     'color': 'white'
    // });

    $('#second').css('display', 'none');
    $('#third').css('display', 'block');
});

$('.language').on('click', function() {

    // $('body').css({
    //     'background': 'white',
    //     'background-size': '100% 150%',
    //     'color': 'white'
    // });

    $('#third').css('display', 'none');
    $('#fourth').css('display', 'block');
});