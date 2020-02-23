// ------------------HW-7__task--02

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];


const ingredientsGroup = document.querySelector("#ingredients");

ingredients.forEach((el) => {
    const ingredientsElement = document.createElement('li');
    ingredientsElement.textContent = el;
    console.log(ingredientsElement.textContent)
    ingredientsGroup.insertAdjacentElement('beforeend', ingredientsElement)
})

