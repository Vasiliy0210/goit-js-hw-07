// ------------------HW-7__task--01

const allCategories = document.querySelectorAll("li.item")
console.log("Количество категорий:", allCategories.length)

allCategories.forEach((el) => {
    const categoryName = el.firstElementChild.textContent;
    const categoryElementQuantity = el.querySelectorAll('li').length;
    console.log("Категория:", categoryName);
    console.log("Количество элекментов", categoryElementQuantity)
})
