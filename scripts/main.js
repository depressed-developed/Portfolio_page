const toogleButton = document.getElementById('toogle');
const links = document.querySelectorAll('.project-link');


links.forEach(link => link.classList.remove('test'))

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(link => link.classList.add('test'));
      return;
    }

    links.forEach(link => link.classList.remove('test'));
    links.forEach(link => link.opacity = '0');
  });
});

observer.observe(document.querySelector('.projects-list'));




links.forEach(link => link.addEventListener('animationend', () => {
    link.style.cursor = 'pointer'
}))