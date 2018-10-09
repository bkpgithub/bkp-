$(document).ready(function(){
		$.fn.scroll_({arrows:false,mouseWheelSpeed: 30,verticalGutter:15});
		setTimeout(function(){
			$('#Introduction .Tab').Tab({lilab:"li",labselect:".change",Tabname:".Tab_nr",labaction:"click",animatename:"scroll_x",animateTime:300,mode:"none"})
		},130)
		$("#PhotoshowGundong").jcarousellite_gundong({btn:1,list:".PicList li","visible":3,"auto":2500,"speed":300})		

		if ($("#playbanner").length>0)
		{
			$("#playbanner").ZHYslider({
					speed: 1200, 
					space: 6000,
					auto: true, //自动滚动
					affect:'fade',
					ctag: '.Slide_'
			})
		}
		if ($("#ZhiYe").length>0)
		{
			
				$("#ZhiYe").ZHYslider({
						speed: 1200, 
						space: 6000,
						auto: true, //自动滚动
						affect:'scrollx',
						ctag: '.Slide_',
						End:function(self,switch_obj,settings){
							self.find(".ZhiYeTab").on("click","li",function(){
								var index=$(this).index()
								switch_obj.find(settings.stag+':eq('+index+')').trigger(settings.trigger)
							})
						},
						beforeStart:function(self,index){
							self.find(".ZhiYeTab li:eq("+index+")").addClass('change').siblings().removeClass("change")
						}
				})
				
		
		}
		
		
		
		if ($("#Photoshow").length>0)
		{
			$("#Photoshow").ZHYslider({
					speed: 500, 
					space: 6000,
					auto: false, //自动滚动
					affect:'scrollx',
					arrow		:true,	
					ctag: '.Slide_'
			})
		}
		
				
		/*播放视频*/		 
		$("#btn_play").one("click",function(){
			var videourl=$(this).attr("data-file")	
			var autoplay=$(this).attr("data-autoplay")	
			var playobj=$(this).attr("data-playobj")
			if ($(playobj).length==0) return false;
			
			if (videourl)
			{
				
			var w=$(playobj).outerWidth()
			var h=$(playobj).outerHeight()
				
			var writehtml='<object class id="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="'+w+'" height="'+h+'">'
				writehtml+='<param name="movie" value="flash/Flvplayer.swf">'
				writehtml+='<param name="quality" value="high">'
				writehtml+='<param value="transparent" name="wmode">'
				writehtml+='<param name="allowFullScreen" value="true">'
				writehtml+='<param name="FlashVars" value="vcastr_file='+videourl+'&BufferTime=3&IsAutoPlay='+autoplay+'">'
				writehtml+='<embed src="flash/Flvplayer.swf" wmode="Opaque" allowfullscreen="true" flashvars="vcastr_file='+videourl+'&IsAutoPlay='+autoplay+'" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+w+'" height="'+h+'"></embed>'
				writehtml+='</object>'
				
				$(this).stop(true,false).animate({opacity: 0}, 500,function(){$(playobj).html(writehtml)})
			}
			
			
		})	
		
		
			$.fn.hovers()
	
		
})
//悬停效果
$.fn.hovers=function(){
		$("#Floatingbar").on("click",".btn_",function(){
				var float_obj=$("#Floatingbar")
				var btn=$(this);
				var text=btn.text();
				if (text=="收起")
				{
					btn.text("展开")	
					float_obj.stop(true,false).animate({"right":"-200px"},200)
				}
				else
				{
					btn.text("收起")	
					float_obj.stop(true,false).animate({"right":"0"},200)
				}
			
		})
		$("#ver .verbox").GameHover("#f96972",1,0,1);
		
		$("#video").hover_animate(
				{
				  aniobj:
				  [
					  [
						  "img",					//应用对象
						  "",//初始CSS
						  "{'opacity':0.7}",		//mouseenter动画CSS
						  "{'opacity':1}",			//mouseleave动画css
						  "300",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ]
				  ]
				}
				
			)
			
		//ad广告悬停
		
		$(".ad_").hover_animate(
				{
				  aniobj:
				  [
					  [
						  ".photo",					//应用对象
						  "",//初始CSS
						  "top:-100px;left:50px;",		//mouseenter动画CSS
						  "top:-150px;left:-80px;",				//mouseleave动画css
						  "300",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ]
					  ,[
						  "._text",					//应用对象
						  "",//初始CSS
						  "top:50px;",		//mouseenter动画CSS
						  "top:0;",			//mouseleave动画css
						  "500",					//mouseenter 时间
						  "600"						//mouseleave 时间
					  ]
					  ,[
						  ".ad_bg",					//应用对象
						  "",//初始CSS
						  "left:0;",		//mouseenter动画CSS
						  "left:100%;",			//mouseleave动画css
						  "500",					//mouseenter 时间
						  "600"						//mouseleave 时间
					  ]
					  
				  ]
				}
				
			)	
			
	
		//装备悬停
		$(".PicList li").hover_animate(
				{
				  aniobj:
				  [
					  [
						  ".photo img",					//应用对象
						  "",//初始CSS
						  "opacity:0.6;width:110%;height:110%;margin-left:-5%;margin-top:-3%;",		//mouseenter动画CSS
						 "width:100%;opacity:1;height:100%;margin-left:0%;margin-top:0%;",				//mouseleave动画css
						  "300",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ]
					  ,[
						  ".photo span",					//应用对象
						  "bottom:-35px;opacity:0;",//初始CSS
						  "bottom:0px;opacity:1;",		//mouseenter动画CSS
						  "bottom:100%;opacity:0;",			//mouseleave动画css
						  "500",					//mouseenter 时间
						  "600"						//mouseleave 时间
					  ]
					  ,[
						  "strong",					//应用对象
						  "",//初始CSS
						  "margin-top:-40px;opacity:0;",		//mouseenter动画CSS
						  "margin-top:0;opacity:1;",			//mouseleave动画css
						  "300",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ]
				  ]
				}
				
			)
			
		$(".ads").GameHover("#b7494c",2,0,1);	
		$(".ads").hover_animate(
				{
				  aniobj:
				  [
					  [
						  "img",					//应用对象
						  "{'position':'relative'}",//初始CSS
						  "left:-50px;",		//mouseenter动画CSS
						  "left:0px;",			//mouseleave动画css
						  "2300",					//mouseenter 时间
						  "600"						//mouseleave 时间
					  ],[
						  ".text",					//应用对象
						  "",//初始CSS
						  "padding-right:30px;",		//mouseenter动画CSS
						  "padding-right:14px;",			//mouseleave动画css
						  "600",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ]
				  ]
				}
				
			)		
			
	
		$("#menu li").hover_animate(
				{
				  aniobj:
				  [
					  [
						  "em",					//应用对象
						  "{'position':'relative'}",//初始CSS
						  "{'top':'20px'}",		//mouseenter动画CSS
						  "{'top':0}",			//mouseleave动画css
						  "300",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ],
					  [
						  "span",					//应用对象
						  "{'position':'relative'}",//初始CSS
						  "{'top':'-30px'}",		//mouseenter动画CSS
						  "{'top':0}",			//mouseleave动画css
						  "300",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ]
				  ]
				}
				
			)		
}
//悬停效果
	$.fn.GameHover=function(bordercolors,width,margin,jiaocuo){
		var time_delay=null;
		var self=$(this)
		if (self.length==0) return false;
		
		var writehtml="<span class='line_top'></span><span class='line_right'></span><span class='line_bom'></span><span class='line_left'></span>"
		self.each(function(index, element) {
            $(this).append(writehtml)
			var line_top=$(this).find(".line_top");
			var line_right=$(this).find(".line_right");
			var line_bom=$(this).find(".line_bom");
			var line_left=$(this).find(".line_left");
			var bordercolor=bordercolors
			if (jiaocuo==1)
			{
				jiaocuo=margin;
			}
			else
			{
				jiaocuo=0;
			}
			line_top.css({"position":"absolute","left":jiaocuo,"top":margin,"height":width+"px",width:0,"overflow":"hidden","line-height":0,"font-size":0,"background":bordercolor});
			line_right.css({"position":"absolute","right":margin,"top":jiaocuo,"width":width+"px",height:0,"overflow":"hidden","line-height":0,"font-size":0,"background":bordercolor});
			line_bom.css({"position":"absolute","right":jiaocuo,"bottom":margin,"height":width+"px",width:0,"overflow":"hidden","line-height":0,"font-size":0,"background":bordercolor});
			line_left.css({"position":"absolute","left":margin,"bottom":jiaocuo,"width":width+"px",height:0,"overflow":"hidden","line-height":0,"font-size":0,"background":bordercolor});
        });
		
	
		var line_top,line_right,line_bom,line_left,txt_right;
		self.bind('mouseenter',function(){
					var selfs=$(this);
					line_top=selfs.find(".line_top");
					line_right=selfs.find(".line_right");
					line_bom=selfs.find(".line_bom");
					line_left=selfs.find(".line_left");
					txt_right=selfs.find(".txt_right")
					
					time_delay=setTimeout(function(){
								if(!selfs.is(":animated"))
								{
									
									selfs.addClass("star_animate");
									var easing={ duration:500,easing:'easeInOutCirc' };
									line_top.stop(true,false).animate({"width":"100%"}, easing);
									line_bom.stop(true,false).animate({"width":"100%"}, easing);
									line_right.stop(true,false).animate({"height":"100%"}, easing);
									line_left.stop(true,false).animate({"height":"100%"}, easing);
									txt_right.stop(true,false).animate({"left":"250"}, 500);
								}
						
					},100)
				
			}).bind('mouseleave',function(){
				    clearTimeout(time_delay)	
							var selfs=$(this);
							if (selfs.is(".star_animate"))
							{		
									selfs.removeClass("star_animate");
								
									var easing={ duration:800,easing:'easeInOutCirc' };
									line_top.stop(true,false).animate({"width":"0%"}, easing);
									line_bom.stop(true,false).animate({"width":"0%"}, easing);
									line_right.stop(true,false).animate({"height":"0%"}, easing);
									line_left.stop(true,false).animate({"height":"0%"}, easing);
									txt_right.stop(true,false).animate({"left":"10"}, 500);
							}
			})	
	
		
		
	}
//加载滚动条
$.fn.scroll_=function(config){
	var scrollobj=$("[data-scroll]")
	if (scrollobj.length==0) return false;
	scrollobj.each(function(index, element) {
			var self=$(this)
			if (self.length==0)  return false;
			
			var h=parseInt(self.attr("data-scroll-height")),
				w=parseInt(self.attr("data-scroll-width")),
				color=self.attr("data-scroll-color");
				self.css({"width":"100%"});
				self.wrap('<div class="container1" style="width:'+w+'px"></div>').wrap('<div class="div_scroll"></div>');
				self.parents('.div_scroll').css({height:h}).scroll_absolute(config)	
				self.find("img").load(function(){self.parents('.div_scroll').scroll_absolute(config);})
			
			if (typeof(color)!="undefined")
			{setTimeout(function(){self.parents(".container1").find(".scroll_drag").css({"background":color})},500);}
	});
}
$.fn.hover_animate=function(obj){
	var time_delay=null,runlist=[],runlist_end	=[],create_var=[],set_var=[],self=$(this)
		if (self.length==0) return false;
		if (obj.aniobj.length==0) return false;
		if (obj.set_class=="" || typeof (obj.set_class)=="undefined") {$.extend(obj,{set_class:"hover"});	}
		if (typeof(obj.delaytime)!="number" || typeof(obj.delaytime)=="undefined"){$.extend(obj,{delaytime:100});	}
		var fn={
			csschange:function(val){
				if (val==""){return '';}
				if (val.indexOf("{")<0 || val.indexOf("}")<0 )
				{
					val=$.trim(val)
					var last_fh=val.lastIndexOf(';')
					if (last_fh+1==val.length)
					{
						val=val.substring(0,last_fh);
						val='{\''+val.replace(/\:/g,"':'").replace(/\;/g,"','")+'\'}';
					}
					else
					{   val='{\''+val.replace(/\:/g,"':'").replace(/\;/g,"','")+'\'}';	}
				}
				return $.trim(val);
			}	
		}
		$.each(obj.aniobj,function(index,val){
			if (val.length<6) return false;
			var setobj			=	val[0],
				setobj_			=	setobj.replace(/\.|\ |\>/g,""),
				animate_css		=	fn.csschange(val[1]),
				animate_start	=	fn.csschange(val[2]),
				animate_end		=	fn.csschange(val[3]),
				animate_easing	=	val[4],
				animate_easing2	=	val[5],
				run				=	'',
				run_end			=	''
				
				if (setobj=="") return false;
				create_var.push('var _'+setobj_+'')
				setobj=="self" ? set_var.push('_'+setobj_+'=[self]'): set_var.push('_'+setobj_+'=[self].find("'+setobj+'")')
				if (animate_css=="" && animate_start=="") return false;
				if (animate_css!="" && animate_start!="")
				{run='_'+setobj_+'.css('+animate_css+').stop(true,false).animate('+animate_start+','+animate_easing+')'}		
				else if (animate_css=="" && animate_start!="")
				{run='_'+setobj_+'.stop(true,false).animate('+animate_start+','+animate_easing+')'}
				else if (animate_css!="" && animate_start=="")
				{run='_'+setobj_+'.css('+animate_css+')'}
				
				runlist.push(run)
				if (animate_end!="")
				{	
					run_end='_'+setobj_+'.animate('+animate_end+','+animate_easing2+')'
					runlist_end.push(run_end)
				}
				
		})
		var selfobj=null;
		self.unbind(".s")
		$.each(create_var,function(index,val){eval(val);})
		self.bind("mouseenter.s",function(){
			selfobj=$(this)
			$.each(set_var,function(index,val){eval(val.replace("[self]","selfobj"));})
			clearTimeout(time_delay)	
			time_delay=setTimeout(function(){
					if(!selfobj.is(":animated"))
					{
						selfobj.addClass(obj.set_class);
						$.each(runlist,function(index,val){eval(val)})	;
					}
			},obj.delaytime)
		})
		.bind("mouseleave.s",function(){
			clearTimeout(time_delay)	
			if (selfobj.is("."+obj.set_class))
			{		
				$.each(runlist_end,function(index,val){eval(val);})	
				selfobj.removeClass(obj.set_class);
			}
		})
}	

//滚动
		$.fn.jcarousellite_gundong=function(options ){
			var self=$(this);
			if (self.length==0) return false;
			var items=options.list,config;
			if (self.find(items).length<=options.visible) 
			{
				var width=self.find(options.list).parent().outerWidth()
				self.css({"margin":"0 auto","width":width})
			return false;	
			}
			else
			{
				var liobj=self.find(options.list)
				var width=liobj.outerWidth()
				var margin=parseInt(liobj.css("margin-left"))+parseInt(liobj.css("margin-right"));
				width+=margin
				self.css({"margin":"0 auto","width":width*options.visible})
			}
			self.css("overflow","visible");
			
			if (self.find(items).is("div"))
			{
				self.find(items).wrap("<li></li>");
				self.find(items).parent().wrapAll("<ul class='templist'></ul>");		
				items=".templist li"
			}
			self.find(items).parent().wrapAll('<div class="jCarouselLite"></div>').parent().wrapAll('<div class="gundong"></div>');
			
			
			if (options.btn!=0)
			{
				self.find(".gundong").append('<span class="clear"></span><a href="javascript:;"  class="move_right"><span></span></a><a href="javascript:;" class="move_left disabled" ><span></span></a>')
			}
			
			self.find(".gundong").each(function(index){
				
				config={
							btnPrev: $(this).find(".move_left:eq("+index+")"),
							btnNext: $(this).find(".move_right:eq("+index+")"),
							visible:1,
							auto: 2500 ,
							speed: 300
						}	
				if (options.btn==0)		
				{
					$.extend(config, {btnPrev:null,btnNext:null});							
				}
				$.extend(config, options);
				$(this).find(".jCarouselLite:eq("+index+")").jCarouselLite(config);	
			})
		}
//选项卡切换
		$.fn.Tab=function(config){
			var self=$(this)
			if (self.length==0) return false;
			if (self.find(config.lilab).length==0) return false;
			var select_	=	0,classname	= config.labselect.replace(".","")
			
			
			self.each(function(index, element) {
							
					self=$(this);
					if (self.find(config.labselect).length==0) 
					{self.find(config.lilab+":eq(0)").addClass(classname);}
					
					self.find(config.lilab).each(function(index, element) {
							if (!$(this).is(config.labselect))
							{self.siblings(config.Tabname+":eq("+index+")").hide();}
					});
						
					self.find(config.lilab).bind(config.labaction+".action",function(){
							var index=$(this).index();
							if(self.siblings(config.Tabname+":visible").is(":animated"))
							{ return false;}
							
							if ($(this).is(config.labselect)) return false;
							
							var index2=$(this).siblings(config.labselect).index()
							
							$(this).addClass(classname).siblings().removeClass(classname);
							
							config.animate(index,index2,config.animatename)
							return config.labaction=="click"?   false :  true;
					})
						
					config.animate=function(index,index2,active){
							switch (active)
							{
								case "fade":
									self.siblings(config.Tabname+":visible").hide();
									self.siblings(config.Tabname+":eq("+index+")").fadeIn(config.animateTime);
								break;
								case "scroll_x":
									self.parent().css({"position":"relative","overflow":"hidden"});
									var selfs=self.siblings(config.Tabname+":visible")
									var dr="100%",dr2="100%"
									if (index2>index)
									{dr="100%";dr2="-100%";}
									else
									{dr="-100%";dr2="100%";	}
									var top=selfs.position().top
									if (config.mode=="delay")		
									{
									//当前渐隐
									selfs
									.css({"position":"relative","width":"100%"})
									.stop(true,false)
									.animate({"left":dr,"opacity":0},config.animateTime,
												function(){
													 $(this).css({"position":"static","left":"auto","opacity":1,"display":"none"}
												)}
											)
									setTimeout(function(){
												self.siblings(config.Tabname+":eq("+index+")").css({"position":"relative","left":dr2,"display":"block","opacity":0})
												.stop(true,false)
												.animate({"left":0,"opacity":1},config.animateTime
												,function(){
														$(this).css({"top":0,"position":"static"})	
												})
									},config.animateTime)		
									}
									else
									{
										
											selfs
											.css({"position":"absolute","width":"100%","left":selfs.position().left,"top":selfs.position().top})
											.stop(true,false)
											.animate({"left":dr,"opacity":0},config.animateTime,
												function(){
													 $(this).css({"position":"relative","top":"auto","left":"auto","opacity":1,"display":"none"}
												)}
											)
												self.siblings(config.Tabname+":eq("+index+")").css({"position":"relative","left":dr2,"display":"block","opacity":0})
												.stop(true,false)
												.animate({"left":0,"opacity":1},config.animateTime
												,function(){
														$(this).css({"top":0,"position":"relative"})	
														
												})
									}
								break;
								case "none":
									self.siblings(config.Tabname+":visible").hide();
									self.siblings(config.Tabname+":eq("+index+")").show();
								break;	
							}
						}
            });
		}

	//弹窗口
function show(file,width,height)
{	
	$("#window").empty().remove();
	$("body").append('<div id="window"><div id="float_window"><iframe src="'+file+'" style="width:'+width+';height:'+height+';background-color:transparent;overflow:hidden;" scrolling="no" frameborder="0" allowtransparency="true" id="popupFrame" name="popupFrame" width="100%" height="100%"></iframe><span class="closewindow"></span></div></div>')
	$("#window").css("height",$(window).height()).show()
	$("#float_window").css({"width":width,"height":height,"margin-left":"-"+parseInt(width/2)+"px","margin-top":"-"+parseInt(height/2)+"px"})
	$(".closewindow").unbind("click");
	$(".closewindow").bind("click",function(){$("#window").empty().remove();})
}

//关闭窗口
function closewindow(){$("#window").empty().remove();}					
	

jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d);},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b;},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b;},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b;},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b;},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b;},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b;},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b;},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b;},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b;},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b;},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b;},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b;},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b;},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b;},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b;},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b;},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b;},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b;},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b;},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b;},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b;},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b;}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b;}});