const menu_btn = document.querySelector('.menu-btn');
const nav_menu = document.querySelector('.nav_menu');
const loader_container = document.querySelector('.loader_container');
const exploreBtns = document.querySelectorAll('.explore');
console.log(exploreBtns);
exploreBtns.forEach(explore => {
  explore.addEventListener('click', e => {
    const clicked = e.target.closest('.explore');
    if (!clicked) return;
    exploreBtns.forEach(t => t.classList.remove('explore-tab-active'));
    clicked.classList.add('explore-tab-active');

    console.log(clicked);
  });
});
menu_btn.addEventListener('click', () => {
  menu_btn.classList.toggle('open');
  nav_menu.classList.toggle('mobile');
});
window.addEventListener('load', () => {
  setTimeout(() => {
    loader_container.classList.add('active');
  }, 1000);
});

gsap.registerPlugin(ScrollTrigger);

const btn = gsap
  .timeline({
    scrollTrigger: {
      trigger: '.join__pulse-bg',
      start: 'top 100%',
      end: 'bottom 8%',
    },
  })
  .fromTo(
    '.join__pulse-btn',
    {
      scale: 0,
      transformOriginX: '50%',
      transformOriginY: '50%',
    },
    {
      scale: 1,
      transformOriginX: '50%',
      transformOriginY: '50%',
      duration: 1,
    }
  )
  .to('.join__pulse-btn', {
    width: '200px',
    height: '65px',
    x: -60,
    padding: '20px 20px',
    duration: 1,
    onComplete: function () {
      // Add your code to set the text content here
      const joinBtn = document.querySelector('.join__pulse-btn');
      joinBtn.textContent = 'Join pulse';
    },
  });

const t1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.event1',
    start: 'top 70%',
    end: 'bottom 0%',
    toggleActions: 'play none restart none',
  },
});
t1.from('.event1 .event_poster', { opacity: 0, y: -100, duration: 0.5 });
t1.from('.event1 .event_info', { opacity: 0, y: 100, duration: 1 });

const t2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.event2',
    start: 'top 70%',
    end: 'bottom 0%',
    toggleActions: 'play none restart none',
  },
});
t2.from('.event2 .event_poster', { opacity: 0, y: -100, duration: 0.5 });
t2.from('.event2 .event_info', { opacity: 0, y: 100, duration: 1 });

const t3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.event3',
    start: 'top 70%',
    end: 'bottom 0%',
    toggleActions: 'play none restart none',
  },
});
t3.from('.event3 .event_poster', { opacity: 0, y: -100, duration: 0.5 });
t3.from('.event3 .event_info', { opacity: 0, y: 100, duration: 1 });

const t4 = gsap.timeline({
  scrollTrigger: {
    trigger: '.event4',
    start: 'top 70%',
    end: 'bottom 0%',
    toggleActions: 'play none restart none',
  },
});
t4.from('.event4 .event_poster', { opacity: 0, y: -100, duration: 0.5 });
t4.from('.event4 .event_info', { opacity: 0, y: 100, duration: 1 });

const t5 = gsap.timeline({
  scrollTrigger: {
    trigger: '.event5',
    start: 'top 70%',
    end: 'bottom 0%',
    toggleActions: 'play none restart none',
  },
});
t5.from('.event5 .event_poster', { opacity: 0, y: -100, duration: 0.5 });
t5.from('.event5 .event_info', { opacity: 0, y: 100, duration: 1 });

Array.from(document.querySelectorAll('.event_poster')).forEach(e => {
  const imgs = Array.from(e.querySelectorAll('img'));
  new hoverEffect({
    parent: e,
    intensity: 0.3,
    image1: imgs[1].getAttribute('src'),
    image2: imgs[0].getAttribute('src'),
    displacementImage: './../displacement/displacement.png',
    imagesRatio: 1.2,
  });
});

// Images Area Images
let imagesAreaImages = document.querySelectorAll('.images-area img');
// Images Area First Image
let imagesAreaFirstImage = document.querySelector('.images-area .firstImage');

// Previous And Next Buttons
let previousBtn = document.querySelector('.previous-btn');
let nextBtn = document.querySelector('.next-btn');

// Pagination Area
let paginationArea = document.querySelector('.pagination-area');

// Current Image Count
let currentImageCount = 1;

// Slider Controler Function
let sliderController;
// Create Pagination Spans Function
let createPaginationSpans;

// Every Click On Buttons
previousBtn.addEventListener('click', previousImage);
nextBtn.addEventListener('click', nextImage);

// Previous Image Function
function previousImage() {
  // If The currentImageCount Is 1
  if (currentImageCount === 1) {
    return false;
  } else {
    // Else
    // Minus One From currentImageCount
    currentImageCount--;
    // Call Function sliderController();
    sliderController();
  }
}

// Next Image Function
function nextImage() {
  // If The currentImageCount Is imagesAreaImages.length
  if (currentImageCount === imagesAreaImages.length) {
    return false;
  } else {
    // Else
    // Plus One To currentImageCount
    currentImageCount++;
    // Call Function sliderController();
    sliderController();
  }
}

// Create Pagination Spans [Circls] Function
(function createPaginationSpans() {
  // Loop On All The Images Slider
  for (var i = 0; i < imagesAreaImages.length; i++) {
    // Create Span
    let paginationSpan = document.createElement('span');
    // Append The Span
    paginationArea.appendChild(paginationSpan);
  }
})();

// Slider Controler Function
(sliderController = function () {
  // Get All The pagination Spans
  let paginationCircls = document.querySelectorAll('.pagination-area span');

  // Call Remore All Active Class Function
  removeAllActive(paginationCircls);

  // Call Remore Active Button Function
  activeButton();

  // The currentImageCount Minus One
  let currentImageMinusOne = currentImageCount - 1;

  // Set Active Class On Current Pagination
  paginationCircls[currentImageMinusOne].classList.add('active');

  // Move The images Area First Image
  imagesAreaFirstImage.style.marginLeft = `-${600 * currentImageMinusOne}px`;
  console.log(600 * currentImageMinusOne);
})();

// Remove All Active Class Function
function removeAllActive(targetElement) {
  for (var i = 0; i < targetElement.length; i++) {
    targetElement[i].classList.remove('active');
  }
}

// Check Active Button Function
function activeButton() {
  // If The Current Image Count Equle 1
  currentImageCount === 1
    ? // Hide The Previous Button
      previousBtn.classList.add('disabled')
    : // Else: Show The Previous Button
      previousBtn.classList.remove('disabled');

  // If The Current Image Count Equle imagesAreaImages.length
  currentImageCount === imagesAreaImages.length
    ? // Hide The Next Button
      nextBtn.classList.add('disabled')
    : // Else: Show The Next Button
      nextBtn.classList.remove('disabled');
}

// Move Slider Image Every 3 Second
setInterval(() => {
  // If The Current Image Count Not Equle imagesAreaImages.length
  if (currentImageCount != imagesAreaImages.length) {
    // Plus One
    currentImageCount++;
    // Call Function sliderController();
    sliderController();
  } else {
    // else
    // Make currentImageCount Equle 1
    currentImageCount = 1;
    // Call Function sliderController();
    sliderController();
  }
}, 3000);

// :)
