$(document).ready(function() {	
	// menu fixe et logo tow //
	function checkScroll()
	{
		var posScroll = $(document).scrollTop();

		if(posScroll>0) 
			$('body').addClass('sticky'),
			$('body').removeClass('top_page')
		else
			$('body').removeClass('sticky')

		if(posScroll>160) 
			$('.toponweb').addClass('show')
		else
			$('.toponweb').removeClass('show')
	}
    $(window).scroll(function(){
		checkScroll();
	});
	$(window).resize(function(){
		checkScroll();
	});
	checkScroll();

	// menu mobile + custom mobile //
	function displayMobile()
	{
		if($(window).width()>1200) {
			$('.header_nav').removeClass('active'),
			$('.menu_mobile').removeClass('active'),
			$('body').removeClass('active_overflow')
		}
	}
	$(window).resize(function(){
		displayMobile();
	});
    $(window).scroll(function(){
		displayMobile();
	});
	displayMobile();

	$(".menu_mobile").click(function() {
		$(this).toggleClass("active");
		$("body").toggleClass("active_overflow");
		$(".header_nav").toggleClass("active");
		$(".sub").hide();
		$(".menu li i").removeClass("active");
	});	
	$(".menu li i").click(function() {
		$(this).toggleClass('active');
		$(".menu").find('.sub').slideUp();
		if($(this).hasClass("active")){
			$(".menu li i").removeClass('active');
			$(this).next().slideToggle();
			$(this).toggleClass('active');
		}
	});	

	// scroll to top //
	$(".scroll").click(function() {
		var c = $(this).attr("href");
		$('html, body').animate({ scrollTop: $("#" + c).offset().top }, 1000, "linear");
		return false;
	});
});


// animation //
(function($) {
	$.fn.visible = function(partial) {
		var $t            = $(this),
			$w            = $(window),
			viewTop       = $w.scrollTop(),
			viewBottom    = viewTop + $w.height() -80,
			_top          = $t.offset().top,
			_bottom       = _top + $t.height(),
			compareTop    = partial === true ? _bottom : _top,
			compareBottom = partial === true ? _top : _bottom;
		return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
	  };
})(jQuery);

$(".animate").each(function(i, el) {
	var el = $(el);
	if (el.visible(true)) {
		el.addClass("play"); 
	}
});

$(window).scroll(function(event) {
	$(".animate").each(function(i, el) {
		var el = $(el);
		if (el.visible(true)) {
			el.addClass("play"); 
		}
	});
});

// logo partenaire 

$(document).ready(function() {
    // Duplique les logos pour permettre un défilement continu
    var $logoContainer = $('.logo-container');
    $logoContainer.append($logoContainer.html());
});

// back to top 
$(document).ready(function() {
    // Montrer ou cacher le bouton Back to Top selon le défilement
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#backToTop').fadeIn();
        } else {
            $('#backToTop').fadeOut();
        }
    });

    // Remonter en haut de la page lors du clic sur le bouton
    $('#backToTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
});


// défilement smooth 

$(document).ready(function() {
    // Défilement fluide vers les sections
    $('nav.header_nav a, .bloc_footer.menu_footer a, .content.animate.fade_up.delay-1000 a').click(function(event) {
        // Empêche le comportement par défaut
        event.preventDefault();

        // Obtenir l'ID de la section cible à partir de l'attribut href
        var targetId = $(this).attr('href');

        // Animer le défilement jusqu'à la section cible
        $('html, body').animate({
            scrollTop: $(targetId).offset().top
        }, 800, 'swing'); // Durée en millisecondes et fonction d'animation
    });
});
