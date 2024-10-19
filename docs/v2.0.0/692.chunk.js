"use strict";(self.webpackChunkalrdy_animate=self.webpackChunkalrdy_animate||[]).push([[692],{692:(t,e,n)=>{n.r(e),n.d(e,{ScrollTrigger:()=>i.u,animations:()=>r,gsap:()=>o.os,splitText:()=>a});var o=n(880),i=n(575),l=n(483);function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"lines",n=e.includes("clip"),o="lines";e.includes("chars")?(o="lines, words, chars",e="chars"):e.includes("words")?(o="lines, words",e="words"):e="lines";var i=new l.A(t,{types:o});return i.lines&&n&&i.lines.forEach((function(t){var e=document.createElement("div");e.classList.add("line-clip-wrapper"),t.parentNode.insertBefore(e,t),e.appendChild(t)})),{splitResult:i,splitType:e}}o.os.registerPlugin(i.u);var r=function(t){return{textSlideUp:function(e,n,o,i,l,a,r){var u,s,d,p;i=null!==(u=i)&&void 0!==u?u:.5,l=null!==(s=l)&&void 0!==s?s:.05,a=null!==(d=a)&&void 0!==d?d:0,r=null!==(p=r)&&void 0!==p?p:"back.out";var v=n[o.split(".")[0]]||n.lines,c=t.timeline();return c.set(e,{autoAlpha:0}),c.from(v,{y:"110%",opacity:0,duration:i,stagger:l,ease:r,delay:a,onStart:function(){return t.set(e,{autoAlpha:1})}},">"),c},textSlideDown:function(e,n,o,i,l,a,r){var u,s,d,p;i=null!==(u=i)&&void 0!==u?u:.5,l=null!==(s=l)&&void 0!==s?s:.05,a=null!==(d=a)&&void 0!==d?d:0,r=null!==(p=r)&&void 0!==p?p:"back.out";var v=n[o.split(".")[0]]||n.lines,c=t.timeline();return c.set(e,{autoAlpha:0}),c.from(v,{y:"-110%",opacity:0,duration:i,stagger:l,ease:r,delay:a,onStart:function(){return t.set(e,{autoAlpha:1})}},">"),c},textTurnUp:function(e,n,o,i,l,a,r){var u,s,d,p;i=null!==(u=i)&&void 0!==u?u:.5,l=null!==(s=l)&&void 0!==s?s:.05,a=null!==(d=a)&&void 0!==d?d:0,r=null!==(p=r)&&void 0!==p?p:"back.out";var v=n[o.split(".")[0]]||n.lines,c=t.timeline();return c.set(e,{autoAlpha:0}),c.from(v,{y:"110%",opacity:0,rotation:10,duration:i,stagger:l,ease:r,delay:a,onStart:function(){return t.set(e,{autoAlpha:1})}},">"),c},textTurnDown:function(e,n,o,i,l,a,r){var u,s,d,p;i=null!==(u=i)&&void 0!==u?u:.5,l=null!==(s=l)&&void 0!==s?s:.05,a=null!==(d=a)&&void 0!==d?d:0,r=null!==(p=r)&&void 0!==p?p:"back.out";var v=n[o.split(".")[0]]||n.lines,c=t.timeline();return c.set(e,{autoAlpha:0}),c.from(v,{y:"-110%",opacity:0,rotation:-10,duration:i,stagger:l,ease:r,delay:a,onStart:function(){return t.set(e,{autoAlpha:1})}},">"),c},textCascadeUp:function(e,n,o,i,l,a){var r,u,s,d;o=null!==(r=o)&&void 0!==r?r:.5,i=null!==(u=i)&&void 0!==u?u:.05,l=null!==(s=l)&&void 0!==s?s:0,a=null!==(d=a)&&void 0!==d?d:"expo.out";var p=n.lines,v=n.words,c=t.timeline();return c.from(e,{autoAlpha:0,duration:.1}),p.forEach((function(t,e){var n=v.filter((function(e){return t.contains(e)}));c.from(n,{y:"110%",opacity:0,duration:o,stagger:i,ease:a,delay:l},e*i*3)})),c},textCascadeDown:function(e,n,o,i,l,a){var r,u,s,d;o=null!==(r=o)&&void 0!==r?r:.5,i=null!==(u=i)&&void 0!==u?u:.05,l=null!==(s=l)&&void 0!==s?s:0,a=null!==(d=a)&&void 0!==d?d:"expo.out";var p=n.lines,v=n.words,c=t.timeline();return c.set(e,{autoAlpha:0}),p.forEach((function(n,r){var u=v.filter((function(t){return n.contains(t)}));c.from(u,{y:"-110%",opacity:0,duration:o,stagger:i,ease:a,delay:l,onStart:function(){return t.set(e,{autoAlpha:1})}},r*i*4)})),c},textRotateSoft:function(e,n){var o,i,l,a,r=arguments.length>3?arguments[3]:void 0,u=arguments.length>4?arguments[4]:void 0,s=arguments.length>5?arguments[5]:void 0,d=arguments.length>6?arguments[6]:void 0;r=null!==(o=r)&&void 0!==o?o:1.2,u=null!==(i=u)&&void 0!==i?i:.1,s=null!==(l=s)&&void 0!==l?l:0,d=null!==(a=d)&&void 0!==a?a:"power3.out";var p=n[(arguments.length>2&&void 0!==arguments[2]?arguments[2]:"lines").split(".")[0]]||n.lines,v=t.timeline(),c=window.getComputedStyle(e),f=3*parseFloat(c.fontSize);return p.forEach((function(t){var e=document.createElement("div");e.classList.add("line-perspective-wrapper"),t.parentNode.insertBefore(e,t),e.appendChild(t)})),v.set(e,{autoAlpha:0}),v.set(".line-perspective-wrapper",{transformStyle:"preserve-3d",perspective:f}),v.set(p,{transformOrigin:"50% 0%"}),v.from(p,{autoAlpha:0,rotateX:-90,y:"100%",scaleX:.75,duration:r,stagger:u,ease:d,delay:s,onStart:function(){return t.set(e,{autoAlpha:1})}}),v}}}(o.os)}}]);