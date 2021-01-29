import loadPage from './initial-page-load';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

const addNavEvents = () => {
  const homeBtn = document.getElementById('home');
  const menuBtn = document.getElementById('menu');
  const contactBtn = document.getElementById('contact');

  homeBtn.addEventListener('click', loadHome);
  menuBtn.addEventListener('click', loadMenu);
  contactBtn.addEventListener('click', loadContact);
};

const init = () => {
  loadPage();
  loadHome();
  addNavEvents();
}

init();
