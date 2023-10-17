
import throttle from "lodash.throttle";



const form = document.querySelector(".feedback-form")

const LOCALSTORAGE_FORM_KEY = "feedback-form-state";
const dataJson = getLocalStorage(LOCALSTORAGE_FORM_KEY)

const initialData = {
    email: "",
    message: "",
} 

if (dataJson) {
    try {
        if (dataJson.email) {
            form.elements.email.value = dataJson.email
            initialData.email = dataJson.email
        } 

        if (dataJson.message) {
            form.elements.message.value = dataJson.message
            initialData.email = dataJson.message
        } 
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    }
}


form.addEventListener("input", throttle(onSaveData, 500));
form.addEventListener("submit", onSendForm);

function onSaveData(event) {
   const target = event.target

   initialData[target.name] = target.value
   saveLocalstorage(LOCALSTORAGE_FORM_KEY, initialData)
}


function onSendForm(event) {
    event.preventDefault();

    const target = event.currentTarget;

    const { email, message } = target.elements;

    const emailValue = email.value
    const messageValue = message.value

    if (!emailValue || !messageValue) {
        alert("Please fill in all fileds")
    } else {
        const formData = {
            email: emailValue,
            message: messageValue
        }

        console.log(form);

        target.reset();
        clearLocalStorage(LOCALSTORAGE_FORM_KEY)
        initialData.email = "",
        initialData.message = "";
    }

}


function saveLocalstorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
}

function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}

function clearLocalStorage(key) {
    localStorage.removeItem(key)
}