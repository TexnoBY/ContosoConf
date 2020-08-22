const form = document.getElementById("registration-form");
const submitButton = form.querySelector("button");
const passwordInput = document.getElementById("password")
const confirmPasswordInput = document.getElementById("confirm_password")

const checkPasswords = function () {
    
    if (passwordInput.value != confirmPasswordInput.value) {
        confirmPasswordInput.setCustomValidity("Type same passwords.")
    }
    else {
        confirmPasswordInput.setCustomValidity("")
    }
};

const addPasswordInputEventListeners = function () {
    passwordInput.addEventListener("input", checkPasswords, false);
    confirmPasswordInput.addEventListener("input", checkPasswords, false);
};

const formSubmissionAttempted = function() {
    form.classList.add("submission-attempted");
};

const addSubmitClickEventListener = function() {
    submitButton.addEventListener("click", formSubmissionAttempted, false);
};

addPasswordInputEventListeners();
addSubmitClickEventListener();
