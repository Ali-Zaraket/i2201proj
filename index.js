let res_nav = document.querySelector('.responsive-navbar');
let nav_item = document.querySelector('.responsive-nav-item');
const scrollContainer = document.querySelector(".hs");

nav_item.addEventListener('mouseover', () => {
  res_nav.style.display = 'flex';
})
res_nav.addEventListener('mouseover', () => {
  res_nav.style.display = 'flex';
})
res_nav.addEventListener('mouseout', () => {
  res_nav.style.display = 'none';
})

scrollContainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollContainer.scrollLeft += e.deltaY;
});


const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -350px 0px"
}

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    appearOnScroll.unobserve(entry.target);
  })
}, appearOptions)

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});
faders.forEach(fader => {
  appearOnScroll.observe(fader);
});