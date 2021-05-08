const hf = gsap.timeline();
hf.from("section",{
    duration:1.3,
    y:-200,
    height:0,
    opacity:0,
    linear:"power3.onOut"
})
.from(".logo__cute",{
    delay:-0.3,
    x:-20, 
    opacity:0,
    duration:0.8,
    // right:10,
    ease:"power3.esae",
    stragger:{
        amount:.5
    }
})
.from(".list",{
    delay:-0.4,
    x:20, 
    opacity:0,
    duration:0.9,
    // right:10,
    ease:"power3.Out",
    stragger:{
        amount:.5
    }
})
.from(".main-text",{
    delay:-0.5,
    x:20, 
    opacity:0,
    duration:0.8,
    // right:10,
    ease:"power3.ease",
    stragger:{
        amount:.5
    }
})

// scroll effect


function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    elem.classList.contains(".pet-logo");
      x = 0;
      y = 100;
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
      duration: 1.75, 
      delay:2,
      x: 0,
      y: 0, 
      autoAlpha: 1, 
      linear: "expo", 
      overwrite: "auto"
    });
  }
  
  function hide(elem) {
    gsap.set(elem, {autoAlpha: 0});
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray(".pet-logo").forEach(function(elem) {
      hide(elem); // assure that the element is hidden when scrolled into view
      
      ScrollTrigger.create({
        trigger: elem,
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem, -1) },
        onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
      });
    });
  });
  // about scroll
  
function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
      y = direction * 100;
  elem.classList.contains(".services");
    x = 0;
    y = 100;
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 1.75, 
    delay:2,
    x: 0,
    y: 0, 
    autoAlpha: 1, 
    linear: "expo", 
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, {autoAlpha: 0});
}

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.utils.toArray(".services").forEach(function(elem) {
    hide(elem); // assure that the element is hidden when scrolled into view
    
    ScrollTrigger.create({
      trigger: elem,
      onEnter: function() { animateFrom(elem) }, 
      onEnterBack: function() { animateFrom(elem, -1) },
      onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });
});
//   navigation
  const shownav = gsap.from('.navigation', { 
    yPercent: -100,
    paused: true,
    duration: 0.3
  }).progress(1);
  
ScrollTrigger.create({
    start: "top top",
    end: 99999,
    onUpdate: (self) => {
      self.direction === -1 ? shownav.play() : shownav.reverse()
    }
  });
 
//   logo
  const showAnim = gsap.from('.pet-logo', { 
    yPercent: -20,
    paused: true,
    duration: 0.2
  }).progress(1);
  
ScrollTrigger.create({
    start: "top top",
    end: 99999,
    onUpdate: (self) => {
      self.direction === -1 ? showAnim.play() : showAnim.reverse()
    }
  });
 

