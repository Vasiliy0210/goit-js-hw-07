// ------------------HW-7__task--04

let counterValue = 0;
const currentValue = document.querySelector('#value')
const increment = document.querySelector('button[data-action="increment"]')
const decrement = document.querySelector('button[data-action="decrement"]')

increment.addEventListener('click', (el) => {
    counterValue += 1;
    return currentValue.textContent = counterValue;
});

decrement.addEventListener('click', (el) => {
    counterValue -= 1;
    return currentValue.textContent = counterValue;
})
