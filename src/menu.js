export default function showMenu() {
  const content = document.querySelector('#content');
  
  const div = document.createElement('div');
  content.appendChild(div);

  function createCategory(content) {
    const h3 = document.createElement('h3');
    h3.textContent = content;
    h3.classList.add(`${content}-category`);
    div.appendChild(h3);
  } 

  function createDescriptionList(classname) {
    const dl = document.createElement('dl');
    dl.classList.add(`${classname}-list`);
    div.appendChild(dl);
  }

  function createDescriptionTitle(content, parent) {
    const dt = document.createElement('dt');
    const dl = document.querySelector(parent);
    console.log(dl);
    dt.textContent = content;
    dl.appendChild(dt);
  }

  function createDescriptionDefinition(content, parent) {
    const dd = document.createElement('dd');
    const dl = document.querySelector(parent);
    dd.textContent = content;
    dl.appendChild(dd);
  }

  createCategory('appetizers');
  createDescriptionList('appetizers');
  createDescriptionTitle('edamame', '.appetizers-list');
  createDescriptionDefinition('steamed young soybeans sprinkled with sea salt', '.appetizers-list');
  createDescriptionTitle('agedashi tofu', '.appetizers-list');
  createDescriptionDefinition('deep-fried tofu served in a dashi-based broth with grated daikon, ginger, and bonito flakes', '.appetizers-list');
  createDescriptionTitle('goma ae', '.appetizers-list');
  createDescriptionDefinition('blanched spinach or green beans dressed in a creamy sesame sauce', '.appetizers-list');

  createCategory('main');
  createDescriptionList('main');
  createDescriptionTitle('kaiseki omakase', '.main-list');
  createDescriptionDefinition('multi-course japanese meal that emphasizes seasonality and balance', '.main-list');
  createDescriptionTitle('traditional omakase', '.main-list');
  createDescriptionDefinition('traditional mulit-course meal, including sashimi, nigiri sushi, tempura, and other time-honored preparations', '.main-list');

  createCategory('desserts');
  createDescriptionList('desserts');
  createDescriptionTitle('warabimochi', '.desserts-list');
  createDescriptionDefinition('soft dessert made from bracken starch, served with kinako and brown sugar syrup', '.desserts-list');
  createDescriptionTitle('kuzu manju', '.desserts-list');
  createDescriptionDefinition('delicate steamed buns filled with a sweet kuzu paste, served with a dusting of kinako', '.desserts-list');

  createCategory('beverages');
  createDescriptionList('beverages');
  createDescriptionTitle('sencha', '.beverages-list');
  createDescriptionDefinition('classic japanese green tea with a refreshing and grassy flavor', '.beverages-list');
  createDescriptionTitle('genmaicha', '.beverages-list');
  createDescriptionDefinition('green tea blended with roasted brown rice', '.beverages-list');
}