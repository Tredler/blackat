


jQuery(function ($) {
    var supportsAudio = document.createElement('audio').canPlayType;
    if (supportsAudio) {
        var
            index = 0,
            playing = false,
            mediaPath = 'audio/',
            tracks = [{
                "track": 1,
                "name": "1",
                "file": "1.wav",
                "img": "1.1.png"
            }, {
                "track": 2,
                "file": "2.mp3",
                "img": "2.2.png"
            }, {
                "track": 3,
                "file": "3.mp3",
                "img": "3.3.png"
            }, {
                "track": 4,
                "file": "4.mp3",
                "img": "4.4.png"
            }, {
                "track": 5,
                "file": "5.mp3",
                "img": "5.5.png"
            }, {
                "track": 6,
                "file": "6.mp3",
                "img": "6.6.png"
            }, {
                "track": 7,
                "file": "7.mp3",
                "img": "7.7.gif"
            }, {
                "track": 8,
                "file": "8.wav",
                "img": "8.8.gif"
            }, {
                "track": 9,
                "file": "9.mp3",
                "img": "9.9.png"
            }, {
                "track": 10,
                "file": "10.mp3",
                "img": "10.10.png"
            }, {
                "track": 11,
                "file": "11.mp3",
                "img": "11.11.png"
            }, {
                "track": 12,
                "file": "12.mp3",
                "img": "12.12.gif"
            }, {
                "track": 13,
                "file": "13.mp3",
                "img": "13.13.gif"
            }, {
                "track": 14,
                "file": "14.mp3",
                "img": "14.14.png"
            }],

            trackCount = tracks.length,
            Auto = true,
            image = $('#sl'),
            audio = $('#audio1').bind('play', function () {
                playing = true;
            }).bind('pause', function () {
                playing = false;
            }).bind('ended', function () {//события на конец аудио
                Autopaing(Auto);
                if(index>0 && index < 12) {
                    fon.play();
                }
            else {
                    fon.pause();
                }
            }).get(0),
            coAuto = 0,

            btnAuto = $('#AP').click(function () {

                if (coAuto === 0) {
                    Auto = false;
                    coAuto++;
                }
                else {
                    Auto = true;
                    coAuto = 0;
                }

            }),

            btnPrev = $('#btnPrev').click(function () {
                if ((index - 1) > -1) {//проверка на нулевой элемент
                    index--;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {//если елемент первый
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            btnNext = $('#btnNext').click(function () {
                if ((index + 1) < trackCount) {//проверка на последний элемент
                    index++;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {//если элемент последний
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            li = $('#plList li').click(function () {
                var id = parseInt($(this).index());
                if (id !== index) {
                    playTrack(id);
                }
            }),

            fon = $('#fonts').bind('play', function () {
                fon.play();
            }).get(0),
            Autopaing = function (Auto){
                if (Auto){
                    if ((index + 1) < trackCount) {//если элемент не последнмй
                        index++;
                        loadTrack(index);
                        audio.play();
                    } else {//если последний
                        audio.pause();
                        index = 0;
                        loadTrack(index);
                    }
                }
                else {
                    if ((index + 1) < trackCount) {//если элемент не последнмй
                        audio.play();
                    } else {//если последний
                        audio.pause();
                    }
                }
            },
            loadTrack = function (id) {
                $('.plSel').removeClass('plSel');
                $('#plList li:eq(' + id + ')').addClass('plSel');
                index = id;
                audio.src = mediaPath + tracks[id].file;
                image.css({'background': 'url(css/image/fon/'+ tracks[id].img +') no-repeat center/contain'});//imagePath + tracks[id].img);
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
            },
            Link = function () {
                setTimeout(function () {
                    document.location.href = "index.html";
                }, 500);
            };
        loadTrack(index);

        var scaling = function (ScrueenNum, scaleSize) {
             image.css({'transform': 'scale( ' + scaleSize + ', ' + scaleSize + ')'});
            if(ScrueenNum === 1 ) {//прои увеличении
                full.css({'animation': 'stop'});
            }
            else if(ScrueenNum === 2 ) {//прои уменьшении
                full.css({'animation': 'play .7s steps(3) infinite'});
            }
        };
        $(document.body).css({'overflow':'hidden'});

var ScreenNum = 0,
    tel = $('#teleport').click(function () {
    Link();
}),
    full = $('#full_screen').click(function () {
        ++ScreenNum;
        if (ScreenNum === 2) {
            scaling(ScreenNum, 1);
            ScreenNum = 0;
        }
        else {
            scaling(ScreenNum, 2.5);
        }
    }),
    co = 0,
    btnAud = $('#aud').click(function () {
        if (co === 0) {
            audio.play();
            co++;
        }
        else {
            audio.pause();
            co = 0;
        }

    }),
    er = 0,
    fonOff = $('#fonOff').click(function () {
        if (er === 0) {
            fon.muted = true;
            er++;
        }
        else {
            fon.muted = false;            // Audiopaying = false;
            er = 0;
        }
    });
    }
});


