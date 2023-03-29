import gsap from 'gsap';
import ScrollTrigger from 'gsap/Scrolltrigger';

gsap.registerPlugin(ScrollTrigger);

const list = gsap.utils.toArray(".img"); //faire un tableau de toute mes .box

// fait une boucle sur ma liste
list.forEach(function(item) { // item = 1 element de la liste
  gsap.to(item, {
    opacity: 1,
    duration: .6,
    scrollTrigger: {
      trigger :item,
      start: "center center",
      toggleActions: "play pause resume reset",
      markers: true,
    }
  });
});

console.log(gsap.version);