const menuBtn = document.querySelector('#open-btn-menu');
const menu = document.querySelector('.header-menu');
const mobileMenuItems = document.querySelectorAll('.menu');
const contactForm = document.getElementById('contact-form');
const header = document.getElementById('site-header');
const whiteLogo = document.querySelector('.white-logo');
const blueLogo = document.querySelector('.blue-logo');

window.onscroll = () => {
    if(window.scrollY > 160) {
        header.classList.add('shadow');
        blueLogo.style.display = 'none';
        whiteLogo.style.display = 'block';
    } else {
        header.classList.remove('shadow');
        whiteLogo.style.display = 'none';
        blueLogo.style.display = 'block';
    }
};


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

//send Email

// function sendEmail() {
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "ladipssonventuresng@gmail.com",
//         Password : "gbolakpine17",
//         To : 'princetunde17@gmail.com',
//         From : document.getElementById('email').value,
//         Subject : "New Form Message Alert",
//         Body : "Name: " + document.getElementById('name').value
//                 + "<br> Email: " + document.getElementById('email').value
//                 + "<br> Message: " + document.getElementById('message').value
//     }).then(
//       message => alert("Message Sent")
//     );
// }

//contact form background color changing
// let intervalID;

// function changeColor() {
//     if(!intervalID) {
//         intervalID = setInterval(changeRandomColor, 1000);
//     }
// }

// function changeRandomColor() {
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     contactForm.style.backgroundColor = `#${randomColor}`;
// }

// function stopColorChange() {
//     clearInterval(intervalID);
// }

// changeColor();