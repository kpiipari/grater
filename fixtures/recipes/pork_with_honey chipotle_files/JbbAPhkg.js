



/* ControlTag Loader for BBC 5d7aaa39-eeed-454f-bb7d-ecea38d770fc */
(function(w, cs) {
  
  if (/Twitter for iPhone/.test(w.navigator.userAgent || '')) {
    return;
  }

  var debugging = /kxdebug/.test(w.location);
  var log = function() {
    
    debugging && w.console && w.console.log([].slice.call(arguments).join(' '));
  };

  var load = function(url, callback) {
    log('Loading script from:', url);
    var node = w.document.createElement('script');
    node.async = true;  
    node.src = url;

    
    node.onload = node.onreadystatechange = function () {
      var state = node.readyState;
      if (!callback.done && (!state || /loaded|complete/.test(state))) {
        log('Script loaded from:', url);
        callback.done = true;  
        callback();
      }
    };

    
    var sibling = w.document.getElementsByTagName('script')[0];
    sibling.parentNode.insertBefore(node, sibling);
  };

  var config = {"app":{"name":"krux-scala-config-webservice","version":"3.23.3","schema_version":3},"confid":"JbbAPhkg","context_terms":[],"publisher":{"name":"BBC","uuid":"5d7aaa39-eeed-454f-bb7d-ecea38d770fc","version_bucket":"stable","id":1624},"params":{"link_header_bidder":false,"site_level_supertag_config":"site","recommend":false,"control_tag_pixel_throttle":100,"fingerprint":false,"user_data_timing":"load","store_realtime_segments":false,"tag_source":false,"link_hb_start_event":"ready","first_party_uid":false,"link_hb_timeout":2000,"link_hb_adserver_subordinate":true,"no_pii":false,"optimize_realtime_segments":false,"link_hb_adserver":"dfp","target_fingerprint":false,"context_terms":false,"dfp_premium":false},"prioritized_segments":[],"realtime_segments":[],"services":{"userdata":"//cdn.krxd.net/userdata/get","contentConnector":"//connector.krxd.net/content_connector","stats":"//apiservices.krxd.net/stats","optout":"//cdn.krxd.net/userdata/optout/status","event":"//beacon.krxd.net/event.gif","set_optout":"//apiservices.krxd.net/consumer/optout","data":"//beacon.krxd.net/data.gif","link_hb_stats":"//beacon.krxd.net/link_bidder_stats.gif","userData":"//cdn.krxd.net/userdata/get","link_hb_mas":"//link.krxd.net/hb","config":"//cdn.krxd.net/controltag/{{ confid }}.js","social":"//beacon.krxd.net/social.gif","addSegment":"//cdn.krxd.net/userdata/add","pixel":"//beacon.krxd.net/pixel.gif","um":"//apiservices.krxd.net/um","click":"//apiservices.krxd.net/click_tracker/track","stats_export":"//beacon.krxd.net/controltag_stats.gif","cookie":"//beacon.krxd.net/cookie2json","proxy":"//cdn.krxd.net/partnerjs/xdi","is_optout":"//beacon.krxd.net/optout_check","impression":"//beacon.krxd.net/ad_impression.gif","transaction":"//beacon.krxd.net/transaction.gif","log":"//jslog.krxd.net/jslog.gif","set_optin":"//apiservices.krxd.net/consumer/optin","usermatch":"//beacon.krxd.net/usermatch.gif"},"site":{"id":20970,"name":"Goodfood"},"tags":[{"id":22316,"name":"GoodFood IMM","content":"<!-- BEGIN Krux Control Tag for \"BBC Good Food\" -->\r\n<!-- Source: /snippet/controltag?confid=JcEKU4eN&site=BBC%20Good%20Food&edit=1 -->\r\n<script class=\"kxct\" data-id=\"JcEKU4eN\" data-timing=\"async\" data-version=\"1.9\" type=\"text/javascript\">\r\n  window.Krux||((Krux=function(){Krux.q.push(arguments)}).q=[]);\r\n  (function(){\r\n    var k=document.createElement('script');k.type='text/javascript';k.async=true;\r\n    var m,src=(m=location.href.match(/\\bkxsrc=([^&]+)/))&&decodeURIComponent(m[1]);\r\n    k.src = /^https?:\\/\\/([a-z0-9_\\-\\.]+\\.)?krxd\\.net(:\\d{1,5})?\\//i.test(src) ? src : src === \"disable\" ? \"\" :\r\n      (location.protocol===\"https:\"?\"https:\":\"http:\")+\"//cdn.krxd.net/controltag?confid=JcEKU4eN\"\r\n  ;\r\n    var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(k,s);\r\n  }());\r\n  \r\n</script>\r\n<!-- END Krux Controltag -->","target":"","target_action":"append","timing":"asap","method":"document","internal":false,"template_replacement":true,"criteria":[]},{"id":22302,"name":"Krux Track Social","content":"<script type=\"text/javascript\">Krux('social.init');</script>","target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":[]},{"id":22303,"name":"Technographic Data provider tag","content":"<script>\r\n// this tag is intentionally blank\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":22304,"name":"Krux Geographic Data provider tag","content":null,"target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":22306,"name":"DTC v1","content":"<script>\r\nKrux('scrape', { \"page_attr_keywords\": {meta_name: \"keywords\"}});\r\nKrux('scrape', { 'page_attr_url_path_1': {url_path: '1'}});\r\nKrux('scrape', { 'page_attr_url_path_2': {url_path: '2'}});\r\nKrux('scrape', { 'page_attr_url_path_3': {url_path: '3'}});\r\nKrux('scrape', { 'page_attr_url_path_4': {url_path: '4'}});\r\nKrux('scrape', { 'page_attr_url_path_5': {url_path: '5'}});\r\nKrux('set', 'page_attr_sections', typeof window._sf_async_config === 'object' && window._sf_async_config['sections']);\r\nKrux('set', 'page_attr_title', typeof window._sf_async_config === 'object' && window._sf_async_config['title']);\r\nKrux('set', 'page_attr_region', typeof window._sf_async_config === 'object' && window._sf_async_config['region']);\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":false,"criteria":[]},{"id":22308,"name":"DataLogix provider tag","content":"<script>\n    (function() {\n        var kuid = Krux('get', 'user');\n        if (kuid) {\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=2dd640a6-6ebd-4d4f-af30-af8baa441a0d&dlxid=<na_id>&dlxdata=<na_da>\");\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=gpwn29rvapq62&ru=' + kurl;\n            var i = new Image();\n            i.src = dlx_url;\n        }\n    })();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",1]]]]},{"id":22313,"name":"Visual DNA () provider tag","content":"<script>new Image().src = 'https://usermatch.krxd.net/um/v2?partner=vdna';</script>","target":"","target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":22315,"name":"Madison Logic provider tag","content":"","target":"","target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":22322,"name":"GoodFood DTC","content":"<script>\r\nif (window.location.pathname == \"/howto/guide/category/cookery\"){\r\n  \tKrux('set', 'section', \"howto\");\r\n    Krux('set', 'subsection', \"cookery\");\r\n    }\r\nelse if (window.location.pathname == \"/howto/guide/category/health-nutrition\"){\r\n  \tKrux('set', 'section', \"howto\");\r\n    Krux('set', 'subsection', \"health nutrition\");\r\n    }\r\nelse if (window.location.pathname == \"/howto/guide/collection/events-occasions\"){\r\n  \tKrux('set', 'section', \"howto\");\r\n    Krux('set', 'subsection', \"events and occasions\");\r\n    }\r\nelse if (window.location.pathname == \"/howto/guide/collection/family-kids\"){\r\n  \tKrux('set', 'section', \"howto\");\r\n    Krux('set', 'subsection', \"family and kids\");\r\n    }\r\nelse if (window.location.pathname == \"/howto/guide/collection/everyday\"){\r\n  \tKrux('set', 'section', \"howto\");\r\n    Krux('set', 'subsection', \"everyday\");\r\n    }\r\nelse if (window.location.pathname == \"/roast-timer\"){\r\n  \tKrux('set', 'section', \"howto\");\r\n    Krux('set', 'subsection', \"roast timer\");\r\n    }\r\nelse if (window.location.pathname == \"/conversion-guides\"){\r\n  \tKrux('set', 'section', \"howto\");\r\n    Krux('set', 'subsection', \"conversion guides\");\r\n    }\r\nelse if (window.location.pathname == \"/feature/reviews\"){\r\n  \tKrux('set', 'section', \"howto\");\r\n    Krux('set', 'subsection', \"reviews\");\r\n    }\r\nelse if (window.location.pathname.split('/')[1] == \"glossary\"){\r\n  \tKrux('set', 'section', \"howto\");\r\n    Krux('set', 'subsection', \"glossary\");\r\n    }\r\nelse if (window.location.pathname == \"/feature/health-nutrition\"){\r\n  \tKrux('set', 'section', \"lifestyle and events\");\r\n    Krux('set', 'subsection', \"health and nutrition\");\r\n    }\r\nelse if (window.location.pathname == \"/feature/family-and-kids\"){\r\n  \tKrux('set', 'section', \"lifestyle and events\");\r\n    Krux('set', 'subsection', \"family and kids\");\r\n    }\r\nelse if (window.location.pathname == \"/feature/budget\"){\r\n  \tKrux('set', 'section', \"lifestyle and events\");\r\n    Krux('set', 'subsection', \"budget and everyday\");\r\n    }\r\nelse if (window.location.pathname == \"/feature/entertaining\"){\r\n  \tKrux('set', 'section', \"lifestyle and events\");\r\n    Krux('set', 'subsection', \"entertaining\");\r\n    }\r\nelse if (window.location.pathname == \"/feature/travel\"){\r\n  \tKrux('set', 'section', \"lifestyle and events\");\r\n    Krux('set', 'subsection', \"travel\");\r\n    }\r\nelse if (window.location.pathname == \"/feature/valentines-day\"){\r\n  \tKrux('set', 'section', \"lifestyle and events\");\r\n    Krux('set', 'subsection', \"valentines day\");\r\n    }\r\nelse if (window.location.pathname == \"/feature/pancake-day\"){\r\n  \tKrux('set', 'section', \"lifestyle and events\");\r\n    Krux('set', 'subsection', \"pancake day\");\r\n    }\r\nelse if (window.location.pathname == \"/feature/halloween\"){\r\n  \tKrux('set', 'section', \"lifestyle and events\");\r\n    Krux('set', 'subsection', \"halloween\");\r\n    }\r\nelse if (window.location.pathname == \"/feature/bonfire-night\"){\r\n  \tKrux('set', 'section', \"lifestyle and events\");\r\n    Krux('set', 'subsection', \"bonfire night\");\r\n    }\r\nelse if (window.location.pathname == \"/feature/christmas-kitchen\"){\r\n  \tKrux('set', 'section', \"lifestyle and events\");\r\n    Krux('set', 'subsection', \"christmas kitchen\");\r\n    }\r\nelse if (window.location.pathname == \"/magazines/bbc-good-food-magazine\"){\r\n  \tKrux('set', 'section', \"more good food\");\r\n    Krux('set', 'subsection', \"magazine\");\r\n    }\r\nelse if (window.location.pathname == \"/good-food-reader-offers\"){\r\n  \tKrux('set', 'section', \"more good food\");\r\n    Krux('set', 'subsection', \"reader offers\");\r\n    }\r\nelse if (window.location.pathname == \"/good-food-mobile-apps\"){\r\n  \tKrux('set', 'section', \"more good food\");\r\n    Krux('set', 'subsection', \"apps\");\r\n    }\r\nelse if (window.location.pathname == \"/good-food-live-events\"){\r\n  \tKrux('set', 'section', \"more good food\");\r\n    Krux('set', 'subsection', \"live events\");\r\n    }\r\nelse if (window.location.pathname == \"/contact\"){\r\n  \tKrux('set', 'section', \"more good food\");\r\n    Krux('set', 'subsection', \"contact\");\r\n    }\r\nelse if (window.location.pathname == \"/competitions\"){\r\n  \tKrux('set', 'section', \"more good food\");\r\n    Krux('set', 'subsection', \"competitions\");\r\n    }\r\nelse if (window.location.pathname.split('/')[1] == \"recipes\"){\r\n  \tKrux('set', 'section', \"recipes\");\r\n    }\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":false,"criteria":[]},{"id":22323,"name":"LiveRamp","content":"<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  if (kuid) {\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\n      var i = new Image();\n      i.src = liveramp_url;     \n  }\n})();\n</script>","target":"","target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":22324,"name":"WhoToo Partner Network provider tag","content":null,"target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":22325,"name":"Good Food GPT Meta","content":"<script>\r\nfunction getGPTVar(name) {\r\nx = document.getElementsByTagName('script');\r\nfor(i=0;i<x.length;i++) {\r\n  if(x[i].innerHTML.indexOf('googletag') > 0 && x[i].innerHTML.indexOf('setTargeting') > 0) {\r\n    y = x[i].innerHTML.split('\\n');\r\n    for(j=0;j<y.length;j++) {\r\n      if(y[j].indexOf(name) > -1) {\r\n        z = y[j].substring(y[j].indexOf('[')+1,y[j].indexOf(']')-2).trim();\r\n        return z.replace(/'/g,'').replace(/ /g,'').replace(/-/g,' ');\r\n      }\r\n    }\r\n  }\r\n}\r\n}\r\nKrux('set', 'page_attr_ingredients', getGPTVar('ingred'));\r\nKrux('set', 'page_attr_collections', getGPTVar('collections'));\r\nKrux('set', 'page_attr_occasion', getGPTVar('occas'));\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":[]},{"id":22326,"name":"DTC v2","content":"<script>\r\nKrux('set', 'page_attr_cb_title', typeof window._sf_async_config === 'object' && window._sf_async_config['title']);\r\nKrux('set', 'page_attr_cb_path', typeof window._sf_async_config === 'object' && window._sf_async_config['path']);\r\n\r\nKrux('scrape', { 'page_attr_google_ad.type': {js_global: \"google_ad.type\"}});\r\nKrux('scrape', { 'page_attr_google_ad.bidtype': {js_global: \"google_ad.bidtype\"}});\r\nKrux('scrape', { 'page_attr_google_ad.targeting_type': {js_global: \"google_ad.targeting_type\"}});\r\nKrux('scrape', { 'page_attr_google_ad.visible_url': {js_global: \"google_ad.visible_url\"}});\r\nKrux('scrape', { 'page_attr_scw_account': {js_global: \"s_account\"}});\r\nKrux('scrape', { 'page_attr_scw_site_section': {js_global: \"scw.prop7\"}});\r\nKrux('scrape', { 'page_attr_scw_ad_enabled': {js_global: \"scw.prop57\"}});\r\nKrux('scrape', { 'page_attr_scw_hour': {js_global: \"s_hour\"}});\r\nKrux('scrape', { 'page_attr_scw_day': {js_global: \"s_day\"}});\r\nKrux('scrape', { 'page_attr_scw_timepart': {js_global: \"s_timepart\"}});\r\n\r\n\r\nKrux('scrape', { 'page_attr_dart_tag': {dart: \"tag\"}});\r\nKrux('scrape', { 'page_attr_dart_page': {dart: \"page\"}});\r\nKrux('scrape', { 'page_attr_dart_referrer': {dart: \"referrer\"}});\r\nKrux('scrape', { 'page_attr_dart_domain': {dart: \"domain\"}});\r\nKrux('scrape', { 'page_attr_dart_headline': {dart: \"headline\"}});\r\nKrux('scrape', { 'page_attr_dart_is_sponsor': {dart: \"is_sponsor\"}});\r\nKrux('scrape', { 'page_attr_dart_is_mpu': {dart: \"is_mpu\"}});\r\n\r\nKrux('scrape', { 'page_attr_dfpZone': {js_global: \"dfpZone\"}});\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":[]},{"id":22327,"name":"BBC Meta Description","content":"Krux('scrape', { 'page_attr_description': {meta_name: 'Description'}});","target":"","target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":false,"criteria":[]},{"id":22329,"name":"DTC Ad Units on GPT sites","content":"<script>\r\nvar krrain1 = document.getElementsByTagName('script');\r\nfor(var i = 0; i < krrain1.length; i++) {\r\n  if(krrain1[i].src.indexOf(\"pubads.g.doubleclick.net\") > 0) {\r\n    var krrain2 = krrain1[i].src.split(\"%2C\");\r\n      if (krrain2[1] != null && krrain2[1] != \"\"){\r\n        Krux('set', 'page_attr_adunit1', krrain2[1]);\r\n        var krrain3 = krrain2[2].split(\"&\");\r\n        Krux('set', 'page_attr_adunit2', krrain3[0]);\r\n      }\r\n    }\r\n  }\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":[]},{"id":22331,"name":"Webbula provider tag","content":null,"target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":22332,"name":"Dun & Bradstreet provider tag","content":null,"target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":22334,"name":"Eyeota - Marketplace & Branded provider tag","content":"<script>\n(function(){\n        var kuid = Krux('get', 'user');\n        var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n\n        if (kuid) {\n           var url = prefix + '//ps.eyeota.net/match?bid=i0r4o4v&uid=' + kuid;\n           (new Image()).src = url;\n        }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":22336,"name":"DataXu user matching","content":"<script>\n(function(){\n        var kuid = Krux('get', 'user');\n        var prefix = location.protocol;\n        if (kuid) {\n           var dxu_url = '//i.w55c.net/ping_match.gif?st=Krux&rurl=' + prefix + '//beacon.krxd.net/usermatch.gif?partner=dataxu&uid=_wfivefivec_';\n           var i = new Image();\n           i.src = dxu_url;\n        }\n})();\n</script>","target":"","target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":22337,"name":"Eyeota - Roy Morgan provider tag","content":"<script>\n(function(){\n        var kuid = Krux('get', 'user');\n        var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n\n        if (kuid) {\n           var url = prefix + '//ps.eyeota.net/match?bid=i0r4o4v&uid=' + kuid;\n           (new Image()).src = url;\n        }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":29765,"name":"BlueKai User Match","content":"<script>\n    (function() {\n        var kuid = Krux('get', 'user');\n        if (kuid) {\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\n            var bk_prefix = location.protocol == 'https:' ? \"stags\" : \"tags\";\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&partner=bluekai&bk_uuid=$_BK_UUID\");\n            var kurl = prefix + \"//beacon.krxd.net/usermatch.gif?\" + kurl_params;\n            var bk_params = 'id=' + kuid;\n            var bk_url = '//' + bk_prefix + '.bluekai.com/site/26357?' + bk_params + '&redir=' + kurl;\n            var i = new Image();\n            i.src = bk_url;\n        }\n    })();\n</script>","target":null,"target_action":"append","timing":"onload","method":"iframe","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]}],"link":{"adslots":{},"bidders":{}}};
  
  for (var i = 0, tags = config.tags, len = tags.length, tag; (tag = tags[i]); ++i) {
    if (String(tag.id) in cs) {
      tag.content = cs[tag.id];
    }
  }

  
  var esiGeo = String(function(){/*
   <esi:include src="/geoip_esi"/>
  */}).replace(/^.*\/\*[^{]+|[^}]+\*\/.*$/g, '');

  if (esiGeo) {
    log('Got a request for:', esiGeo, 'adding geo to config.');
    try {
      config.geo = w.JSON.parse(esiGeo);
    } catch (__) {
      
      log('Unable to parse geo from:', config.geo);
      config.geo = {};
    }
  }



  var proxy = (window.Krux && window.Krux.q && window.Krux.q[0] && window.Krux.q[0][0] === 'proxy');

  if (!proxy || true) {
    

  load('//cdn.krxd.net/ctjs/controltag.js.714934d71ca8a8cd8c474d2f7d4608ec', function() {
    log('Loaded stable controltag resource');
    Krux('config', config);
  });

  }

})(window, (function() {
  var obj = {};
  
  return obj;
})());
