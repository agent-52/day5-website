

document.querySelector(".homeText").style.transform = "rotate(-90deg)"

gsap.to(".textType1,.textType2",{
  y:100,
  opacity:0,
  scrollTrigger:{
    trigger:"header",
    scroller:"body",
    // pin:"#page1",
    // markers:true,
    scrub:2,
    start:"bottom top",
  }
})

gsap.to(".mainImg",{
  y:-400, 
  scale:2.6,
  scrollTrigger:{
    trigger:"header",
    scroller:"body",
    // pin:"#page1",
    // markers:true,
    scrub:2,
    start:"bottom top",
    end:"200% "
  }
})
gsap.to(".footer",{
  y:80,
  scrollTrigger:{
    trigger:"header",
    scroller:"body",
    // pin:"#page1",
    // markers:true,
    scrub:2,
    start:"bottom top",
  }
})

gsap.to(".jwelbox1",{
  y:-120, 
  opacity:1,
  scrollTrigger:{
    trigger:"header",
    scroller:"body",
    // pin:"#page1",
    // markers:true,
    scrub:2,
    start:"bottom top",
  }
})

gsap.to(".jwelbox2",{
  y:0, 
  opacity:1,
  scrollTrigger:{
    trigger:"header",
    scroller:"body",
    // pin:"#page1",
    // markers:true,
    scrub:2,
    start:"bottom top",
  }
})

gsap.to("#page1,.mainImg,.footer",{
  opacity:0,
  scrollTrigger:{
    trigger:"#page1",
    scroller:"body",
    // pin:"#page1",
    // markers:true,
    scrub:2,
    start:"15% top",
    end:"18% top"
  }
})

gsap.from(".page3TextType2, .page3TextType1",{
  opacity:0,
  y:150,
  scrollTrigger:{
    trigger:"#page1",
    scroller:"body",
    
    // pin:"#page1",
    // markers:true,
    scrub:2,
    start:"25% top",
    end:"40% top"
  }
})
gsap.from(".b1, .b7",{
  opacity:0,
  y:150,
  scrollTrigger:{
    trigger:"#page2Container",
    scroller:"body",
    // pin:"#page1",
    // markers:true,
    scrub:2,
    start:"15% center",
    end:"40% center"
  }
})
gsap.from(".b2, .b9",{
  scale:0,
  scrollTrigger:{
    trigger:"#page2Container",
    scroller:"body",
    // pin:"#page1",
    // markers:true,
    scrub:2,
    start:"15% center",
    end:"40% center"
    
  }
})
gsap.from(".b3, .b5",{
  opacity:0,
  x:100,
  scrollTrigger:{
    trigger:"#page2Container",
    scroller:"body",
    // pin:"#page1",
    // markers:true,
    scrub:2,
    start:"15% center",
    end:"40% center"
    
  }
})
gsap.from(".b4, .b6",{
  opacity:0,
  scrollTrigger:{
    trigger:"#page2Container",
    scroller:"body",
    // pin:"#page1",
    // markers:true,
    scrub:2,
    start:"15% center",
    end:"40% center"
    
  }
})
gsap.from(".b8",{
  opacity:0,
  x:-100,
  scrollTrigger:{
    trigger:"#page2Container",
    scroller:"body",
    // pin:"#page1",
    // markers:true,
    scrub:2,
    start:"15% center",
    end:"40% center"
    
  }
})