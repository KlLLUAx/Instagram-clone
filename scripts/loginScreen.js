const loginInput = document.querySelector('.js-login-input');
const passwordInput = document.querySelector('.js-password-input');
const loginButton = document.querySelector('.js-login-button');



//events 

window.onload = ()=>{
  if(!(loginInput.value && passwordInput.value)){
    loginButton.classList.add('login-button-locked')}
}

//move placeholder up when typing
loginInput.addEventListener('input',()=>{
  if(loginInput.value){
    document.querySelector('.js-login').classList.add('upper-placeholder-on')
    return
  }
  document.querySelector('.js-login').classList.remove('upper-placeholder-on');
})
//move placeholder upp when typing
passwordInput.addEventListener('input',()=>{
  if(passwordInput.value){
    document.querySelector('.js-password').classList.add('upper-placeholder-on');
    return
  }
  document.querySelector('.js-password').classList.remove('upper-placeholder-on');
})

//valid if form is filled
passwordInput.addEventListener('input',()=>{
  let password = passwordInput.value;
  let login = loginInput.value;
  if(isFormValid(login,password)){
    loginButton.classList.remove('login-button-locked');
    return
  }
  loginButton.classList.add('login-button-locked');
})

loginInput.addEventListener('input',()=>{
  let password = passwordInput.value;
  let login = loginInput.value;
  if(isFormValid(login,password)){
    loginButton.classList.remove('login-button-locked');
    return
  }
  loginButton.classList.add('login-button-locked');
})


loginButton.addEventListener('click',()=>{
  alert('hellow')
})

//functions 
function isFormValid(login,password){
  let isValid = false;
  if(!(login && password) && (password.length < 6)){
    return isValid;
  }
  return isValid = true;
}
