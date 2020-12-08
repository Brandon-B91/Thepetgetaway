gsap.to(".img1", {
    scrollTrigger:
     ".img1", 
     x: 0, duration: .75,
     opacity: 1,
     stagger: {
         grid: [1, 4],
         amount: .05
     }
});

gsap.to(".img2", {
    scrollTrigger:
     ".img2", 
     x: 0, duration: 1,
     opacity: 1,
     stagger: {
         grid: [1, 4],
         amount: .05
     }
});