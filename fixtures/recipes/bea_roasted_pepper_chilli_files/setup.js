(function() {
	"use strict";
	
	 window.triggerEvent = function (el, eventName) {
	 	var event;
	 	if (document.createEvent) {
	 		event = document.createEvent('HTMLEvents');
	 		event.initEvent(eventName, true, true);
	 	} else if (document.createEventObject) { // IE < 9
	 		event = document.createEventObject();
	 		event.eventType = eventName;
	 	}
	 	event.eventName = eventName;
	 	if (el.dispatchEvent) {
	 		el.dispatchEvent(event);
	 	} else if (el.fireEvent && htmlEvents['on' + eventName]) { // IE < 9
	 		el.fireEvent('on' + event.eventType, event); // can trigger only real event (e.g. 'click')
	 	} else if (el[eventName]) {
	 		el[eventName]();
	 	} else if (el['on' + eventName]) {
	 		el['on' + eventName]();
	 	}
	 }
	 window.addEvent = function (el, type, handler) {
	 	if (el.addEventListener) {
	 		el.addEventListener(type, handler, false);
	 	} else if (el.attachEvent && htmlEvents['on' + type]) { // IE < 9
	 		el.attachEvent('on' + type, handler);
	 	} else {
	 		el['on' + type] = handler;
	 	}
	 }
	
	function preInit() {
		if (!window.Enabler) {
			//console.log("!!! ENABLER NOT ENABLED !!!");
			
			/*var w = document.createElement("div");
			var ws = w.style;
			w.innerHTML = "ENABLER NOT ENABLED";
			ws.backgroundColor = "#900";
			ws.color = "#fff";
			ws.textAlign = "center";
			ws.fontFamily = "Helvetica, Arial, sans-serif";
			ws.fontWeight = "bold";
			ws.fontSize = "12px";
			ws.padding = "5px 10px";
			ws.position = "relative";*/
			
			//document.body.insertBefore(w, document.body.firstChild);
			window.Enabler = {
				isInitialized: function () {
					return true;
				},
				isPageLoaded: function () {
					return true;
				},
				exit: function(a) {
					console.log("DUMMY EXIT:", a);
				}
			}
		}

		if (Enabler.isInitialized()) {
			EnablerInit();
		} else {
			Enabler.addEventListener(studio.events.StudioEvent.INIT, EnablerInit);
		}
	}

	function EnablerInit() {
		if (Enabler.isPageLoaded()) {
			doPoliteLoad();
		} else {
			Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, doPoliteLoad);
		}
	}

	function doPoliteLoad() {
		politeLoad(BANNER.politeLoadManifest, function () {
			politeComplete();
		});
	};

	function politeLoad(urls, onComplete) {

		var loaded = 0;
		var checkProgress = function () {
			if (++loaded === urls.length && onComplete) {
				onComplete();
			}
		};

		for (var i = 0; i < urls.length; i++) {
			var fileArray = urls[i].split(".");
			var fileType = fileArray[fileArray.length-1];
			if (fileType == "css") {
				loadCss(urls[i], checkProgress);
			} else {
				loadScript(urls[i], checkProgress);
			}
		}

	};

	function loadScript(url, callback) {
		var script = document.createElement('script')
		script.type = 'text/javascript';
		if (script.readyState) {
			script.onreadystatechange = function () {
				if (script.readyState == 'loaded' || script.readyState == 'complete') {
					script.onreadystatechange = null;
					callback();
				}
			};
		} else {
			script.onload = function () {
				callback();
			};
		}
		script.src = url;
		document.getElementsByTagName('head')[0].appendChild(script);
	};
	
	function loadCss(url, callback) {
		var link = document.createElement("link");
		link.href = url;
		link.type = "text/css";
		link.rel = "stylesheet";
		document.getElementsByTagName("head")[0].appendChild(link);
		callback(); // Detecting CSS load complete is difficult. Let's just say it's done and get one with it.
	}

	function politeComplete() {
		BANNER.isPoliteLoadComplete = true;
		window.triggerEvent(document.body, "politeLoadComplete");
	}

	preInit();

})();
