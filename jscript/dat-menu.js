var _datMenuAnim=(typeof _datMenuAnim==="undefined")?400:_datMenuAnim;var _datMenuEffect=(typeof _datMenuEffect==="undefined")?"effect-1":_datMenuEffect;var _datMenuSublist=(typeof _datMenuSublist==="undefined")?true:_datMenuSublist;var _datMenuHeader=(typeof _datMenuHeader==="undefined")?true:_datMenuHeader;var _datMenuHeaderTitle=(typeof _datMenuHeaderTitle==="undefined")?'<a href="#"><img src="/assets/images/logo.png" style="background-color: #0589cd;" alt="" /></a>':_datMenuHeaderTitle;var _datMenuSearch=(typeof _datMenuSearch==="undefined")?true:_datMenuSearch;var _datMenuCustomS=(typeof _datMenuCustomS==="undefined")?"fa-search":_datMenuCustomS;var _datMenuCustomM=(typeof _datMenuCustomM==="undefined")?"fa-bars":_datMenuCustomM;var _datMenuRootURL=(typeof _datMenuRootURL==="undefined")?"":_datMenuRootURL;var myScroll;jQuery(document).ready(function(){var b=(_datMenuSublist)?" dat-submenu":"";if(!Modernizr.csstransforms3d){jQuery("body").addClass("no-csstransforms3d");}jQuery("body").addClass("has-dat-menu").wrapInner(function(){return'<div id="dat-menu" class="'+_datMenuEffect+'"><div class="dat-menu-container"><div class="dat-menu-wrapper"></div></div></div>';});jQuery("#dat-menu").append('<nav class="dat-menu-list'+b+'"><ul id="dat-menu-list-inner"></ul></nav>');if(_datMenuHeader){jQuery(".dat-menu-wrapper").addClass("dat-menu-padding");jQuery(".dat-menu-container").prepend('<div class="dat-menu-top-header">'+_datMenuHeaderTitle+'<form action="'+_datMenuRootURL+'"><input type="text" name="s" value="" /><input type="submit" value="" /></form></div>');if(_datMenuSearch){jQuery(".dat-menu-top-header").prepend('<a href="#" class="dat-menu-search"><i class="fa '+_datMenuCustomS+'"></i></a>');}jQuery(".dat-menu-top-header").prepend('<a href="#dat-menu" class="dat-menu-menu"><i class="fa '+_datMenuCustomM+'"></i></a>');}jQuery(".dat-menu-top-header input[type='text']").bind("blur",function(){jQuery(".dat-menu-top-header").css("position","fixed").css("top","0px");});jQuery(".dat-menu-top-header .dat-menu-search").bind("click",function(){jQuery("html,body").animate({scrollTop:0});jQuery(".dat-menu-top-header").css("position","absolute").css("top","0px");jQuery(".dat-menu-top-header input[type='text']").focus();return false;});jQuery(".load-responsive").each(function(){var c=jQuery(this);jQuery(".dat-menu-list > ul").append('<li class="dat-menu-header"><span>'+c.attr("rel")+"</span></li>"+c.html());});jQuery(".dat-menu-list.dat-submenu > ul > li ul").each(function(){var c=jQuery(this).parent();c.addClass("dat-has-sub");});var a=["background","background-size","background-image","background-color","background-repeat","background-position"];jQuery.each(a,function(c,d){jQuery(".dat-menu-container").css(d,jQuery("body").css(d));});jQuery("#dat-menu-list-inner li > a").on("click tap",function(){var d=jQuery(this).parent();if(d.hasClass("dat-has-sub")==false){var c=d.children("a");window.location=c.attr("href");return true;}else{if(d.hasClass("dat-sub-active")){var c=d.children("a");window.location=c.attr("href");return true;}else{setTimeout(function(){d.addClass("dat-sub-active");},100);d.children("ul").children("li").css("display","none").animate({height:"toggle"},_datMenuAnim,function(){myScroll.refresh();});return false;}}return false;});jQuery(".dat-menu-container").on("mousedown",function(){var d=jQuery(this).parent();if(d.hasClass("dat-menu-load")){var c=Math.abs(parseInt(jQuery("#dat-menu > .dat-menu-container > .dat-menu-wrapper").css("top")));d.removeClass("dat-menu-animate");setTimeout(function(){d.removeClass("dat-menu-load");d.removeClass("dat-menu-setup");jQuery(document).scrollTop(c);jQuery("body").removeClass("datnomargin");},_datMenuAnim+100);return false;}return true;});jQuery("#wpadminbar").appendTo("body");myScroll=new IScroll(".dat-menu-list",{scrollbars:false,mouseWheel:true,interactiveScrollbars:false,shrinkScrollbars:"scale",fadeScrollbars:false,tap:true});jQuery('a[href="#dat-menu"]').on("click",function(){var c=jQuery(document).scrollTop(),d=jQuery("#dat-menu");d.find(".dat-menu-wrapper").css("top","-"+parseInt(c)+"px");d.addClass("dat-menu-setup");d.toggleClass("dat-menu-load");setTimeout(function(){myScroll.refresh();d.toggleClass("dat-menu-animate");},10);jQuery("body").addClass("datnomargin");return false;});});