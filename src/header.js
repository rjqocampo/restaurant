export default function showHeader() {
  const content = document.querySelector('#content');

  const header = document.createElement('header');
  content.appendChild(header);

  const h1 = document.createElement('h1');
  h1.textContent = 'saori.';
  header.appendChild(h1);

  const ul = document.createElement('ul');
  header.appendChild(ul);

  const liAbout = document.createElement('li');
  liAbout.classList.add('nav-about');
  ul.appendChild(liAbout);

  const buttonAbout = document.createElement('button');
  buttonAbout.textContent = 'ABOUT';
  buttonAbout.setAttribute('type', 'button');
  liAbout.appendChild(buttonAbout);

  const liMenu = document.createElement('li');
  liMenu.classList.add('nav-menu');
  ul.appendChild(liMenu);

  const buttonMenu = document.createElement('button');
  buttonMenu.textContent = 'MENU';
  buttonAbout.setAttribute('type', 'button');
  liMenu.appendChild(buttonMenu);

  const liBook = document.createElement('li');
  liBook.classList.add('nav-book');
  ul.appendChild(liBook);

  const buttonBook = document.createElement('button');
  buttonBook.textContent = 'CONTACT';
  buttonAbout.setAttribute('type', 'button');
  liBook.appendChild(buttonBook);
}