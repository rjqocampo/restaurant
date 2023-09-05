export default function showMenu() {
  const content = document.querySelector('#content');
  
  const div = document.createElement('div');
  div.classList.add('menu');
  content.appendChild(div);

  const h2 = document.createElement('h2');
  h2.textContent = '日本食';
  div.appendChild(h2);

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
  createDescriptionDefinition('steamed young soybeans with sea salt', '.appetizers-list');
  createDescriptionTitle('agedashi tofu', '.appetizers-list');
  createDescriptionDefinition('deep-fried tofu served in a dashi-based broth with grated daikon, ginger, and bonito flakes', '.appetizers-list');
  createDescriptionTitle('goma ae', '.appetizers-list');
  createDescriptionDefinition('blanched spinach or green beans dressed in sesame sauce', '.appetizers-list');

  createCategory('main');
  createDescriptionList('main');
  createDescriptionTitle('honkaku kaiseki', '.main-list');
  createDescriptionDefinition('multi-course japanese meal that emphasizes seasonality, balance and time-honored traditions', '.main-list');
  createDescriptionTitle('neo kaiseki', '.main-list');
  createDescriptionDefinition('multi-course japanese meal that emphasizes creativity and innovation', '.main-list');
  createDescriptionTitle('omakase', '.main-list');
  createDescriptionDefinition('multi-course japanese meal curated by the chef', '.main-list');

  createCategory('desserts');
  createDescriptionList('desserts');
  createDescriptionTitle('warabimochi', '.desserts-list');
  createDescriptionDefinition('soft dessert made from bracken starch, served with kinako and brown sugar syrup', '.desserts-list');
  createDescriptionTitle('kuzu manju', '.desserts-list');
  createDescriptionDefinition('delicate steamed buns filled with a sweet kuzu paste, served with a dusting of kinako', '.desserts-list');

  createCategory('beverages');
  createDescriptionList('beverages');
  createDescriptionTitle('sencha', '.beverages-list');
  createDescriptionDefinition('classic japanese young tea leaves that are steamed, rolled, and then dried', '.beverages-list');
  createDescriptionTitle('genmaicha', '.beverages-list');
  createDescriptionDefinition('traditional green tea leaves with toasted brown rice', '.beverages-list');
}