const getUsersWithFriend = (users, friendName) => 
    users.filter(user => user.friends.includes(friendName));

// Задача 2. Користувачі з другом
// ВИКОНУЙ ЦЕ ЗАВДАННЯ У ФАЙЛІ task-2.js
// Напиши стрілочну функцію getUsersWithFriend(users, friendName) , яка прийматиме два параметра:

// перший параметр users — масив об’єктів користувачів
// другий параметр friendName — ім’я друга для пошуку.
// Функція має повертати масив усіх користувачів із масиву users, у яких є друг з іменем friendName. Друзі кожного користувача зберігаються у властивості friends. Якщо користувачів, у яких є такий других немає, то функція має повернути порожній масив.

// Поради:

// Метод filter() можна використовувати для створення нового масиву з елементами, які задовольняють певну умову.
// Використовуй метод includes() для перевірки, чи масив friends містить friendName.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

const allUsers = [
{
name: "Moore Hensley",
friends: ["Sharron Pace"]
},
{
name: "Sharlene Bush",
friends: ["Briana Decker", "Sharron Pace"]
},
{
name: "Ross Vazquez",
friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
},
{
name: "Elma Head",
friends: ["Goldie Gentry", "Aisha Tran"]
},
{
name: "Carey Barr",
friends: ["Jordan Sampson", "Eddie Strong"]
},
{
name: "Blackburn Dotson",
friends: ["Jacklyn Lucas", "Linda Chapman"]
},
{
name: "Sheree Anthony",
friends: ["Goldie Gentry", "Briana Decker"]
}
];

console.log(getUsersWithFriend(allUsers, "Briana Decker"));
// [
// {
// name: "Sharlene Bush",
// friends: ["Briana Decker", "Sharron Pace"]
// },
// {
// name: "Sheree Anthony",
// friends: ["Goldie Gentry", "Briana Decker"]
// }
// ]

console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// [
// {
// name: "Elma Head",
// friends: ["Goldie Gentry", "Aisha Tran"]
// },
// {
// name: "Sheree Anthony",
// friends: ["Goldie Gentry", "Briana Decker"]
// }
// ]

console.log(getUsersWithFriend(allUsers, "Adrian Cross" )); // []

// Залиш цей код для перевірки ментором.

// На що буде звертати увагу ментор при перевірці:
// Оголошена змінна getUsersWithFriend
// Змінній getUsersWithFriend присвоєна стрілочна функція з параметрами (users, friendName)
// Для перебирання параметра users використовується метод filter()
// Якщо значення параметра friendName — це рядок "Briana Decker", функція повертає масив об'єктів користувачів з іменами Sharlene Bush і Sheree Anthony
// Якщо значення параметра friendName — це рядок "Goldie Gentry", функція повертає масив об'єктів користувачів з іменами Elma Head і Sheree Anthony
// Якщо значення параметра friendName — це рядок "Adrian Cross", функція повертає порожній масив
// Виклик функції з випадковими, але валідними аргументами повертає правильне значення
