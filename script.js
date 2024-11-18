gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();

// Smooth and modern entrance for navigation elements
tl.from("nav h1", {
  y: -30,
  opacity: 0,
  delay: 0.7,
  duration: 1.2,
  ease: "power4.out",
})
  .from(
    ".part2 a",
    {
      y: -30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power4.out",
    },
    "-=0.6" // Slight overlap to make the transition smoother
  )
  .from(
    "nav button",
    {
      y: -30,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    },
    "-=0.8"
  );

// Smooth transition for the text and button in the center part
tl.from(
  ".center__part1 h1",
  {
    x: -200,
    opacity: 0,
    duration: 0.8,
    ease: "power4.out",
  },
  "-=0.4"
)
  .from(
    ".center__part1 p",
    {
      x: -100,
      opacity: 0,
      duration: 0.6,
      ease: "power4.out",
    },
    "-=0.3"
  )
  .from(".center__part1 button", {
    opacity: 0,
    duration: 0.5,
    ease: "power4.out",
  });

tl.from(
  ".center__part2 img",
  {
    x: 500,
    opacity: 0,
    duration: 0.5,
  },
  "-=0.7"
);

gsap.from(".section1bottom img", {
  y: 100,
  opacity: 0,
  scale: 0.8,
  rotation: 10,
  duration: 1,
  ease: "power2.out",
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".section1bottom",
    start: "top 90%",
    end: "top 20%",
    toggleActions: "play none none reverse",
    scrub: 1.2,
    markers: false,
  },
});

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    scroller: "body",
    start: "top 50%",
    end: "top 0",
    scrub: 2,
  },
});

tl2.from(".services", {
  y: 30,
  opacity: 0,
});

const elements = document.querySelectorAll(".elem");

elements.forEach((elem, index) => {
  const animations = {
    x: index % 2 === 0 ? -100 : 100,
    y: index % 2 === 0 ? 50 : -50,
  };

  gsap.from(elem, {
    scrollTrigger: {
      opacity: 0,
      duration: 1,
      trigger: elem,
      start: "top 30%",
      end: "top 80%",
      ease: "elastic.out(1,0.3)",
      toggleActions: "play none none reverse",
    },
    ...animations,
    opacity: 0,
    duration: 1.5,
    ease: "circ.out",
  });
});
