// ------------------HW-7__task--05

const input = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

input.addEventListener('input', handleOutputValue)

function handleOutputValue(event) {
    if (input.value) {
        output.textContent = event.currentTarget.value;
    } else {
        output.textContent = 'незнакомец'
    }

}