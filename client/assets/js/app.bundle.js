!function(e){var n={};function t(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(a,o,function(n){return e[n]}.bind(null,o));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",a=e[3];if(!a)return t;if(n&&"function"==typeof btoa){var o=(i=a,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),r=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[t].concat(r).concat([o]).join("\n")}var i,c,s;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,a){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(a)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);a&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},function(e,n,t){t(2);var a=io.connect(),o=document.getElementById("message-box"),r=document.getElementById("handle-box"),i=document.getElementById("send-button"),c=document.getElementById("chat-box"),s={};a.on("connect",(function(){console.log("connected!")})),i.addEventListener("click",(function(e){e.preventDefault(),a.emit("chat",{message:o.value,handle:r.value}),clearInterval(s[a.id]),a.emit("typing",{handle:r.value,typing:!1}),o.value=""})),o.addEventListener("keypress",(function(e){a.emit("typing",{handle:r.value,typing:!0}),clearInterval(s[a.id]),s[a.id]=setTimeout((function(){a.emit("typing",{handle:r.value,typing:!1})}),3e3)})),a.on("chat",(function(e){console.log("anon"+e.anon),e.handle===r.value||e.handle=="anon"+e.anon?c.innerHTML+="<div class=\"chat-bubble chat-bubble-self\"><span class='chat-handle'>".concat(e.handle,":</span><span class='chat-message'>").concat(e.message,"</span></div>"):c.innerHTML+="<div class=\"chat-bubble\"><span class='chat-handle'>".concat(e.handle,":</span><span class='chat-message'>").concat(e.message,"</span></div>");var n=document.getElementById("chat-box");n.scrollTop=n.scrollHeight})),a.on("typing",(function(e){var n=document.getElementById("chat-status");1==e.typing?n.innerHTML="".concat(e.handle," is typing...<br>"):n.innerHTML=" "}))},function(e,n,t){var a=t(3),o=t(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};a(o,r);e.exports=o.locals||{}},function(e,n,t){"use strict";var a,o=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},r=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function c(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},a=[],o=0;o<e.length;o++){var r=e[o],s=n.base?r[0]+n.base:r[0],u=t[s]||0,l="".concat(s," ").concat(u);t[s]=u+1;var d=c(l),f={css:r[1],media:r[2],sourceMap:r[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:l,updater:g(f,n),references:1}),a.push(l)}return a}function u(e){var n=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var o=t.nc;o&&(a.nonce=o)}if(Object.keys(a).forEach((function(e){n.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(n);else{var i=r(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var l,d=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function f(e,n,t,a){var o=t?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=d(n,o);else{var r=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(r,i[n]):e.appendChild(r)}}function p(e,n,t){var a=t.css,o=t.media,r=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var h=null,b=0;function g(e,n){var t,a,o;if(n.singleton){var r=b++;t=h||(h=u(n)),a=f.bind(null,t,r,!1),o=f.bind(null,t,r,!0)}else t=u(n),a=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return a(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;a(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<t.length;a++){var o=c(t[a]);i[o].references--}for(var r=s(e,n),u=0;u<t.length;u++){var l=c(t[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=r}}}},function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a)()(!1);o.push([e.i,"html{height:100%}body{background-color:#f5f5f5;height:100%}form{width:100%;padding:0;margin:0}h1{text-align:center;font-size:18px;padding-top:30px}.container{padding:20px}#chat-box-container{height:300px;margin:0 auto}#chat-box{height:300px;max-width:500px;min-width:200px;background-color:#fcfcfc;margin:0 auto;overflow-y:auto;border-radius:20px 20px 0 0}#message-box{min-height:50px;font-size:14px}#user-actions{margin:0 auto;max-width:500px;min-width:200px;padding-top:50px}#chat-status{background-color:#fcfcfc;color:gray;width:100%;min-width:200px;max-width:500px;height:40px;margin:0 auto;border-radius:0 0 20px 20px;padding:10px;z-index:-1000}#message-box,#handle-box{width:100%;margin:0 auto;display:block;font-size:14px;border-radius:5px}a img{position:absolute;left:0;z-index:1000}label{font-size:10px;display:block;width:50px}#send-button{display:block;width:70px}.chat-bubble{background-color:#d9f9fa;margin:10px;padding:10px;border-radius:10px;min-height:30px;overflow-y:auto;box-shadow:0 1px 1px 0 rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.19);background-image:linear-gradient(to bottom right, #d5f5f7, #be7aeb);display:block;white-space:pre-wrap}.chat-bubble>span{overflow-wrap:anywhere}.chat-handle{color:#fff;font-weight:bold;margin-right:5px}.chat-bubble-self{background-color:#d9f9fa;background-image:linear-gradient(to bottom right, #e85a77, #be7aeb) !important}",""]),n.default=o}]);