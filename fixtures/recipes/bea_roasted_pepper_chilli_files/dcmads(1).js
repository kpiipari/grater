(function(){var b=this;var d=function(a,f){if(!(1E-4>Math.random())){var c=Math.random();if(c<f){try{var q=new Uint32Array(1);b.crypto.getRandomValues(q);c=q[0]/65536/65536}catch(P){c=Math.random()}return a[Math.floor(c*a.length)]}}return null};(function(){var a=!1;try{var f=Object.defineProperty({},"passive",{get:function(){a=!0}});b.addEventListener("test",null,f)}catch(c){}return a})();var e=function(a,f){try{for(var c=null;c!=a;c=a,a=a.parent)switch(a.location.protocol){case "https:":return!0;case "file:":return!!f;case "http:":return!1}}catch(q){}return!0}(b)?"https:":"http:";var g={f:1,c:4},h={b:"40004006",a:"40004007"};var k=b.document,l=function(){var a=b.dcmads;return void 0!==a.eids?a.eids:b==b.top&&"srcdoc"in k.createElement("iframe")?(a=d([h.b,h.a],a.expts[4]))?"4|"+a:"":""};try{b.dcmads=b.dcmads||{};b.dcmads.startTime=(new Date).getTime();var m=b.dcmads,n=b.dcmads.version,p={loader:102};if(n)if(p.experiment=n.experiment,38==n.number||"p"==n.number)p.number=38;else if(39==n.number||"c"==n.number)p.number=39;if(!p.number){var r=d([38,39],.2);p.experiment=!!r;p.number=r||38}m.version=p;var t=b.dcmads,u;var v=b.dcmads.expts,w;b:{var x=typeof v;if("object"==x&&null!=v||"function"==x){for(var y in g){var z=v[g[y]];if("number"!=typeof z||0>z||1<z){w=!1;break b}}w=!0}else w=
!1}u=w?v:v={1:.5,4:.005};t.expts=u;b.dcmads.eids=l();var A,B=b.dcmads.version,C=B.number,D="";B.experiment&&38==C&&(D="?rxp=38x39");var E;if(!(E=k.currentScript)){var F=k.getElementsByTagName("script");E=F[F.length-1]}var G=E;A=(0==(G&&G.src||"").indexOf("http:")?"http:":"https:")+"//www.googletagservices.com/dcm/"+("impl_v"+C+".js"+D);if(b.dcmads.eids=="4|"+h.a){var H=k.createElement("script");H.src=A;var I=k.getElementsByTagName("script")[0];I&&I.parentNode&&I.parentNode.insertBefore(H,I)}else k.write('<script src="'+
A+'">\x3c/script>')}catch(a){if(.01>Math.random()){var J="&msg=";try{var K,L=a.toString();a.name&&-1==L.indexOf(a.name)&&(L+=": "+a.name);a.message&&-1==L.indexOf(a.message)&&(L+=": "+a.message);if(a.stack){var M=a.stack,N=L;try{-1==M.indexOf(N)&&(M=N+"\n"+M);for(var O;M!=O;)O=M,M=M.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");L=M.replace(/\n */g,"\n")}catch(f){L=N}}K=L;K=K.substring(0,1024);J+=encodeURIComponent(K)}catch(f){J+="extr"}k.write('<img style="display:none" src="'+(e+"//pagead2.googlesyndication.com/pagead/gen_204?id="+
("dcmads-err&ver=102&context=dcm.load"+J))+'"></img>')}};}).call(this);
