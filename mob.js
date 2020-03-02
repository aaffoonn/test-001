let navSpan = document.querySelector('.header_nav_mob');
let bodyMob = document.querySelector('body');
let popup = document.querySelector('.popup');
navSpan.onclick = () => {
  popup.classList.toggle('popup_down');
  bodyMob.classList.toggle('noscroll');
  setTimeout(() => { navSpan.classList.toggle('header_nav_mob_active') }, 300);
}