
const user_name = 

document.getElementById('user_name')

 const showCreateCard = 

 document.getElementById('showCreateCard')

const create_card_container =

document.querySelector('.create_card_container')

const wrapperCard = 

document.querySelector('.wrapper')

const account_name = 

document.getElementById('account_name')

const account_username = 

document.getElementById('account_username')

const account_password = 

document.getElementById('account_password')

const save_data_btn = 

document.getElementById('save_data_btn')

const data = JSON.parse(localStorage.getItem('saved_data') || '[]')

function fun()

{

  if (data.length == 0) {

    user_name.innerHTML = `No passwords has been saved for, ${JSON.parse(localStorage.getItem('username'))}`

  } else {

    user_name.innerHTML = `Saved passwords for, ${JSON.parse(localStorage.getItem('username'))}`

  }

}

fun()

create_card_container.classList.add('popup')

showCreateCard.addEventListener('click',()=>{

  create_card_container.classList.toggle('popup')

})

function saveData(account_name,account_username_,account_password) 

{

  

var date = new Date();

var hours = date.getHours() % 12 || 12

var isAm = date.getHours() < 12

var minutes = date.getMinutes()

var seconds = date.getSeconds()

var year = date.getFullYear()

var day = date.getDay();

var day_number = date.getDate()

var month = date.getMonth()

var days = 

['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

var months = 

['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct', 'Nov','Dec']

   data.push({

    site : account_name, 

    username : account_username_, 

    password : account_password, 

    date : `Saved on - ${days[day]}, ${months[month]},${day_number} -${year} at ${hours}:${minutes} ${isAm ? 'am' : 'pm'}`

  })

  

  localStorage.setItem('saved_data',JSON.stringify(data))

  

}

function pushData()

{

  if (account_name.value == '' || account_username.value == '' || account_password.value== '') {

   create_card_container.classList.add('popup')

   return;

  } else {

    saveData(account_name.value,account_username.value.trim().toLowerCase() ,account_password.value. trim().toLowerCase())

    showData()

    fun()

    

    account_name.value = ''

    account_username.value = ''

    account_password.value = ''

  }

  create_card_container.classList.add('popup');

}

save_data_btn.onclick = pushData

async function showData() {

  let innerCard = ''

  for (var i = 0; i < data.length; i++) {

    let newCard = `

          <div class="card">

        <div class="cover_card">

          <button class="material-symbols-outlined">

          visibility_off

         </button>

        </div>

        <div class="details">

     <p>Site : <span>${data[i].site}</span></p>  

     <p>Username : <span>${data[i].username}</span></p>

     <p>Password : <span>${data[i].password}</span></p>

        </div>

        <div class="date__">

        <span>

        ${data[i].date}

        </span>

     <span class="material-symbols-outlined delete">

       delete_forever

     </span>

        </div>

    

      </div>

      

    `

    innerCard += newCard

  }

  wrapperCard.innerHTML = innerCard

  

  const hideBtn = 

Array.from(document.querySelectorAll('.card .cover_card')

)

  hideBtn.forEach(hideIcon =>{

  hideIcon.addEventListener('click',function(){

    let requireAccess = prompt('Enter your password')

    if (requireAccess === JSON.parse(localStorage.getItem('user_sign_password'))) {

     hideIcon.classList.add('unhide')

     if (hideIcon.classList.contains('unhide'))

     {

       setTimeout(()=>{

      hideIcon.classList.remove('unhide')

       },3000)

     }

    } else {

      alert('incorrect password')

    }

  })

})

 const deleteIcons = Array.from(document.querySelectorAll('.date__  .delete')

 )

  deleteIcons.forEach(delTrash=>{

   delTrash.addEventListener('click',function (){

     let requestDeleteAccess = prompt('Enter your password to delete it')

if (requestDeleteAccess.trim().toLowerCase() === JSON.parse(localStorage.getItem('user_sign_password')) ) {

  data.splice(deleteIcons.indexOf(this),1);

  document.querySelector('.card').classList.add('removed')

  localStorage.setItem('saved_data',JSON.stringify(data))

} else {

  alert('incorrect password');

  return;

}

  localStorage.setItem('saved_data',JSON.stringify(data))

 

    })

  })

  

}

showData()

