"use strict";var TxtType=function(t,i,e){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:180;this.toRotate=i,this.el=t,this.loopNum=0,this.period=parseInt(e,10)||2e3,this.speed=s,this.txt="",this.tick(),this.isDeleting=!1};TxtType.prototype.tick=function(){var t=this.loopNum%this.toRotate.length,i=this.toRotate[t];this.isDeleting?";"!==i[this.txt.length-2]?this.txt=i.substring(0,this.txt.length-1):this.txt=i.substring(0,this.txt.length-6):"&"!==i[this.txt.length]?this.txt=i.substring(0,this.txt.length+1):this.txt=i.substring(0,this.txt.length+6),this.el.innerHTML='<span class="o-type__wrap">'+this.txt+"</span>";var e=this,s=this.speed-100*Math.random();if(this.isDeleting&&(s/=1.6),this.isDeleting||this.txt!==i)this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,s=500);else{s=2*this.period,this.isDeleting=!0;var n=this.el.parentNode.childNodes;[].forEach.call(n,function(t){"o-type__cursor"===t.className&&(t.style.animation="blink .7s infinite linear alternate",setTimeout(function(){t.style.animation=""},s))})}setTimeout(function(){e.tick()},s)};var initTypeAnimation=function(t){var i=document.getElementsByClassName("o-type__write");[].forEach.call(i,function(i){var e=i.getAttribute("data-type"),s=i.getAttribute("data-period");e&&new TxtType(i,JSON.parse(e),s,t)})};