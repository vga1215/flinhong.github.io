var strike_autostart=(typeof strike_autostart==="undefined")?true:strike_autostart;var strike_autoTime=(typeof strike_autoTime==="undefined")?8*1000:strike_autoTime;var strike_featCount=(typeof strike_featCount==="undefined")?4:strike_featCount;var featLast=1;var isAnim=false;var isinsitelikes=false;var isinsitememb=false;var timer;var timerb;var currenteditor="";var dofreeze=true;var thetop=parseInt((jQuery(window).height()/2)-50);(function(e){window.document.onload=function(h){starFnc();};window.onload=function(h){starFnc();};if("ontouchstart" in document.documentElement){for(var c=document.styleSheets.length-1;c>=0;c--){var a=document.styleSheets[c];if(a.cssRules){for(var d=a.cssRules.length-1;d>=0;d--){var g=a.cssRules[d];if(g.selectorText){g.selectorText=g.selectorText.replace(":hover",":active");}}}}}jQuery(document).scroll(function(){if(jQuery(".strike-modal.active").length>0){var h=parseInt(jQuery(window).scrollTop());jQuery(".strike-modal").css("top",(parseInt(h+thetop))+"px");}});jQuery(document).on("ready resize",function(){b();});function b(){jQuery("#sidebar").css("min-height",parseInt(jQuery("#main").height())+65);}setTimeout(function(){b();},200);jQuery(document).ready(function(){jQuery(".accordion .accordion-tab > a").click(function(){var h=jQuery(this).parent();if(!h.hasClass("active")){h.siblings(".accordion-tab.active").children(".accordion-block").animate({opacity:"toggle",padding:"toggle",height:"toggle"},200,function(){jQuery(this).parent().removeClass("active");});}h.children(".accordion-block").animate({opacity:"toggle",padding:"toggle",height:"toggle"},200,function(){jQuery(this).parent().toggleClass("active");});return false;});jQuery(".info-message .close-info").click(function(){jQuery(this).parent().fadeOut();return false;});jQuery("img.setborder").each(function(){jQuery(this).wrap('<span class="wrapimg" style="display:inline-block;position:relative;border-radius:inherit;-moz-border-radius:inherit;overflow:hidden;"></span>');});jQuery("body").append("<div id='_strike-tooltip'></div>");jQuery("body").append("<div class='likes-tooltip'></div>");jQuery("body").append("<div id='_strike-user'></div>");jQuery(".strike-tooltip").mouseenter(function(){if(jQuery(this).attr("title")){var j=jQuery(this).offset();jQuery("#_strike-tooltip").html(jQuery(this).attr("title"));jQuery(this).attr("title","");jQuery("#_strike-tooltip").addClass("active");jQuery("#_strike-tooltip").css("left",j.left+"px").css("top",j.top+"px");var h=(parseInt(jQuery(this).css("width"))/2);var i=((parseInt(jQuery("#_strike-tooltip").css("width"))+parseInt(jQuery("#_strike-tooltip").css("padding-right"))+parseInt(jQuery("#_strike-tooltip").css("padding-left")))/2);jQuery("#_strike-tooltip").css("margin-left",((i-h)*(-1))+"px");}}).mouseleave(function(){jQuery("#_strike-tooltip").removeClass("active");jQuery(this).attr("title",jQuery("#_strike-tooltip").html());});jQuery(".likes-tooltip").hover(function(){isinsitelikes=true;},function(){if(timer){clearTimeout(timer);timer=null;}isinsitelikes=false;timer=setTimeout(function(){if(isinsitelikes==true){return false;}jQuery(".likes-tooltip").removeClass("active");jQuery(".likes-tooltip").html("");},500);});jQuery(".show-likes").hover(function(){if(timer){clearTimeout(timer);timer=null;}var j=jQuery(this).offset();jQuery(".likes-tooltip").html('<div class="like-button"><a href="#">4 people like this</a></div><a href="#" class="avatar online strike-tooltip" title="John Doe"><img src="images/photos/avatar-1.jpg" alt="" title="" /></a><a href="#" class="avatar online" title="minkka."><img src="images/photos/avatar-2.jpg" alt="" title="" /></a><a href="#" class="avatar offline" title="Alfred"><img src="images/photos/avatar-3.jpg" alt="" title="" /></a><a href="#" class="avatar away" title="Orangutan"><img src="images/photos/avatar-4.jpg" alt="" title="" /></a>');jQuery(".likes-tooltip").css("left",j.left+"px").css("top",j.top+"px");var h=(parseInt(jQuery(this).css("width"))/2);var i=((parseInt(jQuery(".likes-tooltip").css("width"))+parseInt(jQuery(".likes-tooltip").css("padding-right"))+parseInt(jQuery(".likes-tooltip").css("padding-left")))/2);timer=setTimeout(function(){jQuery(".likes-tooltip").css("margin-left",((i-h)*(-1))+"px");jQuery(".likes-tooltip").addClass("active");},500);},function(){if(timer){clearTimeout(timer);timer=null;}timer=setTimeout(function(){if(isinsitelikes==true){return false;}jQuery(".likes-tooltip").removeClass("active");jQuery(".likes-tooltip").html("");},500);});jQuery("#_strike-user").hover(function(){isinsitememb=true;},function(){if(timerb){clearTimeout(timerb);timerb=null;}isinsitememb=false;timerb=setTimeout(function(){if(isinsitememb==true){return false;}jQuery("#_strike-user").removeClass("active");jQuery("#_strike-user").html("");},500);});jQuery(".user-tooltip").hover(function(){if(timerb){clearTimeout(timerb);timerb=null;}var l=jQuery(this).offset();var h=jQuery(window).scrollTop();var j=l.top-h;if(j<=200){jQuery("#_strike-user").addClass("upsidedown");}else{jQuery("#_strike-user").removeClass("upsidedown");}jQuery("#_strike-user").html('<a href="/about/" class="username" style="background:#232323;color:#fff;">Frank Lin (林宏)</a><a href="#" class="avatar online"><span class="wrapimg" style="display:inline-block;position:relative;border-radius:inherit;-moz-border-radius:inherit;overflow:hidden;"><img src="/assets/images/avatar.jpg" alt="Avatar" height="90" width="90"/></span></a><div class="info"><div>"Another lovely person on the planet..."</div><div><font>Location:</font>Hong Kong, China</div><div><font>Now:</font>Ph.D. student at HKU</div><div><font>Marital status:</font>Single</div></div><div class="clear-float"></div><div class="bottom"><a href="/contact/" class="com-control"><i class="fa fa-envelope"></i>Drop Message</a><a href="/about/" class="com-control"><i class="fa fa-file-text-o"></i>View profile</a></div>');jQuery("#_strike-user").css("left",l.left+"px").css("top",l.top+"px");var i=(parseInt(jQuery(this).css("width"))/2);var k=((parseInt(jQuery("#_strike-user").css("width"))+parseInt(jQuery("#_strike-user").css("padding-right"))+parseInt(jQuery("#_strike-user").css("padding-left")))/2);timerb=setTimeout(function(){jQuery("#_strike-user").css("margin-left",((k-i)*(-1))+"px");jQuery("#_strike-user").addClass("active");},500);},function(){if(timerb){clearTimeout(timerb);timerb=null;}timerb=setTimeout(function(){if(isinsitememb==true){return false;}jQuery("#_strike-user").removeClass("active");jQuery("#_strike-user").html("");},500);});jQuery("a[href='#show-responses']").click(function(){jQuery(".drop.active").children().find("li.new").each(function(){jQuery(this).removeClass("new");});jQuery(this).parent().parent().find(".comment-responses").toggleClass("active");return false;});jQuery("a[href='#drop-the-bass']").click(function(){jQuery(".drop.active").children().find("li.new").each(function(){jQuery(this).removeClass("new");});jQuery("a[href='#drop-the-bass']").not(this).parent().find(".drop").removeClass("active");jQuery(this).parent().find(".drop").toggleClass("active");jQuery("html, body").animate({scrollTop:0},"fast");jQuery(this).find("span.fadeout").fadeOut("fast");return false;});jQuery("body").click(function(){jQuery(".drop.active").children().find("li.new").each(function(){jQuery(this).removeClass("new");});jQuery(".drop.active").removeClass("active");});jQuery("a[href='#top']").click(function(){jQuery("html, body").animate({scrollTop:0},"fast");return false;});startTimer();jQuery(".respond-textarea > textarea").keyup(function(){var h=parseInt(this.scrollHeight);jQuery(this).css("height",(h+2)+"px");});jQuery("textarea.auto-height").keyup(function(){var h=parseInt(this.scrollHeight);jQuery(this).css("height",(h)+"px");});jQuery("a[href='#quick-reply']").click(function(){jQuery(".quick-reply .forum-description").hide();jQuery(".quick-reply .reply-box").fadeIn("fast");jQuery(".reply-box .reply-textarea textarea").focus();});jQuery(".scroll").click(function(i){i.preventDefault();var h=0;if(jQuery(this.hash).offset().top>jQuery(document).height()-jQuery(window).height()){h=jQuery(document).height()-jQuery(window).height();}else{h=jQuery(this.hash).offset().top;}jQuery("html,body").animate({scrollTop:h},1000,"swing");});jQuery(".post-meta-block a[href='#quick-reply']").click(function(){var h=jQuery(".reply-box .reply-textarea textarea").val();jQuery(".reply-box .reply-textarea textarea").val(h+"@"+jQuery(this).parent().parent().siblings(".user-block").find(".forum-user b").html()+" ");});jQuery(".strike-wysiwyg-enable").each(function(){jQuery(this).append("<div class='strike-wysiwyg' contenteditable='true' id='strike-editor'></div>");});jQuery("#strike-editor").focus(function(){jQuery(".strike-wysiwyg-enable").attr("rel","wys-current");return false;});jQuery(".strike-wysiwyg-enable textarea").focus(function(){jQuery(".strike-wysiwyg-enable").attr("rel","bb-current");return false;});jQuery(".conversation-single").click(function(){var h=jQuery(this);if(!h.hasClass("selected")){letscountconv++;}else{letscountconv--;}h.toggleClass("selected");if(letscountconv>0){jQuery(".conversation-container").addClass("is-selected");}else{jQuery(".conversation-container").removeClass("is-selected");}});jQuery(".conv-smiley-block").click(function(){jQuery(".smiley-tooltip").toggle();return false;});jQuery(".conv-bottom .conv-bb-link, .smiley-tooltip .conv-bb-link").click(function(){var i=jQuery(this);var j=i.parent().siblings("textarea");var h=i.attr("rel");j.replaceSelectedText(h);if(i.parent().hasClass("smiley-tooltip")){i.parent().hide();}return false;});jQuery("a[href='#strike-bb']").click(function(){var k=jQuery(this);var m=k.parent().siblings("textarea");var j=k.parent().siblings(".strike-wysiwyg");currenteditor=k.parent().parent().attr("rel");if(currenteditor=="wys-current"){j.focus();var n=rangy.getSelection();}switch(k.attr("class")){case"strike-bold":if(currenteditor=="wys-current"){var l=document.createElement("b");surroundSelection(n,l);j.focus();}else{m.surroundSelectedText("<b>","</b>");}break;case"strike-italic":if(currenteditor=="wys-current"){var l=document.createElement("i");surroundSelection(n,l);j.focus();}else{m.surroundSelectedText("<i>","</i>");}break;case"strike-strike":if(currenteditor=="wys-current"){var l=document.createElement("strike");surroundSelection(n,l);j.focus();}else{m.surroundSelectedText("<strike>","</strike>");}break;case"strike-underline":if(currenteditor=="wys-current"){var l=document.createElement("u");surroundSelection(n,l);j.focus();}else{m.surroundSelectedText("<u>","</u>");}break;case"strike-link":var h=prompt("Ievadiet hipersaites adresi","http://");if(h==null){break;return false;}if(currenteditor=="wys-current"){var l=document.createElement("a");l.href=h;l.target="_blank";surroundSelection(n,l);j.focus();}else{m.surroundSelectedText("<a href='"+h+"' target='_blank'>","</a>");}break;case"strike-color":if(currenteditor=="wys-current"){var l=document.createElement("span");l.style.color="purple";surroundSelection(n,l);j.focus();}else{m.surroundSelectedText("<span style='color: purple>","</span>");}break;case"strike-photo":if(currenteditor=="wys-current"){var h=prompt("Ievadiet bildes adresi","http://");if(h==null){break;return false;}var l=document.createElement("img");l.src=h;surroundSelection(n,l);j.focus();}else{var i=m.extractSelectedText();i=(i=="")?"http://":i;var h=prompt("Ievadiet bildes adresi",i);if(h==null){i=(i=="http://")?"":i;m.replaceSelectedText(i);break;return false;}m.replaceSelectedText("<img src='"+h+"'>");}break;case"strike-quote":if(currenteditor=="wys-current"){var l=document.createElement("blockquote");surroundSelection(n,l);j.focus();}else{m.surroundSelectedText("<blockquote>","</blockquote>");}break;case"strike-code":if(currenteditor=="wys-current"){var l=document.createElement("pre");surroundSelection(n,l);j.focus();}else{m.surroundSelectedText("<pre>","</pre>");}break;case"strike-yt":if(currenteditor=="wys-current"){break;return false;}else{var i=m.extractSelectedText();i=(i=="")?"http://":i;var h=prompt("Ievadiet youtube linku",i);if(h==null){i=(i=="http://")?"":i;m.replaceSelectedText(i);break;return false;}m.replaceSelectedText("[yt]"+h+"[/yt]");}break;default:break;}return false;});jQuery(".strike-wysiwyg").each(function(){var h=jQuery(this);var i=h.siblings("textarea").val();f(i,h);});jQuery(".strike-wysiwyg-enable textarea").bind("input propertychange focus blur",function(){var h=jQuery(this);var i=h.val();var j=h.siblings("#strike-editor");f(i,j);});jQuery(".strike-wysiwyg-enable #strike-editor").bind("input propertychange focus blur",function(){var h=jQuery(".strike-wysiwyg-enable .strike-wysiwyg");var j=jQuery(this).html();var i=h.siblings("textarea");f(j,i);});jQuery("a[href='#strike-bb-switch']").click(function(){jQuery(".strike-wysiwyg-enable").find("textarea").toggle().siblings(".strike-wysiwyg").toggle();return false;});jQuery("#strike-editor").parent().parent().parent().prepend('<textarea class="temp-paste-text"></textarea>');jQuery("#strike-editor").on("paste",function(){var i=jQuery(this);var j=rangy.saveSelection();var h=jQuery(".temp-paste-text");h.focus();setTimeout(function(){var k=h.val();rangy.restoreSelection(j);rangy.removeMarkers(j);document.execCommand("insertHTML",false,k);h.val("");},100);});jQuery(".select-replace .select-arrow").on("click",function(){jQuery(this).parent().toggleClass("active-drop");return false;});jQuery(".select-replace .select-options > a").on("click",function(){var h=jQuery(this);h.parent().parent().removeClass("active-drop");h.parent().siblings(".select-main-input").val(h.attr("alt"));return false;});});function f(i,h){currenteditor=jQuery(".strike-wysiwyg-enable").attr("rel");if(currenteditor=="wys-current"){i=i.replace(/<br \/>/mg,"<br>");i=i.replace(/<br\/>/mg,"<br>");i=i.replace(/<br>/mg,"<br>");h.html(i);}else{h.html(i);}return true;}jQuery(document).scroll(function(){var i=jQuery(window).scrollTop();if(i<=180){jQuery("#header-top ul li a span").removeClass("gotop");}else{jQuery("#header-top ul li a span").addClass("gotop");}if(i>=600){if(strike_autostart){freezeAnim();}}if(jQuery(".the-profile-top").length>0){var m=jQuery(".the-profile-top").offset();var h=parseInt(jQuery(".the-profile-navi").css("height"))+parseInt(i);var l=parseInt(jQuery(document).height())-(h);if(jQuery(".footer").height()+50>=l){var k=(jQuery(document).height()-((parseInt(jQuery(".footer").height())+50)+parseInt(jQuery(".the-profile-navi").height())))-parseInt(m.top);jQuery(".the-profile-navi").addClass("bottom");jQuery(".the-profile-navi").css("top",k+"px");return false;}else{jQuery(".the-profile-navi").removeClass("bottom");jQuery(".the-profile-navi").css("top","0px");}var j=parseInt(jQuery(".the-profile-top").css("height"))+parseInt(jQuery(".the-profile-top").css("padding-top"))+parseInt(jQuery(".the-profile-top").css("padding-bottom"));if(i>=m.top+j){jQuery(".the-profile-navi").addClass("floating");}else{jQuery(".the-profile-navi").removeClass("floating");}}});jQuery(document).ready(function(){jQuery("#strikeplayer").each(function(){var j=jQuery(this),i=j[0];i.addEventListener("timeupdate",function(){var m=jQuery(this);var p=(Math.floor(i.currentTime%60)<10?"0":"")+Math.floor(i.currentTime%60);var k=Math.floor(i.currentTime/60);var o=Math.floor(i.currentTime/60/60);if(i.duration=="Infinity"){m.siblings(".strike-player").addClass("player-live");m.siblings(".strike-player").find("#songTime").html(o+":"+k+":"+p);}else{m.siblings(".strike-player").find("#songTime").html(o+":"+k+":"+p+" / "+Math.floor(i.duration/60/60)+":"+Math.floor(i.duration/60)+":"+(Math.floor(i.duration%60)<10?"0":"")+Math.floor(i.duration%60));}var n=(m[0].currentTime/m[0].duration);var l=m.siblings(".strike-player").find("#songSlider")[0].offsetWidth*n;m.siblings(".strike-player").find("#songSlider > div").css("width",Math.round(l)+"px");},false);i.addEventListener("volumechange",function(){var l=jQuery(this);var m=(l[0].volume);var k=l.siblings(".strike-player").find("#volumeMeter")[0].offsetWidth*m;l.siblings(".strike-player").find("#volumeMeter > div").css("width",Math.round(k)+"px");},false);i.addEventListener("ended",function(){j.siblings(".strike-player").removeClass("playing");},false);i.addEventListener("pause",function(){j.siblings(".strike-player").removeClass("playing");},false);i.addEventListener("play",function(){j.siblings(".strike-player").addClass("playing");},false);});jQuery(".strike-player #songPlayPause").click(function(){var j=jQuery(this),i=j.parent().siblings("#strikeplayer")[0];if(i.paused){i.play();}else{i.pause();}});jQuery("#songSlider").bind("mousedown",function(i){jQuery(this).bind("mousemove click",function(n){var l=jQuery(this),j=n.pageX-l.offset().left,m=l.width(),k=(j/m);l.parent().siblings("#strikeplayer")[0].currentTime=l.parent().siblings("#strikeplayer")[0].duration*k;});jQuery(this).bind("mouseup mouseleave",function(){jQuery(this).unbind("mousemove");});});jQuery("#volumeMeter").bind("mousedown",function(i){jQuery(this).bind("mousemove click",function(n){var l=jQuery(this),j=n.pageX-l.offset().left,m=l.width(),k=(j/m);l.parent().siblings("#strikeplayer")[0].volume=k;});jQuery(this).bind("mouseup mouseleave",function(){jQuery(this).unbind("mousemove");});});jQuery(".photo-gallery-single a.photo-fullscreen-button").bind("click",function(j){var i=jQuery(this).parent().parent()[0];if(i.requestFullscreen){i.requestFullscreen();}else{if(i.msRequestFullscreen){i.msRequestFullscreen();}else{if(i.mozRequestFullScreen){i.mozRequestFullScreen();}else{if(i.webkitRequestFullscreen){i.webkitRequestFullscreen();}else{alert("Atvaino, bet Tavs pārlūks neatbalsta šo iespēju!");}}}}return false;});jQuery(".photo-gallery-single a.cancel-fullscreen-button").bind("click",function(j){var i=jQuery(this).parent().parent()[0];if(document.exitFullscreen){document.exitFullscreen();}else{if(document.msExitFullscreen){document.msExitFullscreen();}else{if(document.mozCancelFullScreen){document.mozCancelFullScreen();}else{if(document.webkitExitFullscreen){document.webkitExitFullscreen();}}}}return false;});function h(){if(!document.fullscreenElement&&!document.mozFullScreenElement&&!document.webkitFullscreenElement&&!document.msFullscreenElement){jQuery(".photo-gallery-single").removeClass("isonfullscreen");}else{jQuery(".photo-gallery-single").addClass("isonfullscreen");}}document.addEventListener("fullscreenchange",function(i){h();});document.addEventListener("mozfullscreenchange",function(i){h();});document.addEventListener("webkitfullscreenchange",function(i){h();});document.addEventListener("msfullscreenchange",function(i){h();});jQuery("#menu-bottom").addClass("blurred");reloadMenuBlur(jQuery(".featured-img-box").css("background-image"));});})(jQuery);function reloadMenuBlur(a){if(jQuery("body").hasClass("no-slider")){var a=jQuery(".featured-img-box").css("background-image");}jQuery("#menu-bottom #menu").css("background-image",a);}function surroundSelection(c,b){if(window.getSelection){if(c.rangeCount){var a=c.getRangeAt(0).cloneRange();a.surroundContents(b);c.removeAllRanges();c.addRange(a);}}}var letscountconv=0;function freezeAnim(){if(dofreeze){featSelect(featLast);}dofreeze=false;}function starFnc(){reloadMenuBlur(jQuery(".featured-img-box .featured-img:not(.invisible)").css("background-image"));if(!strike_autostart){return;}isAnim=true;setTimeout("doFadeAuto()",strike_autoTime);var a=(featLast<strike_featCount)?(featLast+1):1;autoTimers(a,(strike_autoTime/1000));autoTimersBar(a,(strike_autoTime/1000));document.getElementById("featSelect-"+a).className="featured-select this-is-next";}function featNext(){var a=(featLast<strike_featCount)?(featLast+1):1;doFade(a,featLast,false);}function featPrev(){var a=(featLast>1)?(featLast-1):strike_featCount;doFade(a,featLast,false);}function featSelect(a){doFade(a,featLast,false);}function doFadeAuto(b){if(!isAnim&&!b){return;}var c=(featLast<strike_featCount)?(featLast+1):1;doFade(c,featLast,true);var a=(c<strike_featCount)?(c+1):1;autoTimers(a,(strike_autoTime/1000));autoTimersBar(a,(strike_autoTime/1000));document.getElementById("featSelect-"+a).className="featured-select this-is-next";setTimeout("doFadeAuto()",strike_autoTime);reloadMenuBlur(jQuery(".featured-img-box .featured-img:not(.invisible)").css("background-image"));}function autoTimers(b,a){if(!isAnim){return;}document.getElementById("feat-countdown-"+b).innerHTML=a;if(a<=0){return;}setTimeout("autoTimers('"+b+"', '"+(a-1)+"')",1000);}function autoTimersBar(b,a){if(!isAnim){return;}document.getElementById("feat-countdown-bar-"+b).style.width=(100/(strike_autoTime/1000)*((strike_autoTime/1000)-a))+"%";if(a<=0){return;}setTimeout("autoTimersBar('"+b+"', '"+(a-0.1)+"')",100);}function doFade(a,b,c){isAnim=c;if(!isAnim){for(var d=1;d<=strike_featCount;d++){document.getElementById("featSelect-"+d).className="featured-select";}}jQuery("#slider-info .padding-box ul li").eq((b-1)).fadeOut("fast",function(e){jQuery("#slider-info .padding-box ul li").eq((a-1)).fadeIn("fast");});document.getElementById("featured-img-"+b).className="featured-img invisible";document.getElementById("featSelect-"+b).className="featured-select";document.getElementById("featured-img-"+a).className="featured-img";document.getElementById("featSelect-"+a).className="featured-select this-active";if(a==b){return;}featLast=a;reloadMenuBlur(jQuery(".featured-img-box .featured-img:not(.invisible)").css("background-image"));}function startTimer(){setInterval(function(){jQuery(".countdown-text").each(function(){var a=jQuery(this).attr("rel");var b=new Date().getTime()/1000;b=Math.floor(b);if(a>b){jQuery(this).html(secondsToHms(a-b));}else{jQuery(this).css("color","#e62d24");jQuery(this).html("00:00:00:00");}});},1000);}function addZero(a){if(a.toString().length==1){return"0"+a;}else{return a;}}function secondsToHms(e){e=Number(e);var c=Math.floor(e/3600);var f=addZero(Math.floor(c/(24)));c=addZero(Math.floor((e/3600)-(f*24)));var a=addZero(Math.floor(e%3600/60));var b=addZero(Math.floor(e%3600%60));return f+":"+c+":"+a+":"+b;}function setSongPosition(){return true;}function setNewVolume(){return true;}$(window).scroll(function(){if($(this).scrollTop()>=100){$(".back-to-top").css({display:"block"},100);}else{$(".back-to-top").fadeOut("100");}});$(".back-to-top").click(function(){$("html, body").animate({scrollTop:0},600);return false;});$(document).ready(function(){$commentDiv=$("#recent-comments");$.get("https://disqus.com/api/3.0/forums/listPosts.json?forum=flinhong&limit=5&related=thread&api_key=AG6wxZBFUA8qIso826fmtIrarSr0xUMjOBhMx2xdcWNLeFKbvwBhUwiMzVcFpJ9I",function(f,g){if(f.code===0){var b="";for(var e=0,a=f.response.length;e<a;e++){var d=f.response[e];console.dir(d);var h=moment.utc(d.createdAt).startOf("minute").fromNow();var c="<div class='new-forum-line'>";c+="<a href='"+d.author.profileUrl+"' class='avatar'>";c+="<img src='"+d.author.avatar.permalink+"' class='setborder' />";c+="</a>";c+="<a href='"+d.thread.link+"' class='f_content'>";c+="<strong>"+d.thread.title+"</strong>";c+="<span><b>"+d.author.name+"</b> · "+h+"</span>";c+="</a>";c+="<p>"+d.raw_message+"</p>";c+="</div>";b+=c;}$commentDiv.html(b);}});});$(document).ready(function(){$("#content").fitVids();});var clickcount=0;$("#click-button").click(function(){if(clickcount==0){$("#qrcode").css({display:"inline"});clickcount=clickcount+1;}else{$("#qrcode").css({display:"none"});clickcount=0;}});$("#qrcode").click(function(){$("#qrcode").css({display:"none"});clickcount=0;});var jWindow=$(window);jWindow.scroll(function(){var j=jWindow.scrollTop();var c=jWindow.height();var b=jWindow.width();var a=$("#main-box").width();var i=$("#main").height();var f=$("#header").height()+$("#header-top").height()+600;var h=$(".footer").height();var g=$("#sidebar").width();var e=(b-a)/2;var d=$(".footer").offset().top;if(j>f&&j+c<d&&b>1000){$(".post-sidebar").css({position:"fixed",top:"0px",right:e+"px","z-index":"0"});$(".moved").css({display:"none"});$(".toc-fix").css({position:"static"});}else{if(j+c>=d&&b>1000){$(".toc-fix").css({position:"fixed",width:g+"px",top:"0px",right:e+"px","z-index":"0"});$(".post-sidebar").css({position:"static"});}else{$(".post-sidebar").css({position:"static"});$(".moved").css({display:"inline"});}}});$(".hascaption").each(function(){$(this).replaceWith($('<div class="wp-caption hascaption">'+this.innerHTML+"</div>"));});$(".hascaption").children("img").each(function(){var a;a=$(this).attr("title");$(this).after('<p class="wp-caption-text">'+a+"</p>");});