function createAboutSection() {
  const about = document.createElement('section');
  about.classList.add('section');
  about.className = ' mt-5 mb-5 w-75 text-center mx-auto bg-light';

  const title = document.createElement('h2');
  title.classList.add('section-title');
  title.textContent = 'Taste our best dishes';
  title.className = 'text-left text-info';

  about.appendChild(title);

  const para = document.createElement('p');
  para.classList.add('section-description');
  para.textContent = 'The best from our cuisine for your taste and enjoy!, Please order want you want as fast as possible!.';

  about.appendChild(para);
  return about;
}

function setBtnActive(id) {
  const activeBtn = document.querySelector('.tab.active');
  if (activeBtn) activeBtn.classList.remove('active');

  const homeBtn = document.getElementById(id);
  homeBtn.classList.add('active');
}

const loadHome = () => {
  const content = document.getElementById('tab-content');
  content.classList.add('d-flex');
  content.classList.remove('grid-lay');

  content.textContent = '';

  const aboutSection = createAboutSection();

  setBtnActive('home');

  content.appendChild(aboutSection);
}

export default loadHome;
