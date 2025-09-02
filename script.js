AOS.init({
  duration: 1000,
  once: true,
});

const elementToShrink = document.querySelector('.profile-sticky-wrapper');

function handleScroll() {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
    elementToShrink.classList.add('shrunk');
  } else {
    elementToShrink.classList.remove('shrunk');
  }
}

window.addEventListener('scroll', handleScroll);
