export default function showContact() {
  const content = document.querySelector('#content');
  
  const div = document.createElement('div');
  div.classList.add('contact')
  content.appendChild(div);

  const sectionForm = document.createElement('section');
  sectionForm.classList.add('form');
  div.appendChild(sectionForm);

  const divForm1 = document.createElement('div');
  sectionForm.appendChild(divForm1);

  const h3 = document.createElement('h3');
  h3.textContent = 'Make a reservation';
  divForm1.appendChild(h3);
  
  const p = document.createElement('p');
  p.textContent = 'If you have any questions, require further assistance, or would like to inquire regarding private events and special occasions, please feel free to contact us.';
  divForm1.appendChild(p);

  const divForm2 = document.createElement('div');
  sectionForm.append(divForm2);

  const form = document.createElement('form');
  divForm2.appendChild(form);

  const inputEmail = document.createElement('input')
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('placeholder', 'example@gmail.com')
  inputEmail.required = true;
  form.appendChild(inputEmail);

  const divForm3 = document.createElement('div');
  form.appendChild(divForm3);

  const inputGuest = document.createElement('input');
  inputGuest.setAttribute('type', 'number');
  inputGuest.setAttribute('min', '2');
  inputGuest.setAttribute('max', '6');
  inputGuest.setAttribute('placeholder', '6 guests');
  inputGuest.required = true;
  divForm3.appendChild(inputGuest);

  const inputDate = document.createElement('input');
  inputDate.setAttribute('type', 'date');
  inputDate.required = true;
  divForm3.appendChild(inputDate);

  const buttonSubmit = document.createElement('button');
  buttonSubmit.setAttribute('type', 'button');
  buttonSubmit.textContent = 'RESERVE YOUR TABLE'
  form.appendChild(buttonSubmit);
}