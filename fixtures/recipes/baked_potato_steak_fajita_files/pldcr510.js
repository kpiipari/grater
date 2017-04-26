/*
 Nielsen SDK package v5.1.0.17 
 (c) 2017 The Nielsen Company 
*/
/* PLDCR build v5.1.0.11*/
window.NOLCMB.registerLib("PLDCR",function(e){"use strict";function i(e,i){var t={};return t.set=function(e,i){return t.init=!0,t.elapsed=0,t.startTimeStamp=0,"function"==typeof e&&(t.funcCall=e),isNaN(i)||(t.intervalTime=i),t},t.play=function(e){return t.isActive||(e?(t.startTimeStamp=0,t.elapsed=0,t.setTimer()):t.setTimer(t.remaining),t.isActive=!0),t},t.pause=function(){return t.isActive&&(t.isActive=!1,t.remaining-=Date.now()-t.last,t.clearTimer()),t},t.stop=function(){return t.isActive=!1,t.remaining=t.intervalTime,t.clearTimer(),t},t.clearTimer=function(){window.clearTimeout(t.timeoutObject)},t.setTimer=function(e){var i=t;"function"==typeof t.funcCall&&(isNaN(e)&&(e=t.intervalTime),t.remaining=e,t.last=Date.now(),t.clearTimer(),t.timeoutObject=window.setTimeout(function(){i.tick()},e))},t.tick=function(){t.isActive&&(t.elapsed++,t.funcCall(),t.setTimer())},t.init?t:(t.set(e,i),t)}function t(){a.dcrTimer&&(a.latestDcrTickVal=a.dcrTimer.elapsed,e._listeners.fireEvent("dcrHeartbeat",a.dcrTimer.elapsed))}function r(i){e.globalHasFocus&&!e.globalHasFocus()&&(e._listeners.fireEvent("info",{type:"info",msg:"Page onBlur fired and stopped static timer: "+JSON.stringify(i,function(e,i){if("string"==typeof i)return i})}),a.dcrTimer&&a.dcrTimer.pause())}function n(i){e._listeners.fireEvent("info",{type:"info",msg:"Page onFocus fired and playing static timer: "+JSON.stringify(i,function(e,i){if("string"==typeof i)return i})}),a.dcrTimer&&a.dcrTimer.play(a._reset),a._reset=!1}function s(i){!document.hidden&&e.globalHasFocus&&e.globalHasFocus()?(e._listeners.fireEvent("info",{type:"info",msg:"Page visibilityApi - VISIBLE"}),a.dcrTimer&&a.dcrTimer.play(a._reset),a._reset=!1):(e._listeners.fireEvent("info",{type:"info",msg:"Page visibilityApi - HIDDEN"}),a.dcrTimer&&a.dcrTimer.pause())}function c(e){a.dcrTimer&&a.dcrTimer.stop()}var a=e.PLDCR=e.PLDCR||{dcrTimer:void 0,startDcrTime:0,latestDcrTickVal:0,_reset:!1},o="5.1.0",u="11",l=window.NOLCMB,d=e.getBaseBuildVer?e.getBaseBuildVer()+u:o+u;return a.startDcrTick=function(){},a.latestDcrTick=function(){return a.latestDcrTickVal},a.start=function(r){var n=!e.globalHasFocus||e.globalHasFocus();a._reset=r,(null===a.dcrTimer||void 0===a.dcrTimer||r)&&(n?(a.dcrTimer=i(t,1e3).play(!0),a._reset=!1):a.dcrTimer=i(t,1e3))},a.stop=function(){a.dcrTimer&&a.dcrTimer.stop()},a.init=function(e){l.browserSafeAddEventListener({element:window,eventType:"blur",func:r,useCapture:!1}),l.browserSafeAddEventListener({element:window,eventType:"focus",func:n,useCapture:!1}),l.browserSafeAddEventListener({element:window,eventType:"beforeunload",func:c,useCapture:!1}),l.browserSafeAddEventListener({element:window,eventType:"pagehide",func:c,useCapture:!1}),document.addEventListener&&document.addEventListener("visibilitychange",s)},a.built||(a.built=!0,a.BUILDVERSION=d,e.bindPlayers(a,"PLDCR")),a});