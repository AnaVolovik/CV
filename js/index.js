// MENU BURGER

const overlay = document.getElementById('overlay')
const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const mediaMobile = 'max-width: var(--md3)';
const menuItem = document.querySelectorAll('.menu__item');

const isActive = function() {
  overlay.classList.toggle('_active');
  menuIcon.classList.toggle('_active');
  menuBody.classList.toggle('_active');
}

menuIcon.onclick = isActive;

if ( mediaMobile ) {
  for ( let i = 0; i < menuItem.length; i++) {
    menuItem[i].onclick = isActive;
  }
}

// SCROLL

function scrollToTarget(event, targetId) {
  event.preventDefault();
  const target = document.getElementById(targetId);
  const offset = 50;
  const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: targetPosition, behavior: 'smooth' });
}