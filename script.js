const emailInput = document.querySelector('input[name="email"]');
const notifyBtn = document.querySelector('.notify__btn');

let isInputValid = false;

const resetElm = (elm) => {
  elm.parentElement.classList.remove('error');
}

const invalidateElm = (elm) => {
  elm.parentElement.classList.add('error')
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
  
}

const validateInput = () => {
  isInputValid = true;
  resetElm(emailInput);
 
  if(!validateEmail(emailInput.value)) {
    isInputValid = false;
    invalidateElm(emailInput);
  }
}

notifyBtn.addEventListener('click', (e) => {
  console.log('here')
  validateInput();

  if (isInputValid) {
    
    alert('Email sent! Please check your email.');
    emailInput.value = '';
  }
})
  
