/*
DOUBLECLICK NON RICH MEDIA POLITE LOAD, author: Adam Crowley
*/
var fileLoadCount;
var fileref;

// CLICK THROUGH
clickType = 'click';
// (navigator.userAgent.match(/iPhone/i))||(navigator.userAgent.match(/iPad/i))||(navigator.userAgent.match(/iPod/i))||(navigator.userAgent.match(/Android/i))?'touchend':'click';
clickThru.addEventListener(clickType, exitBtn_clickHandler, false);

function exitBtn_clickHandler() {
	showBackupAndStop();
	console.log("Exit Btn Click through");
	window.open(clickTag, "_blank");
}

//SHOW BACKUP AND STOP
function showBackupAndStop() {
	var backup = document.getElementById('backup');
	backup.style.opacity = "1";
	backup.style.display = "block";

	if(typeof tl != 'undefined') tl.pause();

}

function pageLoadedHandler()
{
	/* LOAD FILES */
	fileLoadCount = 16;
	loadFile("https://s0.2mdn.net/ads/studio/cached_libs/tweenmax_1.19.0_643d6911392a3398cb1607993edabfa7_min.js", "js");
	loadFile("banner.js", "js");
	loadFile("imgs/bg.jpg", "img", "bg", "cont");
	loadFile("imgs/AudiRings.png", "img", "AudiRings", "cont");
	loadFile("imgs/c1.png", "img", "c1", "cont");
	loadFile("imgs/c2.png", "img", "c2", "cont");
	loadFile("imgs/c3.png", "img", "c3", "cont");
	loadFile("imgs/c4.png", "img", "c4", "cont");
	loadFile("imgs/c5.png", "img", "c5", "cont");
	loadFile("imgs/cta.png", "img", "cta", "cont");
	loadFile("imgs/fs.png", "img", "fs", "cont");
	loadFile("imgs/fs2.png", "img", "fs2", "cont");
	loadFile("imgs/car.png", "img", "carInner", "car");
	loadFile("imgs/wheel.png", "img", "wheel1", "car");
	loadFile("imgs/wheel.png", "img", "wheel2", "car");
	loadFile("backup.jpg", "img", "backup", "cont");

}



loadFile = function(filename, filetype, id, container)
{
	if ( filetype == "js" )
	{
		fileref = document.createElement('script');
      	fileref.setAttribute("type","text/javascript");
      	fileref.setAttribute("src", filename);
		document.getElementsByTagName("head")[0].appendChild(fileref);
	}
	else if ( filetype == "img" )
	{
		fileref = document.createElement("img");
		fileref.id = id;
		fileref.src = filename;
		var c = document.getElementById(container);
		c.appendChild(fileref);
	}

	fileref.onload = function(event)
	{
		console.log(fileLoadCount);
		fileLoadCount--;
		if ( fileLoadCount < 1 )
		{
			console.log("initAd");
			initAd();
		}

	};
}


/* ******* FALLBACK ************** */
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");

var backup = document.getElementById("backup");

if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))
{   // If Internet Explorer, return version number
	var versionNumber = (parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
	//alert(versionNumber);
	if(versionNumber == 7 || versionNumber == 8 || versionNumber == 9 )
	{
		//Show backup image if IE7 or 8 or 9
		backupCont = document.getElementById("cont");
		backup = document.createElement("img");
		backupCont.appendChild(backup);
		backup.id = "backup";
		backup.src = "backup.jpg";
		backup.style.opacity="1";
		backup.style.display="block";
	}
	else
	{
		//If >= IE10, play banner
		pageLoadedHandler();
	}
}
else
{
	// If another browser, return 0 and start banner
	pageLoadedHandler();
}
