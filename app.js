const menuBtn = document.querySelector('#open-btn-menu');
const menu = document.querySelector('.header-menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active'); 
})

//form validation

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const formBtn = document.getElementById('submit-btn');

function validateName() {
    let contactName = document.getElementById('name').value;
    let nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (contactName.length == 0) {
        nameError.innerHTML = "Please type a name";
        return false;
    } else if (!contactName.match(nameRegex)) {
        nameError.innerHTML = "Full name required";
        return false;
    } else {
        nameError.innerHTML = "valid";
    }
}

function validateEmail() {
    let emailId = document.getElementById('email');
    let emailRegex = /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\. [a-zA-Z]{2,4}$/;
    if (emailId.length == 0) {
        emailError.innerHTML = "Email required";
        return false;
    } else if (!emailId.match(emailRegex)) {
        emailError.innerHTML = "Please enter a valid email address";
        return false;
    } else {
        emailError.innerHTML = "valid";
    }
}