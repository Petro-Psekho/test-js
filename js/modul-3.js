// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// console.log(book);

// const bookTitle = book.title;
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book.genres;
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const bookPrice = book.price;
// console.log(bookPrice); // undefined

const user = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: {
    country: 'Jamaica',
    city: 'Ocho Rios',
  },
  hobbies: ['swiming', 'music', 'sci-fi'],
};

// const location = user.location;
// console.log(location); // Об'єкт location

const country = user.location.country;
console.log(country); // 'Jamaica'

const hobbies = user.hobbies;
console.log(hobbies); // ['swiming', 'music', 'sci-fi']

const firstHobby = user.hobbies[0];
console.log(firstHobby); // 'swiming'

const numberOfHobbies = user.hobbies.length;
console.log(numberOfHobbies); // 3

console.log(`-----------------КОЛЕКЦІЯ ЗНАЧЕНЬ ВЛАСТИВОСТІ----------------------`);

// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  const productName = [];
  for (const product of products) {
    if (Object.keys(product).includes(propName)) {
      productName.push(product[propName]);
    }
  }
  return productName;
}

console.log(getAllPropValues('name')); // повертає ["Radar", "Scanner", "Droid", "Grip"]
console.log(getAllPropValues('quantity')); // повертає [4, 3, 7, 9]
console.log(getAllPropValues('price')); // повертає [1300, 2700, 400, 1200]
console.log(getAllPropValues('category')); // повертає []

console.log(`-----------------ОПЕРАЦІЯ SPREAD ПРИ ПЕРЕДАЧІ АРГУМЕНТІВ----------------------`);

//Синтаксис ... (spread)

const temps = [14, -4, 25, 8, 11];

// В консолі буде масив
console.log(temps);
// ❌ Так не спрацює, тому що передаємо цілий масив
console.log(Math.max(temps)); // NaN

// В консолі буде набір окремих чисел
console.log(...temps);
// ✅ Розподілимо колекцію елементів у якості окремих аргументів
console.log(Math.max(...temps)); // 25

console.log(`-----------------МАСИВ ЗБІГІВ----------------------`);

//Функція findMatches() приймає довільну кількість аргументів.
//Першим аргументом завжди буде масив чисел, а решта аргументів будуть просто числами.

//Доповни код функції таким чином, щоб вона повертала новий масив matches,
//в якому будуть тільки ті аргументи, починаючи з другого, які є в масиві першого аргументу.

//Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути масив [1, 2],
//тому що тільки вони є в масиві першого аргументу.

function findMatches(array, ...args) {
  const matches = [];

  console.log(array);
  console.log(args);

  for (const arr of array) {
    for (const arg of args) {
      if (arr === arg) {
        matches.push(arg);
      }
    }
  }
  return matches;
}

console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)); //повертає [1, 2]
console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)); //повертає [17, 89, 2]
console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)); //повертає [24, 9, 41]
console.log(findMatches([63, 11, 8, 29], 4, 7, 16)); //повертає []

console.log(`-----------------МЕТОДИ ОБ'ЄКТА----------------------`);

// Додай об'єкту bookShelf ще два методи, які поки що будуть повертати просто рядки за аналогією з getBooks() і addBook(bookName).

// Метод removeBook(bookName) буде видаляти книгу за назвою. Повертає рядок "Deleting book <назва книги>", де <назва книги> - це значення параметра bookName.

// Метод updateBook(oldName, newName) буде оновлювати назву книги на нову. Повертає рядок "Updating book <стара назва> to <нова назва>", де <стара назва> і <нова назва> - це значення параметрів oldName і newName відповідно.

//const bookShelf = {
//  books: ['The last kingdom', 'The guardian of dreams'],
//  getBooks() {
//    return 'Returning all books';
//  },
//  addBook(bookName) {
//    return `Adding book ${bookName}`;
//  },
//  removeBook(bookName) {
//    return `Deleting book ${bookName}`;
//  },
//  updateBook(oldName, newName) {
//    return `Updating book ${oldName} to ${newName}`;
//  },
//};
//
//console.log(bookShelf.getBooks()); //повертає рядок "Returning all books"
//console.log(bookShelf.addBook('Haze')); //повертає рядок "Adding book Haze"
//console.log(bookShelf.removeBook('Red sunset')); //повертає рядок "Deleting book Red sunset"
//console.log(bookShelf.updateBook('Sands of dune', 'Dune')); //повертає рядок "Updating book Sands of dune to Dune"

console.log(`---------ДОСТУП ДО ВЛАСТИВОСТЕЙ ОБ'ЄКТА В ЙОГО МЕТОДАХ (this)------------`);

//Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював назву книги з oldName на newName у властивості books. Використовуй indexOf() для того, щоб знайти потрібний елемент масиву, і splice() для того, щоб замінити цей елемент.

const bookShelf = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
  updateBook(oldName, newName) {
    this.books.splice(this.books.indexOf(oldName), 1, newName);
  },
};

console.log(bookShelf.updateBook('Haze', 'Dungeon chronicles')); //значення властивості books - це масив ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

console.log(bookShelf.updateBook('The last kingdom', 'Dune')); //значення властивості books - це масив ["Dune", "Haze", "The guardian of dreams"]

console.log(`---------------------------------ОТРИМУЄМО ВСЕ ЗІЛЛЯ--------------------------------`);

//Додай об'єкту atTheOldToad метод getPotions(), який просто повертає значення властивості potions.

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   // Change code below this line
//   getPotions() {
//     return atTheOldToad.potions;
//   },

//   // Change code above this line
// };

// console.log(atTheOldToad.potions); //це масив ["Speed potion", "Dragon breath", "Stone skin"]
// console.log(atTheOldToad.getPotions()); //повертає ["Speed potion", "Dragon breath", "Stone skin"]

console.log(`----------------------------------ДОДАЄМО НОВЕ ЗІЛЛЯ--------------------------------`);

//Доповни метод addPotion(potionName) таким чином, щоб він додавав зілля potionName в кінець масиву зілля у властивості potions.

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   addPotion(potionName) {
//     // Change code below this line

//     this.potions.push(potionName);

//     // Change code above this line
//   },
// };

// console.log(atTheOldToad.potions); //це масив ["Speed potion", "Dragon breath", "Stone skin"]

// console.log(atTheOldToad.addPotion('Invisibility')); //у властивості potions буде масив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]

// console.log(atTheOldToad.addPotion('Power potion')); //у властивості potions буде масив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility", "Power potion"]

console.log(`----------------------------------ВИДАЛЯЄМО ЗІЛЛЯ--------------------------------`);

//Доповни метод removePotion(potionName) таким чином, щоб він видаляв зілля potionName з масиву зілля у властивості potions.

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   removePotion(potionName) {
//     // Change code below this line
//     this.potions.splice(this.potions.indexOf(potionName), 1);

//     // Change code above this line
//   },
// };

// console.log(atTheOldToad.potions); //це масив ["Speed potion", "Dragon breath", "Stone skin"]

// console.log(atTheOldToad.removePotion('Dragon breath')); //у властивості potions буде масив ["Speed potion", Stone skin"]
// console.log(atTheOldToad.removePotion('Speed potion')); //у властивості potions буде масив ["Stone skin"]

console.log(`-------------------------------ОНОВЛЮЄМО ЗІЛЛЯ--------------------------------`);

//Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     this.potions.splice(this.potions.indexOf(oldName), 1, newName);
//     // Change code above this line
//   },
// };

// console.log(atTheOldToad.potions); //це масив ["Speed potion", "Dragon breath", "Stone skin"]

console.log(`-----------------------------РОЗШИРЮЄМО ІНВЕНТАР--------------------------------`);
//Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною, а в майбутньому, можливо, й іншими характеристиками. Тому зараз у властивості potions буде зберігатися масив об'єктів з наступними властивостями.

const atTheOldToad = {
  potions: [
    {
      name: 'Speed potion',
      price: 460,
    },
    {
      name: 'Dragon breath',
      price: 780,
    },
    {
      name: 'Stone skin',
      price: 520,
    },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },

  addPotion(newPotion) {
    for (const { name } of this.potions) {
      if (name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      const potion = this.potions[i];
      if (potion.name === potionName) {
        this.potions.splice(i, 1);
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    for (let index = 0; index < this.potions.length; index++) {
      const potion = this.potions[index];
      if (potion.name === oldName) {
        return (potion.name = newName);
      }
    }
  },
  // Change code above this line
};

//console.log(atTheOldToad.getPotions());

console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));

console.log(`-----------------------------РОЗШИРЮЄМО ІНВЕНТАР--------------------------------`);
