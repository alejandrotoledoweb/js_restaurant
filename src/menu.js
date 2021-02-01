const setBtnActive = (id) => {
  const activeBtn = document.querySelector('.tab.active');
  if (activeBtn) activeBtn.classList.remove('active');

  const homeBtn = document.getElementById(id);
  homeBtn.classList.add('active');
};

const createFood = (src, text, price, alt) => {
  const food = document.createElement('div');
  food.classList.add('food');
  food.className = 'mt-5 d-flex flex-column pr-5 justify-content-center mx-auto';
  const img = document.createElement('img');
  img.className = 'img-fluid rounded img-fit w-50 mx-auto';
  img.setAttribute('src', src);
  img.setAttribute('alt', alt);

  const description = document.createElement('div');
  description.className = 'text-center mx-auto pt-3';
  description.classList.add('description');

  const foodName = document.createElement('h3');
  foodName.className = '';
  foodName.textContent = text;

  const foodPrice = document.createElement('h2');
  foodPrice.className = '';
  foodPrice.textContent = price;

  description.appendChild(foodName);
  description.appendChild(foodPrice);

  food.appendChild(img);
  food.appendChild(description);
  return food;
};

const loadMenu = () => {
  const content = document.getElementById('tab-content');
  content.classList.add('d-flex');

  content.textContent = '';
  setBtnActive('menu');

  const foods = [
    createFood(
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/mexican-chicken-burger_1-b5cca6f.jpg?quality=90&resize=440%2C400',
      'Mega Hamburguer',
      '10.00 $',
      'it comes with french fries',
    ),
    createFood(
      'https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/38/1474395998-ghk-0216-comfortfoodcover-meatballs.jpg?crop=0.856xw:0.571xh;0.0224xw,0.296xh&resize=640:*',
      'Spaguetti with meat and cheese',
      '9.00 $',
      'Speciality of the house',
    ),
    createFood(
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/10/3/0/FNM_110117-Insert-Opener-2_s4x3.jpg.rend.hgtvcom.616.462.suffix/1507047894789.jpeg',
      'Family Combo for Christmas',
      '20.00 $',
      'Rice with chicken and vegetables',
    ),
    createFood(
      'https://www.baconismagic.ca/wp-content/uploads/2019/05/antigua-food-stewed-chicken.jpg',
      'Curry chicke with rice and salad',
      '5.00 $',
      '0ne person menu',
    ),
    createFood(
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-lasagna-bolognese-vertical-1543346980.png',
      'Lasagna of cow meat',
      '7.00 $',
      'You can have it with salad of french fries',
    ),
  ];

  foods.forEach((food) => {
    content.appendChild(food);
  });
};

export default loadMenu;
