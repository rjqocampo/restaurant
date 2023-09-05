export default function showContact() {
  const content = document.querySelector('#content');
  
  const div = document.createElement('div');
  div.classList.add('contact')
  content.appendChild(div);

  // Form Section
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

  // Details Section
  const sectionDetails = document.createElement('section');
  sectionDetails.classList.add('details')
  div.appendChild(sectionDetails);

  const h4 = document.createElement('h4');
  h4.textContent = '+63 917 800 4219'
  sectionDetails.appendChild(h4);

  const hl = document.createElement('div');
  sectionDetails.appendChild(hl);

  const container = document.createElement('div');
  container.classList.add('container-details');
  sectionDetails.appendChild(container);

  const column1 = document.createElement('div');
  container.appendChild(column1);

  const h5 = document.createElement('h5');
  h5.textContent = 'saori.'
  column1.appendChild(h5);

  const h6 = document.createElement('h6');
  h6.textContent = 'Japanese Sushi Bar'
  column1.appendChild(h6);

  const column2 = document.createElement('div');
  container.appendChild(column2);

  const divDetails1 = document.createElement('div');
  column2.appendChild(divDetails1);

  const weekdays = document.createElement('p');
  weekdays.textContent = 'Monday - Thursday';
  divDetails1.appendChild(weekdays)

  const weekdaysSched = document.createElement('p');
  weekdaysSched.textContent = '4 - 9PM';
  divDetails1.appendChild(weekdaysSched);

  const divDetails2 = document.createElement('div');
  column2.appendChild(divDetails2);

  const weekends = document.createElement('p');
  weekends.textContent = 'Friday - Sunday';
  divDetails2.appendChild(weekends);

  const weekendsSched = document.createElement('p');
  weekendsSched.textContent = '4 - 11PM';
  divDetails2.appendChild(weekendsSched);

  const column3 = document.createElement('div');
  container.appendChild(column3);

  const address = document.createElement('p');
  address.textContent = '5883 Enriquez, Makati, Metro Manila, Philippines'
  column3.appendChild(address);

  const phone = document.createElement('p');
  phone.textContent = '+63 917 800 4219';
  column3.appendChild(phone);

  const email = document.createElement('p');
  email.textContent = 'saorimnl@gmail.com'
  column3.appendChild(email);
}