;(function($){
	$.fn.ZHYslider = function(options){
		
		var self=$(this)
		if (self.length==0) return false;
		var minwidth	=	1000,
			Timer		=	null,
			window_w	=	$(window).width(),
			settings 	={
			loading		:	false,
			slider_w	:	null,
			slider_h	:	null,
			arrow		:	false,			//是否有箭头
			arrow_left	:	"._slider_prev",
			arrow_right	:	"._slider_next",
			
			fullscreen	:	false,  	 	//全屏和非全屏
			fullscreen_min_w:1000,
			fullscreen_h:	null,
			mainpic		:	'.mainpic',
			affect		: 	'scrollx', 		//效果  有scrollx|scrolly|fade|none
			speed		: 	1200, 			//动画速度
			space		:	 6000, 			//时间间隔
			auto		: 	true, 			//自动滚动
			trigger		: 	'mouseover', 	//触发事件 注意用mouseover代替hover
			conbox		: 	'.conbox', 		//内容容器id或class
			ctag		: 	'a', 			//内容标签 默认为<a>
			switcher	: 	'.switcher', 	//切换触发器id或class
			stag		: 	'a', 			//切换器标签 默认为a
			current		:	'cur', 			//当前切换器样式名称
			rand		:	false, 			//是否随机指定默认幻灯图片
			Start		:	null,			//开始时运行
			End			:	null,			//结束时运行
			beforeStart	: 	null,			//播放开始时运行
			afterEnd	: 	null			//播放结束时运行
			},
			fn={
				_loading:function(){
					var imglist=[]
					$contents.find(settings.mainpic).each(function(index, element) { imglist.push($(this).attr('src'))});
					settings._loadingpic(imglist,function(loading_oklist){$conbox.fadeIn();})
				},
				_loadingpic:function(urllist,callback){
						if (urllist.length==0) return false;
						var piclist=[]
						$.each(urllist,function(index,val){
								var img_url =urllist[index];
								if (img_url!="")
								{
										var img = new Image();
										img.onload = function(){
											var imgwidth=img.width
											var imgheight=img.height
										};	
										img.src = img_url;
										var check = function(){
											if(img.width>0 || img.height>0)
											{
												piclist.push(img_url+'|'+img.width+'|'+img.height)
												clearInterval(set);
												if (piclist.length==urllist.length)
												{
													return  callback(piclist); 
												}
											}
										};
										var set = setInterval(check,100);
								}
						})
				},
				_arrow :function(){
						self.append('<a href="javascript:;" class="'+settings.arrow_left.replace(".","")+'"><span></span></a> <a href="javascript:;" class="'+settings.arrow_right.replace(".","")+'"><span></span></a> ')
						
						self.find(settings.arrow_left).bind("click",function(){
								var index=$switcher.find(".cur").index();
								var length=$contents_len;
								
								if (index==0)
								{	length=length-1;
									$switcher.find("a:eq("+length+")").trigger(settings.trigger)
								}
								else
								{
									index=index-1;
									$switcher.find("a:eq("+index+")").trigger(settings.trigger);
								}
						})
						
						self.find(settings.arrow_right).bind("click",function(){
								var index=$switcher.find(".cur").index();
								var length=$contents_len;
								if (index==length-1)
								{
									$switcher.find("a:eq(0)").trigger(settings.trigger);
								}
								else
								{	index=index+1;
									$switcher.find("a:eq("+index+")").trigger(settings.trigger);
								}
							
						})
					
				},
				_arrow_show:function(){
					
					
				},
				_arrow_hidden:function(){
					
					
				},
				//设置幻灯片宽和高
				_set_slider_wh:function(){
					if (settings.slider_w!=null)
					{
						$contents.css({"width":settings.slider_w})
					}
					if (settings.slider_h!=null)
					{
						$contents.css({"height":settings.slider_h})
					}
				},
				_fullscreen:function(){
							self.css({"min-width":settings.fullscreen_min_w})
							var resizetime  = null;
							var banner_h	=	self.outerHeight()
								if (typeof(banner_h)!="undefined")
								{
									$conbox.css({"height":banner_h})
									$contents.css({"width":window_w,"height":banner_h})
								}
								window_w<=minwidth ? window_w=minwidth : window_w;
								
								$contents.find(settings.mainpic).each(function(index, element) 
								{
									var imgself=$(this),
										 img_url =imgself.attr("src"),
										 img = new Image();
									
										img.onload = function(){
											var imgwidth=img.width
											var imgheight=img.height
											imgwidth=imgwidth/(imgheight/banner_h)
											imgself.css({"position":"relative","left":"50%","margin-left":"-"+imgwidth/2+"px"})
										};	
										img.src = img_url;
									
									var check = function(){
										if(img.width>0 || img.height>0){clearInterval(set);}
									};
									var set = setInterval(check,100);
								});
							$(window).bind("resize",function(){
								clearTimeout(resizetime)
								resizetime=setTimeout(function(){
									var window_w=$(window).width();
									window_w<=minwidth ? window_w=minwidth :
									$contents.width(window_w);
									setTimeout(function(){
										$switcher.find(".cur").trigger("mouseenter");
									},400)
								},250)
							})
				},
				
				_pause :function(){clearInterval(Timer);},
				_continue:function(){
					if(settings.auto)
					{	clearInterval(Timer);
						Timer = setInterval(function(){settings._slide()},settings.space);
					}
				},
				_slide:function(){
							var endrun=null;
							if (index >= $contents_len) index = 0;
							$stag.removeClass(settings.current).eq(index).addClass(settings.current);
							if(settings.beforeStart) {settings.beforeStart(self,index,settings);} 
							switch(settings.affect)
								{
								case 'scrollx':
									clearTimeout(endrun)
									$conbox.width($contents.length*$contents.width());
									$conbox.stop(true,false).animate({left:-$contents.width()*index},{ duration:settings.speed,easing:'easeOutCirc' });
									endrun=setTimeout(function(){
										if(settings.afterEnd) {settings.afterEnd(self,index,settings);} 	
									},settings.speed)
									
								break;
								case 'scrolly':
									$contents.css({display:'block'});
									$conbox.stop(true,false).animate({top:-$contents.height()*index+'px'},settings.speed);
								break;
								case 'fade':
									$contents.eq(last_index).stop(true,false).animate({'opacity': 0}, settings.speed/2).css('z-index',1)
											 .end()
											 .eq(index).css('z-index',9).stop().animate({'opacity': 1}, settings.speed/2)
								break;
								case 'none':
									$contents.hide().eq(index).show();
								break;
							}
							last_index = index;
							index++;
									
				}
			
			}
		$.extend(settings,options);
		if (settings.Start){settings.Start()}
		
		var html			= '',
		 	index 			= 1,
			last_index 		= 0,
			$conbox 		= self.find(settings.conbox),
			$contents 		= $conbox.find(settings.ctag),
			$contents_len	= $contents.length
			
			
			
			for (var i=1;i<=$contents_len;i++)
			{i==1 ?  html+="<a href='javascript:;' class='cur'></a>" : html+="<a href='javascript:;'></a>";}
			$conbox.after('<div class="switcher">'+html+'</div>')
		
			var $switcher 		= self.find(settings.switcher),
				$stag 			= $switcher.find(settings.stag)
			$.extend(settings,fn);
			settings.loading	? settings._loading() : true;
			if(settings.rand) {index = Math.floor(Math.random()*$contents_len);settings._slide();}
			if(settings.affect == 'fade')
			{
				$.each($contents,function(k, v){
					(k === 0) ? $(this).css({'position':'absolute','z-index':9}):$(this).css({'position':'absolute','z-index':1,'opacity':0});
				});
			}
			if(settings.arrow){settings._arrow();}
			settings.fullscreen ? settings._fullscreen() :settings._set_slider_wh();
			settings.auto ? Timer = setInterval(function(){settings._slide()}, settings.space) : Timer=null;
			$stag.bind(settings.trigger,function(){
				settings._pause()
				index = $(this).index();
				settings._slide();
				settings._continue()
			});
			
			
			self.hover(function(){settings._pause()},function(){settings._continue()});
		if (settings.End){settings.End(self,$switcher,settings)}
	}
})(jQuery);