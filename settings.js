
const open_nav = 

document.getElementById('open_nav')

const close_nav = 

document.getElementById('close_nav')

const nav_bar = 

document.querySelector('.nav_bar_container')

const change_username__ = 

document.querySelector('.change_username__')

const change_password_btn = 

document.getElementById('change_password_btn')

const change_username_input = 

document.getElementById('change_username_input')

const btn_lock =

document.querySelector('.btn_lock')

const change_password__ = 

document.querySelector('.change_password__')

const changeUPassword = 

document.getElementById('changeUPassword')

const changeUsername = 

document.getElementById('changeUsername')

const Gene_pass = 

document.getElementById('Gene_pass')

const generate_password__  

= document.querySelector('.generate_password__')

const passwords_generators_input = 

document.getElementById('passwords_generators_input')

const relay_btn = 

document.querySelector('#relay_btn')

const copy_btn = 

document.querySelector('#copy_btn')

const changePassword_btn = 

document.getElementById('changePassword_btn')

const OldPasswordInput = 

document.querySelector('#OldPasswordInput')

const NewPasswordInput = 

document.querySelector('#NewPasswordInput')

const ReNewPasswordInput = 

document.querySelector('#ReNewPasswordInput')

const del_account_input = 

document.querySelector('#del_account_input')

const del_account_btn = 

document.querySelector('#del_account_btn')

 const cover =

 document.querySelector('.cover_container')

const delete_account = 

document.getElementById('delete_account__')

const delete_account__ = 

document.querySelector('.delete_account__')

btn_lock.addEventListener('click',function(){

  window.location.reload(true)

  setTimeout(()=>{

    cover.classList.remove('disappear')

  },1000)

})

open_nav.addEventListener('click',function(){

  nav_bar.classList.add('active')

})

close_nav.addEventListener('click',function(){

    nav_bar.classList.remove('active')

  delete_account__.classList.remove('active')

 generate_password__.classList.remove('active')

  change_username__.classList.remove('active')

  change_password__.classList.remove('active')

})

changeUsername.addEventListener('click',function(){

  change_username__.classList.toggle('active')

})

changeUPassword.addEventListener('click',function(){

  change_password__.classList.toggle('active')

})

Gene_pass.addEventListener('click',function(){

  generate_password__.classList.toggle('active')

})

delete_account.addEventListener('click',function(){

  delete_account__.classList.toggle('active')

})

function changeUserNameFun(new_name)

{

  let getOldName = JSON.parse(localStorage.getItem('username'))

  

  let askAccess = prompt(' Confirme it\'s you enter your password to change your username')

 if (askAccess.trim().toLowerCase() === JSON.parse(localStorage.getItem('user_sign_password'))) {

   getOldName.replace(getOldName,new_name);

  localStorage.setItem('username', JSON.stringify(new_name));

  alert('Your username had been changed successfully')

  return;

  

 } else {

   alert('Incorrect password')

   return ;

 }

}

function requireAccess()

{

  if (change_username_input.value == '' || change_username_input.value == ' ' || change_username_input.value.length == 0) {

    alert('name cannot be empty');

    return;

  } else {

  changeUserNameFun(change_username_input.value.trim().toLowerCase())

    nav_bar.classList.remove('active');

    change_username_input.value == ''

  delete_account__.classList.remove('active')

 generate_password__.classList.remove('active')

  change_username__.classList.remove('active')

  change_password__.classList.remove('active')

      fun()

    

  }

}

change_password_btn.onclick = requireAccess

function changeUserPasswordFun(new_password)

{

  let getOldPassword = 

  JSON.parse(localStorage.getItem('user_sign_password'))

  

  

  if (OldPasswordInput.value.trim().toLowerCase()!== getOldPassword) {

    alert('Incorrect current password')

  } else if(NewPasswordInput.value !== ReNewPasswordInput.value) {

    alert('Passwords must be the same')

  }

  else {

    

  getOldPassword.replace(getOldPassword,new_password.trim().toLowerCase())

    

    localStorage.setItem('user_sign_password', JSON.stringify(new_password));

        nav_bar.classList.remove('active');

    change_password__.classList.remove('active')

    alert('Your password had been changed successfully')

  }

 

}

function checkOldPasswod()

{

changeUserPasswordFun(ReNewPasswordInput.value)

}

changePassword_btn.onclick = checkOldPasswod

del_account_btn.addEventListener('click',function(){

  

  if (del_account_input.value.trim().toLowerCase() === JSON.parse(localStorage.getItem('user_sign_password'))) {

    if (confirm('Deleting your account will also delete all of your saved data')) {

      localStorage.removeItem('username')

      localStorage.removeItem('user_sign_password')

      localStorage.removeItem('saved_data')

      window.location.reload(true)

    } else {

      return;

    }

  }else {

    alert('Incorrect password')

  }

  

  

  

  

})

  // passwords generator 

  

  

  

 function generatePassword() {

  // Set up the characters that can be used in the password

  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&*+-/:;<=>?@[]^_`{|}~";

  // Set the length of the password

  const passwordLength = 8;

  // Initialize the password variable

  let password = "";

  // Generate a random password by selecting characters from the character set

  for (let i = 0; i < passwordLength; i++) {

    password += characters.charAt(Math.floor(Math.random() * characters.length));

  }

  // Return the password

   passwords_generators_input.value = password

 

  return password

}

generatePassword()

relay_btn.onclick = generatePassword

 function copyToClipboard() {

  // Get the text field

  const passwords_generators_input = 

document.getElementById('passwords_generators_input')

  // Select the text field

  passwords_generators_input.select();

  passwords_generators_input.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field

   document.execCommand('copy')

  // Alert the copied text

  alert("Copied the text: " + passwords_generators_input.value);

}

copy_btn.onclick = copyToClipboard

