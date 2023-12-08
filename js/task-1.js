function isEnoughCapacity(products, containerSize) {

    // створюю змінну для зберігання кількості продуктів
    let numberOfProducts = 0;

    // записую значення властивостей об'єкта у змінну (масив кількостей кожного продукту)
    const arrOfProducts = Object.values(products);

    // через цикл for of перебираю масив кількостей продуктів та додаю до змінної
    for (const product of arrOfProducts) {
        numberOfProducts += product;
    }

    // порівнюю кількість продуктів та повертаю відповідне значення
    return numberOfProducts <= containerSize;
}



// перевірка
console.log(
isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // true

console.log(
isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); // false

// На що буде звертати увагу ментор при перевірці:
// Оголошена функція isEnoughCapacity(products, containerSize)
// Виклик isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8) повертає true
// Виклик isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12) повертає false
// Виклик isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14) повертає true
// Виклик isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7) повертає false

// Функція оголошує два параметри:
// products — об’єкт, у якому ключі містять назви товарів, а їхні значення — кількість цих товарів. Наприклад, { apples: 2, grapes: 4 }.
// containerSize — число, максимальна кількість одиниць товарів, яку в себе може вмістити контейнер.
// Функція має повернути результат перевірки, чи помістяться всі товари в контейнер.Тобто порахувати загальну кількість товарів в об’єкті products і повернути true,
// якщо вона менше або дорівнює containerSize, і false, якщо ні.