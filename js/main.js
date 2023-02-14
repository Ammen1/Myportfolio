// Declaration of Variables
const menuButton = document.querySelector('.burger');
const menu = document.querySelector('.nav-list');
const menuLinks = document.querySelectorAll('.nav-list li');

// Menu toggle
menuButton.addEventListener('click', () => {
    //Toggle menu and Logo Change
    menuButton.classList.toggle('close');
    menu.classList.toggle('active');
    // Links fade in
    menuLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ""
        } else {
            link.style.animation = `linksFadein 0.3s ease forwards ${index/7 + 0.6}s`;
        }
    })
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuButton.classList.toggle('close')
        menu.classList.toggle('active')
        menuLinks.forEach(link =>
            link.style = ''
        )
    })
})

const validate = () => {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    let text;
    if (name.length < 4 && !name.includes(' ')) {
        text = "Please enter valid name";
        error_message.innerHTML = text;
        return false;
    }
    if (isNaN(phone)) {
        text = "Please enter valid phone number";
        error_message.innerHTML = text;
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
    }
    if (subject.length <= 10) {
        text = "Please Enter More Than 10 Characters";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully!");
    return true;
}

// Email form and phone number activation

const mailIcon = document.getElementById("email-method");
const phoneIcon = document.getElementById("phone-method")
const contactForm = document.querySelector(".contact-form");
const phoneNumber = document.querySelector(".detail");

mailIcon.addEventListener('click', () => {
    contactForm.classList.toggle("active")
})
phoneIcon.addEventListener('click', () => {
    phoneNumber.classList.toggle("active")
})