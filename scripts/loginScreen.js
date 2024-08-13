const loginInput = document.querySelector('.js-login-input');
const passwordInput = document.querySelector('.js-password-input');
loginInput.addEventListener('input',()=>{
  if(loginInput.value){
    document.querySelector('.js-test').classList.add('upper-placeholder-on')
    return
  }
  document.querySelector('.js-test').classList.remove('upper-placeholder-on')

})