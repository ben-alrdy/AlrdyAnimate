/*! For license information please see AlrdyAnimate.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.AlrdyAnimate=e():t.AlrdyAnimate=e()}(this,(()=>(()=>{var t,e,r={181:(t,e,r)=>{var n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),f=Object.prototype.toString,p=Math.max,d=Math.min,h=function(){return s.Date.now()};function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==f.call(t)}(t))return NaN;if(v(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=v(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var r=i.test(t);return r||a.test(t)?u(t.slice(2),r?2:8):o.test(t)?NaN:+t}t.exports=function(t,e,r){var n,o,i,a,u,c,l=0,s=!1,f=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var r=n,i=o;return n=o=void 0,l=e,a=t.apply(i,r)}function m(t){var r=t-c;return void 0===c||r>=e||r<0||f&&t-l>=i}function w(){var t=h();if(m(t))return A(t);u=setTimeout(w,function(t){var r=e-(t-c);return f?d(r,i-(t-l)):r}(t))}function A(t){return u=void 0,g&&n?b(t):(n=o=void 0,a)}function x(){var t=h(),r=m(t);if(n=arguments,o=this,c=t,r){if(void 0===u)return function(t){return l=t,u=setTimeout(w,e),s?b(t):a}(c);if(f)return u=setTimeout(w,e),b(c)}return void 0===u&&(u=setTimeout(w,e)),a}return e=y(e)||0,v(r)&&(s=!!r.leading,i=(f="maxWait"in r)?p(y(r.maxWait)||0,e):i,g="trailing"in r?!!r.trailing:g),x.cancel=function(){void 0!==u&&clearTimeout(u),l=0,n=c=o=u=void 0},x.flush=function(){return void 0===u?a:A(h())},x}}},n={};function o(t){var e=n[t];if(void 0!==e)return e.exports;var i=n[t]={exports:{}};return r[t](i,i.exports,o),i.exports}o.m=r,o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.f={},o.e=t=>Promise.all(Object.keys(o.f).reduce(((e,r)=>(o.f[r](t,e),e)),[])),o.u=t=>"chunks/"+{678:"gsap-core",722:"gsap-animations"}[t]+".js",o.miniCssF=t=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),t={},e="AlrdyAnimate:",o.l=(r,n,i,a)=>{if(t[r])t[r].push(n);else{var u,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+i){u=f;break}}u||(c=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.setAttribute("data-webpack",e+i),u.src=r),t[r]=[n];var p=(e,n)=>{u.onerror=u.onload=null,clearTimeout(d);var o=t[r];if(delete t[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((t=>t(n))),e)return e(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),c&&document.head.appendChild(u)}},o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;o.g.importScripts&&(t=o.g.location+"");var e=o.g.document;if(!t&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&(!t||!/^http(s?):/.test(t));)t=r[n--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t})(),(()=>{var t={792:0};o.f.j=(e,r)=>{var n=o.o(t,e)?t[e]:void 0;if(0!==n)if(n)r.push(n[2]);else{var i=new Promise(((r,o)=>n=t[e]=[r,o]));r.push(n[2]=i);var a=o.p+o.u(e),u=new Error;o.l(a,(r=>{if(o.o(t,e)&&(0!==(n=t[e])&&(t[e]=void 0),n)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,n[1](u)}}),"chunk-"+e,e)}};var e=(e,r)=>{var n,i,[a,u,c]=r,l=0;if(a.some((e=>0!==t[e]))){for(n in u)o.o(u,n)&&(o.m[n]=u[n]);c&&c(o)}for(e&&e(r);l<a.length;l++)i=a[l],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0},r=this.webpackChunkAlrdyAnimate=this.webpackChunkAlrdyAnimate||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var i={};return(()=>{"use strict";o.d(i,{AlrdyAnimate:()=>A});var t=o(181),e=o.n(t);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function n(){n=function(){return e};var t,e={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",l=u.asyncIterator||"@@asyncIterator",s=u.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),u=new _(n||[]);return a(i,"_invoke",{value:L(t,r,u)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var h="suspendedStart",v="suspendedYield",y="executing",g="completed",b={};function m(){}function w(){}function A(){}var x={};f(x,c,(function(){return this}));var E=Object.getPrototypeOf,O=E&&E(E(N([])));O&&O!==o&&i.call(O,c)&&(x=O);var j=A.prototype=m.prototype=Object.create(x);function S(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(o,a,u,c){var l=d(t[o],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==r(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):e.resolve(f).then((function(t){s.value=t,u(s)}),(function(t){return n("throw",t,u,c)}))}c(l.arg)}var o;a(this,"_invoke",{value:function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}})}function L(e,r,n){var o=h;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=P(u,n);if(c){if(c===b)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var l=d(e,r,n);if("normal"===l.type){if(o=n.done?g:v,l.arg===b)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=g,n.method="throw",n.arg=l.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var i=d(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,b;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,b):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function F(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function N(e){if(e||""===e){var n=e[c];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(i.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(r(e)+" is not iterable")}return w.prototype=A,a(j,"constructor",{value:A,configurable:!0}),a(A,"constructor",{value:w,configurable:!0}),w.displayName=f(A,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,A):(t.__proto__=A,f(t,s,"GeneratorFunction")),t.prototype=Object.create(j),t},e.awrap=function(t){return{__await:t}},S(k.prototype),f(k.prototype,l,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new k(p(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(j),f(j,s,"Generator"),f(j,c,(function(){return this})),f(j,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=N,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(F),!e)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return u.type="throw",u.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),F(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;F(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:N(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),b}},e}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,n){return(e=function(t){var e=function(t){if("object"!=r(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==r(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function s(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){l(i,n,o,a,u,"next",t)}function u(t){l(i,n,o,a,u,"throw",t)}a(void 0)}))}}var f=null,p=null,d=null,h=null,v=!1,y={easing:"ease",again:!0,viewportPercentage:.8,useGSAP:!1,duration:1,delay:0,debug:!1};function g(){return g=s(n().mark((function t(){var e,r=arguments;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=r.length>0&&void 0!==r[0]?r[0]:{},h=u(u({},y),e),d=document.querySelectorAll("[aa-animate], [aa-transition], [aa-children]"),v=window.innerWidth<768,"IntersectionObserver"in window||h.useGSAP){t.next=7;break}return d.forEach((function(t){t.classList.add("in-view")})),t.abrupt("return");case 7:return document.body.setAttribute("aa-easing",h.easing),t.abrupt("return",new Promise((function(t){window.addEventListener("load",s(n().mark((function e(){var r,i,a,u;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h.useGSAP){e.next=25;break}return e.prev=1,e.next=4,Promise.all([o.e(678),o.e(722)]).then(o.bind(o,610));case 4:r=e.sent,f=r.gsap,p=r.ScrollTrigger,window.gsap=f,window.ScrollTrigger=p,(i=document.querySelector('[aa-nav="sticky"]'))&&(a=i.getAttribute("aa-easing"),u=i.getAttribute("aa-duration"),r.stickyNav(r.gsap,r.ScrollTrigger,i,a,u)),m(d,h,v,r.animations,r.splitText),b(r),w(),t({gsap:f,ScrollTrigger:p}),e.next=23;break;case 17:e.prev=17,e.t0=e.catch(1),console.error("Failed to load GSAP:",e.t0),d.forEach((function(t){t.style.visibility="visible"})),m(d,h,v),t({gsap:null,ScrollTrigger:null});case 23:e.next=27;break;case 25:m(d,h,v),t({gsap:null,ScrollTrigger:null});case 27:case"end":return e.stop()}}),e,null,[[1,17]])}))))})));case 9:case"end":return t.stop()}}),t)}))),g.apply(this,arguments)}function b(t){var r=window.innerWidth,n=e()((function(){var e=window.innerWidth;e!==r&&(v=e<768,p.refresh(),m(d,h,v,t.animations,t.splitText),r=e)}),250);window.addEventListener("resize",n),window.addEventListener("orientationchange",(function(){setTimeout((function(){window.innerWidth!==r&&n()}),100)}))}function m(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;t.forEach((function(t){if(t.hasAttribute("aa-children")){var i=Array.from(t.children),a=t.hasAttribute("aa-delay")?parseFloat(t.getAttribute("aa-delay")):e.delay,u=t.hasAttribute("aa-stagger")?parseFloat(t.getAttribute("aa-stagger")):0,c=t.getAttribute("aa-children");return i.forEach((function(e,r){if(console.log("Setting animation type:",c),!e.hasAttribute("aa-animate")&&!e.hasAttribute("aa-transition")){c&&"true"!==c&&e.setAttribute("aa-animate",c),Array.from(t.attributes).filter((function(t){return t.name.startsWith("aa-")&&"aa-children"!==t.name&&"aa-stagger"!==t.name&&"aa-delay"!==t.name})).forEach((function(t){e.setAttribute(t.name,t.value)}));var n=a+r*u;e.setAttribute("aa-delay",n.toString())}})),t.style.opacity="1",void m(i,e,r,n,o)}var l=t.hasAttribute("aa-duration")?parseFloat(t.getAttribute("aa-duration")):e.duration,s=t.hasAttribute("aa-delay")?parseFloat(t.getAttribute("aa-delay")):e.delay,d=t.hasAttribute("aa-delay-mobile")?parseFloat(t.getAttribute("aa-delay-mobile")):null,h=t.getAttribute("aa-color-initial")||e.colorInitial,v=t.getAttribute("aa-color-final")||e.colorFinal,y=t.hasAttribute("aa-viewport")?parseFloat(t.getAttribute("aa-viewport")):e.viewportPercentage,g=t.getAttribute("aa-anchor"),b=g?document.querySelector(g):t;l&&t.style.setProperty("--animation-duration","".concat(l,"s")),r&&null!==d?t.style.setProperty("--animation-delay","".concat(d,"s")):s&&t.style.setProperty("--animation-delay","".concat(s,"s")),h&&t.style.setProperty("--background-color-initial",h),v&&t.style.setProperty("--background-color-final",v),e.useGSAP?function(t,e,r,n,o,i,a,u,c){var l=t.getAttribute("aa-animate"),s=t.getAttribute("aa-split"),d=t.getAttribute("aa-scroll"),h=t.hasAttribute("aa-duration")?parseFloat(t.getAttribute("aa-duration")):void 0,v=t.hasAttribute("aa-stagger")?parseFloat(t.getAttribute("aa-stagger")):void 0,y=t.hasAttribute("aa-easing")?t.getAttribute("aa-easing"):void 0;t.timeline&&t.timeline.kill(),t.splitInstance&&t.splitInstance.revert(),requestAnimationFrame((function(){var g=f.timeline({paused:!0,scrollTrigger:{trigger:r,start:"top ".concat(100*n,"%"),onEnter:function(){t.classList.add("in-view"),g.play()},markers:i.debug}});if(t.timeline=g,s){var b=u(t,s),m=b.splitResult,w=b.splitType;switch(t.splitInstance=m,l){case"text-slide-up":g.add(a.textSlideUp(t,m,w,null!=h?h:.5,null!=v?v:.1,o,null!=y?y:"back.out",c,d));break;case"text-slide-down":g.add(a.textSlideDown(t,m,w,null!=h?h:.5,null!=v?v:.1,o,null!=y?y:"back.out",c,d));break;case"text-tilt-up":g.add(a.textTiltUp(t,m,w,null!=h?h:.5,null!=v?v:.1,o,null!=y?y:"back.out",c,d));break;case"text-tilt-down":g.add(a.textTiltDown(t,m,w,null!=h?h:.5,null!=v?v:.1,o,null!=y?y:"back.out",c,d));break;case"text-rotate-soft":g.add(a.textRotateSoft(t,m,w,null!=h?h:1.2,null!=v?v:.3,o,null!=y?y:"circ.out",c,d));break;case"text-fade":g.add(a.textFade(t,m,w,null!=h?h:1,null!=v?v:.08,o,null!=y?y:"power2.inOut",c,d));break;case"text-appear":g.add(a.textAppear(t,m,w,null!=h?h:1,null!=v?v:.08,o,null!=y?y:"power2.inOut",c,d))}}p.create({trigger:r,start:"top 100%",onLeaveBack:function(){(i.again||e)&&(t.classList.remove("in-view"),g.progress(0).pause())}})}))}(t,g,b,y,s,e,n,o,r):function(t,e,r,n,o){var i="0px 0px -".concat(100*(1-n),"% 0px"),a=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&t.classList.add("in-view")}))}),{threshold:[0,1],rootMargin:i}),u=new IntersectionObserver((function(r){r.forEach((function(r){var n=r.target.getBoundingClientRect();!r.isIntersecting&&n.top>=window.innerHeight&&(o.again||e)&&t.classList.remove("in-view")}))}),{threshold:0,rootMargin:"0px"});a.observe(r),u.observe(r)}(t,g,b,y,e)}))}function w(){var t=!1,r=e()((function(){p&&t&&(p.refresh(),t=!1)}),200);document.querySelectorAll('img[loading="lazy"]').forEach((function(e){e.complete||e.addEventListener("load",(function(){t=!0}),{once:!0})})),p.addEventListener("scrollEnd",(function(){t&&r()}))}var A={init:function(){return g.apply(this,arguments)},getGSAP:function(){return f},getScrollTrigger:function(){return p},handleLazyLoadedImages:w};"undefined"!=typeof window&&(window.AlrdyAnimate=A)})(),i.AlrdyAnimate})()));