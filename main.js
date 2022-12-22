
const cover_container = 

document.querySelector('.cover_container');

const input_username = 

document.getElementById('input_username')

const input_password = 

document.getElementById('input_password')

const input_re_password = 

document.getElementById('input_re_password')

const password_back_input = 

document.querySelector('#password_back_input')

const forgot_password_btn =

document.querySelector('#forgot_password_btn')

const login_btn_new = 

document.querySelector('#login_btn_new')

const enter_new_password_input = 

document.querySelector('#enter_new_password_input')

const backup_password_input = 

document.querySelector('#backup_password_input')

const cancel_change = 

document.querySelector('#cancel_change')

cancel_change.style.display = 'none'

enter_new_password_input.style.display = 'none'

backup_password_input.style.display = 'none'

login_btn_new.style.display = 'none'

const feedback_message = 

document.getElementById('feedback_message')

const feedback_user = 

document.getElementById('feedback_user')

const sign_up_btn = 

document.getElementById('sign_up_btn')

const login_account = 

document.querySelector('.login_account')

const create_account =

document.querySelector('.create_account')

const login_btn = 

document.getElementById('login_btn')

const login_input = 

document.getElementById('login_input')

const greeting = 

document.getElementById('greeting')

function detectNewUser()

{

  if (JSON.parse(localStorage.getItem('username'))=== null &&  JSON.parse(localStorage.getItem('user_sign_password')) === null) {

    login_account.classList.add('removed')

  } else {

    greeting.innerHTML = `Welcome, ${JSON.parse(localStorage.getItem('username'))}`

   login_account.classList.remove('removed')

   create_account.classList.add('removed')

  }

}

detectNewUser()

function saveUsername(username,password, backup_password)

{

   localStorage.setItem('username',JSON.stringify(username))

  localStorage.setItem('user_sign_password',JSON.stringify(password))

  localStorage.setItem('backup_password',JSON.stringify(backup_password))

}

function savePassword()

{

  if (input_re_password.value !== input_password.value) {

    feedback_message.innerText = 'Passwords must be the same'

  }else if (input_username.value == '' || input_username.value == ' ' || input_password.value == '' || input_password.value == ' ') {

    feedback_message.innerText = 'username and password are required'

  }

   else if (input_password.value.length < 5) {

    feedback_message.innerText = 'Passwords to short'

  }else if(password_back_input.value == '' || password_back_input.value == ' ' || password_back_input.value.length == 0) {

    alert('Password backup is required, you will need it when you forget your login info to change your password')

  }

  else{

  saveUsername(input_username.value.trim().toLowerCase() ,input_re_password.value.trim().toLowerCase(),password_back_input.value.trim().toLowerCase())

   feedback_message.innerHTML = `

   Creating account for ${input_username.value.trim()}...

   `

    setTimeout(()=>{

    //cover_container.classList.add('disappear')

   create_account.classList.add('removed')

    login_account.classList.remove('removed')

     greeting.innerHTML = `Welcome, ${JSON.parse(localStorage.getItem('username'))}`

     fun()

    },2000)

  }

  

}

sign_up_btn.onclick = savePassword

function checkUserLogin()

{

  if (login_input.value.trim().toLowerCase() !== JSON.parse(localStorage.getItem('user_sign_password'))) {

    feedback_user.innerText = 'Incorrect password'

    login_input.value = ''

  } else {

    feedback_user.innerText = `Login in....`

    setTimeout(()=>{

      cover_container.classList.add('disappear')

    },2000)

  }

}

login_btn.onclick = checkUserLogin

forgot_password_btn.addEventListener('click',function(){

  login_input.style.display = 'none'

  forgot_password_btn.style.display ='none'

  login_btn.style.display = 'none'

  

enter_new_password_input.style.display = 'block'

backup_password_input.style.display = 'block'

cancel_change.style.display = 'block'

login_btn_new.style.display = 'block'

})

function checkBackup()

{

  if (backup_password_input.value.trim().toLowerCase() !== JSON.parse(localStorage.getItem('backup_password'))) {

    alert('incorrect backup password');

  }else if (enter_new_password_input.value == '' || enter_new_password_input.value == ' '){

   alert('You must enter a new password')

    return;

  }else {

    let getOldPassword = JSON.parse(localStorage.getItem('user_sign_password'))

    getOldPassword.replace(getOldPassword, enter_new_password_input.value.trim().toLowerCase())

  localStorage.setItem('user_sign_password', JSON.stringify(enter_new_password_input.value.trim().toLowerCase()))

  feedback_user.innerText = `Login in....`

    setTimeout(()=>{

      cover_container.classList.add('disappear')

    },2000)

  

  }

  

}

login_btn_new.onclick = checkBackup

cancel_change.addEventListener('click',function(){

  

enter_new_password_input.style.display = 'none'

backup_password_input.style.display = 'none'

cancel_change.style.display = 'none'

login_btn_new.style.display = 'none'

  login_input.style.display = 'block'

  forgot_password_btn.style.display ='block'

  login_btn.style.display = 'block'

})

