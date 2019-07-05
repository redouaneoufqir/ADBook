/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })
    $('.sticky').affix({
        offset: {
            top: ($('.sticky').offset().top + $('.sticky').height()+50) - $(window).height()
        }
    }).on('affixed.bs.affix', function(){
        var target = $(this).attr('data-col');
        var s1 = target.substring(0, 7);
        var s2 = target.substring(7);
        target = s1+'offset-'+s2;
        $($(this).attr('data-target')).addClass(target);
    }).on('affix-top.bs.affix', function(){
        var target = $(this).attr('data-col');
        var s1 = target.substring(0, 7);
        var s2 = target.substring(7);
        target = s1+'offset-'+s2;
        console.log(target);
        $($(this).attr('data-target')).removeClass(target);
    });

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

    // random header background image 
    var images =  [1,2,3,4,5,5,5];
    var images2 =  [1,1,1,1,2];
    var img = images[Math.floor(Math.random()*images.length)];
    $('header').css('background-image', 'url(img/slide/'+img+'.jpg)');

    var img = images2[Math.floor(Math.random()*images2.length)];
    $('#mainNav').css('background-image', 'url(img/slide/'+img+'.jpg)');

    $('.choice-toggle').change(function(event) {
        var target = $(this).attr('data-target');
        var inputs = $(this).attr('data-inputs');
        var except = $(this).attr('data-except');
        var bind_tag_name = $(this).attr('data-tag-bind-name');
        var bind_tag_target = $('[name="'+bind_tag_name+'"]:checked').attr('data-target');
        var bind_tag_except = $('[name="'+bind_tag_name+'"]:checked').attr('data-except');
        $(inputs+':not('+except+'):not('+target+')').fadeOut(600);
        $(inputs+target+bind_tag_target+','+inputs+target+bind_tag_except).fadeIn(600);
    });
    $('.choice-toggle.focus').click().change();

    function getImageUrl (files, target) {
            if (/^image/.test( files[0].type)){ 
                var reader = new FileReader(); 
                reader.readAsDataURL(files[0]);
                reader.onloadend = function(){
                    target.css('background-image', 'url('+this.result+')');
                    target.parents(".photo-zone").removeClass('empty');
                }
            }
        }
     $('.photo-zone input[type="file"]').on("change", function()
        {
            var files = !!this.files ? this.files : [];
            if (!files.length || !window.FileReader) return "no file selected, or no FileReader support"; // 
            if ( files.length > 0) {
                getImageUrl(files,$(this).parents(".photo-zone").find('.photo-preview'));
            };
        });

    $('.photo-zone .photo-preview').click(function(event) {
        $(this).parents('.photo-zone').find('input[type="file"]').click();
    });
    $('.btn-input-clear').click(function(event) {
        $($(this).attr('data-target')).remove();
    });
    $('#mots_cles').tagsinput({
      maxTags: 5,
      tagClass: 'label keyword-tag'
    })
})(jQuery); // End of use strict
