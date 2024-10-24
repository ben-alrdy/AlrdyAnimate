// Helper function to get scroll trigger values
const getScrollTriggerValues = (isMobile) => {
  return {
    start: isMobile ? "top 40%" : "top 80%",
    end: isMobile ? "top 20%" : "top 40%"
  };
};

export function stickyNav(gsap, ScrollTrigger, element, ease, duration) {
  ease = ease ?? 'back.inOut';
  duration = duration ?? 0.4;
  let isVisible = true;
  let lastScrollTop = 0;
  const scrollThreshold = 20; // Adjust this value to change sensitivity

  ScrollTrigger.create({
    start: "top top",
    end: "max",
    onUpdate: (self) => {
      let currentScrollTop = self.scroll();
      let scrollDelta = currentScrollTop - lastScrollTop;

      if (Math.abs(scrollDelta) > scrollThreshold) {
        if (scrollDelta > 0 && isVisible) {
          // Scrolling down, hide the nav
          isVisible = false;
          gsap.to(element, { y: '-100%', duration: duration * 2, ease });
        } else if (scrollDelta < 0 && !isVisible) {
          // Scrolling up, show the nav
          isVisible = true;
          gsap.to(element, { y: '0%', duration, ease });
        }
        lastScrollTop = currentScrollTop;
      }
    }
  });
}

export function createAnimations(gsap) {
  return {
    textSlideUp: (element, splitResult, splitType, duration, stagger, delay, ease, isMobile, scroll) => {
      duration = duration ?? 0.5;
      stagger = stagger ?? 0.05;
      delay = delay ?? 0;
      ease = ease ?? 'back.out';
      
      const animationTarget = splitResult[splitType] || splitResult.lines;       // Determine the animation target based on the split type or defaulting to lines
      const tl = gsap.timeline();
      const { start, end } = getScrollTriggerValues(isMobile);

      // Set initial opacity of the whole element
      tl.set(element, { autoAlpha: 0 });

      tl.from(animationTarget, {
        y: "110%",
        opacity: 0,
        duration,
        stagger,
        ease,
        delay,
        ...(scroll && { // if scroll is not null
          scrollTrigger: {
            trigger: element,
            start,
            end,
            scrub: scroll.includes('smooth') ? 2 :
                   scroll.includes('snap') ? { snap: 0.2 } :
                   true
          }
        }),
        onStart: () => gsap.set(element, { autoAlpha: 1 }) // Make the whole element visible when animation starts
      }, ">");

      return tl;
    },
    textSlideDown: (element, splitResult, splitType, duration, stagger, delay, ease, isMobile, scroll) => {
      duration = duration ?? 0.5;
      stagger = stagger ?? 0.05;
      delay = delay ?? 0;
      ease = ease ?? 'back.out';
      
      const animationTarget = splitResult[splitType] || splitResult.lines;       // Determine the animation target based on the split type or defaulting to lines
      const tl = gsap.timeline();
      const { start, end } = getScrollTriggerValues(isMobile);

      // Set initial opacity of the whole element
      tl.set(element, { autoAlpha: 0 });

      tl.from(animationTarget, {
        y: "-110%",
        opacity: 0,
        duration,
        stagger,
        ease,
        delay,
        ...(scroll && { // if scroll is not null
          scrollTrigger: {
            trigger: element,
            start,
            end,
            scrub: scroll.includes('smooth') ? 2 :
                   scroll.includes('snap') ? { snap: 0.2 } :
                   true
          }
        }),
        onStart: () => gsap.set(element, { autoAlpha: 1 }) // Make the whole element visible when animation starts
      }, ">");

      return tl;
    },
    textTiltUp: (element, splitResult, splitType, duration, stagger, delay, ease, isMobile, scroll) => {
      duration = duration ?? 0.5;
      stagger = stagger ?? 0.05;
      delay = delay ?? 0;
      ease = ease ?? 'back.out';
      
      const animationTarget = splitResult[splitType] || splitResult.lines;       // Determine the animation target based on the split type or defaulting to lines
      const tl = gsap.timeline();
      const { start, end } = getScrollTriggerValues(isMobile);

      // Set initial opacity of the whole element
      tl.set(element, { autoAlpha: 0 });

      tl.from(animationTarget, {
        y: "110%",
        opacity: 0,
        rotation: 10,
        duration,
        stagger,
        ease,
        delay,
        ...(scroll && { // if scroll is not null
          scrollTrigger: {
            trigger: element,
            start,
            end,
            scrub: scroll.includes('smooth') ? 2 :
                   scroll.includes('snap') ? { snap: 0.2 } :
                   true
          }
        }),
        onStart: () => gsap.set(element, { autoAlpha: 1 }) // Make the whole element visible when animation starts
      }, ">");

      return tl;
    },
    textTiltDown: (element, splitResult, splitType, duration, stagger, delay, ease, isMobile, scroll) => {
      duration = duration ?? 0.5;
      stagger = stagger ?? 0.05;
      delay = delay ?? 0;
      ease = ease ?? 'back.out';
      
      const animationTarget = splitResult[splitType] || splitResult.lines;       // Determine the animation target based on the split type or defaulting to lines
      const tl = gsap.timeline();
      const { start, end } = getScrollTriggerValues(isMobile);

      // Set initial opacity of the whole element
      tl.set(element, { autoAlpha: 0 });

      tl.from(animationTarget, {
        y: "-110%",
        opacity: 0,
        rotation: -10,
        duration,
        stagger,
        ease,
        delay,
        ...(scroll && { // if scroll is not null
          scrollTrigger: {
            trigger: element,
            start,
            end,
            scrub: scroll.includes('smooth') ? 2 :
                   scroll.includes('snap') ? { snap: 0.2 } :
                   true
          }
        }),
        onStart: () => gsap.set(element, { autoAlpha: 1 }) // Make the whole element visible when animation starts
      }, ">");

      return tl;
    },
    textCascadeUp: (element, splitResult, duration, stagger, delay, ease, isMobile, scroll) => {
      duration = duration ?? 0.5;
      stagger = stagger ?? 0.05;
      delay = delay ?? 0;
      ease = ease ?? 'expo.out';

      const { start, end } = getScrollTriggerValues(isMobile);
    
      // Ensure we have both lines and words split
      const lines = splitResult.lines;
      const words = splitResult.words;

      const tl = gsap.timeline();

      // Set initial opacity of the whole element
      tl.set(element, { autoAlpha: 0 });

      lines.forEach((line, index) => {
        const wordsInLine = words.filter(word => line.contains(word));
        
        tl.from(wordsInLine, {
          y: "110%",
          opacity: 0,
          duration,
          stagger,
          ease,
          delay,
          ...(scroll && { // if scroll is not null
            scrollTrigger: {
              trigger: element,
              start,
              end,
              scrub: scroll.includes('smooth') ? 2 :
                     scroll.includes('snap') ? { snap: 0.2 } :
                     true
            }
          }),
          onStart: () => gsap.set(element, { autoAlpha: 1 }) // Make the whole element visible when animation starts
        }, index * stagger * 3); // Delay each line
      });

      return tl;
    },
    textCascadeDown: (element, splitResult, duration, stagger, delay, ease, isMobile, scroll) => {
      duration = duration ?? 0.5;
      stagger = stagger ?? 0.05;
      delay = delay ?? 0;
      ease = ease ?? 'expo.out';

      const { start, end } = getScrollTriggerValues(isMobile);
    
      // Ensure we have both lines and words split
      const lines = splitResult.lines;
      const words = splitResult.words;

      const tl = gsap.timeline();

      // Set initial opacity of the whole element
      tl.set(element, { autoAlpha: 0 });

      lines.forEach((line, index) => {
        const wordsInLine = words.filter(word => line.contains(word));
        
        tl.from(wordsInLine, {
          y: "-110%",
          opacity: 0,
          duration,
          stagger,
          ease,
          delay,
          ...(scroll && { // if scroll is not null
            scrollTrigger: {
              trigger: element,
              start,
              end,
              scrub: scroll.includes('smooth') ? 2 :
                     scroll.includes('snap') ? { snap: 0.2 } :
                     true
            }
          }),
          onStart: () => gsap.set(element, { autoAlpha: 1 }) // Make the whole element visible when animation starts
        }, index * stagger * 4); // Delay each line
      });

      return tl;
    },
    textRotateSoft: (element, splitResult, splitType, duration, stagger, delay, ease, isMobile, scroll) => {
      duration = duration ?? 1.2;
      stagger = stagger ?? 0.1;
      delay = delay ?? 0;
      ease = ease ?? 'power3.out';

      const animationTarget = splitResult[splitType] || splitResult.lines;       // Determine the animation target based on the split type or defaulting to lines
      const tl = gsap.timeline();

      const { start, end } = getScrollTriggerValues(isMobile);

      // Calculate perspective in pixels based on font size
      const computedStyle = window.getComputedStyle(element);
      const fontSize = parseFloat(computedStyle.fontSize);
      const perspectiveInPixels = fontSize * 3; // 3em

      // Add perspective wrapper around each line
      animationTarget.forEach(line => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('line-perspective-wrapper');
        line.parentNode.insertBefore(wrapper, line); // insert the wrapper before the line  
        wrapper.appendChild(line); // append the line to the wrapper
      });


      // Set initial opacity of the whole element
      tl.set(element, { 
        autoAlpha: 0
      });

      tl.set('.line-perspective-wrapper', {
        transformStyle: 'preserve-3d',
        perspective: perspectiveInPixels
      });

      tl.set(animationTarget, {
        transformOrigin: '50% 0%'
      });

      // Animate each split element
      tl.from(animationTarget, {
        autoAlpha: 0,
        rotateX: -90,
        y: '100%',
        scaleX: 0.75,
        duration,
        stagger,
        ease,
        delay,
        ...(scroll && { // if scroll is not null
          scrollTrigger: {
            trigger: element,
            start,
            end,
            scrub: scroll.includes('smooth') ? 2 :
                   scroll.includes('snap') ? { snap: 0.2 } :
                   true
          }
        }),
        onStart: () => gsap.set(element, { autoAlpha: 1 }) // Make the whole element visible when animation starts
      });

      return tl;
    },
    textFade: (element, splitResult, splitType, duration, stagger, delay, ease, isMobile, scroll) => {
      duration = duration ?? 0.5;
      stagger = stagger ?? 0.05;
      delay = delay ?? 0;
      ease = ease ?? 'power3.out';

      const animationTarget = splitResult[splitType] || splitResult.lines;       // Determine the animation target based on the split type or defaulting to lines
      const tl = gsap.timeline();

      const { start, end } = getScrollTriggerValues(isMobile);

      tl.set(animationTarget, {
        opacity: 0.3
      });

      tl.from(animationTarget, {
        opacity: 0.3,
        duration,
        stagger,  
        ease,
        delay,
        ...(scroll && { // if scroll is not null
          scrollTrigger: {
            trigger: element,
            start,
            end,
            scrub: scroll.includes('smooth') ? 2 :
                   scroll.includes('snap') ? { snap: 0.2 } :
                   true
          }
        })
      });

      return tl;
    },
    textAppear: (element, splitResult, splitType, duration, stagger, delay, ease, isMobile, scroll) => {
      duration = duration ?? 0.5;
      stagger = stagger ?? 0.05;
      delay = delay ?? 0;
      ease = ease ?? 'power3.out';

      const animationTarget = splitResult[splitType] || splitResult.lines;       // Determine the animation target based on the split type or defaulting to lines
      const tl = gsap.timeline();

      const { start, end } = getScrollTriggerValues(isMobile);

      tl.set(element, {
        autoAlpha: 0
      });

      tl.from(animationTarget, {
        opacity: 0,
        duration,
        stagger,  
        ease,
        delay,
        ...(scroll && { // if scroll is not null
          scrollTrigger: {
            trigger: element,
            start,
            end,
            scrub: scroll.includes('smooth') ? 2 :
                   scroll.includes('snap') ? { snap: 0.2 } :
                   true
          }
        }),
        onStart: () => gsap.set(element, { autoAlpha: 1 }) // Make the whole element visible when animation starts
      });

      return tl;
    }
  };
}
