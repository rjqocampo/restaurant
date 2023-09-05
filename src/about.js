import Image1 from "./img/1.jpg";
import Image2 from "./img/2.jpg";
import Image3 from "./img/3.jpg";
import Image4 from "./img/4.jpg";
import showMenu from "./menu";
import {clearPage, scrollToTop} from "./index";

export default function showAbout() {
  const content = document.querySelector('#content');

  const div = document.createElement('div');
  content.appendChild(div);

  // Hero Section
  const sectionHero = document.createElement('section');
  sectionHero.classList.add('hero')
  div.appendChild(sectionHero);

  const divHero = document.createElement('div');
  sectionHero.appendChild(divHero);

  const h1 = document.createElement('h1');
  h1.textContent = 'SAORI';
  divHero.appendChild(h1);

  const h2 = document.createElement('h2');
  h2.textContent = 'モダンな日本料理';
  divHero.appendChild(h2);

  const vl = document.createElement('div');
  vl.classList.add('vertical-line');
  divHero.appendChild(vl);

  // Cuisine Section
  const sectionCuisine = document.createElement('section');
  sectionCuisine.classList.add('cuisine');
  div.appendChild(sectionCuisine);

  const h3 = document.createElement('h3');
  h3.textContent = 'Our cuisine';
  sectionCuisine.appendChild(h3);

  const h4 = document.createElement('h4');
  h4.textContent = 'We celebrate the timeless flavors of Japanese cuisine with modern techniques';
  sectionCuisine.appendChild(h4);

  const divCuisine = document.createElement('div');
  sectionCuisine.appendChild(divCuisine);

  const buttonCuisine = document.createElement('button');
  buttonCuisine.textContent = 'SEE MENU';
  buttonCuisine.setAttribute('type', 'button');
  buttonCuisine.classList.add('button-menu');
  divCuisine.appendChild(buttonCuisine);

  const h5 = document.createElement('h5');
  h5.textContent = '日本食';
  sectionCuisine.appendChild(h5);

  const image1 = new Image();
  image1.src = Image1;
  image1.classList.add('image-1');
  sectionCuisine.appendChild(image1);

  const image2 = new Image();
  image2.src = Image2;
  image2.classList.add('image-2');
  sectionCuisine.appendChild(image2);

  const image3 = new Image();
  image3.src = Image3;
  image3.classList.add('image-3');
  sectionCuisine.appendChild(image3);

  const image4 = new Image();
  image4.src = Image4;
  image4.classList.add('image-4');
  sectionCuisine.appendChild(image4);

  // Footer Section
  const footer = document.createElement('footer');
  div.appendChild(footer);

  const hl = document.createElement('div');
  hl.classList.add('horizontal-line');
  footer.appendChild(hl);

  const buttonMenu = document.createElement('button');
  buttonMenu.textContent = 'SEE MENU';
  buttonMenu.setAttribute('type', 'button');
  buttonMenu.classList.add('button-menu');
  footer.appendChild(buttonMenu);

  const buttonBook = document.createElement('button');
  buttonBook.textContent = 'BOOK A TABLE'
  buttonBook.setAttribute('type', 'button');
  footer.appendChild(buttonBook);

  const allButtonMenu = document.querySelectorAll('.button-menu');
  allButtonMenu.forEach((button) => {
    button.addEventListener('click', () => {
      scrollToTop();

      setTimeout(() => {
        clearPage();
        showMenu();
      }, 650);
    })
  })
}