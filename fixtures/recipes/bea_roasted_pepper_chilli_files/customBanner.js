//----------------------------------------------------------------------
//variables
var startTime;

//----------------------------------------------------------------------
/*
getElementById wrapper to save bytes (& typing)
*/
function _id(idString) {
    var id = idString;
    if (idString.charAt(0) == '#') {
        id = idString.substring(1); //remove #
    }
    return document.getElementById(id);
}

//init called when everything is loaded and ready to go
function customBannerInit() {
    addListeners();
    initAnimation();
}

//start called when banner visible (after init)
function customBannerStart() {
    _id('loading_state').style.display = 'none';
    _id('main_content').style.visibility = 'visible';
    //small delay just so the eye has time to settle before starting animation
    setTimeout(startAnimation, 250);
}

//----------------------------------------------------------------------
//event listeners
function addListeners() {
    _id('default_exit').addEventListener('click', default_click, false);
}

//----------------------------------------------------------------------
//event handlers
function default_click(event) {
    Enabler.exit('default_exit');
}


//----------------------------------------------------------------------
//Animation start positions
function initAnimation() {

    TweenMax.defaultEase = Power1.easeInOut;

    var hideAtStart = [
        
        '#f2_txt1',
        '#f2_txt2',
        '#cta',
        '#suhdtv_logo',

    ];

    /*force3d:true keeps GPU acceleration on*/
    TweenMax.set(hideAtStart, {
        autoAlpha: 0,
        force3D: true
    });
}

//----------------------------------------------------------------------
function startAnimation() {
    /*
    examples
    tweenmax param - 
    z: 0.1, // use if jitter or shaking is really bad
    rotationZ: 0.01, // use if jitter or shaking is really bad
    force3D:true, // true=always GPU false=always CPU, default=CPU when static GPU only during tween
    
    TweenMax.to('#phone', 0.5, {
        x: 67,
        y: 70,
        scale: 0.8,
        delay: delay,
        overwrite: false
        
    });
    
    TweenMax.delayedCall(delay, func, ['param1', 'param2']);
    
    TweenMax.staggerTo([mc1, mc2, mc3], 1, {
        x: 100,
        onComplete: function (tween) {
            if (tween.target == mc1) {
                //item complete
            }
        },
        onCompleteParams: ['{self}']
    }, 1, allCompleteFunc);
    */

    startTime = new Date();
    showf1();
}

//call this at the end of animation sequence
function endAnimation() {
    var endTime = new Date()
    console.log('Animation duration: ' + ((endTime - startTime) / 1000) + ' seconds');
}



function showf1() {
    var tl = new TimelineMax({
        onComplete: showf1_complete,
        delay:0
    });
    tl.add(TweenMax.to('#f1_txt1', 1, {
        autoAlpha: 1,
        force3D: true
    }));
    tl.add(TweenMax.to('#tv', 1, {
        autoAlpha: 1,
        ease:Power1.easeIn, 
        force3D: true
    }));
}

function showf1_complete() {
    TweenMax.delayedCall(2.5, hidef1);
}

function hidef1() {
    var tl = new TimelineMax({
        onComplete: showf2
    });
    tl.add(TweenMax.to('#f1_txt1', 1, {
        autoAlpha: 0,
        force3D: true
    }));
}



function showf2() {
    var tl = new TimelineMax({
        onComplete: showf2_complete
    });
    tl.add(TweenMax.to('#f2_txt1', 1, {
        autoAlpha: 1,
        force3D: true
    }));
    tl.add(TweenMax.to('#premium_logo', 1, {
        autoAlpha: 0,
        force3D: true
    }),'+=2.5');
    tl.add(TweenMax.to(['#f2_txt2','#suhdtv_logo','#cta'], 1, {
        autoAlpha: 1,
        force3D: true
    }));
    
}


function showf2_complete() {
    endAnimation();
}
