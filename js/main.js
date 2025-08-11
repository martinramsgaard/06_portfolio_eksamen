const nav = document.querySelector('.nav-bar');
let lastScrollY = window.scrollY;
const navHeight = nav.offsetHeight;
let ticking = false;

function onScroll() {
  const currentScrollY = window.scrollY;

  const navVisible = currentScrollY < navHeight;

  if (navVisible) {
    nav.classList.remove('hidden');
  } else {
    if (currentScrollY > lastScrollY) {
      nav.classList.add('hidden');
    } else {
      nav.classList.remove('hidden');
    }
  }

  lastScrollY = currentScrollY;
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(onScroll);
    ticking = true;
  }
});

if (!window.location.pathname.endsWith('index.html') && window.location.pathname !== '/') {
    document.body.classList.add('not-index');
  }
  