console.log(`--------------------- (this) -------------------------------`);

//Всередині функцій можна використовувати зарезервоване ключове слово this. Під час виконання функції, в this записується посилання на об'єкт, в контексті якого вона була викликана. Таким чином, в тілі функції ми можемо отримати доступ до властивостей і методів цього об'єкта.

const bookShelf = {
  authors: ['Bernard Cornwell', 'Robert Sheckley'],
  getAuthors() {
    return this.authors;
  },
  addAuthor(authorName) {
    this.authors.push(authorName);
  },
};

console.log(bookShelf.getAuthors()); // ["Bernard Cornwell", "Robert Sheckley"]
bookShelf.addAuthor('Tanith Lee');
console.log(bookShelf.getAuthors()); // ["Bernard Cornwell", "Robert Sheckley", "Tanith Lee"]

//Методи getAuthors і addAuthor - це функції (методи об'єкта), які викликаються в контексті об'єкта bookShelf. Під час їх виконання в this записується посилання на об'єкт bookShelf і ми можемо звернутися до його властивостей і методів.

console.log(`====================== 1/20 ================================`);

//Виконай рефакторинг методів об'єкта pizzaPalace, розставивши відсутні this в місцях звернення до властивостей і методів об'єкта.

const pizzaPalace = {
  pizzas: ['Supercheese', 'Smoked', 'Four meats'],

  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
};

//  Метод checkPizza об'єкта pizzaPalace використовує this.
// Метод order об'єкта pizzaPalace використовує this

console.log(pizzaPalace.order('Smoked')); // повертає рядок "Order accepted, preparing «Smoked» pizza"
console.log(pizzaPalace.order('Four meats')); // повертає рядок "Order accepted, preparing «Four meats» pizza"
console.log(pizzaPalace.order('Big Mike')); // повертає рядок "Sorry, there is no pizza named «Big Mike»"
console.log(pizzaPalace.order('Viennese')); // повертає рядок "Sorry, there is no pizza named «Viennese»"

console.log(`====================== 2/20 ================================`);

// Перед звільненням розробник зламав вихідний код управління акаунтами користувачів нашого сервісу доставки їжі. Виконай рефакторинг методів об'єкта customer, розставивши відсутні this під час звернення до властивостей об'єкта.

// Після оголошення об'єкта ми додали виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

const customer = {
  username: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['Burger', 'Pizza', 'Salad'],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15 --- повертає поточне значення властивості discount
customer.addOrder(5000, 'Steak'); // додає "Steak" в масив значень властивості orders і оновлює баланс
console.log(customer.getBalance()); // 19750 --- повертає поточне значення властивості balance
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"] --- повертає поточне значення властивості orders

// Оголошена змінна customer
// Значення змінної customer - це об'єкт з властивостями і методами
// Метод getBalance об'єкта customer використовує this
// Метод getDiscount об'єкта customer використовує this
// Метод setDiscount об'єкта customer використовує this
// Метод getOrders об'єкта customer використовує this
// Метод addOrder об'єкта customer використовує this

console.log(`====================== 3/20 ================================`);

//Тестувальники знайшли баги в коді сервісу зберігання історії замовлень їжі. Тобі необхідно виправити їх, правильно розставивши this в методах об'єкта historyService, щоб методи почали працювати правильно.

const historyService = {
  orders: [
    { email: 'jacob@hotmail.com', dish: 'Burrito' },
    { email: 'solomon@topmail.net', dish: 'Burger' },
    { email: 'artemis@coldmail.net', dish: 'Pizza' },
    { email: 'solomon@topmail.net', dish: 'Apple pie' },
    { email: 'jacob@hotmail.com', dish: 'Taco' },
  ],
  // Change code below this line
  getOrdersLog() {
    return this.orders
      .map(order => `email: ${order.email} dish: ${order.dish}`)
      .join(' - ');
  },
  getEmails() {
    const emails = this.orders.map(order => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return this.orders.filter(order => order.email === email);
  },
  // Change code above this line
};

console.log(historyService.getOrdersLog()); // повертає рядок з переліком даних всіх замовлень з властивості orders
console.log(historyService.getEmails()); // повертає масив всіх унікальних поштових адрес з властивості orders

console.log(historyService.getOrdersByEmail('solomon@topmail.net')); // повертає [{ email: "solomon@topmail.net", dish: "Burger" }, { email: "solomon@topmail.net", dish: "Apple pie" }]

console.log(historyService.getOrdersByEmail('artemis@coldmail.net')); // повертає [{ email: "artemis@coldmail.net", dish: "Pizza" }]

// Метод getOrdersLog об'єкта historyService використовує this
// Метод getEmails об'єкта historyService використовує this
// Метод getOrdersByEmail об'єкта historyService використовує this

console.log(`====================== 4/20 ================================`);

// Зміни код таким чином, щоб об'єкт parent став прототипом для об'єкта у змінній сhild.

// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish',
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = 'Jason';
// child.age = 27;

// console.log(parent.hasOwnProperty('surname')); // повертає true
// console.log(parent.hasOwnProperty('heritage')); // повертає true
// console.log(child.hasOwnProperty('name')); // повертає true
// console.log(child.name); // повертає "Jason"
// console.log(child.hasOwnProperty('age')); // повертає true
// console.log(child.age); // повертає 27
// console.log(child.hasOwnProperty('surname')); // повертає false
// console.log(child.surname); // повертає "Moore"
// console.log(child.hasOwnProperty('heritage')); // повертає false
// console.log(child.heritage); // повертає "Irish"
// console.log(parent.isPrototypeOf(child)); // повертає true
// Використовується метод Object.create()

console.log(`----------------- ЛАНЦЮЖОК ПРОТОТИПІВ ----------------------`);
console.log(`====================== 5/20 ================================`);

//Зміни код, побудувавши ланцюжок прототипів таким чином, щоб об'єкт ancestor був прототипом для parent, а той, своєю чергою, був прототипом для child.

const ancestor = {
  name: 'Paul',
  age: 83,
  surname: 'Dawson',
  heritage: 'Irish',
};
// Change code below this line

const parent = Object.create(ancestor);
parent.name = 'Stacey';
parent.surname = 'Moore';
parent.age = 54;

const child = Object.create(parent);
child.name = 'Jason';
child.age = 27;

// Change code above this line

console.log(ancestor.isPrototypeOf('parent')); // повертає true
console.log(parent.isPrototypeOf('child')); // повертає true
console.log(ancestor.hasOwnProperty('surname')); // повертає true
console.log(ancestor.surname); // повертає "Dawson"
console.log(parent.hasOwnProperty('surname')); // повертає true
console.log(parent.surname); // повертає "Moore"
console.log(child.hasOwnProperty('surname')); // повертає false
console.log(child.surname); // повертає "Moore"
console.log(ancestor.hasOwnProperty('heritage')); // повертає true
console.log(ancestor.heritage); // повертає "Irish"
console.log(parent.hasOwnProperty('heritage')); // повертає false
console.log(parent.heritage); // повертає "Irish"
console.log(child.hasOwnProperty('heritage')); // повертає false
console.log(child.heritage); // повертає "Irish"
//Використовується метод Object.create()

console.log(`-------------------------- class ---------------------------`);

// Синтаксис літерала об'єкта дозволяє створити один об'єкт. Проте, часто потрібно створити багато однотипних об'єктів з однаковим набором властивостей, але різними значеннями і методами для взаємодії з ними. Все це потрібно робити динамічно, під час виконання програми. З цією метою використовують класи - спеціальний синтаксис оголошення функції для створення об'єктів.

// Оголошення класу починається з ключового слова class, після якого стоїть ім'я класу і фігурні дужки - його тіло. Класи прийнято називати з великої літери, а у назві відображати тип об'єкта (іменник), що створюється.

// class User {
//   // Тіло класу
// }

// const mango = new User();
// console.log(mango); // {}

// const poly = new User();
// console.log(poly); // {}

//Результат виклику new User() - це об'єкт, який називається екземпляром класу, тому що містить дані і поведінку, що описуються класом.

console.log(`========================== 6/20 ============================`);

// Використовуючи ключове слово class, оголоси клас Car з порожнім тілом.

// class Car {}

// console.log(new Car()); // порожній об'єкт

console.log(`------------------- метод constructor ----------------------`);

// Для ініціалізації екземпляра в класі є метод constructor. Якщо він неоголошений, створюється конструктор за замовчуванням - порожня функція, яка не змінює екземпляр.

// class User {
//   // Синтаксис оголошення методу класу
//   constructor(name, email) {
//     // Ініціалізація властивостей екземпляра
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User('Mango', 'mango@mail.com');
// console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

// const poly = new User('Poly', 'poly@mail.com');
// console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }

// Виклик класу з оператором new призводить до створення нового об'єкта і виклику конструктора в контексті цього об'єкта. Тобто this всередині конструктора буде посилатися на новостворений об'єкт. Це дозволяє додавати кожному об'єкту властивості з однаковими іменами, але різними значеннями.

// Властивості name та email називаються публічними властивостями, тому що вони будуть власними властивостями об'єкта-екземпляра і до них можна буде отримати доступ, звернувшись через крапку.

console.log(`========================== 7/20 ============================`);

// Додай класу Car метод constructor, який приймає три параметри:

// brand - марка автомобіля.
// model - модель автомобіля.
// price - ціна автомобіля.

// Клас Car повинен створювати об'єкт з однойменними властивостями brand, model і price, значеннями яких повинні бути передані аргументи під час його виклику з оператором new.

// class Car {
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

// // Оголошений клас Car
// // Клас Car має метод constructor
// console.log(new Car('Audi', 'Q3', 36000)); // утвориться об'єкт { brand: "Audi", model: "Q3", price: 36000 }
// console.log(new Car('BMW', 'X5', 58900)); // утвориться об'єкт { brand: "BMW", model: "X5", price: 58900 }
// console.log(new Car('Nissan', 'Murano', 31700)); // утвориться об'єкт { brand: "Nissan", model: "Murano", price: 31700 }

console.log(`---------------- ({ Об'єкт параметрів }) -------------------`);

//Клас може приймати велику кількість вхідних даних для властивостей майбутнього об'єкта. Якщо параметрів багато (більше 2-х), то, як правило, застосовують патерн «Об'єкт параметрів». Ідея цього патерну у тому, щоб передавати як параметр один об'єкт з логічно іменованими властивостями. Значення властивостей такого об'єкта замінять набір аргументів.

// class User {
//   // Деструктуризуємо об'єкт
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });
// console.log(mango); // { name: "Mango", email: "mango@mail.com" }

// const poly = new User({
//   name: 'Poly',
//   email: 'poly@mail.com',
// });
// console.log(poly); // { name: "Poly", email: "poly@mail.com" }

console.log(`========================== 8/20 ============================`);

//Виконай рефакторинг класу Car таким чином, щоб він приймав один параметр - об'єкт з властивостями brand, model і price. Деструктуризуй об'єкт в сигнатурі (підписі) конструктора.

// class Car {
//   // Change code below this line
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }

// // Оголошений клас Car
// // Клас Car має метод constructor
// console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 })); // утвориться об'єкт { brand: "Audi", model: "Q3", price: 36000 }
// console.log(new Car({ brand: 'BMW', model: 'X5', price: 58900 })); // утвориться об'єкт { brand: "BMW", model: "X5", price: 58900 }
// console.log(new Car({ brand: 'Nissan', model: 'Murano', price: 31700 })); // утвориться об'єкт { brand: "Nissan", model: "Murano", price: 31700 }

console.log(`---------------------- методи класу ------------------------`);

// Для роботи з властивостями майбутнього екземпляра використовуються методи класу. Методи - це просто функції, але з однією відмінністю - вони доступні екземпляру класу.

// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }

//   // Метод getEmail
//   getEmail() {
//     return this.email;
//   }

//   // Метод changeEmail
//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

console.log(`========================== 9/20 ============================`);

// Додай класу Car два методи.

// getPrice() - повертає значення властивості price з об'єкта, який буде його викликати.
// changePrice(newPrice) - оновлює значення властивості price в об'єкта, який буде його викликати на newPrice.

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }

//   // Change code above this line
// }

// В класі Car оголошений метод getPrice
// Метод getPrice повертає значення властивості price екземпляра класу, який його викликає
// В класі Car оголошений метод changePrice
// Метод changePrice змінює значення властивості price екземпляра класу, який його викликає

console.log(`========================= 10/20 ============================`);

// Напиши клас Storage, який буде створювати об'єкти для управління складом товарів. Клас очікує тільки один аргумент - початковий масив товарів, який записується у властивість items об'єкта, що створюється.

// Оголоси наступні методи класу:

// getItems() - повертає масив поточних товарів у властивості items об'єкта, який викликає цей метод.
// addItem(newItem) - приймає новий товар newItem і додає його в масив товарів у властивості items об'єкта, який викликає цей метод.
// removeItem(itemToRemove) - приймає товар itemToRemove і видаляє його з масиву товарів у властивості items об'єкта, який викликає цей метод.
// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }

//   addItem(newItem) {
//     this.items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     // https://web-dev.guru/javascript/javascript-kak-udalit-jelement-massiva/
//     // const index = this.items.indexOf(itemToRemove);

//     this.items.splice(this.items.indexOf(itemToRemove), 1);
//   }
// }

// // Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// Оголошений клас Storage
// В класі Storage оголошений метод getItems
// В класі Storage оголошений метод addItem
// В класі Storage оголошений метод removeItem
// Метод getItems повертає значення властивості items екземпляра класу, який його викликає
// Метод addItem змінює властивість items екземпляра класу, який його викликає
// Метод removeItem змінює властивість items екземпляра класу, який його викликає
// В результаті виклику new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) значення змінної storage - це об'єкт
// Об'єкт storage містить властивість items
// Перший виклик storage.getItems(), відразу після інціалізаціі екземпляра, повертає масив ["Nanitoids", "Prolonger", "Antigravitator"]
// Другий виклик, storage.getItems(), після виклику storage.addItem("Droid"), повертає масив ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// Третій виклик storage.getItems(), після виклику storage.removeItem("Prolonger"), повертає масив ["Nanitoids", "Antigravitator", "Droid"]

console.log(`========================= 11/20 ============================`);

// Напиши клас StringBuilder, який приймає один параметр initialValue - довільний рядок, який записується у властивість value об'єкта, що створюється.

// Оголоси наступні методи класу:

// getValue() - повертає поточне значення властивості value.
// padEnd(str) - отримує параметр str (рядок) і додає його в кінець значення властивості value об'єкта, який викликає цей метод.
// padStart(str) - отримує параметр str (рядок) і додає його на початок значення властивості value об'єкта, який викликає цей метод.
// padBoth(str) - отримує параметр str (рядок) і додає його на початок і в кінець значення властивості value об'єкта, який викликає цей метод.
// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// class StringBuilder {
//   constructor(value) {
//     this.value = value;
//   }

//   getValue() {
//     return this.value;
//   }

//   padEnd(str) {
//     this.value = this.value + str;
//     // this.value = this.value + this.value.replace(this.value, str);
//   }

//   padStart(str) {
//     this.value = str + this.value;
//     //this.value = this.value.replace(this.value, str) + this.value;
//   }

//   padBoth(str) {
//     this.value = str + this.value + str;

//     //this.value = this.value.replace(this.value, str) + this.value + this.value.replace(this.value, str);
//   }
// }

// // Change code above this line
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

// Оголошений клас StringBuilder
// В класі StringBuilder оголошений метод getValue
// Метод getValue повертає значення властивості value екземпляра класу, який його викликає
// В класі StringBuilder оголошений метод padEnd
// Метод padEnd змінює властивість value екземпляра класу, який його викликає
// В класі StringBuilder оголошений метод padStart
// Метод padStart змінює властивість value екземпляра класу, який його викликає
// В класі StringBuilder оголошений метод padBoth
// Метод padBoth змінює властивість value екземпляра класу, який його викликає
// В результаті виклику new StringBuilder(".") значення змінної builder - це об'єкт
// Об'єкт builder містить властивість value
// Перший виклик builder.getValue(), відразу після ініціалізації екземпляра, повертає рядок .
// Другий виклик builder.getValue(), після виклику builder.padStart("^"), повертає рядок ^.
// Третій виклик builder.getValue(), після виклику builder.padEnd("^"), повертає рядок ^.^
// Четвертий виклик builder.getValue(), після виклику builder.padBoth("="), повертає рядок =^.^=

console.log(`---------------------- Інкапсуляція ------------------------`);

// Інкапсуляція — це концепція, що дозволяє приховати те, як влаштований клас. Користувач класу повинен отримувати доступ тільки до публічного інтерфейсу - набору публічних властивостей і методів класу. Решта методів і властивостей (не публічних) повинні бути недоступні.

// В класах інкапсуляція реалізується приватними властивостями, доступ до яких можна отримати тільки всередині класу.

// Припустимо, що пошта користувача повинна бути недоступною для прямої зміни зовні, тобто - приватною. Додаючи до імені властивості символ #, ми робимо її приватною. Оголошення приватної властивості до ініціалізації в конструкторі - обов'язкове.

// class User {
//   // Необов'язкове оголошення публічних властивостей
//   name;
//   // Обов'язкове оголошення приватних властивостей
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });
// mango.changeEmail('mango@supermail.com');
// console.log(mango.getEmail()); // mango@supermail.com
// //? console.log(mango.#email); // Виникне помилка, це приватна властивість

//Методи класу також можуть бути приватними, тобто доступні тільки у тілі класу. Для цього, перед їхнім ім'ям необхідно поставити символ #.

console.log(`========================= 12/20 ============================`);

//Виконай рефакторинг класу Car таким чином, щоб властивість brand була приватною, і додай два методи для публічного інтерфейсу, для читання і зміни цієї властивості.

// getBrand() - повертає значення приватної властивості brand.
// changeBrand(newBrand) - змінює значення приватної властивості brand на newBrand.

// class Car {
//   // Change code below this line

//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }

//   // Change code above this line
// }

// // Оголошений клас Car
// // Властивість brand в класі Car оголошена приватною
// // Конструктор класу приймає об'єкт з властивостями brand, model і price

// console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 })); // утвориться об'єкт { model: "Q3", price: 36000 }

// console.log(new Car({ brand: 'bmw', model: 'X5', price: 58900 })); // утвориться об'єкт { model: "X5", price: 58900 }

// console.log(new Car({ brand: 'Nissan', model: 'Murano', price: 31700 })); // утвориться об'єкт { model: "Murano", price: 31700 }

// В екземпляра відсутня публічна властивість brand
// Метод getBrand() повертає значення приватної властивості brand.
// Метод changeBrand("Honda") змінює значення приватної властивості brand на "Honda"

console.log(`========================= 13/20 ============================`);

// Виконай рефакторинг класу Storage, зробивши властивість items приватною.

// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

class Storage {
  // Change code below this line

  #items;

  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }
}

// Change code above this line
const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

// Оголошений клас Storage
// Об'єкт storage не містить властивості items
// В класі Storage оголошений метод getItems
// В класі Storage оголошений метод addItem
// В класі Storage оголошений метод removeItem
// Властивість items в класі Storage оголошена приватною
// Конструктор класу приймає властивість items
// В результаті виклику new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) значення змінної storage - це об'єкт
// Перший виклик storage.getItems(), відразу після ініціалізації екземпляра, повертає масив ["Nanitoids", "Prolonger", "Antigravitator"]
// Другий виклик, storage.getItems(), після виклику storage.addItem("Droid"), повертає масив ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// Третій виклик storage.getItems(), після виклику storage.removeItem("Prolonger"), повертає масив ["Nanitoids", "Antigravitator", "Droid"]

console.log(`========================= 14/20 ============================`);

// Виконай рефакторинг класу StringBuilder, зробивши властивість value приватною.

// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

class StringBuilder {
  // Change code below this line

  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value += str;
  }

  padStart(str) {
    this.#value = str + this.#value;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

// Change code above this line
const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="

//Оголошений клас StringBuilder

//Властивість value в класі StringBuilder оголошена приватною

//В класі StringBuilder оголошений метод getValue

//В класі StringBuilder оголошений метод padEnd

//В класі StringBuilder оголошений метод padStart

//В класі StringBuilder оголошений метод padBoth

//В результаті виклику new StringBuilder('.') значення змінної builder - це об'єкт

//Об'єкт builder не містить властивості value

//Перший виклик builder.getValue(), відразу після ініціалізації екземпляра, повертає рядок .

//Другий виклик builder.getValue(), після виклику builder.padStart("^"), повертає рядок ^.

//Третій виклик builder.getValue(), після виклику builder.padEnd("^"), повертає рядок ^.^

//Четвертий виклик builder.getValue(), після виклику builder.padBoth("="), повертає рядок =^.^=

console.log(`-------------------- Гетери та сетери ----------------------`);

//Гетери та сетери — це коротший синтаксис оголошення методів для взаємодії з властивостями. Геттер і сетер імітують звичайну публічну властивість класу, але дозволяють змінювати інші властивості зручнішим способом. Геттер виконується при спробі отримати значення властивості, а сетер - при спробі його змінити.

//Гетери та сетери доречно використовувати для простих операцій читання і зміни значення властивостей, особливо приватних, як їх публічний інтерфейс. Для роботи з властивістю, яка зберігає масив або об'єкт, вони не підійдуть.

class User {
  #email;
  name;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  // Геттер email
  get email() {
    return this.#email;
  }

  // Сеттер email
  set email(newEmail) {
    this.#email = newEmail;
  }

  // Геттер name
  get name() {
    return this.name;
  }

  // Сеттер name
  set name(newName) {
    this.name = newName;
  }
}

// Ми оголосили гетер і сетер email, поставивши перед ім'ям властивості ключові слова get і set. Всередині цих методів ми або повертаємо значення приватної властивості #email, або змінюємо її значення. Геттер і сетер застосовуються в парі та повинні називатися однаково.

const mango = new User({ name: 'Mango', email: 'mango@mail.com' });
console.log(mango.email); // mango@mail.com
console.log(mango.name); // Mango
mango.email = 'mango@supermail.com';
console.log(mango.email); // mango@supermail.com
mango.name = 'Patrick';
console.log(mango.name); // Patrick

//Звертаючись до mango.email, викликається гетер get email() {...} і виконується його код. При спробі запису mango.email = "mango@supermail.com" викликається сетер set email(newEmail) {...} і рядок "mango@supermail.com" буде значенням параметра newEmail.

//Перевага в тому, що це методи, а значить, під час запису можна виконати додатковий код, наприклад, з будь-якими перевірками, на відміну від виконання цієї ж операції безпосередньо з властивістю.

// set email(newEmail) {
//   if(newEmail === "") {
//     console.error("Помилка! Пошта не може бути порожнім рядком!");
//     return;
//   }

//   this.#email = newEmail;
// }

console.log(`========================= 15/20 ============================`);

//Виконай рефакторинг класу Car. Зроби властивості model і price приватними, а також #brand. Стандартизуй публічний інтерфейс класу, замінивши вже оголошені методи на гетери та сетери brand, model і price, для взаємодії з приватними властивостями.

class Car {
  // Change code below this line
  #brand;
  #model;
  #price;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  // getBrand() {
  //   return this.#brand;
  // }

  // changeBrand(newBrand) {
  //   this.#brand = newBrand;
  // }

  // Геттер brand
  get brand() {
    return this.#brand;
  }

  // Сеттер brand
  set brand(newBrand) {
    this.#brand = newBrand;
  }

  getModel() {
    return this.#model;
  }

  updateModel(newModel) {
    this.#model = newModel;
  }

  getPrice() {
    return this.#price;
  }

  setPrice(newPrice) {
    this.#price = newPrice;
  }
  // Change code above this line
}

console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));

console.log(new Car({ brand: 'bmw', model: 'X5', price: 58900 }));

console.log(new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }));

// Оголошений клас Car

// В класі Car оголошена приватна властивість brand

// В класі Car оголошена приватна властивість model

// В класі Car оголошена приватна властивість price

// Конструктор класу приймає об'єкт з властивостями brand, model і price

// В класі Car оголошений гетер brand

// В класі Car оголошений сетер brand

// В класі Car оголошений гетер model

// В класі Car оголошений сетер model

// В класі Car оголошений гетер price

// В класі Car оголошений сетер price

console.log(`========================= 15/20 ============================`);
