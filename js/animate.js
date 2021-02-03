ScrollTrigger.batch(".img1", {
    onEnter: batch => 
    gsap.to(batch, 
      {
          x: 0, 
          opacity: 1, 
          stagger: {each: 0.15, 
            overwrite: true},
            duration: .7
    })
})

// gsap.utils.toArray(".img1").forEach(box => {
//     var tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: box,
//         // toggleActions: "play none none none",
//         start: "top 90%",
//         markers: false
//       }
//     });
  
//     tl.to(box, {
//       duration: .5,
//       opacity: 1,
//       x: 0
//     });
//   });



