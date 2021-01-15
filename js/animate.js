ScrollTrigger.batch(".img1", {
    onEnter: batch => 
    gsap.to(batch, 
      {
          x: 0, 
          opacity: 1, 
          stagger: {each: 0.15, 
            overwrite: true}
        })
})

