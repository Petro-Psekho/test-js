// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }

console.log(`------------------------------------------------------------`);

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4

// console.log(animal.legs);

console.log(`------------------------------------------------------------`);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Якщо це власна властивість - виконуємо тіло if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }

//   // Якщо це невласна властивість - нічого не робимо
// }

console.log(`------------------------------------------------------------`);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// console.log(Object.keys(book));

// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значення властивості
//   console.log(book[key]);
// }

console.log(`------------------------------------------------------------`);

// Перебери об'єкт apartment, використовуючи цикл for...in,
// і запиши в масив keys всі його ключі, а в масив values всі значення його властивостей.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// let keys = [];

// let values = [];
// // Change code below this line

// for (let key in apartment) {
//   if (apartment.hasOwnProperty(key)) {
//     keys = Object.keys(apartment);
//     values = Object.values(apartment);
//   }
// }

// console.log(keys);
// console.log(values);

console.log(`------------ПІДРАХУНОК ВЛАСТИВОСТЕЙ--------------`);

//Напиши функцію countProps(object), яка рахує і повертає кількість
//власних властивостей об'єкта в параметрі object.
//Використовуй змінну propCount для зберігання кількості властивостей об'єкта.

// function countProps(object) {
//   let propCount = 0;

//   propCount = Object.values(object);
//   propCount = propCount.length;

//   return propCount;
// }

// console.log(countProps({})); //повертає 0
// console.log(countProps({ name: "Mango", age: 2 })); //повертає 2
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); //повертає 3

console.log(`------------МЕТОД OBJECT.KEYS()--------------`);

// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значення властивості
//   console.log(book[key]);
// }

//Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of.
//Запиши у змінну keys масив ключів власних властивостей об'єкта apartment,
//і додай в масив values всі значення його властивостей.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];

// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

console.log(`------------ВИТРАТИ НА ЗАРПЛАТУ--------------`);

//Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат,
///де ім'я властивості - це ім'я співробітника, а значення властивості - це зарплата.
//Функція повинна розрахувати загальну суму зарплат співробітників і повернути її.
//Використовуй змінну totalSalary для зберігання загальної суми зарплати.

// function countTotalSalary(salaries) {
//   let totalSalary = 0;

//   keys = Object.keys(salaries);

//   for (const key of keys) {
//     totalSalary += salaries[key];
//   }

//   return totalSalary;
// }

// console.log(countTotalSalary({})); //повертає 0
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); //повертає 330
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); //повертає 400

//Функція враховує тільки власні властивості об'єкта

console.log(`------------МАСИВ ОБ'ЄКТІВ--------------`);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//   // Об'єкт книги
//   console.log(book);
//   // Назва
//   console.log(book.title);
//   // Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
// }

// const bookNames = [];

// for (const book of books) {
//   bookNames.push(book.title);
// }

// console.log(bookNames); // ["The Last Kingdom", "На березі спокійних вод", "Сон смішної людини"]

//Перебери масив об'єктів colors, використовуючи цикл for...of.
//Додай у масив hexColors значення властивостей hex,
//а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.

// const colors = [
//   {
//     hex: "#f44336",
//     rgb: "244,67,54",
//   },
//   {
//     hex: "#2196f3",
//     rgb: "33,150,243",
//   },
//   {
//     hex: "#4caf50",
//     rgb: "76,175,80",
//   },
//   {
//     hex: "#ffeb3b",
//     rgb: "255,235,59",
//   },
// ];

// const hexColors = [];
// let rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// Оголошена змінна colors
// Значення змінної colors - це масив
// Оголошена змінна hexColors
// Значення змінної hexColors - це масив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// Оголошена змінна rgbColors
// Значення змінної rgbColors - це масив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

console.log(`------------ПОШУК ОБ'ЄКТА ЗА ЗНАЧЕННЯМ ВЛАСТИВОСТІ--------------`);

//Напиши функцію getProductPrice(productName),
//яка приймає один параметр productName - назва продукту.
//Функція шукає об'єкт продукту з таким ім'ям(властивість name) в масиві products
//і повертає його ціну(властивість price).
//Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product in products) {
//     // Якщо це власна властивість - виконуємо тіло if
//     if (products.hasOwnProperty(product)) {
//       console.log(products.price);
//       return products.price;
//     }
//   }

//   // for (const product of products) {
//   //   if (productName === product.name) {
//   //     console.log(product.price);

//   //     return product.price;
//   //   }
//   // }
// }

// getProductPrice("Radar"); //повертає 1300.
// getProductPrice("Grip"); //повертає 1200.
// getProductPrice("Scanner"); //повертає 2700.
// getProductPrice("Droid"); //повертає 400.
// getProductPrice("Engine"); //повертає null.

console.log(
  `-----------------КОЛЕКЦІЯ ЗНАЧЕНЬ ВЛАСТИВОСТІ----------------------`
);

// Напиши функцію getAllPropValues(propName),
//яка приймає один параметр propName - ім'я (ключ) властивості.
//Функція повинна повернути масив всіх значень властивості
//з таким ім'ям з кожного об'єкта в масиві products.
//Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line

//   const productName = [];
//   for (const product of products) {
// if (Object.keys(product).includes(propName)) {
//       productName.push(product[propName]);
//     }
//   }
//   return productName;

//   // Change code above this line
// }

// console.log(getAllPropValues("name")); // повертає ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("quantity")); // повертає [4, 3, 7, 9]
// console.log(getAllPropValues("price")); // повертає [1300, 2700, 400, 1200]
// console.log(getAllPropValues("category")); // повертає []

console.log(`-----------------ЗАГАЛЬНА ВАРТІСТЬ ТОВАРУ----------------------`);

//Напиши функцію calculateTotalPrice(productName),
//яка приймає один параметр productName - назва товару.
//Функція повинна повернути загальну вартість(ціна * кількість) товару
//з таким ім'ям з масиву products.

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

let totalPrice;

function calculateTotalPrice(productName) {
  for (const product of products) {
    if (product.name === productName) {
      totalPrice = product.price * product.quantity;
      //console.log(totalPrice);
      return totalPrice;
    }
  }
  return 0;
}

console.log(calculateTotalPrice("Blaster")); //  повертає 0
console.log(calculateTotalPrice("Radar")); // повертає 5200
console.log(calculateTotalPrice("Droid")); // повертає 2800
console.log(calculateTotalPrice("Grip")); // повертає 10800
console.log(calculateTotalPrice("Scanner")); // повертає 8100

console.log(`-----------------ЗМІНА ІМЕНІ ЗМІННОЇ----------------------`);

// const firstBook = {
//   title: "Останнє королівство",
//   coverImage:
//     "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };

// const {
//   title: firstTitle,
//   coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
// } = firstBook;

// console.log(firstTitle); // Останнє королівство
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

// const secondBook = {
//   title: "Сон смішної людини",
// };

// const {
//   title: secondTitle,
//   coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
// } = secondBook;

// console.log(secondTitle); // Сон смішної людини
// console.log(secondCoverImage); // https://via.placeholder.com/640/480

console.log(`-----------------ДЕСТРУКТУРИЗАЦІЯ В ЦИКЛАХ----------------------`);

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
];

// for (const book of books) {
//   console.log(book.title);
//   console.log(book.author);
//   console.log(book.rating);
// }

//Для того щоб скоротити кількість повторень,
//можна деструктуризувати властивості об'єкта у локальні змінні в тілі циклу.

// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

//Якщо об'єкт містить небагато властивостей,
//деструктуризація можна виконати безпосередньо в місці оголошення змінної book.

for (const { title, author, rating } of books) {
  console.log(title);
  console.log(author);
  console.log(rating);
}

//Виконай рефакторинг циклу for...of таким чином,
//щоб в ньому використовувалася деструктуризація об'єкта.

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const { hex, rgb } of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}

console.log(hexColors);
console.log(rgbColors);

console.log(`-----------------КАРТКИ ЗАВДАНЬ----------------------`);

//Напиши функцію makeTask(data) яка приймає один параметр data - об'єкт з наступними властивостями.

//text - текст завдання.
//category - категорія завдання.
//priority - пріоритет завдання.

//Функція повинна створити і повернути новий об'єкт завдання,
//не змінюючи напряму параметр data.
//У новому об'єкті повинна бути властивість completed,
//значення якої зберігається в однойменній локальній змінній.

//В параметрі data гарантовано буде тільки властивість text,
//а інші дві, category і priority, можуть бути відсутніми.
//Тоді, в новому об'єкті завдання, у властивостях category і priority
//повинні бути значення за замовчуванням, що зберігаються в однойменних локальних змінних.

function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line

  const newTask = { category, priority, completed };
  console.log(newTask);

  return { ...newTask, ...data };
  // Change code above this line
}

//console.log(makeTask({}));
//повертає { category: "General", priority: "Normal", completed: false }

console.log(
  makeTask({
    category: "Homemade",
    priority: "Low",
    text: "Take out the trash",
  })
);
//повертає { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }

console.log(makeTask({ category: "Finance", text: "Take interest" }));
//повертає { category: "Finance", priority: "Normal", text: "Take interest", completed: false }

//?console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
//повертає { category: "General", priority: "Low", text: "Choose shampoo", completed: false }

//console.log(makeTask({ text: "Buy bread" }));
//повертає { category: "General", priority: "Normal", text: "Buy bread", completed: false }

console.log(
  `-----------------ОПЕРАЦІЯ REST ДЛЯ ЗБИРАННЯ ВСІХ АРГУМЕНТІВ ФУНКЦІЇ----------------------`
);

function multiply(...args) {
  console.log(args); // масив усіх аргументів
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);

//Використовуючи операцію rest, доповни код функції add() таким чином,
//щоб вона приймала будь - яку кількість аргументів, рахувала і повертала їх суму.

function add(...args) {
  let addSum = 0;

  for (const arg of args) {
    addSum += arg;
  }
  return addSum;
}

console.log(add(15, 27)); //повертає 42
console.log(add(12, 4, 11, 48)); //повертає 75
console.log(add(32, 6, 13, 19, 8)); //повертає 78
console.log(add(74, 11, 62, 46, 12, 36)); //повертає 241

console.log(
  `-----------------ОПЕРАЦІЯ REST ДЛЯ ЗБИРАННЯ ЧАСТИНИ АРГУМЕНТІВ ФУНКЦІЇ----------------------`
);

//Функція addOverNum() рахує суму всіх аргументів.
//Зміни параметри і тіло функції addOverNum() таким чином,
//щоб вона рахувала суму тільки тих аргументів, які більші за задане число.
//Це число повинно бути першим параметром функції.

function addOverNum(firstNumber, ...args) {
  let total = 0;

  for (const arg of args) {
    if (firstNumber < arg) {
      total += arg;
    }
  }

  return total;
}

console.log(addOverNum(50, 15, 27)); //повертає 0
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); //повертає 71
console.log(addOverNum(15, 32, 6, 13, 19, 8)); //повертає 51
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); //повертає 218

console.log(`-----------------МАСИВ ЗБІГІВ----------------------`);

//Функція findMatches() приймає довільну кількість аргументів.
//Першим аргументом завжди буде масив чисел, а решта аргументів будуть просто числами.

//Доповни код функції таким чином, щоб вона повертала новий масив matches,
//в якому будуть тільки ті аргументи, починаючи з другого, які є в масиві першого аргументу.

//Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути масив [1, 2],
//тому що тільки вони є в масиві першого аргументу.

function findMatches(...args) {
  const matches = []; // Don't change this line

  console.log(args);
  // Change code above this line
  return matches;
}

console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)); //повертає [1, 2]
console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)); //повертає [17, 89, 2]
console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)); //повертає [24, 9, 41]
console.log(findMatches([63, 11, 8, 29], 4, 7, 16)); //повертає []

console.log(`-----------------МАСИВ ЗБІГІВ----------------------`);
