// 1. Використовуючи функцію if...else,
// напишіть код, який запитуватиме:
// "Яка офіційна назва JavaScript?"
// Якщо користувач вводить "ECMAScript",
// показати через alert: "Вірно!"
// інакше відобразити:"Не знаєте? ECMAScript!"

// const question = prompt('Яка офіційна назва JavaScript?');
// console.log(question, typeof question);

// if (condition) {

// } else {

// }

//2. Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//Рядок у форматі годин і хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// Отримайте кількість хвилин -

// Візіміть ціле від ділення на 60, це кількість годин

// Обробіть години так щоб відповідали формату

// Візіміть залишок від ділення на 60, це кількість хвилин

// Обробіть хвилини так щоб відповідали формату

// Вивести результат

// const min = +prompt(`введіть кількість хвилин`);

// let hours = Math.floor(Number(min) / 60);
// let modifyHour = String(hours).padStart(2, 0);

// let minute = Number(min) % 60;
// let modifyMinute = String(minute).padStart(2, 0);

// console.log(`${modifyHour}:${modifyMinute}`);

//5. Напишіть код, який запитуватиме
//   Логін за допомогою prompt і логувати результат
//   В консоль браузера

// Якщо відвідувач вводить "admin",
// то наступний prompt запитує пароль,
// інакше (нічого не ввели або натиснута клавіша Esc) вивести рядок "Я вас не знаю".

// Якщо на запит паролю нічого не ввели або натиснута клавіша Esc
// Вивести рядок "Скасовано"

// Пароль перевіряти так:
// Якщо введено пароль "password",
// то вивести рядок "Здрастуйте!"
// інакше виводити рядок "Невірний пароль!"

// const inputLogin = prompt(`введіть логін`);

// if (inputLogin === `admin`) {
//   const inputPassword = prompt(`введіть пароль`);
// } else {
//   alert('Я вас не знаю');
// }

//7. Напишіть цикл, який пропонує ввести
//   число більше 100 через prompt.
//   Якщо відвідувач ввів інше число - попросити
//   Ввести ще раз і так далі.
//   Цикл повинен запитувати число, поки відвідувач не
//   введе число більше 100, або натисне кнопку
//   Скасування в prompt

// let number = prompt('vvedi chislo bolshe 100');
// while (number < 100 && number !== null) {
//   do
//     if (number < 100 && number !== null) {
//       number = prompt('try again');
//     }
//   while (number > 100);
// }

// const str = 'The quick brown fox jumps over the lazy dog.';

// const words = str.split(' ');
// console.log(words[3]);
console.log(`---------------------------------------------------------------`);

// function splitMessage(message, delimiter) {
//   let words;
//   words = message.split(delimiter);

//   return words;
// }

console.log(`---------------------------------------------------------------`);

// splitMessage('Mango hurries to the train', ' ');

// const name = 'Mango';
// console.log(name.split('')); // ["M", "a", "n", "g", "o"]

// const message = 'JavaScript essentials';
// console.log(message.split(' ')); // ["JavaScript", "essentials"]

console.log(`---------------------------------------------------------------`);

// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає рядок, що складається зі слів, розділених лише пробілами (параметр message) та ціну гравірування одного слова (параметр pricePerWord).

// Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// let message = prompt(`введіть свій текст`);

// function calculateEngravingPrice(message, pricePerWord) {
//   let total = 0;
//   let words = message.split(' ');
//   let calcWords = words.length;

//   total = calcWords * pricePerWord;

//   return total;
// }

// console.log(`Це коштує:`, calculateEngravingPrice(`${message}`, 20), `$`);

// let message = 'JavaScript is in my blood';
// let pricePerWord = 10;
// let total = 0;

// let words = message.split(' ');
// console.log(words);

// let calcWords = words.length;
// console.log(calcWords);

// total = Number(calcWords * pricePerWord);
// console.log(total);

console.log(`---------------------------------------------------------------`);

// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title, і повертає slug, створений з цього рядка.
//
// Значенням параметра title будуть рядки, слова яких розділені лише пробілами
// Усі символи slug повинні бути у нижньому регістрі
// Всі слова slug повинні бути розділені тире

let title = 'Arrays for begginers';
console.log(title);

title = title.split(' ');

console.log(title);

let words = title.join('-').toLowerCase();
console.log(words);

function slugify(title) {
  title = title.split(' ');
  let words = title.join('-').toLowerCase();

  return words;
}

console.log(slugify('Arrays for begginers')); //повертає "arrays-for-begginers"

console.log(`---------------------------------------------------------------`);

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

const firstTwoEls = fruits.slice(0, 2);
console.log(firstTwoEls);

const nonExtremeEls = fruits.slice(1, 4);
console.log(nonExtremeEls);

const lastThreeEls = fruits.slice(2, 5);
console.log(lastThreeEls);

console.log(`---------------------------------------------------------------`);

// Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами двох вихідних firstArray і secondArray. Параметр maxLength містить максимально допустиму довжину нового масиву.
//
// Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною maxLength елементів. В іншому випадку функція повинна повернути новий масив повністю.
//

function makeArray(firstArray, secondArray, maxLength) {
  const allArray = firstArray.concat(secondArray);
  let allArrayLength = allArray.length;

  if (allArrayLength > maxLength) {
    let maxLengthArray = allArray.slice(0, maxLength);

    return maxLengthArray;
  }

  return allArray;
}

console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); //повертає ["Mango", "Poly", "Ajax"]

console.log(`-----------------------FOR----------------------------`);

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 2) {
//   console.log(i);
// }

console.log(`---------------------------------------------------------------`);

// Напиши функцію calculateTotal(number), яка приймає ціле число (параметр number) і повертає суму всіх цілих чисел від одиниці і до цього числа. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.
//

// function calculateTotal(number) {
//   let total = 0;

//   for (let i = 1; i <= number; i += 1) {
//     total += i;
//   }
//   return total;
// }

// console.log(calculateTotal(3));

// console.log(`---------------------------forToArray------------------------------------`);

// const planets = ['Earth', 'Mars', 'Venus'];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

console.log(`------------------ОБЧИСЛЕННЯ СУМИ ПОКУПКИ---------------------`);

// Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел, і обчислює загальну суму його елементів. Загальна сума елементів повинна зберігатися у змінній total, яка повертається як результат роботи функції.

function calculateTotalPrice(order) {
  let total = 0;

  //   for (let i = 0; i < order.length; i += 1) {
  //     console.log(order[i]);

  //     total = total + order[i];
  //   }

  //   return total;
  // }

  for (const orders of order) {
    console.log(orders);

    total += orders;
  }
  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4])); //повертає 138

console.log(`------------------ПОШУК НАЙДОВШОГО СЛОВА---------------------`);

// Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.

// function findLongestWord(string) {
//   return string.split(` `).reduce((a, b) => (b.length > a.length ? b : a));
// }

function findLongestWord(string) {
  string = string.split(` `);

  let maxLengthWord = string[0];

  for (let word of string) {
    if (word.length > maxLengthWord.length) {
      maxLengthWord = word;
    }
  }
  return maxLengthWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); //повертає jumped

console.log(`---------------------------------------`);

// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max.

function createArrayOfNumbers(min, max) {
  const numbers = [];

  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }

  return numbers;
}

console.log(createArrayOfNumbers(29, 34));

console.log(`-------------------ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ--------------------`);

//Напиши функцію filterArray(numbers, value), яка приймає масив чисел (параметр numbers) і повертає новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value (число).

// function filterArray(numbers, value) {
//   let filteredNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   const number = numbers[i];

//   if (number > value) {
//     filteredNumbers.push(number);
//   }
// }

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); //повертає [4, 5]

console.log(`-----------------СПІЛЬНІ ЕЛЕМЕНТИ----------------------`);

// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.
//
// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вихідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.
//
// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.

// function getCommonElements(array1, array2) {
//   const newArray = [];

//   for (const element of array1) {
//     if (array2.includes(element)) {
//       newArray.push(element);
//     }
//   }
//   return newArray;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])); // повертає [2]

console.log(`---------------------------------------`);

// Перебери об'єкт apartment, використовуючи цикл for...in, і запиши в масив keys всі його ключі, а в масив values всі значення його властивостей.

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line

// for (let key in apartment) {
//   console.log(key);
//   let keys = key;
// }

// console.log(keys);

console.log(`---------------------------------------`);

const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'rating']

const values = Object.values(book);
console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

const entries = Object.entries(book);
console.log(entries);
// [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]

console.log(`-----------------Масив об'єктів----------------------`);

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'На березі спокійних вод',
    author: 'Роберт Шеклі',
    rating: 8.51,
  },
  {
    title: 'Сон смішної людини',
    author: 'Федір Достоєвський',
    rating: 7.75,
  },
];

for (const book of books) {
  // Об'єкт книги
  // console.log(book);
  // Назва
  // console.log(book.title);
  // Автор
  // console.log(book.author);
  // Рейтинг
  // console.log(book.rating);
}

const bookNames = [];

for (const book of books) {
  bookNames.push(book.title);
}

console.log(bookNames); // ["The Last Kingdom", "На березі спокійних вод", "Сон смішної людини"]

let totalRating = 0;

for (const book of books) {
  totalRating += book.rating;
}

const averageRating = (totalRating / books.length).toFixed(1);
console.log(averageRating); // 8.2

console.log(`---------------------------------------`);
