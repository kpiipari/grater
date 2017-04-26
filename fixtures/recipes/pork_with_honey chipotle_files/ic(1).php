/*************************************************************************/
//Contenu dans le JS de la page aha
/*************************************************************************/

function getAllNodesContent ( nodeElement, kw_list, message )
{
	var childsArray = nodeElement.childNodes;
	var pass = 1;
	var returnValue = "unlocked";

	for(var i = 0; i < childsArray.length; i++){
		if ( childsArray[i].nodeName != "SCRIPT" && childsArray[i].nodeName != "IFRAME" && childsArray[i].nodeName != "IMG" && childsArray[i].nodeName != "A" ) {
			/*if ( childsArray[i].nodeName == "A" )
			{
				pass = 0;
				if ( window.location.host == childsArray[i].host ){
					pass = 1;
				}
			}*/
			if ( pass == 1 ){
				if(childsArray[i].hasChildNodes()){
					returnValue = getAllNodesContent ( childsArray[i], kw_list, message );
					if ( returnValue == "locked" ){
						return "locked";
					}
				}else {
					if ( childsArray[i].nodeName == "#text" ) {
						returnValue = getAllWordsFromText ( childsArray[i].textContent, kw_list, message , "content");
						if ( returnValue == "locked" ){
							return "locked";
						}
					}
				}
			}
		}	
	}
	if ( document.body == nodeElement )
	{
	    var url_words = new Array();
            var str = document.location.href;
            var res1 = str.split("-");
            for(var i= 0; i < res1.length; i++)
            {
                var res2 = res1[i].split("_");
                for(var j= 0; j < res2.length; j++)
                {
                    var res3 = res2[j].split(".");
                    for(var k= 0; k < res3.length; k++)
                    {
                        var res4 = res3[k].split("/");
                        for(var l= 0; l < res4.length; l++)
                        {
                            var res5 = res4[l].split("&");
                            for(var m= 0; m < res5.length; m++)
                            {
                                var res6 = res5[m].split("=");
                                for(var n= 0; n < res6.length; n++)
                                {
                                    if ( typeof(res6[n]) != "undefined" && res6[n] != "" && res6[n] != "\n" ) {
                                        url_words.push(res6[n].replace("%20", " ").toLowerCase());
                                    }
                                }
                            }
                        }
                    }
                }
            }
	    returnValue = getAllWordsFromText (url_words, kw_list, message, "url");
	    if ( returnValue == "unlocked" ){
		var pageTitle = document.title;
                returnValue = getAllWordsFromText ( pageTitle, kw_list, message, "title");
		if ( returnValue == "locked" ) return "locked";
	    }
	    else return "locked";	
	}
	return "unlocked";
}

// sample mode Array contient les mots de l'url. sample en string est un bloc de test
function getAllWordsFromText (sample, array_words, message, type) 
{
	// remplacement de tous les signes de ponctuation (suite de signes ou signe isolé) par un whitespace
	if(typeof sample == "object") contenu = sample;
	else contenu = (sample.toLowerCase()).replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]+/g, ' ');
	
	var blocking_keyword = "";
	var blocking_keywords_nb = array_words.length;

	for ( var i = 0; i < blocking_keywords_nb; i ++ ) {

                var word = array_words[i];
                var word_splitted = word.split("+");
		//tous les mots de la combinaison doivent etre dans le texte
                if( word_splitted.length > 1 ){

                    var nb_occ   = 0;
                    for ( var j = 0; j < word_splitted.length; j ++ ) {
			final_word = (typeof sample !== "object") ? " "+word_splitted[j].toLowerCase()+" " : word_splitted[j].toLowerCase();
                        nb_occ += contenu.indexOf(final_word) > 0 ? 1 : 0;
                    }
                    if(nb_occ  == word_splitted.length) blocking_keyword = word;
                }
		//mot simple
		else{
		    final_word = ( typeof sample !== "object") ? " "+word.toLowerCase()+" " : word.toLowerCase();
                    if( contenu.indexOf(final_word) >= 0 ) blocking_keyword = word;
                }

		if(blocking_keyword){
			//bloquer les publicités
			message += "&alerte_desc="+type+":"+word;
                        useFirewallForcedBlock(message);
                        return "locked";
		}
        }	
  	return "unlocked";
}	

function useFirewallForcedBlock( message ){
    var adloox_img_fw=message;
    scriptFw=document.createElement("script");
    scriptFw.src=adloox_img_fw;
    document.body.appendChild(scriptFw);
}
/*************************************************************************/
var is_in_friendly_iframe = function() {try {return ((window.self.document.domain == window.top.document.domain) && (self !== top));} catch (e) {return false;}}();
var win_t = is_in_friendly_iframe ? top.window : window;var firstNode = win_t.document.body;var contentTab = ["ak47","al-shabaab","aleppo","allahu+akbar","alqaeda","anal","anti-semitic","anus","arrest","arse","arsehole","ass","assad","asylum","asylum+seeker","aysha frade","ayshafrade","behead","beheading","bitch","bitchass","bitches","bitchy","bittorrent","bjs","blow+job","blowjob","bnp","boko+haram","bomb","bomber","bondage","boner","boob","boy+died","british+national+party","bukkake","burqa","butt","buttfucker","callgirl","cameltoe","cancer+breast","cancer+cells","cancer+diagnosed","cancer+found","cancer+killed","cancer+kills","cancer+patient","cancer+risk","cancer+skin","cancer+spotted","cancer+treatment","cancerous","car+accident","car+crash","carcinogen","carcinogenic","carcinoma","carnage+on+westminster+brigde","carnage+westminster brigde","carnage+westminster+brigde","catastrophic+wounds","chemotherapy","children+died","choking","clit","clusterfuck","cocaine","cock","crack+cocaine","creampie","cum","cum+shot","cumshot","cunt","dead+bodies","death","deepthroat","dick","dicks","dildo","dildos","disease+abnormal","disease+condition","drought","drug","drug+abuse","drug+addict","drug+killed","drug+kills","drug+mule","drug+overdose","drugs","drugs+death","drugs+kill","drugs+killed","earthquake","economic+migrants","ejaculation","erotic","erotica","erotika","escortservice","execution","executions","explosion","explosion+attack","explosion+car","explosion+terrorist","extremism","extremist","extremists","facesitting","fag","faggot","family+died","famine","farc","fascism","father+died","female+ejaculation","fetish","flash+flood","flight+crash","flight+crashed","flight+disappeared","flight+missing","flight+vanished","flood","found+dead","fuck","fucker","fucking","gangbang","gay","girl+died","golden+shower","groupsex","guns","handjob","hardcore","heart+attack","heroin","hezbollah","hijab","hiv","hodgkins+disease","hoe","home+destroyed","home+flooded","homicide","homo","hooker","horny","hostage","house+destroyed","house+flooded","hurricane","illegal+immigrant","illness","illness+disorder","illness+mental","illnesses","incest","infant+died","interracial+sex","ira","iraq","isis","islam","islamicstate","jihad","jihadi","kamasutra","keith palmer","keithpalmer","ketamine","kickasstorrent","killed","killed+gun","killed+knife","kinky","kkk","knife wielding+attack","knife-wielding attacker","knife-wielding+attacker","knife-wieldingattacker","knife+wielding+attacker","knifeman","knifewielding+attack","ku-klux-klan","landslide","lashkar-e-tayyiba","lesbian","lesbo","leukemia","limewire","london+attack","lone+wolf","lords+resistance+army","lra","lymphoma","malignancy","man+died","mastectomy","masturbation","melanoma","men+died","metastasis","metastatic","meth","methamphetamine","milf","milfs","misdiagnosed","misdiagnosis","misile","mohammed","mosque","mosul","mother+died","mowed down","mowed+down","moweddown","mowing down","mowing+down","mowingdown","mugging","muhammad","murder","murdered","muslim","napster","nazi","necrophilia","neo+nazi","nuclear","nuclear+weapons","nude","nudes","nudity","oralsex","orgasm","orgie","orgy","paederast","paedo","paedophile","passengers+dead","passengers+died","passengers+killed","peepshows","pegging","penis","penthouse","people+died","piracy","pirate+bay","piss","pissing","plane+crash","plane+disappeared","plane+hijack","plane+missing","plane+vanished","playboy","playmates","pneumonia","pneumonias","police+shot","police+stabbed","porn","pornographic","pornography","pornos","precancerous","prostitute","pussies","pussy","putlocker","raids","rape","raped","rapes","raping","rapist","raqqa","revolutionaryarmedforcesofcolombia","rimjob","rimjobs","sadist","sado","sarcoma","september+11","sex","sexism","sexist","sexual","sexually","sexvideo","sexxx","sexy","shemale","shit","shooting","shot","slaves","slut","slutbag","sodomist","sodomists","sodomite","sodomites","sodomitic","sodomitical","sodomy","squirt","squirting","stabbed","stabbed+death","strapon","stripping","striptease","suicide+attack","suicide+bomber","syria","taliban","teensex","tehrik-e+taliban","tehrik-e+taliban+pakistan","terminal+cancer","terminal+illness","terror","terror+attack","terror+day","terrorism","terrorist","terrorist+attack","terrorist+threat","terrorists","testicle","the+lords+resistance+army","threesomes","tidal+wave","tit","tit+fuck","tits","topless","tornado","torrent","torrents","torrentz","trafficking","train+crash","transgender","transsexual","trauma+accident","trauma+death","trauma+stress","traumatic","tsunami","tumor","tumour","tumours","underagegirls","utorrent","vagina","vibrator","victims","volcanic+eruption","wank","wanking","weapon","weapons","weapons+of+mass+destruction","westminster+bridge","whore","woman+died","women+died","zoosex"];
var message = "//data55.adlooxtracking.com/ads/ic3.php?fw=1&iframe=1&version=2&client=Msix_DFA&banniere=Vitality&id_editeur=10127228_ADLOOX_ID_144055927_ADLOOX_ID_5877890_ADLOOX_ID_2651837&campagne=Vitality&methode=%3B&fai=frame+without+title&url_referrer=https%3A%2F%2Fwww.bbcgoodfood.com%2Frecipes%2Fpull-apart-pork-honey-chipotle&ads_forceblock=1&log=1&visite_id=16724847322";
getAllNodesContent ( firstNode, contentTab, message );
