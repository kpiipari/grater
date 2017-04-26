(function($){Drupal.GF=Drupal.GF||{};Drupal.behaviors.GoodFoodComments={attach:function(context){var comment_section=$('.section-comments__wrapper');Drupal.GF.commentsTabs(context);Drupal.GF.commentsLazyLoading(context);Drupal.GF.commentsResizeTextarea(context);Drupal.GF.commentsJChangeTabOnCheckboxChanged(comment_section);Drupal.GF.commentsJumpToCommentJustPosted(comment_section);Drupal.GF.commentsShowMore(context);Drupal.GF.commentsShowNoCommentsSignInBlock(context);}};Drupal.GF.commentsTabs=function(context){$("#tabs",context).tabs();};Drupal.GF.commentsRemoveForm=function(context){$('.comment .comment-form',context).remove();};Drupal.GF.commentsLazyLoading=function(context){var $lazy_loading=$('.section-comments__lazy-loading',context);if($lazy_loading.length){var elem_top=$lazy_loading.offset().top,lazy_loading_completed=false;$(window).on('scroll',function(){if(!lazy_loading_completed){var $window=$(this),doc_view_bottom=$window.scrollTop()+$window.height();if(doc_view_bottom>=elem_top){lazy_loading_completed=true;$lazy_loading.find('a').click();}}}).scroll();}};Drupal.GF.commentsResizeTextarea=function(context){$('.comment-form__textarea-wrapper',context).find('textarea').focus(function(){$(this).addClass('form-textarea--expanded');}).focusout(function(){if(!$(this).val()){$(this).removeClass('form-textarea--expanded');}});};Drupal.GF.commentsJChangeTabOnCheckboxChanged=function(context){var tab;$('.comment-form__wrapper',context).find("input[name='field_bbcgf_classification[und]']").change(function(){switch($(this).val()){case'189':tab=1;break;case'190':tab=2;break;default:tab=0;}
$('.section-comments__single-tab-link',context).eq(tab).click();});};Drupal.GF.commentsJumpToCommentJustPosted=function(context){if($('.section-comments__tabs',context).find('.comment__just-posted').length){$('body').scrollTo('.section-comments__tabs',500);}};Drupal.GF.commentsShowMore=function(context){var text,$tab=$('.section-comments__single-tab-content',context);$tab.each(function(index){var $current_tab=$(this),$view_more_wrapper=$('<div></div>').addClass('comment__show-more-wrapper'),$rows=$current_tab.find('.view-content > div');if(!$current_tab.hasClass('section-comments__show-more-executed-once')&&$rows.length>2){$current_tab.addClass('section-comments__show-more-executed-once').addClass('section-comments__mask');switch(index){case 1:text='View more questions';break;case 2:text='View more tips';break;default:text='View more comments';}
$view_more_wrapper.append($('<div></div>').addClass('comment__show-more-button btn--primary').text(text));$current_tab.append($view_more_wrapper).find('.comment__show-more-button').click(function(){$current_tab.removeClass('section-comments__mask').find($view_more_wrapper).remove();});}});};Drupal.GF.commentsShowNoCommentsSignInBlock=function(context){if($('.section-comments__join_discussion',context).length){$('.comment__no-comments-sign-in',context).show();}};$.fn.commentsPostNewCommentFunction=function(comment_type){var tab;switch(comment_type){case'question':tab=1;break;case'tip':tab=2;break;case'comment':default:tab=0;}
var $link=$('.section-comments__single-tab-link').eq(tab),$link_text=$link.text(),pos_1=$link_text.indexOf("(")+1,pos_2=$link_text.indexOf(")"),$count=$link_text.substring(pos_1,pos_2);$link.text($link_text.substring(0,pos_1)+(parseInt($count)+1)+$link_text.substring(pos_2));$link.click();};})(jQuery);;(function($){Drupal.GFPrint=Drupal.GFPrint||{};Drupal.behaviors.GoodFoodPrintPdf={attach:function(context){$('.recipe-header__print .btn--print',context).on('click',function(e){e.preventDefault();if(typeof Drupal.GFAnalytics!=='undefined'){Drupal.GFAnalytics.trackEvent(['Internal Link','click','Recipe Print']);}
Drupal.GFPrint.printPage(Drupal.settings.bbcgf_pdf.url);});}};Drupal.GFPrint.printPage=function(url){var iframe=document.createElement("iframe");iframe.onload=Drupal.GFPrint.setPrint;iframe.style.visibility="hidden";iframe.style.position="fixed";iframe.style.right="0";iframe.style.bottom="0";iframe.src=url;document.body.appendChild(iframe);};Drupal.GFPrint.closePrint=function(){document.body.removeChild(this.__container__);};Drupal.GFPrint.setPrint=function(){this.contentWindow.__container__=this;this.contentWindow.onbeforeunload=Drupal.GFPrint.closePrint;this.contentWindow.onafterprint=Drupal.GFPrint.closePrint;this.contentWindow.focus();this.contentWindow.print();};})(jQuery);;