"use strict";$(".goods-list dd").css("display","none"),$(".sec-classify li").each(function(s,c){$(c).click(function(){$(".sec-classify li").removeClass("active"),$(this).addClass("active"),$(".section-content li").removeClass("active"),$($(".section-content li")[s]).addClass("active")})});