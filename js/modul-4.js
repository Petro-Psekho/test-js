console.log(
  `---------------------------ФУНКЦІЯ ЯК ЗНАЧЕННЯ----------------------------------`,
);

function greet(name) {
  return `Ласкаво просимо ${name}.`;
}

// Викликаємо функцію greet і виводимо результат у консоль

console.log(greet('Mango')); // Ласкаво просимо Манго.

// Виводимо функцію greet у консоль, не викликаючи її
console.log(greet);

/*
ƒ greet() {
     return `Ласкаво просимо ${name}.`;
}
*/

console.log(
  `---------------------------КОЛБЕК-ФУНКЦІЇ----------------------------------`,
);

// Колбек-функція
function greet(name) {
  console.log(`Ласкаво просимо ${name}.`);
}

// Функція вищого порядку
function registerGuest(name, callback) {
  console.log(`Реєструємо гостя ${name}.`);
  callback(name);
}

registerGuest('Mango', greet);

console.log(
  `---------------------------ІНЛАЙН-КОЛБЕКИ----------------------------------`,
);

function registerGuest(name, callback) {
  console.log(`Реєструємо гостя ${name}.`);
  callback(name);
}

// Передаємо інлайн-функцію greet у якості колбека
registerGuest('Mango', function greet(name) {
  console.log(`Ласкаво просимо ${name}.`);
});

// Передаємо інлайн-функцію notify у якості колбека
registerGuest('Poly', function notify(name) {
  console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
});

console.log(
  `---------------------------ДЕКІЛЬКА КОЛБЕКІВ----------------------------------`,
);

function processCall(recipient, onAvailable, onNotAvailable) {
  // Імітуємо доступність абонента випадковим числом
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }

  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`З'єднуємо з ${name}, очікуйте...`);
  // Логіка прийняття дзвінка
}

function activateAnsweringMachine(name) {
  console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
  // Логіка активації автовідповідача
}

function leaveHoloMessage(name) {
  console.log(`Абонент ${name} недоступний, записуємо голограму.`);
  // Логіка запису голограми
}

processCall('Mango', takeCall, activateAnsweringMachine);
processCall('Poly', takeCall, leaveHoloMessage);

console.log(`--------------------ДЕКІЛЬКА КОЛБЕКІВ---------------------------`);

//Необхідно написати логіку обробки замовлення піци.
//Виконай рефакторинг методу order таким чином,
//щоб він приймав другим і третім параметром два колбеки onSuccess і onError.

//Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName,
//метод order повинен повертати результат виклику колбека onError,
//передаючи йому аргументом рядок "There is no pizza with a name <имя пиццы> in the assortment."

//Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName,
//метод order повинен повертати результат виклику колбека onSuccess,
//передаючи йому аргументом назву замовленої піци.

const pizzaPalace = {
  pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
  order(pizzaName, onSuccess, onError) {
    if (this.pizzas.includes(pizzaName)) {
      return onSuccess(pizzaName);
    }
    return onError(
      `There is no pizza with a name ${pizzaName} in the assortment.`,
    );
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

console.log(`--------------------FOREACH(CALLBACK)---------------------------`);

// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }

// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

console.log(`---------------------------------------------------------------`);

//Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел,
//і розраховує загальну суму його елементів, яка зберігається у змінній totalPrice
//і повертається як результат роботи функції.

//Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   //   for (let i = 0; i < orderedItems.length; i += 1) {
//   //     totalPrice += orderedItems[i];
//   //   }

//   orderedItems.forEach(function (number) {
//     totalPrice += number;
//   });

//   // Change code above this line
//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); //повертає 138
// console.log(calculateTotalPrice([164, 48, 291])); //повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //повертає 1116

console.log(`-----------------ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ---------------------`);

//Функція filterArray(numbers, value) приймає масив чисел numbers і повертає новий масив,
//в якому будуть тільки ті елементи оригінального масиву, які більші за значення параметра value.

//Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// //Для перебирання масиву numbers використаний метод forEach

// console.log(filterArray([1, 2, 3, 4, 5], 3)); //повертає [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); //повертає [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); //повертає []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); //повертає [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); //повертає [24, 41, 76]

console.log(`-----------------СПІЛЬНІ ЕЛЕМЕНТИ---------------------`);
//Функція getCommonElements(firstArray, secondArray)
//приймає два масиви довільної довжини в параметри firstArray і secondArray,
//і повертає новий масив їхніх спільних елементів, тобто тих, які присутні в обох масивах.

//Виконай рефакторинг функції таким чином, щоб замість циклу for,
//вона використовувала метод forEach.

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }
//   firstArray.forEach(function (number) {
//     if (secondArray.includes(number)) {
//       commonElements.push(number);
//     }
//   });

//   return commonElements;
//   // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])); //повертає [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); //повертає [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); //повертає [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); //повертає [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); //повертає []

console.log(`--------------СТРІЛОЧНІ ФУНКЦІЇ ЯК КОЛБЕКИ------------------`);

// const numbers = [5, 10, 15, 20, 25];

// // Оголошення функції
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// // Анонімна стрілочна функція
// numbers.forEach((number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// //Стрілочну колбек-функцію також можна оголошувати окремо і передавати на неї посилання.
// //Це варто робити, якщо одна функція використовується у декількох місцях програми або якщо вона громіздка.

// const logMessage = (number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// };

// numbers.forEach(logMessage);

console.log(`------------------------------------------------------------`);

//Виконай рефакторинг функції calculateTotalPrice(orderedItems),
//замінивши її оголошення на стрілочну функцію
//Заміни колбек - функцію, передану в метод forEach(), на стрілочну функцію.

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

const calculateTotalPrice = orderedItems => {
  let totalPrice = 0;
  orderedItems.forEach(item => {
    totalPrice += item;
  });
  return totalPrice;
};

//Оголошена змінна calculateTotalPrice
//Змінній calculateTotalPrice присвоєна стрілочна функція з параметром (orderedItems)
//Для перебирання масиву orderedItems використаний метод forEach
//Колбек для методу forEach - це стрілочна функція

console.log(calculateTotalPrice([12, 85, 37, 4])); //повертає 138
console.log(calculateTotalPrice([164, 48, 291])); //повертає 503
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //повертає 1116

console.log(`--------------ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ 2.0------------------`);

//Заміни оголошення функції filterArray() і колбек для методу forEach() на стрілочні функції.

// Change code below this line
const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach(number => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Change code above this line
  return filteredNumbers;
};

//Оголошена змінна filterArray
//Змінній filterArray присвоєна стрілочна функція з параметрами (numbers, value)
//Для перебирання масиву numbers використаний метод forEach
//Колбек для методу forEach - це стрілочна функція

console.log(filterArray([1, 2, 3, 4, 5], 3)); //повертає [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); //повертає [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); //повертає []
console.log(filterArray([12, 24, 8, 41, 76], 38)); //повертає [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); //повертає [24, 41, 76]

console.log(`--------------СПІЛЬНІ ЕЛЕМЕНТИ 2.0------------------`);

//Заміни оголошення функції getCommonElements() і колбек для методу forEach() на стрілочні функції.

// Change code below this line
const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach(element => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  // Change code above this line
  return commonElements;
};

//Оголошена змінна getCommonElements.
//Змінній getCommonElements присвоєна стрілочна функція з параметрами (firstArray, secondArray)
//Для перебирання масиву firstArray використаний метод forEach
//Колбек для методу forEach - це стрілочна функція

console.log(getCommonElements([1, 2, 3], [2, 4])); //повертає [2]
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); //повертає [1, 2]
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); //повертає [12, 27, 3]
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); //повертає [10, 30, 40]
console.log(getCommonElements([1, 2, 3], [10, 20, 30])); //повертає []

console.log(`--------------ЧИСТІ ФУНКЦІЇ------------------`);

//!Функція з побічними ефектами
//Функція dirtyMultiply(array, value) множить кожен елемент масиву array на число value.
//Вона змінює(мутує) вихідний масив за посиланням.

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);

// // Відбулася мутація вихідних даних - масиву numbers
// console.log(numbers); // [2, 4, 6, 8, 10]

//!Чиста функція (pure function)

const pureMultiply = (array, value) => {
  const newArray = [];

  array.forEach(element => {
    newArray.push(element * value);
  });

  return newArray;
};

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = pureMultiply(numbers, 2);

// Мутація вихідних даних не відбулася
console.log(numbers); // [1, 2, 3, 4, 5]
// Функція повернула новий масив зі зміненими даними
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

console.log(`---------------------------------------------`);

//Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент,
//значення якого - це парне число, додаючи до нього значення параметра value.

//Виконай рефакторинг функції таким чином, щоб вона стала чистою -
//не змінювала масив чисел numbers,
//а створювала, наповнювала і повертала новий масив з оновленими значеннями.

function changeEven(numbers, value) {
  // Change code below this line
  let newArray = [];

  for (let i = 0; i < numbers.length; i += 1) {
    newArray.push(numbers[i]);
    if (numbers[i] % 2 === 0) {
      newArray[i] = numbers[i] + value;
    }
  }
  return newArray;
  // Change code above this line
}

//Оголошена функція changeEven(numbers, value)
//Функція changeEven не змінює значення параметра numbers

console.log(changeEven([1, 2, 3, 4, 5], 10)); //повертає новий масив [1, 12, 3, 14, 5]
console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); //повертає новий масив [12, 18, 3, 7, 14, 16]
console.log(changeEven([17, 24, 68, 31, 42], 100)); //повертає новий масив [17, 124, 168, 31, 142]
console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); //повертає новий масив [144, 13, 81, 192, 136, 154]

console.log(`--------------------МЕТОД MAP()-----------------------`);

//масив.map((element, index, array) => {
// Тіло колбек-функції
//});

//Поелементо перебирає оригінальний масив.
//Не змінює оригінальний масив.
//Результат роботи колбек-функції записується у новий масив.
//Повертає новий масив однакової довжини.
//Його можна використовувати для того, щоб змінити кожен елемент масиву. Оригінальний масив використовується як еталон, на основі якого можна зробити іншу колекцію.

//Використання анонімних стрілочних функцій з неявним поверненням суттєво скорочує «шум» оголошення колбек-функції, що робить код чистішим і простішим для сприйняття.

const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];

const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// Оригінальний масив не змінився
console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]

console.log(`------------------------------------------------------`);

//Доповни код таким чином, щоб у змінній planetsLengths вийшов масив довжин назв планет. Обов'язково використовуй метод map().

//const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];

const planetsLengths = planets.map(planet => planet.length);

//Оголошена змінна planets
console.log(planets); //це масив ["Earth", "Mars", "Venus", "Jupiter"]
//Оголошена змінна planetsLengths
console.log(planetsLengths); //це масив [5, 4, 5, 7]
//Для перебирання масиву планет використаний метод map()

console.log(
  `--------------------МЕТОД MAP() І МАСИВ ОБ'ЄКТІВ-----------------------`,
);

//Ми вже знаємо, що повсякденне завдання - це маніпуляція масивом об'єктів. Наприклад, отримати масив значень властивості з усіх об'єктів. У нас є масив студентів, а потрібно отримати окремий масив їхніх імен.

// const students = [
//   { name: 'Mango', score: 83 },
//   { name: 'Poly', score: 59 },
//   { name: 'Ajax', score: 37 },
//   { name: 'Kiwi', score: 94 },
//   { name: 'Houston', score: 64 },
// ];

// const names = students.map(student => student.name);
// console.log(`досаем имена из объекта и записываем в массив`, names);
// // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]

console.log(`------------------------------------------------------`);

//Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив назв книг (властивість title) з усіх об'єктів масиву books.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(books => books.title);

// //Оголошена змінна books
// console.log(books); //це масив
// //Оголошена змінна titles
// console.log(titles); //це масив ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]
// //Для перебирання масиву books використовується метод map() як чиста функція

console.log(`--------------------МЕТОД FLATMAP()-----------------------`);

//У масиві students зберігається список студентів зі списком предметів, які відвідує студент, у властивості courses. Кілька студентів можуть відвідувати один і той самий предмет. Необхідно скласти список всіх предметів, які відвідує ця група студентів, поки що, навіть повторюваних.

// const students = [
//   { name: 'Mango', courses: ['mathematics', 'physics'] },
//   { name: 'Poly', courses: ['science', 'mathematics'] },
//   { name: 'Kiwi', courses: ['physics', 'biology'] },
// ];

// console.log(students.map(student => student.courses));
// // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

// console.log(students.flatMap(student => student.courses));
// // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];

//Він викликає колбек-функцію для кожного елемента вихідного масиву, а результат її роботи записує у новий масив. Відмінність від map() у тому, що новий масив «розгладжується» на глибину, що дорівнює одиниці (одна вкладеність). Цей розгладжений масив і є результатом роботи flatMap().

console.log(`------------------------------------------------------`);

//Використовуючи метод flatMap(), зроби так, щоб у змінній genres вийшов масив усіх жанрів книг (властивість genres) з масиву книг books.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism'],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(books => books.genres);

// //Оголошена змінна books
// console.log(books); //Значення змінної books - це масив об'єктів
// //Оголошена змінна genres
// console.log(genres); //Значення змінної genres - це масив [ "adventure", "history", "fiction", "horror", "mysticism" ]
// //Для перебирання масиву books використовується метод flatMap()

console.log(`---------------МЕТОД FILTER() І МАСИВ ОБ'ЄКТІВ------------------`);

//Під час роботи з масивом об'єктів виконується фільтрація за значенням певної властивості. У підсумку, утворюється новий масив відфільтрованих об'єктів.

//Наприклад, у нас є масив студентів з балами за тест. Необхідно відфільтрувати кращих (бал вище 80), гірших (бал нижче 50) і середніх студентів (бал від 50 до 80).

//* const LOW_SCORE = 50;
//* const HIGH_SCORE = 80;

//* const students = [
//*   { name: 'Mango', score: 83 },
//*   { name: 'Poly', score: 59 },
//*   { name: 'Ajax', score: 37 },
//*   { name: 'Kiwi', score: 94 },
//*   { name: 'Houston', score: 64 },
//* ];

//* const best = students.filter(student => student.score >= HIGH_SCORE);
//* console.log(best); // Масив об'єктів з іменами Mango і Kiwi

//* const worst = students.filter(student => student.score < LOW_SCORE);
//* console.log(worst); // Масив з одним об'єктом Ajax

// // В колбек-функції зручно деструктуризувати властивості об'єкта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE,
// );
// console.log(average); // Масив об'єктів з іменами Poly і Houston

console.log(`============================================================`);

//Використовуючи метод filter(), доповни код таким чином, щоб:

//У змінній topRatedBooks утворився масив книг, рейтинг яких (властивість rating) більший за або дорівнює значенню змінної MIN_RATING.
//У змінній booksByAuthor утворився масив книг, написаних автором з ім'ям (властивість author), яке збігається зі значенням у змінній AUTHOR.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Bernard Cornwell';
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(({ author }) => author === AUTHOR);

//Оголошена змінна books
//Значення змінної books - це масив об'єктів
//Оголошена змінна MIN_RATING
//Значення змінної MIN_RATING - це число 8
//Оголошена змінна AUTHOR
//Значення змінної AUTHOR - це рядок "Bernard Cornwell"
//console.log(topRatedBooks);
//Значення змінної topRatedBooks - це масив книг з рейтингом, вищим за 8
//console.log(booksByAuthor);
//Значення змінної booksByAuthor - це масив книг, автор яких "Bernard Cornwell"
//Для перебирання масиву books використаний метод filter()

console.log(`----------МЕТОД REDUCE() І МАСИВ ОБ'ЄКТІВ-------------`);

//Під час роботи з масивом об'єктів виконується редукування за значенням певної властивості. Наприклад, у нас є масив студентів з балами за тест. Необхідно отримати середній бал.

// const students = [
//   { name: 'Mango', score: 83 },
//   { name: 'Poly', score: 59 },
//   { name: 'Ajax', score: 37 },
//   { name: 'Kiwi', score: 94 },
//   { name: 'Houston', score: 64 },
// ];

// // Назва акумулятора може бути довільною, це просто параметр функції
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;

// console.log(averageScore);

console.log(`============================================================`);

//Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця, і отримати загальну суму цих значень часу. Розрахувати час для кожного з гравців можна, розділивши його час (властивість playtime) на кількість ігор (властивість gamesPlayed).

// 1) середній час для кожного гравця проведений в одній грі (averagePlaytimePerGame = playtime / gamesPlayed)
// 2) отримати загальну суму цих значень часу

const players = [
  { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
  { name: 'Poly', playtime: 469, gamesPlayed: 2 },
  { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
  { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players.reduce((totalAverage, player) => {
  return totalAverage + player.playtime / player.gamesPlayed;
}, 0);

console.log(players.length);

//Оголошена змінна players
//Значення змінної players - це масив об'єктів гравців
//Оголошена змінна totalAveragePlaytimePerGame
console.log(totalAveragePlaytimePerGame); //це число 1023
//Для перебирання масиву players використовується метод reduce()

console.log(`----------ЗАГАЛЬНА КІЛЬКІСТЬ ДРУЗІВ-------------`);

//Доповни функцію getTotalFriendCount(users) таким чином, щоб вона рахувала і повертала загальну кількість друзів (властивість friends) усіх користувачів з масиву users.

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// const getTotalFriendCount = users => {
//   return users.reduce((totalFriends, user) => {
//     return totalFriends + user.friends.length;
//   }, 0);
// };

// console.log(getTotalFriendCount(users));

//Оголошена змінна getTotalFriendCount
//Змінній getTotalFriendCount присвоєна стрілочна функція з параметром (users)
//Для перебирання параметра users використовується метод reduce()
//Виклик функції із зазначеним масивом користувачів повертає число 14
//Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

console.log(`----------Метод sort()-------------`);

//Такий масив чисел буде відсортований за зростанням.

const scores = [61, 19, 74, 35, 92, 56];
scores.sort();
console.log(scores); // [19, 35, 56, 61, 74, 92]

//Але, оскільки за замовчуванням значення приводяться до рядка, стандартне сортування чисел працює незвично. Тому, у наступній вправі ми розглянемо як задавати свій порядок сортування.

const scores2 = [27, 2, 41, 4, 7, 3, 75];
scores2.sort();
console.log(scores2); // [2, 27, 3, 4, 41, 7, 75]

//Масив рядків сортується за алфавітом.

const students2 = ['Jacob', 'Artemis', 'Solomon', 'Adrian', 'Kai', 'Ganymede'];
students2.sort();
console.log(students2); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

//Водночас порядковий номер великих літер менший, ніж у малих.

const letters = ['b', 'B', 'a', 'A', 'c', 'C'];
letters.sort();
console.log(letters); // ["A", "B", "C", "a", "b", "c"]

//! Через те, що сортується вихідний масив, порушується принцип чистоти функцій і не можна зручно створити декілька похідних колекцій на основі вихідної. Наприклад, створити колекцію, відсортовану за зростанням, а іншу - за спаданням. Тому перед сортуванням роблять повну копію вихідного масиву і сортують вже її.

const scores3 = [61, 19, 74, 35, 92, 56];
const ascendingScores = [...scores3].sort();

console.log(scores3); // [61, 19, 74, 35, 92, 56]
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

console.log(`----------Метод sort()-------------`);

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = Object.values(books).sort(
//   (firstAuthor, secondAuthor) =>
//     firstAuthor.author.localeCompare(secondAuthor.author),
// );

// const sortedByReversedAuthorName = Object.values(books).sort(
//   (firstAuthor, secondAuthor) =>
//     secondAuthor.author.localeCompare(firstAuthor.author),
// );

// const sortedByAscendingRating = Object.values(books).sort(
//   (firstRating, secondRating) => firstRating.rating - secondRating.rating,
// );

// const sortedByDescentingRating = Object.values(books).sort(
//   (firstRating, secondRating) => secondRating.rating - firstRating.rating,
// );

// console.log(sortedByAuthorName); //Значення змінної- це масив книг, відсортований за ім'ям автора в алфавітному порядку

// console.log(sortedByReversedAuthorName); //Значення змінної - це масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку

// console.log(sortedByAscendingRating); //Значення змінної - це масив книг, відсортований за зростанням рейтингу

// console.log(sortedByDescentingRating); //Значення змінної - це масив книг, відсортований за спаданням рейтингу

// //Для перебирання масиву books використовується метод sort()

console.log(`============================================================`);

//Доповни функцію sortByAscendingBalance(users) таким чином, щоб вона повертала масив користувачів, відсортований за зростанням їх балансу (властивість balance).

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
  },
];

const sortByAscendingBalance = users => {
  return [...users].sort(
    (firstGrowth, secondGrowth) => firstGrowth.balance - secondGrowth.balance,
  );
};

console.log(users); // Значення параметра users не змінюється

console.log(sortByAscendingBalance(users)); // Виклик функції із зазначеним масивом користувачів повертає новий масив користувачів, відсортований за зростанням їх балансу

//Для перебирання параметра users використаний метод sort()

console.log(`----------------------------------------------------------`);

//Доповни функцію sortByDescendingFriendCount(users) таким чином, щоб вона повертала масив користувачів, відсортований за спаданням кількості їхніх друзів (властивість friends).

const sortByDescendingFriendCount = users => {
  return [...users].sort(
    (firstFriend, secondFriend) =>
      secondFriend.friends.length - firstFriend.friends.length,
  );
};

// Значення параметра users не змінюється
//Для перебирання параметра users використаний метод sort()
console.log(sortByDescendingFriendCount(users)); //Виклик функції із зазначеним масивом користувачів повертає новий масив користувачів, відсортований за спаданням кількості їхніх друзів

console.log(`----------------------------------------------------------`);

//Доповни функцію sortByName(users) таким чином, щоб вона повертала масив користувачів, відсортований за їх ім'ям (властивість name) в алфавітному порядку.

const sortByName = users => {
  return [...users].sort((firstName, secondName) =>
    firstName.name.localeCompare(secondName.name),
  );
};

// Значення параметра users не змінюється
// Для перебирання параметра users використаний метод sort()
console.log(sortByName(users)); //Виклик функції із зазначеним масивом користувачів повертає новий масив користувачів, відсортований за ім'ям в алфавітному порядку

console.log(`---------------------Ланцюжок методів-------------------------`);

const students = [
  { name: 'Mango', score: 83, courses: ['mathematics', 'physics'] },
  { name: 'Poly', score: 59, courses: ['science', 'mathematics'] },
  { name: 'Ajax', score: 37, courses: ['physics', 'biology'] },
  { name: 'Kiwi', score: 94, courses: ['literature', 'science'] },
];

//Необхідно отримати масив їхніх імен, відсортованих за зростанням балів за тест. З цією метою ми відсортуємо копію масиву методом sort(), після чого методом map() створимо масив значень властивості name з відсортованого масиву.

//* const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
//* const names = sortedByAscendingScore.map(student => student.name);

//* console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]

//Проблема в тому, що у нас з'являються проміжні змінні після кожної операції, крім фінальної. Змінна sortedByAscendingScore - зайва і необхідна тільки для зберігання проміжного результату.

//Позбутися таких «мертвих» змінних можна за допомогою групування викликів методів у ланцюжки. Кожний наступний метод буде виконуватися на основі результату роботи попереднього.

//* const names = [...students]
//*   .sort((a, b) => a.score - b.score)
//*   .map(student => student.name);

//* console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]

//Робимо копію вихідного масиву перед сортуванням.
//На копії викликаємо метод sort().
//До результату роботи методу sort() застосовуємо метод map().
//Змінній names присвоюється результат роботи методу map().
//Отримаємо масив унікальних відвідуваних предметів, відсортований за алфавітом.

const uniqueSortedCourses = students
  .flatMap(student => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .sort((a, b) => a.localeCompare(b));

console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]
//На вихідному масиві викликаємо flatMap() і робимо розгладжений масив усіх курсів.
//До результату методу flatMap() застосовуємо метод filter() для фільтрації унікальних елементів.
//На результаті методу filter() викликаємо sort().
//Змінній uniqueSortedCourses присвоюється результат роботи методу sort().
//Ланцюжок методів може бути довільної довжини, але, зазвичай, не більше 2-3 операцій.

console.log(`==============================================================`);

// Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку, рейтинг книг яких більший за значення змінної MIN_BOOK_RATING.

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  {
    title: 'Redder Than Blood',
    author: 'Tanith Lee',
    rating: 7.94,
  },
  {
    title: 'The Dreams in the Witch House',
    author: 'Howard Lovecraft',
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
// Change code below this line

const names = books
  .filter(book => book.rating >= MIN_BOOK_RATING)
  .sort((firstRating, secondRating) => firstRating.author - secondRating.author)
  .map(book => book.author);

console.log(names); // ["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"]
// Відсутні оголошені змінні, крім books, MIN_BOOK_RATING і names
// Використовується ланцюжок методів filter(), map(), sort()

console.log(`---------------------Ланцюжок методів-------------------------`);
