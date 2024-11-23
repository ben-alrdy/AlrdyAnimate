import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const gsapBundles = {
  text: {
    animations: () => import(/* webpackChunkName: "gsap-text" */ './gsapAnimations/textAnimations'),
    dependencies: () => import(/* webpackChunkName: "gsap-text" */ './textSplitter')
  },
  scroll: {
    animations: () => import(/* webpackChunkName: "gsap-scroll" */ './gsapAnimations/scrollAnimations')
  },
  loop: {
    // Load both plugins in parallel
    plugins: () => Promise.all([
      import(/* webpackChunkName: "gsap-draggable" */ 'gsap/Draggable'),
      import(/* webpackChunkName: "gsap-draggable" */ 'gsap/InertiaPlugin')
    ]),
    animations: () => import(/* webpackChunkName: "gsap-draggable" */ './gsapAnimations/loopAnimations')
  },
  hover: {
    animations: () => import(/* webpackChunkName: "gsap-hover" */ './gsapAnimations/hoverAnimations')
  }
};

export { gsap, ScrollTrigger };
