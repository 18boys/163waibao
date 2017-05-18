/**
 * 选择四六级选项页面
 */

var img = require('./config/img');

var $load_page = $('.load');
var $load_blood = $load_page.find('.blood');
var $load_person = $load_page.find('.person');
var blood_left = parseFloat($load_blood.css('left'));
var blood_width = parseFloat($load_blood.css('width'));

var PreLoading = function(options) {

    // 图片路径
    this.imgPath = './img';
    // 题目语音路径
    this.voicePath = '/voice';
    // 页面imglist集合
    this.fileList = img.concat(options.voiceList || []);
    // 使用配置参数
    this.options = options;
    this.makeLoadPage();
};

PreLoading.prototype = {

    fileCount: 0,
    i: 0,
    makeLoadPage: function() {
        var _this = this,
            len = _this.fileList.length,
            fileAry = [];
        console.log(_this.fileList);
        _this.loadInterval = setInterval(function() {
            if (_this.i < len) {
                if (_this.fileList[_this.i].search(/mp3/) > -1) {
                    fileAry[_this.i] = new Audio;
                    fileAry[_this.i].onloadedmetadata = _this.loadPage(_this);
                    fileAry[_this.i].src = _this.fileList[_this.i];

                } else {
                    fileAry[_this.i] = new Image();
                    fileAry[_this.i].onload = _this.loadPage(_this);
                    fileAry[_this.i].src = _this.fileList[_this.i];
                }
                _this.i++;
            } else {
                clearInterval(_this.loadInterval);
            }
        }, 50);
    },
    loadPage: function(_this) {
        var percent,
            len = _this.fileList.length;
        _this.fileCount++;
        percent = Math.floor(100 * parseInt(_this.fileCount) / parseInt(len));
        _this.options.loading && _this.options.loading(percent);
        _this.fileCount == len && setTimeout(function() {
            _this.options.complete && _this.options.complete();
            clearInterval(_this.loadInterval);
        }, 600);
    }
};

function init(cb, voiceList) {
    $load_page.addClass('show');
    setTimeout(function() {
        new PreLoading({
            loading: function(percent) {
                percent = Math.min(percent, 95);
                var left = blood_left + blood_width * percent / 100;
                $('.loading-current').width(percent + '%');
                $load_person.css('left', left + 'px');
                $('#percent').html(percent);
            },
            complete: function() {
                $load_page.addClass('hide').removeClass('show');
                cb && cb();
            },
            voiceList: voiceList
        });
    }, 100);
}

module.exports = {
    init: init
};
