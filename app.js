let cursor = document.querySelector('.platform_cursor');
let platform = $('.platform__cursor_hoverable');

document.addEventListener('mousemove', function(e) {
    cursor.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;`
});

$(platform).on('mouseenter', function() {
    $('body').css({'background-color': $(this).attr('data-color'), 'transition': '.3s'});
});
$(platform).on('mouseleave', function() {
    $('body').css('background-color', '#ffee58');
});