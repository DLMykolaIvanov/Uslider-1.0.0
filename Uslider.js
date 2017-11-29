////////////////////////////////////////////////////////////////////////////
//
// Copyright 2017 Ivanov Mykola
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {

    // settings Uslider, you can change this
    var settings = {
        step_pause: 300,        // delay time between change slider
        fadeOutElement: 300,    // time of element disappearance
        fadeInElement: 700,     // time of occurrence of an element
        widthLg: '1440px',      // the width at which the countLg of items appears on the screen
        countLg: 6,             // count item in slider for large display
        widthMd: '1024px',      // the width at which the countMg of items appears on the screen
        countMg: 4,             // count item in slider for middle display
        widthSm: '768px',       // the width at which the widthSm of items appears on the screen
        countSm: 3,             // count item in slider for small display
        widthXs: '667px',       // the width at which the widthXs of items appears on the screen
        countXs: 2,             // count item in slider for display the width of the screens is less than widthXs
        countMobile: 1,         // count item in slider for mobile display
        haveImage: true
    };

    // !!!!!!!!!!!!!!!!!!! dont touch if yo dont now JS !!!!!!!!!!!!!!!!!!!!!! //
    function maxHeightElement( element ) { // function which find max height in element
        var heightElement = 0;
        $(element).each(function() {
            if ( $(this).height() > heightElement ) {
                heightElement = $(this).height();
            }
        });
        return heightElement
    }

    $(window).resize(function() { // need for adaptive

        if ( settings.haveImage ) {
            $('.Uslider-main img').ready(function() {  // wait when image load and calculation height Uslider
                $('.Uslider-main').css('min-height', maxHeightElement( $('.command_main .Uslider-element') ) );
            });
        } else { // or instantly calculation height Uslider
            $('.Uslider-main').css('min-height', maxHeightElement( $('.command_main .Uslider-element') ) );
        }

        // adaptive settings
        var count_slider;

        var lq = window.matchMedia( "(min-width: " + settings.widthLg + ")" );
        var mq = window.matchMedia( "(min-width: " + settings.widthMd + ")" );
        var sq = window.matchMedia( "(min-width: " + settings.widthSm + ")" );
        var xq = window.matchMedia( "(min-width: " + settings.widthXs + ")" );

        if (lq.matches) { count_slider = settings.countLg }
        else if (mq.matches) { count_slider = settings.countMg }
        else if (sq.matches) { count_slider = settings.countSm }
        else if (xq.matches) { count_slider = settings.countXs }
        else { count_slider = settings.countMobile }

        // show required quantity elsement slider
        var width_element = 100 / count_slider;
        $('.command_main .Uslider-element').removeAttr('hide-slider-index');
        $('.command_main .Uslider-element').removeAttr('slider-index');
        $('#command-right, #command-left').off('click'); // need for adaptive
        $('.command_main .Uslider-element').each(function(index, value) {
            $(this).css({
                'position': 'absolute',
                'width': width_element + '%',
                'top': '0',
                'display': 'none'
            });

            if ( index < count_slider ) {
                $(this).css({
                    'display': 'block',
                    'left': index * width_element + '%'
                });
                $(this).attr('hide-slider-index', index); // add active attribute for first element
            }
        });

        state_slider = true; // var who control state slider

        $('#command-right').on( 'click', function() {
            if ( state_slider ) {
                var pause = 0;
                var step_pause = settings.step_pause;
                state_slider = false;

                $('.command_main .Uslider-element[hide-slider-index]').each(function(index, value) {
                    var this_index = $('.command_main .Uslider-element').index(this);
                    if ( this_index + count_slider > $('.command_main .Uslider-element').length - 1 ) {
                        var next_index = count_slider + this_index - $('.command_main .Uslider-element').length;
                    } else {
                        var next_index = count_slider + this_index;
                    }

                    var this_hide_index = parseInt($(this).attr('hide-slider-index'));

                    $($('.command_main .Uslider-element')[next_index]).css('left', $(this).css('left'));
                    $($('.command_main .Uslider-element')[next_index]).attr('slider-index', this_hide_index );
                });

                for ( var i = 0; i <= count_slider; i++ ) {
                    $('.command_main .Uslider-element[hide-slider-index="' + i + '"]').delay(pause).fadeOut(settings.fadeOutElement);
                    pause += step_pause;
                    $('.command_main .Uslider-element[slider-index="' + i + '"]').delay(pause).fadeIn(settings.fadeInElement);
                }

                setTimeout(function() {
                    $('.command_main .Uslider-element').removeAttr('hide-slider-index');
                    $('.command_main .Uslider-element[slider-index]').each(function() {
                        $(this).attr('hide-slider-index', $(this).attr('slider-index'));
                    });
                    $('.command_main .Uslider-element').removeAttr('slider-index');
                    state_slider = true;
                }, pause += step_pause);
            }
        });


        $('#command-left').on( 'click', function() {
            if ( state_slider ) {
                var pause = 0;
                var step_pause = settings.step_pause;
                state_slider = false;

                $('.command_main .Uslider-element[hide-slider-index]').each(function(index, value) {
                    var this_index = $('.command_main .Uslider-element').index(this);
                    if ( this_index - count_slider < 0 ) {
                        var next_index = $('.command_main .Uslider-element').length - count_slider + this_index  ;
                    } else {
                        var next_index = this_index - count_slider;
                    }

                    var this_hide_index = parseInt($(this).attr('hide-slider-index'));

                    $($('.command_main .Uslider-element')[next_index]).css('left', $(this).css('left'));
                    $($('.command_main .Uslider-element')[next_index]).attr('slider-index', this_hide_index );
                });

                for ( var i = count_slider; i >= 0; i-- ) {
                    $('.command_main .Uslider-element[hide-slider-index="' + i + '"]').delay(pause).fadeOut(settings.fadeOutElement);
                    pause += step_pause;
                    $('.command_main .Uslider-element[slider-index="' + i + '"]').delay(pause).fadeIn(settings.fadeInElement);
                }

                setTimeout(function() {
                    $('.command_main .Uslider-element').removeAttr('hide-slider-index');
                    $('.command_main .Uslider-element[slider-index]').each(function() {
                        $(this).attr('hide-slider-index', $(this).attr('slider-index'));
                    });
                    $('.command_main .Uslider-element').removeAttr('slider-index');
                    state_slider = true;
                }, pause += step_pause);
            }
        });
    });
    $(window).resize();
});
