export default function showLanding() {
  const content = document.querySelector('#content');

  const div = document.createElement('div');
  content.appendChild(div);

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
}