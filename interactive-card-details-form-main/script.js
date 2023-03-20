'use strict'
const form = document.getElementById('form')
const username = document.getElementById('user-name')
const date = document.getElementById('date')
const cvc = document.getElementById('cvc')
const number = document.getElementById('number')
const errorElement1 = document.querySelector('.error')
const errorElement2 = document.querySelector('.error-number')
const errorElement3 = document.querySelector('.error-date')
const thank = document.querySelector('.thank')
const thankBtn = document.querySelector('.thank-btn')
const numText = document.querySelector('.num')
const nameText = document.querySelector('.nam')

form.addEventListener('submit', function(e){
    let messagesName = [];
    if(username.value === '' || username.value === null){
        messagesName.push('Name is required')
    }
    if(messagesName.length > 0){
        e.preventDefault();
        errorElement1.style.color = 'red'
        errorElement1.style.fontSize = '11px'
        errorElement1.style.fontWeight = '600'
        errorElement1.innerText = messagesName.join('')
    }


    let messagesNumber = [];
    if(number.value.length <= 16){
        messagesNumber.push('Number must not be less than 16')
    }

    if(number.value.length > 17){
        messagesNumber.push('Number must be equal to 16')
    }
    if(messagesNumber.length > 0){
        e.preventDefault();
        errorElement2.style.color = 'red'
        errorElement2.style.fontWeight = '600'
        errorElement2.style.fontSize = '11px'
        errorElement2.innerText = messagesNumber.join('')
    }

    let messageDate = [];
    if( date.value ===''){
        messageDate.push('Date of birth must be completed')
    }

    if(messageDate.length > 0){
        e.preventDefault();
        errorElement3.style.color = 'red'
        errorElement3.style.fontSize = '11px'
        errorElement3.style.fontWeight = '600'
        errorElement3.innerText = messageDate.join('')
    }

    if(username.value !== '' && username.value !== null && number.value !== '' && number.value.length >= 10 ){
        e.preventDefault;
        thank.style.display = 'block'
    }

    nameText.textContent = username.value;
    numText.textContent = number.value;
})


thankBtn.addEventListener('click',function(e){
    thank.style.display = 'none';
    form.reset();
})
