var $start_select = $('.start-select');
var $start_select_word = $start_select.find('.word');
var $start_button_4 = $start_select.find('.button-4-bg');
var $start_button_6 = $start_select.find('.button-6-bg');

function init(cb) {
    $start_select.removeClass('hide');
    $start_select_word.removeClass('hide').addClass('animation-word-in');
    
    setTimeout(function() {
        $start_button_4.removeClass('hide').addClass('animation-button-in');
        $start_button_6.removeClass('hide').addClass('animation-button-in');
        _initEvent(cb);
    }, 2000);
}

function _initEvent(cb) {
    $(document).on('click', '.start-select .js-button', function() {
        $start_select.addClass('hide');
        if ($(this).hasClass('button-4-bg')) {
            cb && cb(4);
        } else {
            cb && cb(6);
        }
    });
}

module.exports = init;