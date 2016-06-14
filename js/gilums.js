$(document).ready(function() {
    //$('.contenedor_header').addClass( "hidden" );
    $('.scroll').hide();
    /*$('.contenedor_header').hide();*/

    smoothScroll.init({
      speed: 1500, // Integer. How fast to complete the scroll in milliseconds
      easing: 'easeOutCubic', // Easing pattern to use
      scrollOnLoad: true,
      //updateURL: true, // Boolean. Whether or not to update the URL with the anchor hash on scroll
      offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
      //callbackBefore: function ( toggle, anchor ) {}, // Function to run before scrolling
      //callbackAfter: function ( toggle, anchor ) {} // Function to run after scrolling
    });

    $('.collapse').collapse({
        parent: true,
        toggle: false
    });

    $('[data-toggle="tooltip"]').tooltip();
    
    $('.link').webuiPopover({width:350,trigger:'hover',style:'inverse',animation:'pop'});;

    $(window).scroll(function(){
        window_y = $(window).scrollTop(); //valor al cual se ha movido el scroll
        //scroll_critico = parseInt($('.section_contenido_dinamico').height());//valor del div
        scroll_critico = 200;
        if(window_y > scroll_critico){ //si el scroll ha superado el height de tu div
            $('.scroll').fadeIn();
            /*$('.contenedor_header').fadeIn('slow');*/
  
        }else{
            $('.scroll').fadeOut();
            /*$('.contenedor_header').fadeOut("slow");*/
        }
    });

// Counter
$(function() {
    $('.contador-cont').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function() {
                var $this = $(this);
                $({
                    Counter: 0
                }).animate({
                    Counter: $this.text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).off('inview');
        }
    });

});


$(function() {
    $('.contador-gas').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function() {
                var $this = $(this);
                $({
                    Counter: 0
                }).animate({
                    Counter: $this.text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).off('inview');
        }
    });

});

$(function() {
    $('.contador-bry').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function() {
                var $this = $(this);
                $({
                    Counter: 0
                }).animate({
                    Counter: $this.text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).off('inview');
        }
    });

});

$(function() {
    $('.contador-cas').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function() {
                var $this = $(this);
                $({
                    Counter: 0
                }).animate({
                    Counter: $this.text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).off('inview');
        }
    });

});

$(function() {
    $('.contador-san').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function() {
                var $this = $(this);
                $({
                    Counter: 0
                }).animate({
                    Counter: $this.text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).off('inview');
        }
    });

});
$(function() {
    $('.contador-fra').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function() {
                var $this = $(this);
                $({
                    Counter: 0
                }).animate({
                    Counter: $this.text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).off('inview');
        }
    });

});

$(function() {
    $('.contador-pm').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function() {
                var $this = $(this);
                $({
                    Counter: 0
                }).animate({
                    Counter: $this.text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).off('inview');
        }
    });

});
    //-------/* ANIMACION TEXTO*//---------//

/*    $('.demo').textillate({
        selector: '.texts',
         loop: false,
         minDisplayTime: 2000,
         initialDelay: 0,
         in: {
             effect: 'bounce',
             delayScale: 2,
             delay: 50,
             sync: false,
             shuffle: true
         },
         autoStart: true,
         inEffects: [],
         outEffects: [ 'hinge' ]
    });
    $('.letra3').textillate({
      loop: true,
      in: { effect: 'tada' }, 
      out: { effect: 'flipOutY' }
    });
    $('.letra6').textillate({
        loop: true,
        in: { 
            effect: 'tada',    
            delayScale: 1,
            delay: 150,
            shuffle: true
          }, 
        out: { 
            effect: 'flipOutY',
            reverse: true
        }
    });*/

    //-------/* END | ANIMACION TEXTO*//---------//

    //-------/* PARALLAX*//---------//

    $window = $(window);
 
    $('section[data-type="background"]').each(function() {
        var $scroll = $(this);

        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $scroll.data('speed'));
            var coords = '50% ' + yPos + 'px';
            $scroll.css({ backgroundPosition: coords });
        });
    });

    //-------/* END | PARALLAX *//---------//


    //-------/* EFECTO DE TEXTO *//---------//

    //set animation timing
    var animationDelay = 2500,
      //loading bar effect
      barAnimationDelay = 3800,
      barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
      //letters effect
      lettersDelay = 50,
      //type effect
      typeLettersDelay = 150,
      selectionDuration = 500,
      typeAnimationDelay = selectionDuration + 800,
      //clip effect 
      revealDuration = 600,
      revealAnimationDelay = 1500;
    
    initHeadline();
    

    function initHeadline() {
      //insert <i> element for each letter of a changing word
      singleLetters($('.cd-headline.letters').find('b'));
      //initialise headline animation
      animateHeadline($('.cd-headline'));
    }

    function singleLetters($words) {
      $words.each(function(){
        var word = $(this),
          letters = word.text().split(''),
          selected = word.hasClass('is-visible');
        for (i in letters) {
          if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
          letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
        }
          var newLetters = letters.join('');
          word.html(newLetters);
      });
    }

    function animateHeadline($headlines) {
      var duration = animationDelay;
      $headlines.each(function(){
        var headline = $(this);
        
        if(headline.hasClass('loading-bar')) {
          duration = barAnimationDelay;
          setTimeout(function(){ headline.find('.cd-words-wrapper').addClass('is-loading') }, barWaiting);
        } else if (headline.hasClass('clip')){
          var spanWrapper = headline.find('.cd-words-wrapper'),
            newWidth = spanWrapper.width() + 10
          spanWrapper.css('width', newWidth);
        } else if (!headline.hasClass('type') ) {
          //assign to .cd-words-wrapper the width of its longest word
          var words = headline.find('.cd-words-wrapper b'),
            width = 0;
          words.each(function(){
            var wordWidth = $(this).width();
              if (wordWidth > width) width = wordWidth;
          });
          headline.find('.cd-words-wrapper').css('width', width);
        };

        //trigger animation
        setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
      });
    }

    function hideWord($word) {
      var nextWord = takeNext($word);
      
      if($word.parents('.cd-headline').hasClass('type')) {
        var parentSpan = $word.parent('.cd-words-wrapper');
        parentSpan.addClass('selected').removeClass('waiting'); 
        setTimeout(function(){ 
          parentSpan.removeClass('selected'); 
          $word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
        }, selectionDuration);
        setTimeout(function(){ showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);
      
      } else if($word.parents('.cd-headline').hasClass('letters')) {
        var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
        hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
        showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

      }  else if($word.parents('.cd-headline').hasClass('clip')) {
        $word.parents('.cd-words-wrapper').animate({ width : '2px' }, revealDuration, function(){
          switchWord($word, nextWord);
          showWord(nextWord);
        });

      } else if ($word.parents('.cd-headline').hasClass('loading-bar')){
        $word.parents('.cd-words-wrapper').removeClass('is-loading');
        switchWord($word, nextWord);
        setTimeout(function(){ hideWord(nextWord) }, barAnimationDelay);
        setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('is-loading') }, barWaiting);

      } else {
        switchWord($word, nextWord);
        setTimeout(function(){ hideWord(nextWord) }, animationDelay);
      }
    }

    function showWord($word, $duration) {
      if($word.parents('.cd-headline').hasClass('type')) {
        showLetter($word.find('i').eq(0), $word, false, $duration);
        $word.addClass('is-visible').removeClass('is-hidden');

      }  else if($word.parents('.cd-headline').hasClass('clip')) {
        $word.parents('.cd-words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){ 
          setTimeout(function(){ hideWord($word) }, revealAnimationDelay); 
        });
      }
    }

    function hideLetter($letter, $word, $bool, $duration) {
      $letter.removeClass('in').addClass('out');
      
      if(!$letter.is(':last-child')) {
        setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);  
      } else if($bool) { 
        setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
      }

      if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
        var nextWord = takeNext($word);
        switchWord($word, nextWord);
      } 
    }

    function showLetter($letter, $word, $bool, $duration) {
      $letter.addClass('in').removeClass('out');
      
      if(!$letter.is(':last-child')) { 
        setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration); 
      } else { 
        if($word.parents('.cd-headline').hasClass('type')) { setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('waiting'); }, 200);}
        if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
      }
    }

    function takeNext($word) {
      return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
    }

    function takePrev($word) {
      return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
    }

    function switchWord($oldWord, $newWord) {
      $oldWord.removeClass('is-visible').addClass('is-hidden');
      $newWord.removeClass('is-hidden').addClass('is-visible');
    }
    //-------/* END | EFECTO DE TEXTO *//---------//

    /********************************/
    
    $(function () {
        var activoHeader = 50;
        $(window).scroll(function () {
            var scroll = getCurrentScroll();
            if (scroll >= activoHeader) {

                $('.logo').addClass('activo');
                $('.menu-index').addClass('activo');
                $('.menu-index-mobile').addClass('activo');
                $('.contenedor_header').addClass('activo');
                
                $('.menu-idiomas').addClass('activo');
                $('.idiomas').addClass('activo');
                

            }
            else {

                $('.logo').removeClass('activo');
                $('.menu-index').removeClass('activo');
                $('.contenedor_header').removeClass('activo');
                $('.menu-index-mobile').removeClass('activo');
                $('.menu-idiomas').removeClass('activo');
                $('.idiomas').removeClass('activo');
                
            }
        });
        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }

    });

    $(function () {
        var tam = window.innerWidth;
        if (tam > 767) {
            $("#texto-dinamico").typed({
              //strings: ["Su idea se hara realidad!", "Simple, Creativo, Adaptable.", "Esto es <strong>Gilums!</strong>"],
              strings: ["Simple, Creativo, Adaptable.", "Esto es <strong>Gilums!</strong>"],
              startDelay: 7100,
              typeSpeed: 60,
              // backspacing speed
              backSpeed: 30,
              // time before backspacing
              backDelay: 1500,
          });
        }
    });
 

    function removerClases(){
      $('.somos').removeClass('color1');
      $('.somos').removeClass('color2');
      $('.somos').removeClass('color3');
      $('.somos').removeClass('color4');
    }

    $("#btn_gas").click(function(){
        removerClases();
        $('.somos').addClass('color1');
    });

    $("#btn_bryan").click(function(){
        removerClases();
        $('.somos').addClass('color2');
    });

    $("#btn_cas").click(function(){
      removerClases();
      $('.somos').addClass('color3');
    });
    
    $("#btn_fra").click(function(){
      removerClases();
      $('.somos').addClass('color4');
    });
    
    $("#btn_pm").click(function(){
      removerClases();
      $('.somos').addClass('color3');
    });


    var wow = new WOW(
      {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
    )
    wow.init();
    
    /*---------------------------------------------*/
    //RESPALDO
/*
    $(window).scroll(function(){
        window_y = $(window).scrollTop(); //valor al cual se ha movido el scroll
        //alert(window_y);
        scroll_critico = parseInt($('.section_contenido_dinamico').height());//valor del div
        //alert(scroll_critico);
        if(window_y > scroll_critico){ //si el scroll ha superado el height de tu div
            $('.contenedor_header').css({
                "background": "rgba(8, 19, 61,0.8)",
                "font-size": "20px",
            })
            $('.contenedor_header').removeClass( "hidden" ).animate({
              height:'slideUp'
            },"slow");
           /* $('.contenedor_header').addClass( "show" ).animate({
              height:'slideUp'
            });  *//*           
        }else{
            $('.contenedor_header').addClass( "hidden" ).animate({
              height:'slideDown'
            },"slow");
        }
    });
*/
});

$(window).load(function(){
    /*
    |--------------------------------------------------------------------------
    | PRELOADER
    |--------------------------------------------------------------------------
    */
    $("html").niceScroll({styler:"fb",cursorcolor:"#007BBE", cursorwidth: '6', cursorborderradius: '10px', background: '#404040', spacebarenabled:false,  cursorborder: '', zindex: '1000'});
    $('#status').delay(7000).fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(7300).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(7300).css({'overflow':'visible'});
});
