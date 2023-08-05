window.addEventListener('scroll', function(){

    let navbar = this.document.getElementById('header');
    var span = this.document.querySelector('#left span');

    if(window.pageYOffset >= 230){
        navbar.classList.add('sticky');
        span.style.fontSize = "2.3vw";
        span.style.transition = "ease 0.2s"
    }
    else{
        navbar.classList.remove('sticky');
        span.style.fontSize = "0vw";
    }
})

var tl = gsap.timeline();
tl
.from("#heading span",{
    opacity: 0,
    y: 300,
    duration: 2,
    stagger: 0.1,
    ease: Power3.easeInOut
})  
.from("#bleft",{
    y: 30,
    duration: 1,
    stagger: 0.1,
    opacity: 0,
    delay: -1,
    ease: Power3.easeInOut
})
.from("#photo",{
    opacity: 0,
    duration: 2,
    delay: -1,
    ease: Expo.easeInOut
})
.from("#bbottom p",{
    y: 30,
    opacity: 0,
    duration: 2,
    delay: -2,
    ease: Expo.easeInOut
})


gsap.from("#bb1,svg,#b2",{
    opacity: 0,
    duration: 2,
    ease: Expo.easeInOut,
    scrollTrigger: {
        trigger: "#bb1",
        scroller: "#main",
        start: "top 90%"
    }
})
gsap.from("#b3 span",{
    y: 100,
    opacity: 0,
    duration: 2,
    ease: Expo.easeInOut,
    stagger: 0.1,
    scrollTrigger: {
        trigger: "#b3",
        start: "top 90%",
    }
})
gsap.from("#b2 h1",{
    opacity: 0,
    duration: 1,
    ease: Expo.easeInOut,
    scrollTrigger: {
        trigger: "#b2 h1",
        start: "top 90%",
    }
})
gsap.from("#mainheading span",{
    opacity: 0,
    y: 400,
    duration: 2,
    stagger: 0.1,
    ease: Power3.easeInOut,
    scrollTrigger: {
        trigger: "#mainheading",
        start: "top 90%",
    }
}) 
gsap.from("#para p",{
    opacity: 0,
    duration: 2,
    y: 100,
    ease: Power3.easeInOut,
    scrollTrigger: {
        trigger: "#section4",
        start: "top 90%",
    }
}) 

gsap.from("#notre",{
    left: "15%",
    ease: Power3.easeInOut,
    duration: 2,
    scrollTrigger: {
        trigger: "#mainbox",
        start: "top 90%",
    }
})

gsap.from("#equipe",{
    left: "54%",
    ease: Power3.easeInOut,
    duration: 2,
    scrollTrigger: {
        trigger: "#mainbox",
        start: "top 90%",
    }
})

gsap.from("#p2",{
    left: "35%",
    opacity: 0,
    ease: Power3.easeInOut,
    duration: 2,
    scrollTrigger: {
        trigger: "#mainbox",
        start: "top 90%",
    }
})

gsap.from("#p3",{
    left: "35%",
    top: "20%",
    opacity: 0,
    ease: Power3.easeInOut,
    duration: 2,
    scrollTrigger: {
        trigger: "#mainbox",
        start: "top 90%",
    }   
})

gsap.from("#p4",{
    left: "33%",
    top: "50%",
    opacity: 0,
    ease: Power3.easeInOut,
    duration: 2,
    scrollTrigger: {
        trigger: "#mainbox",
        start: "top 90%",
    }
})


gsap.from("#p5",{
    left: "50%",
    top: "50%",
    opacity: 0,
    ease: Power3.easeInOut,
    duration: 2,
    scrollTrigger: {
        trigger: "#mainbox",
        start: "top 90%",
    }
})


gsap.from("#p6",{
    left: "45%",
    opacity: 0,
    ease: Power3.easeInOut,
    duration: 2,
    scrollTrigger: {
        trigger: "#mainbox",
        start: "top 90%",
    }
})

gsap.from("#cpara",{
    opacity: 0,
    duration: 2,
    ease: Expo.easeInOut,
    scrollTrigger: {
        trigger: "#mainbox",
        start: "top 90%",
    }
})