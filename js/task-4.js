const formElem = document.querySelector('.login-form');

formElem.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const userEmail = formElem.elements.email.value.trim();
  const userPassword = formElem.elements.password.value.trim();

  if (!userEmail || !userPassword) {
    alert('All form fields must be filled in');
    return;
  }

  const objData = {
    email: userEmail,
    password: userPassword,
  };

  console.log(objData);

  formElem.reset();
}
