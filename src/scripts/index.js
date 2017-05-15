/*[export]*/
require('libs/zepto.min.js');
var FastClick = require('libs/fastclick');
var loadPage = require('./load');
var initSelectPage = require('./start-select');
var initStart = require('./start');
var exam = require('./exam');
var Result = require('./result');

FastClick(document.body);

var screenWidth = document.body.clientWidth,
    screenHeight = document.body.clientHeight,
    originWidth = 375,
    originHeight = 604;

var Page = function() {
    this.$body = $('.pageWrapper');
    this.$music_bg_close = $('.music-bg-close');
    this.$music_bg_open = $('.music-bg-open');
    this.init();
};

window.bgMusic=new Audio;
bgMusic.loop=true;
window.userPlay=false;  // false标示用户不让播放背景音乐

Page.prototype = {
    init: function() {
        this._initAudio();
        this._reset();
        this._run();
    },
    _reset: function() {
        this.$body.css({
            '-webkit-transform': 'scaleX(' + screenWidth / originWidth + ') scaleY(' + screenHeight / originHeight + ')',
            transform: 'scaleX(' + screenWidth / originWidth + ') scaleY(' + screenHeight / originHeight + ')'
        });
    },
    _run: function(){
        loadPage.init(
            function() {
                initStart(function() {
                    initSelectPage(function() {
                            var examer = new exam.Exam({
                                finishHandler: function() {
                                    new Result(examer.score);
                                }
                            });
                        }
                    );
                });
            }
        );
    },
    _initAudio: function(){
        var _this=this;
        bgMusic.src='/voice/bg.mp3';
        $(document).on('click','.music-bg',function(){
            if($(this).hasClass('music-bg-open')){
                $(this).addClass('hide');
                _this.$music_bg_close.removeClass('hide');
                bgMusic.pause();
                userPlay=false;
            }else {
                $(this).addClass('hide');
                _this.$music_bg_open.removeClass('hide');
                bgMusic.play();
                userPlay=true;
            }
        })
    }
};

new Page();

