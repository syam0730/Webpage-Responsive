/*var nameerror = document.getElementById('name-error');
var emailerror = document.getElementById('email-error');
var phoneerror = document.getElementById('phone-error');
var addresserror = document.getElementById('address-error');

function validateName(){
    var name=document.getElementById("contact-name").value;
    
    if(name.length == 0){
            nameerror.innerHTML = 'Name Is Required';
            return false;
    }
    if(!name.match(/([A-Za-z]))){
        nameerror.innerHTML = 'Write Full Name';
            return false;
    }

    nameerror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone(){
    var phone = document.getElementById('phone-error').value;
    
    if(phone.length == 0){
            phoneerror.innerHTML = 'Phone No IS Required';
            return false;
    }
    if(!phone.match(/^[0-9]{10}*&/)){
        phoneerror.innerHTML = 'Please enter 10 digits';
        return false;
    }
}*/
/*if(!name.match(/([A-Z][A-Za-z])*[s]*[A-Z]{1}[A-Za-z])){
    nameerror.innerHTML = 'Write Full Name';
        return false;
}*/
/*
const uname= document.getElementById('name');
const email= document.getElementById('email');
const phone= document.getElementById('phone');
const address= document.getElementById('message');


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const isValidName = uname => {
    const re= /^[a-zA-Z ]{2,30}$/;
    return re.test(String(uname).toLowerCase());
}
const validateInputs = () => {
    const nameerror = uname.value.trim();
    const emailerror = email.value.trim();
    const phoneerror = phone.value.trim();

    if(nameerror=== '') {
        setError(uname, 'name is required');
    } else if (!isValidName(nameerror)) {
        setError(uname, 'Provide a valid email address');
    }
    else{
        setSuccess(uname);
    }

    if(emailerror=== '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailerror)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(phoneerror=== '') {
        setError(phone, 'Phone no is required');
    } else if (phoneerror.length != 10) {
        setError(phone, 'phone number must be 10 character.')
    } else {
        setSuccess(phone);
    }   
}
*/
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phonenumber = document.getElementById('phonenumber');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const isValidName = username => {
    var re= /^[a-zA-Z ]{2,30}$/;
    return re.test(String(username).toLowerCase());
}



const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phonenumberValue = phonenumber.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else if (!isValidName(usernameValue)) {
        setError(username, 'Provide a valid Name. Name should only contain characters');
    }
    else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(phonenumberValue === '') {
        setError(phonenumber, 'phonenumber is required');
    } else if (phonenumberValue.length != 10 ) {
        setError(phonenumber, 'phonenumber must be 10 character.')
    } else {
        setSuccess(phonenumber);
    }

};
