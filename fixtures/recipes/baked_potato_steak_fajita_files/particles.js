(function(window){

	/**
	*  Basic example setup
	*  @class ParticleExample
	*  @constructor
	*  @param {String[]} imagePaths The local path to the image source
	*  @param {Object} config The emitter configuration
	*/
	var ParticleExample = function(imagePaths, config, type, useParticleContainer)
	{
		var canvas = document.getElementById("particlesStage");
		var particlesEmitter = document.getElementById("particlesEmitter");
		// Basic PIXI Setup
		var rendererOptions =
		{
			view: canvas,
			transparent : true
		};
		/*var preMultAlpha = !!options.preMultAlpha;
		if(rendererOptions.transparent && !preMultAlpha)
			rendererOptions.transparent = "notMultiplied";*/


		var particlesStage = new PIXI.Container(),
			emitter = new PIXI.particles.Emitter,
			renderer = PIXI.autoDetectRenderer(canvas.width, canvas.height, rendererOptions),
			bg = null;
		
		var framerate = 0;
		var particleCount;

		// Calculate the current time
		var elapsed = Date.now();
		
		var updateId;

		// Update function every frame
		var update = function(){
			emitter.updateOwnerPos(particlesEmitter.offsetLeft, particlesEmitter.offsetTop);
			// Update the next frame
			updateId = requestAnimationFrame(update);

			var now = Date.now();
			emitter.update((now - elapsed) * 0.001);
			
			framerate.innerHTML = (1000 / (now - elapsed)).toFixed(2);
			
			elapsed = now;
			
			if(particleCount)
				particleCount.innerHTML = emitter.particleCount;

			// render the particlesStage
			renderer.render(particlesStage);
		};



		// Preload the particle images and create PIXI textures from it
		var urls, makeTextures = false;
		if(imagePaths.spritesheet)
			urls = [imagePaths.spritesheet];
		else if(imagePaths.textures)
			urls = imagePaths.textures.slice();
		else
		{
			urls = imagePaths.slice();
			makeTextures = true;
		}
		urls.push("img/particle.png");
		var loader = PIXI.loader;
		for(var i = 0; i < urls.length; ++i)
			loader.add("img" + i, urls[i]);
		loader.load(function()
		{
			// bg = new PIXI.Sprite(PIXI.Texture.fromImage("img/particle.png"));
			// //bg is a 1px by 1px image
			// bg.scale.x = canvas.width;
			// bg.scale.y = canvas.height;
			// bg.tint = 0xff0000;
			// particlesStage.addChild(bg);

			//collect the textures, now that they are all loaded
			var art;
			if(makeTextures)
			{
				art = [];
				for(var i = 0; i < imagePaths.length; ++i)
					art.push(PIXI.Texture.fromImage(imagePaths[i]));
			}
			else
				art = imagePaths.art;
			// Create the new emitter and attach it to the particlesStage
			var emitterContainer;
			if(useParticleContainer)
			{
				emitterContainer = new PIXI.ParticleContainer();
				emitterContainer.setProperties({
					scale: true,
					position: true,
					rotation: true,
					uvs: true,
					alpha: true
				});
			}
			else
				emitterContainer = new PIXI.Container();
			particlesStage.addChild(emitterContainer);
			emitter = new PIXI.particles.Emitter(
				emitterContainer,
				art,
				config
			);
			if(type == "path")
				emitter.particleConstructor = PIXI.particles.PathParticle;
			else if(type == "anim")
				emitter.particleConstructor = PIXI.particles.AnimatedParticle;

			// Center on the particlesStage
			// emitter.updateOwnerPos(particlesEmitter.offsetLeft, particlesEmitter.offsetTop);
			//emitter.updateOwnerPos($("#particlesEmitter").css("left"), $("#particlesEmitter").css("top");

			// Click on the canvas to trigger
			// canvas.addEventListener('mouseup', function(e){ //$("#particlesEmitter").addEventListener('mouseup', function(e){
			// 	if(!emitter) return;
			// 	emitter.emit = true;
			// 	emitter.resetPositionTracking();
			// 	emitter.updateOwnerPos(e.offsetX || e.layerX, e.offsetY || e.layerY);
			// });

			// Start the update
			update();
			
			window.destroyEmitter = function()
			{
				emitter.destroy();
				emitter = null;
				window.destroyEmitter = null;
				cancelAnimationFrame(updateId);
				
				renderer.render(particlesStage);
			};
		});
	};

	// Assign to global space
	window.ParticleExample = ParticleExample;

}(window));