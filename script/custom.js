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

	// menu mobile + custom mobile
function displayMobile() {
    if ($(window).width() > 1200) {
        $('.header_nav').removeClass('active');
        $('.menu_mobile').removeClass('active');
        $('body').removeClass('active_overflow');
    }
}

$(window).resize(function(){
    displayMobile();
});

$(window).scroll(function(){
    displayMobile();
});

displayMobile();

// Lorsque le menu mobile est cliqué
$(".menu_mobile").click(function() {
    $(this).toggleClass("active");
    $("body").toggleClass("active_overflow");
    $(".header_nav").toggleClass("active");
    $(".sub").hide(); // Ferme les sous-menus
    $(".menu li i").removeClass("active"); // Enlève les icônes actives
});	

// Lorsque les icônes des sous-menus sont cliquées
$(".menu li i").click(function(e) {
    e.stopPropagation();  // Empêche la propagation de l'événement de clic vers le parent

    // Vérifie si le sous-menu est déjà ouvert
    var $subMenu = $(this).next();
    
    // Ferme tous les sous-menus
    $(".menu .sub").slideUp();
    
    // Si le sous-menu n'était pas ouvert, l'ouvrir
    if (!$subMenu.is(':visible')) {
        $(this).toggleClass('active');
        $subMenu.stop(true, true).slideDown(); // Montre le sous-menu avec animation
    }
    
    // Si l'icône est active, on la laisse active, sinon on la retire
    $(".menu li i").not(this).removeClass('active');
});

// Si un élément du menu est cliqué (autre que l'icône)
$(".menu li a").click(function() {
    // Ferme le menu mobile après avoir cliqué sur un lien
    $(".menu_mobile").removeClass("active");
    $("body").removeClass("active_overflow");
    $(".header_nav").removeClass("active");
    $(".sub").slideUp(); // Ferme tous les sous-menus
});

//classe active btn menu header
	// Sélectionner le wrapper qui contient les éléments de menu
	let wrapper = document.querySelector('.header_nav');

	// Écouter les clics sur le wrapper
	wrapper.addEventListener("click", function(e) {
	  // Vérifier si l'élément cliqué est un élément de menu <li> ou <a>
	  if (e.target.tagName === 'A' || e.target.tagName === 'LI') {
		
		// Vérifier si l'élément cliqué est un <a>, et dans ce cas cibler le parent <li>
		let li = e.target.tagName === 'A' ? e.target.closest('li') : e.target;
  
		// Vérifier si l'élément <li> cliqué a déjà la classe 'active'
		if (li.classList.contains('active')) {
		  // Si l'élément cliqué a déjà la classe active, on la retire
		  li.classList.remove('active');
		} else {
		  // Si l'élément <li> cliqué n'a pas la classe active
		  // Vérifier s'il y a déjà un autre <li> avec la classe active
		  let activeLi = wrapper.querySelector('.active');
		  if (activeLi) {
			// Si un autre élément a la classe active, on la retire de cet élément
			activeLi.classList.remove('active');
		  }
		  // Ajouter la classe active à l'élément <li> cliqué
		  li.classList.add('active');
		}
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
