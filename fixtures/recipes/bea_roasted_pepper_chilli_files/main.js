(function() {
	"use strict";
    
    var banner = document.getElementById("Banner");	
    
	function initBanner() {	
        
        doAnimation();
	}
	
	function doAnimation() {
        var triangle = document.querySelectorAll(".triangle");
        
        // timeline
	    var tl = new TimelineMax({ repeat: -1, repeatDelay: 0 });
	    var loop = 0;

	    // Number of rotations - change if needed
	    var loopMax = 2;
        
        // animation
        tl.set("#Banner", {css:{display:"block"}, onComplete: function(){
            for (var i = 0; i < triangle.length; i++) {
                var tl = new TimelineMax();   
                tl.set(triangle[i], {y: -320});
                tl.to(triangle[i], 0.6, {y: 0}, i*0.01);
            } 
        }});
        
        tl.set(["#logo", "#unlearn_leasing", "#cta", "#terms_first", "#terms_second"], {autoAlpha:0});
        
        tl.set("#type_car_stack", {css:{display:"block"}, delay: 2.8, onComplete: function(){
            for (var i = 0; i < triangle.length; i++) {
                var tl = new TimelineMax();   
                tl.set(triangle[i], {y: 0});
                tl.to(triangle[i], 1.8, {y: 350}, i*0.01);
            }   
        }});
        
        tl.set("#end", {css:{display:"block"}});
        tl.to("#type_car_stack", 1.5, {y:"-266", ease:Strong.easeInOut, delay: 5.5});
        tl.to("#logo", 0.6, {autoAlpha:1, ease:Strong.easeIn}, "-=0.5");
        tl.to("#terms_first", 0.6, {autoAlpha:1, ease:Strong.easeIn}, "-=0.75");
        tl.add("end", "+=1.75");
        tl.to("#terms_first", 0.5, {autoAlpha:0, ease:Strong.easeIn}, "end");
        tl.to("#from_ford_lease", 0.5, {autoAlpha:0, ease:Strong.easeIn}, "end");
        tl.to("#unlearn_leasing", 0.75, {autoAlpha:1, ease:Strong.easeIn}, "end");
        tl.to("#terms_second", 0.75, {autoAlpha:1, ease:Strong.easeIn}, "end+=0.25");
        tl.to("#cta", 0.75, {autoAlpha:1, ease:Strong.easeIn}, "end+=1.25");
        
        tl.call(loopCheck);

        tl.to("#cta", 0.75, { autoAlpha: 0, ease: Strong.easeIn }, "end+=3.5");
        tl.to("#terms_second", 0.75, { autoAlpha: 0, ease: Strong.easeIn }, "end+=3.5");
        tl.to("#type_car_stack", 0.75, { autoAlpha: 0, ease: Strong.easeIn }, "end+=3.5");
        tl.to("#unlearn_leasing", 0.75, { autoAlpha: 0, ease: Strong.easeIn }, "end+=3.5");
        tl.to("#logo", 0.75, { autoAlpha: 0, ease: Strong.easeIn }, "end+=3.5");

        function loopCheck() {
            console.log("loopCheck");
            loop++;
            if (loop < loopMax) {
                console.log("repeat");
                tl.play();
            } else {
                console.log("end");
                tl.pause();
            }

        }
	}
	
	if (BANNER.isPoliteLoadComplete) {
		initBanner();
	} else {
		document.body.addEventListener("politeLoadComplete", initBanner);
	}

})();