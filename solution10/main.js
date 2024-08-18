document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('contact-form-email').addEventListener('click', function () {
        this.classList.add('clicked');
    });

    document.getElementById('contact-form-email').addEventListener('blur', function () {
        this.classList.remove('clicked');
    });

    const form = document.getElementById('contact-form');
    const emailInput = document.getElementById('contact-form-email');
    const errorMessage = document.querySelector('.form-error');
    const main = document.getElementById('main');
    const successMessage = document.querySelector('.mainSucces');
    const myEmail = document.getElementById('myEmail');
    const mainSucces = document.getElementById('mainSucces');
    const dissmissButton = document.getElementById('dissmiss');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const emailValue = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailValue)) {
            errorMessage.style.display = 'block';
            emailInput.classList.add('input-error');
        } else {
            errorMessage.style.display = 'none';
            emailInput.classList.remove('input-error');
            main.classList.add('hidden');
            successMessage.style.display = 'block';
            myEmail.textContent = emailValue;
            mainSucces.classList.add('active');
        }
    });

    emailInput.addEventListener('input', function () {
        if (errorMessage.style.display === 'block') {
            errorMessage.style.display = 'none';
            emailInput.classList.remove('input-error');
        }
    });

    dissmissButton.addEventListener('click', function () {
        location.reload()
    });
});
