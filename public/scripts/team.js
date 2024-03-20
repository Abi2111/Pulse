const menu_btn = document.querySelector('.menu-btn');
const nav_menu = document.querySelector('.nav_menu');
const loader_container = document.querySelector('.loader_container');

window.addEventListener('load', () => {
  setTimeout(() => {
    loader_container.classList.add('active');
  }, 1000);
});

menu_btn.addEventListener('click', () => {
  menu_btn.classList.toggle('open');
  nav_menu.classList.toggle('mobile');
});

gsap.registerPlugin(ScrollTrigger);
document.querySelectorAll('.wrapper').forEach(e => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: e,
        start: 'top 70%',
        end: 'bottom 0%',
      },
    })
    .fromTo(
      e,
      { x: -250, opacity: 0 },
      { x: 0, opacity: 1, duration: 2.5, ease: 'power4.out', stagger: 4 }
    );
});

const imgTargets = document.querySelectorAll('img[data-src]');
console.log(imgTargets);

const loadImg = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', () => {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const observer = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0.3,
});

imgTargets.forEach(img => observer.observe(img));

// Array.from(document.querySelectorAll('.wrapper')).forEach(e => {
//   const imgs = Array.from(e.querySelectorAll('img'));
//   new hoverEffect({
//     parent: e,
//     intensity: 0.3,
//     image1: imgs[0].getAttribute('src'),
//     image2: imgs[1].getAttribute('src'),
//     displacementImage: './../displacement/displacement.png',
//     imagesRatio: 1.5,
//   });
// });
