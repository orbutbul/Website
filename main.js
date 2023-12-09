// function toggleDarkMode() {
//     const root = document.documentElement;

//     const currentBackgroundColor = getComputedStyle(root).getPropertyValue('--main-bg-color');


//     if (currentBackgroundColor === '#F5EEE4') {
//         root.style.setProperty('--main-bg-color', '#262626');
//         root.style.setProperty('--main-primary', '#CAA4CF');
//         root.style.setProperty('--main-secondary', '#040301');
//         root.style.setProperty('--main-accent', '#C2B7B9');
//         root.style.setProperty('--main-text', '#F5EEE4');
//     } else {
//         root.style.setProperty('--main-bg-color', '#F5EEE4');
//         root.style.setProperty('--main-primary', '#CAA4CF');
//         root.style.setProperty('--main-secondary', 'burlywood');
//         root.style.setProperty('--main-accent', '#79676A');
//         root.style.setProperty('--main-text', '#262626');
//     }
// }
function validateInput(inputElement) {
    const inputValue = inputElement.value;
    const regex = /^[a-zA-Z0-9]+$/; // Regular expression for letters and numbers

    if (!regex.test(inputValue)) {
        const cleanedValue = inputValue.replace(/[^a-zA-Z0-9]+/g, '');
        inputElement.value = cleanedValue;
    }
}