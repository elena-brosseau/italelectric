
const slides = document.querySelectorAll("figure"),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next');

let currentSlide = 0;

function setSlide() {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - currentSlide) * 100}%)`;
      });
}

function setTransition() {
    slides.forEach((slide) => {
        slide.style.transition = '.5s';
      });
}

function nextSlide() {

    if (currentSlide > 0) {
        currentSlide--
    } else {
        currentSlide = slides.length - 1
    }

    setTransition();
    setSlide();
}

function prevSlide() {
    
    if (currentSlide < slides.length - 1) {
        currentSlide++
    } else {
        currentSlide = 0
    }

    setTransition();
    setSlide();
}

setSlide();

// Arrow Clicking
prev.onclick = nextSlide;
next.onclick = prevSlide;

// Swiping
slides.forEach((slide, i) => {
    slide.addEventListener('touchstart', handleTouchStart)
    slide.addEventListener('touchmove', handleTouchMove)
  });

  let xDown = null;

function handleTouchStart(evt) {
    const firstTouch = evt.touches[0];                                      
    xDown = firstTouch.clientX;                                     
};                                                
                                                                         
function handleTouchMove(evt) {
    if ( ! xDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    

    var xDiff = xDown - xUp;
                                                                         
    if ( xDiff > 0 ) {
        prevSlide() 
    } else {
        nextSlide()
    }                       

    xDown = null;                                             
};


// Mobile Nav

const menu = document.querySelector('header img'),
      header = document.querySelector('header'),
      body = document.querySelector('body'),
      navItems = Array.from(document.querySelectorAll('header a'));


function toggleNav() {
    header.classList.toggle('open')
    if (header.classList.contains('open')) {
        menu.src = './assets/close.png'
        window.onresize = closeNav
        body.style.overflowY = 'hidden';
        navItems.forEach(item => {
            item.onclick = closeNav;
        })
    } else {
        menu.src = './assets/menu.png'
        body.style.overflowY = 'auto';
    }
}

function closeNav() {
    header.classList.remove('open');
    menu.src = './assets/menu.png'
    body.style.overflowY = 'auto';
}

menu.onclick = toggleNav;

