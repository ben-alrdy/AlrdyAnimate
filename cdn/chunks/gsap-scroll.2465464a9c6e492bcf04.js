"use strict";(this.webpackChunkAlrdyAnimate=this.webpackChunkAlrdyAnimate||[]).push([[928],{16:(t,r,e)=>{function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,a,i,l=[],c=!0,u=!1;try{if(a=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;c=!1}else for(;!(c=(n=a.call(e)).done)&&(l.push(n.value),l.length!==r);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=e.return&&(i=e.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(t,r)||function(t,r){if(t){if("string"==typeof t)return a(t,r);var e={}.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(t,r):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}function i(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?i(Object(e),!0).forEach((function(r){c(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function c(t,r,e){return(r=function(t){var r=function(t){if("object"!=n(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var e=r.call(t,"string");if("object"!=n(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==n(r)?r:r+""}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function u(t,r,e){var n=!0,o=0,a=function(){n=!0,gsap.to(t,{y:"0%",duration:e,ease:r,overwrite:!0})};ScrollTrigger.create({start:"top top",end:"max",onUpdate:function(i){var l=i.scroll();if(l<=10)return a(),void(o=l);var c=l-o;Math.abs(c)>20&&(c>0&&n?(n=!1,gsap.to(t,{y:"-100%",duration:2*e,ease:r,overwrite:!0})):c<0&&!n&&a(),o=l)},onLeaveBack:a,onLeave:a})}function d(t,r){return{stickyNav:function(t){u(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:"back.inOut",arguments.length>2&&void 0!==arguments[2]?arguments[2]:.4)},backgroundColor:function(e,n,o,a,i){!function(t,r,e){var n=arguments.length>5?arguments[5]:void 0,o=arguments.length>6&&void 0!==arguments[6]&&arguments[6],a={duration:arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5,ease:arguments.length>4&&void 0!==arguments[4]?arguments[4]:"power2.inOut",overwrite:!0},i={parent:{backgroundColor:getComputedStyle(t).backgroundColor,color:getComputedStyle(t).color}},c=Array.from(t.querySelectorAll("[aa-parent-bg]")),u=new Map(c.map((function(t){var r=window.getComputedStyle(t);return[t,{backgroundColor:"rgba(0, 0, 0, 0)"===r.backgroundColor?"transparent":r.backgroundColor,color:r.color}]}))),d=null,p=function(t,e){r.to(t,l(l({},a),{},{backgroundColor:e.backgroundColor||null,color:e.color||null}))};c.forEach((function(r,a){var l=0===a?null:c[a-1],s={parent:{backgroundColor:r.getAttribute("aa-parent-bg"),color:r.getAttribute("aa-parent-text")},child:{backgroundColor:r.getAttribute("aa-child-bg"),color:r.getAttribute("aa-child-text")},prevParent:{backgroundColor:(null==l?void 0:l.getAttribute("aa-parent-bg"))||i.parent.backgroundColor,color:(null==l?void 0:l.getAttribute("aa-parent-text"))||i.parent.color}};e.create({trigger:r,start:"top ".concat(100*n,"%"),onEnter:function(){if(d&&d!==r){var e=u.get(d);p(d,e)}p(t,s.parent),(s.child.backgroundColor||s.child.color)&&(p(r,s.child),d=r)},onLeaveBack:function(){if(p(t,s.prevParent),d===r){var e=u.get(r);p(r,e),l&&(l.getAttribute("aa-child-bg")||l.getAttribute("aa-child-text"))?(p(l,{backgroundColor:l.getAttribute("aa-child-bg")||u.get(l).backgroundColor,color:l.getAttribute("aa-child-text")||u.get(l).color}),d=l):d=null}},markers:o})}))}(e,t,r,n,o,a,i)},parallax:function(e,n){!function(t,r,e){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"smooth",a=o(t.getAttribute("aa-animate").split("-"),3),i=(a[0],a[1]),l=a[2]||i||40,c="down"===i;if("hidden"===window.getComputedStyle(t.parentElement).overflow){var u=1+2*l/t.offsetHeight;r.set(t,{scale:u})}e.create({trigger:t.parentElement,start:"top bottom",end:"bottom top",scrub:n.includes("smoother")?200:n.includes("smooth")?50:!n.includes("snap")||{snap:.2},onUpdate:function(e){var n=l*(2*e.progress-1)*(c?-1:1);r.set(t,{y:n})}})}(e,t,r,n)},appear:function(r,e,n,a,i){return function(t,r,e,n,a,i){var l=o(t.getAttribute("aa-animate").split("-"),2),c=(l[0],l[1]),u={opacity:0,y:"up"===c?50*i:"down"===c?-50*i:0,x:"left"===c?50*i:"right"===c?-50*i:0},d={opacity:1,y:0,x:0,duration:e,ease:n,delay:a};return r.timeline().fromTo(t,u,d)}(r,t,e,n,a,i)},reveal:function(r,e,n,a){return function(t,r,e,n,a){var i,l,c=o(t.getAttribute("aa-animate").split("-"),2),u=(c[0],c[1]),d={up:{start:"inset(100% 0 0 0)",end:"inset(0% 0 0 0)"},down:{start:"inset(0 0 100% 0)",end:"inset(0 0 0% 0)"},left:{start:"inset(0 100% 0 0)",end:"inset(0 0% 0 0)"},right:{start:"inset(0 0 0 100%)",end:"inset(0 0 0 0%)"},center:{start:"circle(0% at 50% 50%)",end:"circle(150% at 50% 50%)"}},p=r.timeline();return r.set(t,{clipPath:(null===(i=d[u])||void 0===i?void 0:i.start)||d.up.start,opacity:"center"===u?0:1}),p.to(t,{clipPath:(null===(l=d[u])||void 0===l?void 0:l.end)||d.up.end,opacity:1,duration:e,ease:n,delay:a})}(r,t,e,n,a)}}}e.r(r),e.d(r,{createScrollAnimations:()=>d})}}]);