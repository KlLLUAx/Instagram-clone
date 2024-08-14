const loginInput = document.querySelector('.js-login-input');
const passwordInput = document.querySelector('.js-password-input');

loginInput.addEventListener('input',()=>{
  if(loginInput.value){
    document.querySelector('.js-login').classList.add('upper-placeholder-on')
    return
  }
  document.querySelector('.js-login').classList.remove('upper-placeholder-on');
})

passwordInput.addEventListener('input',()=>{
  if(passwordInput.value){
    document.querySelector('.js-password').classList.add('upper-placeholder-on');
    return
  }
  document.querySelector('.js-password').classList.remove('upper-placeholder-on');

})