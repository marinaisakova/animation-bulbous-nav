
$(document).ready(initPage);
function initPage(){
	initNav();
}
var pfx = ["webkit", "moz", "MS", "o", ""];
function PrefixedEvent(element, type, callback) {
    for (var p = 0; p < pfx.length; p++) {
        if (!pfx[p]) type = type.toLowerCase();
        element.addEventListener(pfx[p] + type, callback, false);
    }
}
// handle animation events
function AnimationListener(el) {
	var animateClass = "animate";
	$(this).removeClass(animateClass);
}

function initNav() {
	var animateClass = "animate";
	var nav = document.getElementById('nav');
	var el = document.getElementById('bulbous');
	PrefixedEvent(el, "AnimationEnd", AnimationListener);
	$(nav).on("mouseenter","a", function (event) {
		$(el).addClass('visible');
		a = $(this).offset();
		$(el).removeClass('right-position');
		$(el).width($(this).outerWidth());
		if ( a.left > $(el).offset().left )
		{
			$(el).addClass('right-position');	
		}
		el.style.left = a.left + 'px';
		$(el).addClass(animateClass);
    });
    $(nav).on("mouseout","a", function (event) {
		$(el).removeClass('visible');
    });
}
