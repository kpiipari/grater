/* Audi - Tactical Q1 2017  */
var tl;

function initAd()
{
	tl = new TimelineLite({onUpdate:updateSlider, delay:0.4});

	tl.set( [car, carInner, wheel1, wheel2], { force3D: true, rotationZ:0.01 });
	tl.set( [wheel1, wheel2], { transformOrigin:"50% 50%", scale:0.97 });
	tl.set( wheel1, { x: 57, y: 182 });
	tl.set( wheel2, { x: 201, y: 182 });

	tl.to( [bg,AudiRings,car,carInner,wheel1,wheel2], 0.4, { opacity:1, ease: Power1.easeInOut });

	//bring in car
	tl.from( car,2	, { x: -350, ease: Power1.easeOut }, '+=0.6');
	//wheel rotations formula / ( pi*diameter)        (x360)
	//in this case ( 350 / 113 ) * 360 = 1115
	tl.to( [wheel1,wheel2], 2, { rotation:1115, ease: Power1.easeOut }, '-=2');

	tl.to( c1, 0.4, { opacity:1, ease: Power1.easeInOut }, '-=0.4');
	tl.to( c1, 0.4, { opacity:0, ease: Power1.easeInOut }, '+=1');
	tl.to( c2, 0.4, { opacity:1, ease: Power1.easeInOut });
	// tl.to( fs, 0.4, { opacity:1, ease: Power1.easeInOut }, '-=0.4');
	tl.to( c3, 0.4, { opacity:1, ease: Power1.easeInOut }, '+=1');
	tl.to( c4, 0.4, { opacity:1, ease: Power1.easeInOut }, '+=0.4');

	tl.to( [c3,c4], 0.4, { opacity:0, ease: Power1.easeInOut }, '+=2');
	tl.to( [cta,c5, fs], 0.4, { opacity:1, ease: Power1.easeInOut });
    tl.to( fs, 0.4, { opacity:0, ease: Power1.easeInOut, }, '+=4');
    tl.to( fs2, 0.4, { opacity:1, ease: Power1.easeInOut, });

	/*
	var tl = new TimelineLite({onUpdate:updateSlider, delay:0.4});

	tl.set( [Stamp1], { scale: 1, rotation: -60 });
	tl.set( [Stamp2], { scale: 0.5 });

	tl.to( [bg,logo], 0.5, { opacity:1, ease: Power1.easeInOut });

	var loop = 0;
	run();

	function run()
	{
		tl.to( Stamp2, 0.5, { opacity:0, ease: Power1.easeInOut });

		tl.to( Stamp1, 0.4, { scale: 0.5, opacity:1, rotation:0, ease: Power2.easeIn }, '+=0.5');
		//shake
		tl.to( bg, 0, { scale: 0.98, rotation:2, });
		tl.to( bg,1, { scale: 1, rotation:0, ease: Elastic.easeOut.config(0.8, 0.2), y: 0   } );

		tl.to( Stamp1, 0, { opacity:0, ease: Power1.easeInOut });
		tl.to( Stamp2, 0, { opacity:1, ease: Power1.easeInOut });


		tl.set( [Stamp1], { scale: 1, rotation: -60 }, '+=2.4');

		loop ++;
		if (loop < 3) { run(); }
	}
		*/








	/*
	***************************************************************************************************************************************************************************************************************************************
	progress slider
	****************************************************************************************************************************************************************************************************************************************
	*/
	var progressSlider = document.getElementById('progressSlider');
	var progressBtn = document.getElementById('progressBtn');
	var playPauseBtn =  document.getElementById('playControl');
	playPauseBtn.addEventListener('click', playPause, false);
	progressSlider.addEventListener('mousedown', sliderStart, false);
	progressSlider.addEventListener('touchstart', sliderStart, false);
	window.addEventListener('mouseup', sliderEnd, false);
	window.addEventListener('touchend', sliderEnd, false);
	var isPlaying = true;

	//width
	var progressSliderWidth = progressSlider.clientWidth;
	var progressBtnWidth = progressBtn.offsetWidth;
	//position
	var progressSliderX = progressSlider.getBoundingClientRect().left;

	function playPause()
	{
		if (isPlaying)
		{
			isPlaying = false;
			tl.pause();
			playPauseBtn.innerHTML = 'PLAY';
		}
		else
		{
			isPlaying = true;
			tl.play();
			playPauseBtn.innerHTML = 'PAUSE';
		}
	}

	function updateSlider()
	{
		tlProgress = tl.progress() *  ( progressSliderWidth - progressBtnWidth );
		progressBtn.style.marginLeft =  tlProgress.toString() + "px";
		//time
		fb.innerHTML = Math.round( tl.totalTime() * 100 )/100;
	}

	function sliderStart(e)
	{
		tl.pause();
		progressSlider.addEventListener('mousemove', sliderMove, false);
		progressSlider.addEventListener('touchmove', sliderMove, false);
	}
	function sliderEnd(e)
	{
		if (isPlaying) tl.play();
		progressSlider.removeEventListener('mousemove', sliderMove, false);
		progressSlider.removeEventListener('touchmove', sliderMove, false);
	}

	function sliderMove(e)
	{
		clientX = e.clientX || e.touches[0].clientX;
		clientX -= progressSliderX;
		//fb.innerHTML = clientX;
		mousePos = clientX - (progressBtnWidth/2);
		if ( mousePos >= 0 && mousePos <= (progressSliderWidth - progressBtnWidth) )
		{
			progressBtn.style.marginLeft =  mousePos.toString() + "px";
			perc = mousePos / (progressSliderWidth - progressBtnWidth);
			tl.progress(perc).pause();
		}
	}

	/* **************************************************************************   /   *********************************************************************************** */

};
