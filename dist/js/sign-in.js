"use strict";function code(){for(var n="abcdefghijklmnopqrstuvwxyz0123456789",s="",i=0;i<4;i++){var o=Math.floor(Math.random()*n.length);s+=n.charAt(o)}$(".num-code").html(""+s[0]+s[1]+s[2]+s[3]),$(".number input").val()==$(".num-code").html()?($(".number .true").css("display","block"),$(".number .notice-infor").css("display","none")):""===$(this).val()?$(".number .notice-infor").css("display","none"):$(".number .notice-infor").css("display","block")}$(".change").click(code),$(".number input").on("blur",function(){$(this).val()==$(".num-code").html()?($(".number .true").css("display","block"),$(".number .notice-infor").css("display","none")):""===$(this).val()?$(".number .notice-infor").css("display","none"):$(".number .notice-infor").css("display","block")}),$(".phone input").on("blur",function(){/^1[3|5|8|7][0-9]{9}/gi.test($(this).val())?($(".phone .true").css("display","block"),$(".phone .notice-infor").css("display","none")):""===$(this).val()?$(".phone .notice-infor").css("display","none"):$(".phone .notice-infor").css("display","block")}),$(".code input").on("blur",function(){/[0-9]{6}/gi.test($(this).val())?($(".code .true").css("display","block"),$(".code .notice-infor").css("display","none")):""===$(this).val()?$(".code .notice-infor").css("display","none"):$(".code .notice-infor").css("display","block")}),$(".password input").on("blur",function(){/^[a-zA-Z0-9_]{4,16}$/gi.test($(this).val())?($(".password .true").css("display","block"),$(".password .notice-infor").css("display","none")):""===$(this).val()?$(".password .notice-infor").css("display","none"):$(".password .notice-infor").css("display","block")}),$(".pass input").on("blur",function(){var n=$(".password input").val();$(".pass input").val()===n&&""!=$(".password input").val()?($(".pass .true").css("display","block"),$(".pass .notice-infor").css("display","none")):""===$(this).val()?$(".pass .notice-infor").css("display","none"):$(".pass .notice-infor").css("display","block")}),$(".invite input").on("blur",function(){/[0-9A-Za-z]{6}/gi.test($(this).val())?($(".invite .true").css("display","block"),$(".invite .notice-infor").css("display","none")):""===$(this).val()?$(".invite .notice-infor").css("display","none"):$(".invite .notice-infor").css("display","block")}),$(".sign-form p input").each(function(n,s){var i="";$(s).on("focus",function(){i=$(this).attr("placeholder"),$(this).attr("placeholder","")}),$(s).on("blur",function(){""===$(this).val()&&$(this).attr("placeholder",i)})}),$(".code button").click(function(){var n=60,s=null;$("button").html("重新发送("+n+"s)"),s=setInterval(function(){--n<1&&($("button").html("重新获取验证码"),clearInterval(s)),$("button").html("重新发送("+n+"s)")},1e3)});