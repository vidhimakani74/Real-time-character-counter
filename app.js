const textareaE1 = document.getElementById("textarea");
const totalCounterE1 = document.getElementById("total-counter");
const remainingCounerE1 = document.getElementById("remaining-counter");

updateCounter()
function updateCounter() {
    //total character
    totalCounterE1.innerText = textareaE1.value.length;
    // remainig char
    remainingCounerE1.innerText = textareaE1.getAttribute("maxLength") - textareaE1.value.length;
}

textareaE1.addEventListener("keyup", () => {
    updateCounter()
});