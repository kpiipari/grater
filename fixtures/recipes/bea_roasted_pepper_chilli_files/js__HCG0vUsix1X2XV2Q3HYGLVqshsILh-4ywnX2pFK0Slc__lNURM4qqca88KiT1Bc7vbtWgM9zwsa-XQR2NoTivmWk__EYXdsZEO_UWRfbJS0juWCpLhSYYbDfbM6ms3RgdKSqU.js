var googletag=googletag||{};googletag.cmd=googletag.cmd||[];(function(){var gads=document.createElement('script');gads.async=true;var useSSL='https:'==document.location.protocol;gads.src=(useSSL?'https:':'http:')+'//www.googletagservices.com/tag/js/gpt.js';var node=document.getElementsByTagName('script')[0];node.parentNode.insertBefore(gads,node);})();(function($){var awaitingInit=[],init=false;function listenerCount(domEl,listener){if(typeof $._data(domEl,"events")[listener]==="undefined"){return 0;}
return $._data(domEl,"events")[listener].length;}
Drupal.GPT=Drupal.GPT||{};Drupal.GPT.slots=Drupal.GPT.slots||{};Drupal.GPT.attachTargeting=function(slot,targeting,override){var key,values,i;if(typeof override==='undefined'){override=false;}
for(key in targeting){if(override){values=[];}
else{values=slot.getTargeting(key);}
for(i in targeting[key]){if('eval'in targeting[key][i]&&Boolean(targeting[key][i].eval)){try{values.push(eval(targeting[key][i].value));}
catch(e){}}
else{values.push(targeting[key][i].value);}}
slot.setTargeting(key,values);}};Drupal.GPT.buildSizeMapping=function(sizes){var i=0;var m={mapping:googletag.sizeMapping(),define:null};for(i;i<sizes.length;i++){m.mapping.addSize(sizes[i][0],sizes[i][1]);if(sizes[i][1].length){if(typeof sizes[i][1][0]==='number'){m.define=sizes[i][1];}
else{m.define=sizes[i][1][0];}}}
return m;};Drupal.GPT.createSlot=function(slotId,definition,pageTargeting){awaitingInit.push([slotId,definition,pageTargeting]);}
Drupal.GPT.addSlot=function(slotId,definition,pageTargeting){googletag.cmd.push(function(){jQuery(document).trigger('gptSlotDefine',[slotId]);});googletag.cmd.push(definition);if(pageTargeting){googletag.cmd.push(function(){Drupal.GPT.attachTargeting(Drupal.GPT.grabSlot(slotId),Drupal.settings.gpt.targeting);});}
googletag.cmd.push(function(){jQuery(document).trigger('gptSlotDefined',[slotId]);});Drupal.GPT.displaySlot(slotId);};Drupal.GPT.displaySlot=function(slotId){googletag.cmd.push(function(){googletag.display(slotId);});};Drupal.GPT.grabSlot=function(slotId){if(typeof slotId==='undefined'){return Drupal.GPT.slots;}
if(typeof this.slots[slotId]!=='undefined'){return Drupal.GPT.slots[slotId];}
return false;};Drupal.GPT.refreshSlots=function(slots){if(typeof slots==='undefined'){slots=null;}
var maxDelay=500;googletag.cmd.push(function(){Drupal.GPT.wait(maxDelay,document,'gptSlotsRefresh',[slots],function(){googletag.pubads().updateCorrelator();googletag.pubads().refresh(slots,{changeCorrelator:false});});});}
Drupal.GPT.updateCorrelator=function(){googletag.cmd.push(function(){googletag.pubads().updateCorrelator();});}
Drupal.GPT.unitPath=function(){var p=[Drupal.settings.gpt.networkCode];if('targetedUnit'in Drupal.settings.gpt&&Drupal.settings.gpt.targetedUnit.length){p.push(Drupal.settings.gpt.targetedUnit);}
return'/'+p.join('/');}
Drupal.GPT.wait=function(timeout,domEl,eventName,args,action){var count=listenerCount(domEl,eventName);if(count===0){action();return;}
var delay=setTimeout(function(){count=0;action();},timeout);var done=function(){count--;if(count===0){clearTimeout(delay);action();}}
args.unshift(done);$(domEl).trigger(eventName,args);}
Drupal.behaviors.gpt={attach:function(context,settings){if(!init){init=true;googletag.cmd.push(function(){var gptDefineSlot=googletag.defineSlot;googletag.defineSlot=function(adUnitPath,size,div){Drupal.GPT.slots[div]=gptDefineSlot(adUnitPath,size,div);return Drupal.GPT.slots[div];};var gptDefineOutOfPageSlot=googletag.defineOutOfPageSlot;googletag.defineOutOfPageSlot=function(adUnitPath,div){Drupal.GPT.slots[div]=gptDefineOutOfPageSlot(adUnitPath,div);return Drupal.GPT.slots[div];};if(settings.gpt.setPageLevelTargeting){var pageTargeting=googletag.pubads();Drupal.GPT.attachTargeting(pageTargeting,Drupal.settings.gpt.targeting,true);}
if(settings.gpt.collapseEmptyDivs){googletag.pubads().collapseEmptyDivs();}
googletag.pubads().enableSingleRequest();googletag.pubads().disableInitialLoad();googletag.enableServices();});}
googletag.cmd.push(function(){for(var i=0;i<awaitingInit.length;i++){Drupal.GPT.addSlot(awaitingInit[i][0],awaitingInit[i][1],awaitingInit[i][2]);}});googletag.cmd.push(function(){var newSlots=[];for(var i=0;i<awaitingInit.length;i++){newSlots.push(Drupal.GPT.grabSlot(awaitingInit[i][0]));}
googletag.pubads().refresh(newSlots);awaitingInit=[];});}};})(jQuery);;/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-boxsizing-csstransforms3d-csstransitions-datauri-mediaqueries-rgba-touchevents-domprefixes-mq-prefixes-printshiv-setclasses-testallprops-testprop-teststyles !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,i,a,s;for(var u in b)if(b.hasOwnProperty(u)){if(e=[],t=b[u],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)a=e[i],s=a.split("."),1===s.length?Modernizr[s[0]]=o:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),A.push((o?"":"no-")+s.join("-"))}}function i(e){var t=C.className,n=Modernizr._config.classPrefix||"";if(E&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),E?C.className.baseVal=t:C.className=t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):E?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(){var e=t.body;return e||(e=a(E?"svg":"body"),e.fake=!0),e}function u(e,n,r,o){var i,u,l,c,f="modernizr",d=a("div"),p=s();if(parseInt(r,10))for(;r--;)l=a("div"),l.id=o?o[r]:f+(r+1),d.appendChild(l);return i=a("style"),i.type="text/css",i.id="s"+f,(p.fake?p:d).appendChild(i),p.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),d.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",c=C.style.overflow,C.style.overflow="hidden",C.appendChild(p)),u=n(d,e),p.fake?(p.parentNode.removeChild(p),C.style.overflow=c,C.offsetHeight):d.parentNode.removeChild(d),!!u}function l(e,t){return!!~(""+e).indexOf(t)}function c(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function f(e,t){if("object"==typeof e)for(var n in e)k(e,n)&&f(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),o=Modernizr[r[0]];if(2==r.length&&(o=o[r[1]]),"undefined"!=typeof o)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),i([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function d(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var o;for(var i in e)if(e[i]in t)return n===!1?e[i]:(o=t[e[i]],r(o,"function")?d(o,n||t):o);return!1}function m(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function h(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(m(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+m(t[o])+":"+r+")");return i=i.join(" or "),u("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function g(e,t,o,i){function s(){f&&(delete B.style,delete B.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var u=h(e,o);if(!r(u,"undefined"))return u}for(var f,d,p,m,g,v=["modernizr","tspan"];!B.style;)f=!0,B.modElem=a(v.shift()),B.style=B.modElem.style;for(p=e.length,d=0;p>d;d++)if(m=e[d],g=B.style[m],l(m,"-")&&(m=c(m)),B.style[m]!==n){if(i||r(o,"undefined"))return s(),"pfx"==t?m:!0;try{B.style[m]=o}catch(y){}if(B.style[m]!=g)return s(),"pfx"==t?m:!0}return s(),!1}function v(e,t,n,o,i){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+P.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?g(s,t,o,i):(s=(e+" "+T.join(a+" ")+a).split(" "),p(s,t,n))}function y(e,t,r){return v(e,n,n,t,r)}var A=[],b=[],w={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){b.push({name:e,fn:t,options:n})},addAsyncTest:function(e){b.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var S=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];w._prefixes=S;var C=t.documentElement,E="svg"===C.nodeName.toLowerCase();E||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=E.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=E.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),E.elements=n+" "+e,l(t)}function i(e){var t=C[e[w]];return t||(t={},S++,e[w]=S,C[S]=t),t}function a(e,n,r){if(n||(n=t),g)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():b.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||A.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function s(e,n){if(e||(e=t),g)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),a=0,s=r(),u=s.length;u>a;a++)o.createElement(s[a]);return o}function u(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return E.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(E,t.frag)}function l(e){e||(e=t);var r=i(e);return!E.shivCSS||h||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),g||u(e,r),e}function c(e){for(var t,n=e.getElementsByTagName("*"),o=n.length,i=RegExp("^(?:"+r().join("|")+")$","i"),a=[];o--;)t=n[o],i.test(t.nodeName)&&a.push(t.applyElement(f(t)));return a}function f(e){for(var t,n=e.attributes,r=n.length,o=e.ownerDocument.createElement(T+":"+e.nodeName);r--;)t=n[r],t.specified&&o.setAttribute(t.nodeName,t.nodeValue);return o.style.cssText=e.style.cssText,o}function d(e){for(var t,n=e.split("{"),o=n.length,i=RegExp("(^|[\\s,>+~])("+r().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),a="$1"+T+"\\:$2";o--;)t=n[o]=n[o].split("}"),t[t.length-1]=t[t.length-1].replace(i,a),n[o]=t.join("}");return n.join("{")}function p(e){for(var t=e.length;t--;)e[t].removeNode()}function m(e){function t(){clearTimeout(a._removeSheetTimer),r&&r.removeNode(!0),r=null}var r,o,a=i(e),s=e.namespaces,u=e.parentWindow;return!_||e.printShived?e:("undefined"==typeof s[T]&&s.add(T),u.attachEvent("onbeforeprint",function(){t();for(var i,a,s,u=e.styleSheets,l=[],f=u.length,p=Array(f);f--;)p[f]=u[f];for(;s=p.pop();)if(!s.disabled&&x.test(s.media)){try{i=s.imports,a=i.length}catch(m){a=0}for(f=0;a>f;f++)p.push(i[f]);try{l.push(s.cssText)}catch(m){}}l=d(l.reverse().join("")),o=c(e),r=n(e,l)}),u.attachEvent("onafterprint",function(){p(o),clearTimeout(a._removeSheetTimer),a._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var h,g,v="3.7.3",y=e.html5||{},A=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,b=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,w="_html5shiv",S=0,C={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",h="hidden"in e,g=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){h=!0,g=!0}}();var E={elements:y.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:v,shivCSS:y.shivCSS!==!1,supportsUnknownElements:g,shivMethods:y.shivMethods!==!1,type:"default",shivDocument:l,createElement:a,createDocumentFragment:s,addElements:o};e.html5=E,l(t);var x=/^$|\b(?:all|print)\b/,T="html5shiv",_=!g&&function(){var n=t.documentElement;return!("undefined"==typeof t.namespaces||"undefined"==typeof t.parentWindow||"undefined"==typeof n.applyElement||"undefined"==typeof n.removeNode||"undefined"==typeof e.attachEvent)}();E.type+=" print",E.shivPrint=m,m(t),"object"==typeof module&&module.exports&&(module.exports=E)}("undefined"!=typeof e?e:this,t);var x="Moz O ms Webkit",T=w._config.usePrefixes?x.toLowerCase().split(" "):[];w._domPrefixes=T,Modernizr.addTest("rgba",function(){var e=a("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1});var _="CSS"in e&&"supports"in e.CSS,N="supportsCSS"in e;Modernizr.addTest("supports",_||N);var j=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return u("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();w.mq=j,Modernizr.addTest("mediaqueries",j("only all"));var z=w.testStyles=u;Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",S.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");z(r,function(e){n=9===e.offsetTop})}return n});var P=w._config.usePrefixes?x.split(" "):[];w._cssomPrefixes=P;var k;!function(){var e={}.hasOwnProperty;k=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),w._l={},w.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},w._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){w.addTest=f}),Modernizr.addAsyncTest(function(){function e(){var e=new Image;e.onerror=function(){f("datauri",!0),Modernizr.datauri=new Boolean(!0),Modernizr.datauri.over32kb=!1},e.onload=function(){f("datauri",!0),Modernizr.datauri=new Boolean(!0),Modernizr.datauri.over32kb=1==e.width&&1==e.height};for(var t="R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";t.length<33e3;)t="\r\n"+t;e.src="data:image/gif;base64,"+t}-1!==navigator.userAgent.indexOf("MSIE 7.")&&setTimeout(function(){f("datauri",!1)},10);var t=new Image;t.onerror=function(){f("datauri",!1)},t.onload=function(){1==t.width&&1==t.height?e():f("datauri",!1)},t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="});var M={elem:a("modernizr")};Modernizr._q.push(function(){delete M.elem});var B={style:M.elem.style};Modernizr._q.unshift(function(){delete B.style});w.testProp=function(e,t,r){return g([e],n,t,r)};w.testAllProps=v,w.testAllProps=y,Modernizr.addTest("boxsizing",y("boxSizing","border-box",!0)&&(t.documentMode===n||t.documentMode>7)),Modernizr.addTest("csstransforms3d",function(){var e=!!y("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in C.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",z(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("csstransitions",y("transition","all",!0)),o(),i(A),delete w.addTest,delete w.addAsyncTest;for(var D=0;D<Modernizr._q.length;D++)Modernizr._q[D]();e.Modernizr=Modernizr}(window,document);
;/**/
