import gsap from 'gsap';
import ScrollTrigger from 'gsap/Scrolltrigger';

gsap.registerPlugin(ScrollTrigger);

const listLeft = gsap.utils.toArray(".img--left"); //faire un tableau de toute mes .box
const listRight = gsap.utils.toArray(".img--right"); //faire un tableau de toute mes .box
// fait une boucle sur ma liste
listRight.forEach(function(imgRight) { // item = 1 element de la liste
  gsap.from(imgRight, {
    opacity: .0,
    duration: .4,
    scale: .4,
    rotate: -2,
    scrollTrigger: {
      trigger :imgRight,
      start: "top 75%",
      end: "bottom 50%",
      toggleActions: "play pause resume reset",
      // markers: true,
      scrub: .5,
    }
  });
});

// fait une boucle sur ma liste
listLeft.forEach(function(imgLeft) { // item = 1 element de la liste
  gsap.from(imgLeft, {
    opacity: .0,
    duration: .4,
    scale: .6,
    rotate: 2,
    scrollTrigger: {
      trigger :imgLeft,
      start: "top 75%",
      end: "center 50%",
      toggleActions: "play pause resume reset",
      // markers: true,
      scrub: .5,
    }
  });
});

console.log(gsap.version);