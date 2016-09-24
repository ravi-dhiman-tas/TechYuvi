window.sr = ScrollReveal();
var revealAnim = {
	animateChars: function(el){
		var options = {
			reset: false,
			duration: 2000,
			origin: 'top',
			opacity: 0,
			rotate: {x: 30, y: 0, z: 0},
			scale: 1.1,
			delay: 300,
			mobile: false,
			useDelay: 'always',
			easing: 'cubic-bezier(0, 0.43, 0.3, 1.01)'
		}
		sr.reveal(el, options, 105);
	},
	animateTop: function(el) {
		var options = {
			reset: false,
			duration: 1000,
			origin: 'top',
			distance: '70px',
			opacity: 0,
			scale: 1,
			delay: 500,
			mobile: false,
			useDelay: 'onload',
			delay: 700,
			easing: 'cubic-bezier(0, 0.43, 0.3, 1.01)'
		}
		sr.reveal(el, options, 200);
	},
	animateRight: function(el) {
		var options = {
			reset: false,
			duration: 2000,
			origin: 'left',
			distance: '100%',
			opacity: 0,
			scale: 1,
			delay: 700,
			mobile: false,
			useDelay: 'onload',
			easing: 'cubic-bezier(0, 0.43, 0.3, 1.01)',
			viewOffset: {top: 60}
		}
		sr.reveal(el, options, 70);
	},
	animateLeft: function(el) {
		var options = {
			reset: false,
			duration: 2000,
			origin: 'right',
			distance: '100%',
			opacity: 0,
			scale: 1,
			delay: 500,
			mobile: false,
			useDelay: 'onload',
			easing: 'cubic-bezier(0, 0.43, 0.3, 1.01)',
			viewOffset: {top: 60}
		}
		sr.reveal(el, options, 70);
	},
	animateBottom: function(el) {
		var options = {
			reset: false,
			duration: 2000,
			origin: 'bottom',
			distance: '100%',
			opacity: 0,
			scale: 1,
			delay: 500,
			mobile: false,
			useDelay: 'onload',
			easing: 'cubic-bezier(0, 0.43, 0.3, 1.01)',
			viewOffset: {top: 60}
		}
		sr.reveal(el, options, 400);
	},
	splitTexts: function(el, cls) {
		var text = $(el).text(),
			chars = text.split(""),
			str = "<div>";
		for(var i = 0; i < chars.length; i++) {
			if(chars[i] == " ") {
				str += "</div> <div>";
			} else {
				str += "<span class='chars'>" + chars[i] + "</span>";
			}
		}
		str += "</div>";
		$(el).html(str);
	},
	init: function(){
		// header
		this.animateTop(".anim-top");
		this.splitTexts(".split-to-1");
		this.animateChars(".chars");
		// section 1
		this.animateBottom(".anim-bottom-1");
		// seciton 2
		this.animateTop(".anim-top-2");
		this.animateLeft(".anim-right-2");
		// seciton 3
		this.animateBottom(".anim-bottom-3");
		this.animateLeft(".anim-right-3");
		// seciton 4
		this.animateTop(".anim-top-4");
		this.animateLeft(".anim-right-4");
		this.animateBottom(".anim-bottom-4");
		// seciton 5
		this.animateTop(".anim-top-5");
		this.animateRight(".anim-left-5");
		// seciton 6
		this.animateTop(".anim-top-6");
		this.animateBottom(".anim-bottom-6");
		// footer
		this.animateTop(".anim-top-7");
		this.animateBottom(".anim-bottom-7");
	}
}

revealAnim.init();

$("[data-scroll]").click(function(e){
	e.preventDefault();
	var target = $(this).attr("data-scroll");
	$("html, body").animate({
		scrollTop: $(target).offset().top
	}, 1000);
})