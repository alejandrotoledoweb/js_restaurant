function setBtnActive(id) {
  const activeBtn = document.querySelector('.tab.active');
  if (activeBtn) activeBtn.classList.remove('active');

  const homeBtn = document.getElementById(id);
  homeBtn.classList.add('active');
}
function createSection(name, data) {
  const section = document.createElement('section');
  section.className = 'mx-auto text-center bg-light w-50 mt-4';
  section.classList.add('section');

  const title = document.createElement('h2');
  title.className = 'text-success';
  title.classList.add('section-title');
  title.textContent = name;
  section.appendChild(title);

  data.forEach((d) => {
    const para = document.createElement('p');
    para.classList.add('section-description');
    para.textContent = d;
    section.appendChild(para);
  });

  return section;
}

function loadContact() {
  const content = document.getElementById('tab-content');
  content.classList.add('d-flex');
  content.textContent = '';
  setBtnActive('contact');

  const phoneSection = createSection('Call us:', [
    '001 4587-8754-987',
    '001 9875-8874-887',
  ]);

  const addressSection = createSection('Where to find us', ['First Street, 192733 Blvr Ocean.']);

  content.appendChild(phoneSection);
  content.appendChild(addressSection);
}

export default loadContact;
