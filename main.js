console.log("Sorry, dark mode isnt available yet. \nIf you would like to see this website I have the repo linked below!")
console.log("hhttps://github.com/orbutbul/Website")

function validateInput(inputElement) {
    const inputValue = inputElement.value;
    const regex = /^[a-zA-Z0-9]+$/; // Regular expression for letters and numbers

    if (!regex.test(inputValue)) {
        const cleanedValue = inputValue.replace(/[^a-zA-Z0-9]+/g, '');
        inputElement.value = cleanedValue;
    }
}