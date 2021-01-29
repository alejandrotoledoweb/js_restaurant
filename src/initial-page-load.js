function createBtn(id, text) {
  const btn = document.createElement('button');
  btn.setAttribute('id', id);
  const span = document.createElement('span');
  span.textContent = text;
  btn.appendChild(span);
  btn.classList.add('tab');
  return btn;
}
function createNav(id) {
  const nav = document.createElement('nav');
  nav.setAttribute('id', id);
  nav.className = 'nav nav-tabs justify-content-center font-weight-bold';

  const homeBtn = createBtn('home', 'HOME');
  homeBtn.className = 'nav-link active nav-item';
  const menuBtn = createBtn('menu', 'MENU');
  menuBtn.className = 'nav-link active nav-item';
  const contactBtn = createBtn('contact', 'CONTACT');
  contactBtn.className = 'nav-link active nav-item';

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);
  return nav;
}
function createMain(id) {
  const main = document.createElement('main');
  main.setAttribute('id', id);
  return main;
}

function loadPage() {
  const content = document.getElementById('content');
  // header
  const header = document.createElement('h1');
  header.textContent = 'Restaurant JS';
  header.className = 'text-center pl-5 pt-5 pr-5 pr-5 pb-5 font-weight-bold h1p';
  content.appendChild(header);
  // navbar
  const nav = createNav('nav');
  content.appendChild(nav);
  // tab-content
  const tabContent = createMain('tab-content');
  tabContent.className = 'container d-flex flex-column justify-content-center w-75';
  content.appendChild(tabContent);
}

export default loadPage;
