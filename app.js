const menuBtn = document.querySelector('#open-btn-menu');
const menu = document.querySelector('.header-menu');
const mobileMenuItems = document.querySelectorAll('.menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active'); 
})

mobileMenuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});
//form validation

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const formBtn = document.getElementById('submit-btn');
const submitError = document.getElementById('submitError');

function validateName() {
    const contactName = document.getElementById('name').value;
    // const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (contactName.length == 0) {
        nameError.innerHTML = "Please type a name";
        return false;
    // } else if (!contactName.match(nameRegex)) {
    //     nameError.innerHTML = "Full name required";
    //     return false;
    } else {
        nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true
    }
}

function validateEmail() {
    const emailId = document.getElementById('email').value;
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailId.length == 0) {
        emailError.innerHTML = "Email required";
        return false;
    } else if (!emailId.match(emailRegex)) {
        emailError.innerHTML = "Please enter a valid email address";
        return false;
    } else {
        emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}

function validateMessage() {
    const messageBox = document.getElementById('message').value;
    if (messageBox.length == 0) {
        messageError.innerHTML = "Please type a Message";
        return false;
    } else {
        messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}

function validateForm() {
    if (!validateName() || !validateEmail() || !validateMessage) {
        submitError.innerHTML = "Please Enter Correct Details";
        return false;
    } else {
        submitError.innerHTML = "";
        return true;
    }
}