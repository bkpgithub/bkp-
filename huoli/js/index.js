(function($){
$.fn.adFloat=function(options){
return new AdFloat(this,options);
}
var AdFloat=function(element,options){
this.element=$(element);
this.options=$.extend({
width:100, //Ĭ�ϵĹ��Ŀ�
height:150, //Ĭ�ϵĹ��ĸ�
top:0, //Ĭ�ϵĹ���Y����
left:0, //Ĭ�ϵĹ���X����
delay:30, //�ӳ�
step:4 //Ĭ�ϵĹ��ÿ���ƶ��ľ���(����)
},options);
this.interval=null;
this.xPos=this.options.left;
this.yPos=this.options.top;
this.yon=0;
this.xon=0;
this.isPause=false;
this.init();
};
AdFloat.prototype={
init:function(){
var me=this;
me.element.css("display","block");
me.element.css({position:"absolute",left:me.options.left,top:me.options.top,width:me.options.width,height:me.options.height,overflow:"hidden"})
me.element.hover(function(){clearInterval(me.interval)},function(){me.interval=setInterval(function(){me.changePos();},me.options.delay);});
$(document).ready(function(){me.start();});
},
changePos:function(){
var me=this;
var clientWidth=$(window).width();
var clientHeight=$(window).height();
var Hoffset=me.options.height;
var Woffset=me.options.width;
me.element.css({left:me.xPos+$(document).scrollLeft(),top:me.yPos+$(document).scrollTop()});
if(me.yon){
me.yPos=me.yPos+me.options.step;
}else{
me.yPos=me.yPos-me.options.step;
}
if(me.yPos<0){me.yon=1;me.yPos=0;}
if(me.yPos>=(clientHeight-Hoffset)){me.yon=0;me.yPos=(clientHeight-Hoffset);}
if(me.xon){
me.xPos=me.xPos+me.options.step;
}else{
me.xPos=me.xPos-me.options.step;
}
if(me.xPos<0){me.xon=1;me.xPos=0;}
if(me.xPos>=(clientWidth-Woffset)){me.xon=0;me.xPos=(clientWidth-Woffset);}
},
start:function(){
var me=this;
me.element.css("top",me.yPos);
me.interval=setInterval(function(){me.changePos();},me.options.delay);
}
}
})(jQuery);