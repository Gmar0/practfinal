(function(e){function n(n){for(var r,o,u=n[0],i=n[1],f=n[2],l=0,d=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(n);while(d.length)d.shift()();return a.push.apply(a,f||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,o=1;o<t.length;o++){var u=t[o];0!==c[u]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},c={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0ba86112":"e4efc915","chunk-14241d27":"e67554aa","chunk-19be3b3b":"ad3999d9","chunk-2699214f":"c3ef9276","chunk-48cd82f4":"e6e91b0d","chunk-a089f1fc":"dec04a57"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-0ba86112":1,"chunk-14241d27":1,"chunk-19be3b3b":1,"chunk-2699214f":1,"chunk-48cd82f4":1,"chunk-a089f1fc":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-0ba86112":"0daad163","chunk-14241d27":"b6c8db12","chunk-19be3b3b":"578e228f","chunk-2699214f":"484bb1ed","chunk-48cd82f4":"bbc8fd30","chunk-a089f1fc":"ac33280f"}[e]+".css",c=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var f=a[u],l=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(l===r||l===c))return n()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){f=d[u],l=f.getAttribute("data-href");if(l===r||l===c)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var r=n&&n.target&&n.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],s.parentNode.removeChild(s),t(a)},s.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(s)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(n,t){r=c[e]=[n,t]}));n.push(r[2]=a);var f,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var d=new Error;f=function(n){l.onerror=l.onload=null,clearTimeout(s);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,t[1](d)}c[e]=void 0}};var s=setTimeout((function(){f({type:"timeout",target:l})}),12e4);l.onerror=l.onload=f,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/practicawd/",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],l=f.push.bind(f);f.push=n,f=f.slice();for(var d=0;d<f.length;d++)n(f[d]);var s=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("85ec")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div"),t("router-view")],1)},c=[],a=(t("034f"),t("2877")),u={},i=Object(a["a"])(u,o,c,!1,null,null,null),f=i.exports,l=(t("d3b7"),t("3ca3"),t("ddb0"),t("8c4f")),d=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"home"},[r("router-link",{attrs:{to:"/intro"}},[r("b-card-img",{attrs:{src:t("cf05")}})],1)],1)},s=[],p={name:"Home",components:{}},h=p,b=(t("cccb"),Object(a["a"])(h,d,s,!1,null,null,null)),m=b.exports;r["default"].use(l["a"]);var v=[{path:"/",name:"Home",component:m},{path:"/intro",name:"Intro",component:function(){return t.e("chunk-a089f1fc").then(t.bind(null,"5d57"))}},{path:"/makingof",name:"Elaboración",component:function(){return t.e("chunk-14241d27").then(t.bind(null,"8129"))}},{path:"/galeria",name:"Galeria",component:function(){return t.e("chunk-19be3b3b").then(t.bind(null,"d52d"))}},{path:"/design",name:"Diseño y Modelado 3D",component:function(){return t.e("chunk-2699214f").then(t.bind(null,"0b64"))}},{path:"/material",name:"Materiales y Construcción",component:function(){return t.e("chunk-0ba86112").then(t.bind(null,"3d2f"))}},{path:"/compras",name:"Compras",component:function(){return t.e("chunk-48cd82f4").then(t.bind(null,"5b40"))}}],g=new l["a"]({mode:"history",base:"/pract2.0/",routes:v}),k=g,y=t("5f5b");t("f9e3"),t("2dd8");r["default"].use(y["a"]),r["default"].config.productionTip=!1,new r["default"]({router:k,render:function(e){return e(f)}}).$mount("#app")},"5ced":function(e,n,t){},"85ec":function(e,n,t){},cccb:function(e,n,t){"use strict";t("5ced")},cf05:function(e,n,t){e.exports=t.p+"img/logo.314fbf93.png"}});
//# sourceMappingURL=app.3c48fe0a.js.map