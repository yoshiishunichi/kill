(function(t){function e(e){for(var i,a,l=e[0],s=e[1],c=e[2],p=0,d=[];p<l.length;p++)a=l[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,l=1;l<n.length;l++){var s=n[l];0!==o[s]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},o={app:0},r=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23"),o={id:"container"},r=Object(i["c"])("div",{class:"kill-container",id:"kill-container"},[Object(i["c"])("h1",{id:"kill"},"殺すぞ")],-1),a={id:"tweet"};function l(t,e,n,l,s,c){return Object(i["e"])(),Object(i["b"])("div",o,[r,Object(i["c"])("div",a,[Object(i["c"])("a",{href:"http://twitter.com/share?url=https://yoshiishunichi.github.io/kill/&text=殺すぞ",id:"tweetbutton",target:"_blank",onClick:e[1]||(e[1]=function(){return c.tapTweet&&c.tapTweet.apply(c,arguments)})},"ツイートする"),Object(i["c"])("input",{id:"start",type:"button",value:"スタートっ！",class:{disp:s.disps[0],nodisp:s.nodisps[0]},onClick:e[2]||(e[2]=function(){return c.tapStart&&c.tapStart.apply(c,arguments)})},null,2),Object(i["c"])("input",{id:"stop",type:"button",value:"ストップっ！",class:{disp:s.disps[1],nodisp:s.nodisps[1]},onClick:e[3]||(e[3]=function(){return c.tapStop&&c.tapStop.apply(c,arguments)})},null,2)]),Object(i["c"])("button",{id:"save",onClick:e[4]||(e[4]=function(){return c.tapSave&&c.tapSave.apply(c,arguments)})},"保存！")])}var s=n("70b0"),c=n.n(s),u=n("21a6"),p=n.n(u),d={name:"App",data:function(){return{timeInterval:null,disps:[!0,!1],nodisps:[!1,!0],killContainer:null}},methods:{colorChange:function(){for(var t=[0,0,0],e=0;e<t.length;e++)t[e]=Math.floor(256*Math.random());var n="rgb("+String(t[0])+", "+String(t[1])+", "+String(t[2])+")";return n},setColor:function(){var t=document.getElementById("kill"),e=document.body;t.style.color=this.colorChange();var n=this.colorChange();e.style.backgroundColor=n,this.killContainer.style.backgroundColor=n},tapStart:function(){this.killContainer=document.getElementById("kill-container"),this.disps[0]=!1,this.disps[1]=!0,this.nodisps[0]=!0,this.nodisps[1]=!1,this.timeInterval=setInterval(this.setColor,100)},tapStop:function(){this.killContainer=document.getElementById("kill-container"),this.disps[1]=!1,this.disps[0]=!0,this.nodisps[1]=!0,this.nodisps[0]=!1,clearInterval(this.timeInterval)},save:function(){this.killContainer=document.getElementById("kill-container");var t=this.killContainer;t.style.width="4096px",t.style.height="4096px",t.style.marginLeft="0px",t.children[0].style.lineHeight="4096px",t.children[0].style.fontSize="800px",c.a.toPng(t).then((function(e){var n=new Image;n.src=e,n.onload=function(){var e=document.createElement("canvas");e.width=n.width,e.height=n.height;var i=e.getContext("2d");i.drawImage(n,0,0,e.width,e.height),e.toBlob((function(e){p.a.saveAs(e,"kill-image.png"),t.style.width="100%",t.style.height="275px",t.style.marginLeft="auto",t.children[0].style.lineHeight="275px",t.children[0].style.fontSize="50px"}))}})).catch((function(t){console.log(t)}))},tapSave:function(){this.save()},update:function(){var t=new ActiveXObject("Scripting.FileSystemObject"),e=t.CreateTextFile("text.txt");e.Write("Complete, written!"),e.Close()},tapTweet:function(){this.update()}}};n("63ab");d.render=l;var h=d,f=n("5502"),v=Object(f["a"])({state:{},mutations:{},actions:{},modules:{}});Object(i["a"])(h).use(v).mount("#app")},"63ab":function(t,e,n){"use strict";n("a342")},a342:function(t,e,n){}});
//# sourceMappingURL=app.db9b4a07.js.map