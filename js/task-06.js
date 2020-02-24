// ------------------HW-7__task--06

const input = document.querySelector('#validation-input');

input.addEventListener('blur', handleInputTextLength);

function handleInputTextLength() {
    const inputDataSetLength = Number(input.dataset.length);
    const inputUserLength = input.value.length;

    if (inputDataSetLength === inputUserLength) {
        input.classList.add('valid')
        input.classList.remove('invalid')
    } else {
        input.classList.add('invalid')
    }
}

