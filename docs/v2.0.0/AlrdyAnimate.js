/*! For license information please see AlrdyAnimate.js.LICENSE.txt */
(()=>{"use strict";var t,e,r,n,o={},i={};function a(t){var e=i[t];if(void 0!==e)return e.exports;var r=i[t]={exports:{}};return o[t](r,r.exports,a),r.exports}function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function u(){u=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var i=e&&e.prototype instanceof b?e:b,a=Object.create(i.prototype),c=new G(n||[]);return o(a,"_invoke",{value:S(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var y="suspendedStart",v="suspendedYield",d="executing",g="completed",m={};function b(){}function w(){}function x(){}var L={};f(L,a,(function(){return this}));var E=Object.getPrototypeOf,O=E&&E(E(N([])));O&&O!==r&&n.call(O,a)&&(L=O);var P=x.prototype=b.prototype=Object.create(L);function j(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,a,u){var s=p(t[o],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==c(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,u)}))}u(s.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function S(e,r,n){var o=y;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=A(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=p(e,r,n);if("normal"===s.type){if(o=n.done?g:v,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=g,n.method="throw",n.arg=s.arg)}}}function A(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,A(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function N(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(c(e)+" is not iterable")}return w.prototype=x,o(P,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:w,configurable:!0}),w.displayName=f(x,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,l,"GeneratorFunction")),t.prototype=Object.create(P),t},e.awrap=function(t){return{__await:t}},j(k.prototype),f(k.prototype,s,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new k(h(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(P),f(P,l,"Generator"),f(P,a,(function(){return this})),f(P,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=N,G.prototype={constructor:G,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:N(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}function s(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function l(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){s(i,n,o,a,c,"next",t)}function c(t){s(i,n,o,a,c,"throw",t)}a(void 0)}))}}function f(){return h.apply(this,arguments)}function h(){return(h=l(u().mark((function t(){var e,o,i;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r){t.next=10;break}return t.next=3,a.e(880).then(a.bind(a,880));case 3:return e=t.sent,r=e.gsap,t.next=7,a.e(575).then(a.bind(a,575));case 7:o=t.sent,i=o.ScrollTrigger,r.registerPlugin(i);case 10:if(n){t.next=14;break}return t.next=13,a.e(483).then(a.bind(a,483));case 13:n=t.sent.default;case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(){return y.apply(this,arguments)}function y(){return(y=l(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:return t.abrupt("return",{splitText:function(t,e){var r;switch(e){case"lines":default:r="lines";break;case"words":r="lines, words";break;case"chars":r="lines, words, chars"}return new n(t,{types:r})},textRotateUp:function(t,e,n,o,i,a){var c,u,s;o=null!==(c=o)&&void 0!==c?c:.5,i=null!==(u=i)&&void 0!==u?u:.05,a=null!==(s=a)&&void 0!==s?s:"back.out";var l=e[n]||e.lines,f=r.timeline();return f.from(t,{autoAlpha:0,duration:.1}),f.from(l,{y:50,opacity:0,rotation:10,duration:o,stagger:i,ease:a},">"),f}});case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function d(){d=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof b?e:b,a=Object.create(i.prototype),c=new G(n||[]);return o(a,"_invoke",{value:S(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var h="suspendedStart",p="suspendedYield",y="executing",g="completed",m={};function b(){}function w(){}function x(){}var L={};s(L,a,(function(){return this}));var E=Object.getPrototypeOf,O=E&&E(E(N([])));O&&O!==r&&n.call(O,a)&&(L=O);var P=x.prototype=b.prototype=Object.create(L);function j(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==v(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function S(e,r,n){var o=h;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=A(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=f(e,r,n);if("normal"===s.type){if(o=n.done?g:p,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=g,n.method="throw",n.arg=s.arg)}}}function A(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,A(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function N(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(v(e)+" is not iterable")}return w.prototype=x,o(P,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:w,configurable:!0}),w.displayName=s(x,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,s(t,u,"GeneratorFunction")),t.prototype=Object.create(P),t},e.awrap=function(t){return{__await:t}},j(k.prototype),s(k.prototype,c,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new k(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(P),s(P,u,"Generator"),s(P,a,(function(){return this})),s(P,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=N,G.prototype={constructor:G,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:N(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){b(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t,e,r){return(e=function(t){var e=function(t){if("object"!=v(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==v(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function w(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function x(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){w(i,n,o,a,c,"next",t)}function c(t){w(i,n,o,a,c,"throw",t)}a(void 0)}))}}a.m=o,a.d=(t,e)=>{for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},a.f={},a.e=t=>Promise.all(Object.keys(a.f).reduce(((e,r)=>(a.f[r](t,e),e)),[])),a.u=t=>t+".chunk.js",a.miniCssF=t=>{},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),t={},e="alrdy-animate:",a.l=(r,n,o,i)=>{if(t[r])t[r].push(n);else{var c,u;if(void 0!==o)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+o){c=f;break}}c||(u=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.setAttribute("data-webpack",e+o),c.src=r),t[r]=[n];var h=(e,n)=>{c.onerror=c.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((t=>t(n))),e)return e(n)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=h.bind(null,c.onerror),c.onload=h.bind(null,c.onload),u&&document.head.appendChild(c)}},a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;a.g.importScripts&&(t=a.g.location+"");var e=a.g.document;if(!t&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&(!t||!/^http(s?):/.test(t));)t=r[n--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=t})(),(()=>{var t={792:0};a.f.j=(e,r)=>{var n=a.o(t,e)?t[e]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=t[e]=[r,o]));r.push(n[2]=o);var i=a.p+a.u(e),c=new Error;a.l(i,(r=>{if(a.o(t,e)&&(0!==(n=t[e])&&(t[e]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,n[1](c)}}),"chunk-"+e,e)}};var e=(e,r)=>{var n,o,[i,c,u]=r,s=0;if(i.some((e=>0!==t[e]))){for(n in c)a.o(c,n)&&(a.m[n]=c[n]);u&&u(a)}for(e&&e(r);s<i.length;s++)o=i[s],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0},r=self.webpackChunkalrdy_animate=self.webpackChunkalrdy_animate||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var L={easing:"ease",again:!0,viewportPercentage:.8,useGSAP:!1,duration:"1s",delay:"0s"};function E(){return E=x(d().mark((function t(){var e,r,n,o,i=arguments;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=i.length>0&&void 0!==i[0]?i[0]:{},r=m(m({},L),e),n=document.querySelectorAll("[aa-animate], [aa-transition]"),o=window.innerWidth<768,"IntersectionObserver"in window||r.useGSAP){t.next=7;break}return n.forEach((function(t){t.classList.add("in-view")})),t.abrupt("return");case 7:document.body.setAttribute("aa-easing",r.easing),window.addEventListener("load",x(d().mark((function t(){var e,i,c,u,s;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.useGSAP){t.next=24;break}return t.prev=1,t.next=4,a.e(880).then(a.bind(a,880));case 4:return e=t.sent,i=e.gsap,t.next=8,a.e(575).then(a.bind(a,575));case 8:return c=t.sent,u=c.ScrollTrigger,i.registerPlugin(u),t.next=13,p();case 13:s=t.sent,O(n,r,o,i,u,s),t.next=22;break;case 17:t.prev=17,t.t0=t.catch(1),console.error("Failed to load GSAP:",t.t0),n.forEach((function(t){t.style.visibility="visible"})),O(n,r,o);case 22:t.next=25;break;case 24:O(n,r,o);case 25:case"end":return t.stop()}}),t,null,[[1,17]])}))));case 9:case"end":return t.stop()}}),t)}))),E.apply(this,arguments)}function O(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;t.forEach((function(t){var a=t.getAttribute("aa-duration")||e.duration,c=t.getAttribute("aa-delay")||e.delay,u=t.getAttribute("aa-delay-mobile"),s=t.getAttribute("aa-color-initial")||e.colorInitial,l=t.getAttribute("aa-color-final")||e.colorFinal,f=t.getAttribute("aa-anchor"),h=t;f&&(h=document.querySelector(f)),a&&t.style.setProperty("--animation-duration",a),r&&null!==u?t.style.setProperty("--animation-delay",u):c&&t.style.setProperty("--animation-delay",c),s&&t.style.setProperty("--background-color-initial",s),l&&t.style.setProperty("--background-color-final",l);var p=t.getAttribute("aa-viewport"),y=p?parseFloat(p):e.viewportPercentage;e.useGSAP&&n&&o&&i?function(t,e,r,n,o,i,a,c){var u=t.getAttribute("aa-animate"),s=t.getAttribute("aa-split"),l=t.hasAttribute("aa-duration")?parseFloat(t.getAttribute("aa-duration")):void 0,f=t.hasAttribute("aa-stagger")?parseFloat(t.getAttribute("aa-stagger")):void 0,h=t.hasAttribute("aa-easing")?t.getAttribute("aa-easing"):void 0,p=c.splitText(t,s);requestAnimationFrame((function(){var y=i.timeline({paused:!0,scrollTrigger:{trigger:r,start:"top ".concat(100*n,"%"),onEnter:function(){t.classList.add("in-view"),y.play()}}});switch(u){case"char":y.add(c.characterAnimation(t,l,f));break;case"word":y.add(c.wordAnimation(t,l,f));break;case"textRotateUp":y.add(c.textRotateUp(t,p,s,l,f,h))}a.create({trigger:r,start:"top 100%",onLeaveBack:function(){(o.again||e)&&(t.classList.remove("in-view"),y.progress(0).pause())}})}))}(t,f,h,y,e,n,o,i):function(t,e,r,n,o){var i="0px 0px -".concat(100*(1-n),"% 0px"),a=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&t.classList.add("in-view")}))}),{threshold:[0,1],rootMargin:i}),c=new IntersectionObserver((function(r){r.forEach((function(r){var n=r.target.getBoundingClientRect();!r.isIntersecting&&n.top>=window.innerHeight&&(o.again||e)&&t.classList.remove("in-view")}))}),{threshold:0,rootMargin:"0px"});a.observe(r),c.observe(r)}(t,f,h,y,e)}))}var P={init:function(){return E.apply(this,arguments)}};window.AlrdyAnimate=P})();