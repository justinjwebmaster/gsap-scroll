import gsap from 'gsap';
import ScrollTrigger from 'gsap/Scrolltrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.from(".header", {
  duration: .8,
  scale: .6,
  scrollTrigger: {
    trigger :".header",
    start: "top top",
    end: "bottom top",
    toggleActions: "play pause resume reset",
    markers: true,
    scrub: .5,
  }
});



// Animation des images des cards
const listLeft = gsap.utils.toArray(".card__imgContainer"); //faire un tableau de toute mes .box

// fait une boucle sur ma liste
listLeft.forEach(function(imgContainer) { // item = 1 element de la liste
  
  const selector = gsap.utils.selector(imgContainer);
  const img = selector(".card__img");
  
  gsap.from(imgContainer, {
    duration: .8,
    rotate: -4,
    scrollTrigger: {
      trigger :imgContainer,
      start: "top 75%",
      end: "center 50%",
      toggleActions: "play pause resume reset",
      // markers: true,
      scrub: .5,
    }
  });

  gsap.from(img, {
    opacity: .6,
    duration: .8,
    scale: 1,
    scrollTrigger: {
      trigger : img,
      start: "top 75%",
      end: "center 50%",
      toggleActions: "play pause resume reset",
      // markers: true,
      scrub: .5,
    }
  });
});


gsap.to(".textSlide__text", {
  duration: .8,
  x: "-250vw",
  scrollTrigger: {
    trigger : ".textSlide__text",
    start: "top bottom",
    end: "bottom top",
    toggleActions: "play pause resume reset",
    // markers: true,
    scrub: .5,
  }
});


console.log(gsap.version);