window.addEventListener('scroll', () => {
  
  currentSection();
  autoChangeColorMenuAndSizeLogo();
  changeLogoSize();
  addShadowMenu();
  
});

function activeMenuLink(index) {
  const links = document.querySelectorAll('.menu a');  
  links.forEach(link => link.classList.remove('active'));
  links[index].classList.add('active');
}

function currentSection() {
  const active = document.querySelectorAll('section[id]');
  const header = document.querySelector('header.navigation');
  active.forEach((section, index) => {
    if(window.scrollY >= section.offsetTop - header.offsetHeight) {
      activeMenuLink(index);
    }
  });
}

function autoChangeColorMenuAndSizeLogo() {
  const r = document.querySelector(':root');
  if (window.scrollY > 0) {
    r.style.setProperty('--margin-menu', '0');
    r.style.setProperty('--transparent-to-white', `rgba(255, 255, 255, ${window.scrollY / 5}%)`);
  } else {
    r.style.setProperty('--margin-menu', '2rem');
  }
}

function changeLogoSize() {
  const logo = document.querySelector('.logo');
  window.scrollY > 300 ? logo.classList.add('small-logo') : logo.classList.remove('small-logo');
}

function addShadowMenu() {
  const header = document.querySelector('header.navigation');
  window.scrollY > 300 ? header.classList.add('shadow') : header.classList.remove('shadow');

}