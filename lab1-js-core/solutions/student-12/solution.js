'use strict'

// ===== ЗАДАНИЕ 1: Базовые операции =====
function simpleTask() {
    // 1.1 Объявите переменные разных типов (не менее 5)
    let age = 20; // целочисленный тип данных
    const name = 'Arseniy'; //строки
    let temperature = 12.23; //тип данных с плавающей запятой
    let student = true; //логический тип данных
    let result = null; //тип данных null
    let some_one; //неопределенное значение
    // 1.2 Выведите типы всех переменных

    console.log(typeof age);
    console.log(typeof name);
    console.log(typeof temperature);
    console.log(typeof student);
    console.log(typeof result);
    console.log(typeof some_one);
}

// ===== ЗАДАНИЕ 2: Функции =====
function getReviewerNumber(number, lab) {
     // 2.1 Функция определяющая номер ревьюера для вашей группы по вашему номеру и номеру лабораторной работы
     return (number + lab - 1) % 30 + 1;
    
}

function getVariant(number, variants) {
    // 2.2 Функция определяющая номер варианта, исходя из количества вариантов
    return (number - 1) % variants + 1; 
}

function calculate(a, b, operation) {
    // 2.3 Напишите функцию калькулятор, калькулятор обрабатывает следующие операции: +, -, *, /
    switch (operation){
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
    }
} 

function calculateArea(figure, ...params) {
    // 2.4 Напишите функцию для определения площади фигур 'circle', 'rectangle', 'triangle'
    // Используйте switch.
    const lenght = params.length;
    switch (figure) {
        case 'circle': 
            if (lenght > 1)
                return 'Для данной фигуры слишком много значений';
            else 
                return Math.PI * params[0] ** 2;          

        case 'rectangle': 
            switch (lenght){
                case 1: return params[0] ** 2;
                case 2: return params[0] * params[1]; 
                default: return 'Для данной фигуры параметров указанное число параметров не соответвествует условиям'; 
            }

        case 'triangle': 
            let p = params.reduce((acc, value) => acc + value, 0) / 2;
            switch (lenght) {
                case 1: return (params[0] ** 2 * 3 ** 0.5) / 4
                case 3: return (p * (p-params[0]) * (p - params[1]) * (p - params[2])) ** 0.5;
                default: return 'Количество параметров для данной фигуры не подходит условию';
        }
        default: console.log('Данная фигура не поддерживается');
    }
}

// 2.5 Стрелочные функции
const reverseString = (str) => {
    // Функция возвращает перевернутую строку
    return str.split('').reverse().join('');
}

const getRandomNumber = (min, max) => {
    // Функция возвращает случайное число между min и max
    return Math.floor(min + Math.random() * (max + 1 - min));
};

// ===== ЗАДАНИЕ 3: Объекты =====
const book = {
    title: 'Зеленая Миля',
    author: 'Стивен Кинг',
    year: 1999,
    pages: 352,
    isAvailiable: true,


    getInfo(){
        return `название: "${this.title}", автор: ${this.author}, год: ${this.year}, количество страниц: ${this.pages}, доступна ли книга: ${this.isAvailiable}`;
    },

    toggleAvailability(){
        this.isAvailiable = !this.isAvailiable;
        return this.isAvailiable;
    }
    // 3.1 Создайте объект "книга" с полями для хранения заголовка, автора,
    // года выпуска, количества страниц, и доступности
    // объект должен иметь два метода getInfo возвращает одной строкой информацию о названии книги, авторе, годе выпуска, количестве страниц
    // метод toggleAvailability - который меняет значение доступности и возвращает его
};

const student = {
    // 3.2 Реализуйте методы объекта "студент"
    name: "Анна Петрова",
    age: 20,
    course: 2,
    grades: {
        math: 90,
        programming: 95,
        history: 85
    },

    // Метод для расчета среднего балла
    getAverageGrade() {
        // Ваш код здесь
        let sum_grades = 0;
        let gradesArray = Object.values(this.grades);
        for (let index = 0; index <gradesArray.length; index++){
            sum_grades += gradesArray[index];
        }
        return sum_grades / gradesArray.length;
    },

    // Метод для добавления новой оценки
    addGrade(subject, grade) {
        this.grades[subject] = grade;
        return `The grade ${grade} for the subject ${subject} has been successfully added.`
        // Ваш код здесь
    }
};

// ===== ЗАДАНИЕ 4: Массивы =====
function processArrays() {
    const numbers = [12, 45, 23, 67, 34, 89, 56, 91, 27, 14];
    const words = ["JavaScript", "программирование", "массив", "функция", "объект"];
    const users = [
        { id: 1, name: "Анна", age: 25, isActive: true },
        { id: 2, name: "Борис", age: 30, isActive: false },
        { id: 3, name: "Виктория", age: 22, isActive: true },
        { id: 4, name: "Григорий", age: 35, isActive: true },
        { id: 5, name: "Дарья", age: 28, isActive: false }
    ];

    // 1. Используйте forEach для вывода всех чисел больше 50
    console.log("Числа больше 50:");
    numbers.forEach(element => {
        if (element > 50) console.log(element);
    });

    // 2. Используйте map для создания массива квадратов чисел
    /*const squares =  ваш код */
    const squares = numbers.map(element => element ** 2);


    // 3. Используйте filter для получения активных пользователей
    /*const activeUsers =  ваш код */
    const activeUsers = users.filter(user => user.isActive);


    // 4. Используйте find для поиска пользователя с именем "Виктория"
    /*const victoria =  ваш код */
    const victoria = users.find(user => user.name === 'Виктория');

    // 5. Используйте reduce для подсчета суммы всех чисел
    /*const sum =  ваш код */
    const sum = numbers.reduce((acc, element) => acc + element, 0);


    // 6. Используйте sort для сортировки пользователей по возрасту (по убыванию)
    /*const sortedByAge =  ваш код */
    const sortedByAge = [...users].sort((a,b) => b.age - a.age);

    // 7. Используйте метод для проверки, все ли пользователи старше 18 лет
    /*const allAdults =  ваш код */
    const allAdults = users.every(user => user.age >= 18);

    // 8. Создайте цепочку методов:
    //    - отфильтровать активных пользователей
    //    - преобразовать в массив имен
    //    - отсортировать по алфавиту
    /*const activeUserNames =  ваш код */
    const activeUserNames = users.filter(user => user.isActive).map(user => user.name).sort();
}

// ===== ЗАДАНИЕ 5: Менеджер задач =====
const taskManager = {
    tasks: [
        { id: 1, title: "Изучить JavaScript", completed: false, priority: "high" },
        { id: 2, title: "Сделать лабораторную работу", completed: true, priority: "high" },
        { id: 3, title: "Прочитать книгу", completed: false, priority: "medium" }
    ],

    addTask(title, priority = "medium") {
        // 5.1 Добавление задачи
        let newTaskId = this.tasks.length > 0 ? Math.max(... this.tasks.map(task => task.id)) + 1: 1;
        this.tasks.push ({id: newTaskId, title, priority, completed: false});
        return `The task ${title} with priority ${priority} has been successfully added.`
    },

    completeTask(taskId) {
        // 5.2 Отметка выполнения
        const task = this.tasks.find(t => t.id === taskId);
        if (task) task.completed = true;
    },

    // Удаление задачи
    deleteTask(taskId) {
        // 5.3 Ваш код здесь
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    },

    // Получение списка задач по статусу
    getTasksByStatus(completed) {
        // 5.4 Ваш код здесь
        return this.tasks.filter(task => task.completed === completed);
    },

    getStats() {
        /* 5.5 Статистика возвращает объект:
        total,
        completed,
        pending,
        completionRate
        */

        const total = this.tasks.length;
        const completed = this.getTasksByStatus(true).length;
        const pending = total - completed;
        const completionRate = total === 0 ? 0: completed / total;
        return {total, completed, pending, completionRate};

    }
};

// ===== ЗАДАНИЕ 6: Классы и наследование =====
function taskClasses() {
    // 6.1 Базовый класс Vehicle
    // В конструкторе принимайте и сохраняйте в this свойства:
    // make (марка), model (модель), year (год выпуска).
    class Vehicle {
        static vehicleCount = 0;

        constructor(make, model, year) {
            // ..
            this.make = make;
            this.model = model;
            this._year = year;
            Vehicle.vehicleCount++;
        }

        // Добавьте метод displayInfo(), который выводит в консоль информацию
        // о транспортном средстве в формате: "Марка: [make], Модель: [model], Год: [year]".
        displayInfo() {
            // ..
            console.log(`Марка: ${this.make}, Модель: ${this.model}, Год: ${this._year}`);
        }

        // Добавьте геттер age, который возвращает возраст транспортного средства
        // (текущий год минус год выпуска). Используйте new Date().getFullYear().
        get age() {
            // ..
            return new Date().getFullYear() - this._year;
        }

        // Добавьте сеттер для года выпуска с проверкой: год не может быть больше текущего.
        set year(newYear) {
            if (newYear <= new Date().getFullYear()) 
                this._year = newYear;
            else 
                console.log('Error: the year cannot be greater than the current one.')
        }

        get year() {
            return this._year;
        }

        // Добавьте статический метод compareAge(vehicle1, vehicle2),
        // который возвращает разницу в возрасте между двумя транспортными средствами.
        static compareAge(vehicle1, vehicle2) {
            // ..
            return Math.abs(vehicle1.age - vehicle2.age);
        }

        // 6.4 Статические методы и свойства
        // Добавьте статическое свойство vehicleCount в класс Vehicle
        // для подсчета количества созданных транспортных средств.
        // (добавьте в конструктор: Vehicle.vehicleCount++;)
        // Создайте статический метод getTotalVehicles(),
        // который возвращает общее количество созданных транспортных средств.
    
        static getTotalVehicles(){
            return Vehicle.vehicleCount;
        }

    }

    // 6.2 Класс Car (наследуется от Vehicle)
    // Добавьте новое свойство numDoors (количество дверей).
    class Car extends Vehicle {
        constructor(make, model, year, numDoors) {
            super(make, model, year);
            this.numDoors = numDoors;
        }

        // Переопределите метод displayInfo() так, чтобы он также выводил количество дверей.
        // Используйте super.displayInfo() для вызова метода родителя.
        displayInfo() {
            console.log(`${super.displayInfo()}, Количество дверей: ${this.numDoors}`);
        }

        // Добавьте метод honk(), который выводит "Beep beep!".
        honk() {
            console.log("Beep beep!");
        }
    }

    // 6.3 Класс ElectricCar (наследуется от Car)
    // Добавьте новое свойство batteryCapacity (емкость батареи в кВт·ч).
    class ElectricCar extends Car {
        constructor(make, model, year, numDoors, batteryCapacity) {
            super(make, model, year, numDoors);
            this.batteryCapacity = batteryCapacity;
        }

        // Переопределите метод displayInfo() для вывода дополнительной информации о батарее.
        displayInfo() {
            console.log(`${super.displayInfo()}, Battery capacity: ${this.batteryCapacity} kWh`);
        }

        // Добавьте метод calculateRange(), который рассчитывает примерный запас хода
        // (предположим, что 1 кВт·ч = 6 км).
        calculateRange() {
            return this.batteryCapacity * 6;
        }
    }

    // ===== ЗАДАНИЕ 7: Каррирование =====
    // Создайте функцию createVehicleFactory, которая возвращает функцию
    // для создания транспортных средств определенного типа (каррирование).
    const createVehicleFactory = (vehicleType) => (make, model, year) => {
        return new vehicleType(make, model, year);
    };

    return { Vehicle, Car, ElectricCar, createVehicleFactory };
}

// ===== ЗАДАНИЕ 8: Регулярные выражения =====
/*
Дополнительные материалы:
[https://regex101.com/]() - интерактивный тестер regex
MDN Regular Expressions - [https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular\_expressions](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_expressions)
Learn Regex - https://github.com/ziishaned/learn-regex - учебник по regex

Задание (по вариантам):
1\. Изучите функции с регулярными выражениями по своему варианту
На защите вы должны суметь объяснить структуру регулярного выражения.
2\. Напишите тесты, покрывающие все различные варианты. Обратите внимание: тесты должны обеспечивать полное покрытие, но не быть дублирующимися.
3\. Если предложенное регулярное выражение некорректно, вы можете исправить его.

Вычисление своего варианта:
Номер варианта = Ваш номер % Общее количество вариантов
 */

/**
 * Вариант 4: Валидация даты в формате DD.MM.YYYY
 * Правила:
 * - День: 01-31
 * - Месяц: 01-12
 * - Год: 1900-2099
 */
function validateDate(date) {
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/;
    return dateRegex.test(date);
}

// Бонус: выполните все остальные варианты. Выполнение бонуса не учитывается в итоговой оценке.

// ===== ТЕСТИРОВАНИЕ =====
function runTests() {
    console.log("=== ТЕСТИРОВАНИЕ ===");

    simpleTask();

    // Тест 1: getReviewerNumber
    console.assert(getReviewerNumber(5, 1) === 6, "Тест получения ревьюера провален");
 
    // Тест 1.5: getVariant
    console.assert(getVariant(12, 4) === 4, "Тест варианта провален");

    // Тест 2: calculate
    console.assert(calculate(10, 5, '+') === 15, "Тест калькулятора провален");
    console.assert(calculate(10, 15, '*')=== 150, '"Тест калькулятора провален"');
    console.assert(calculate(7, 2, '-')=== 5, '"Тест калькулятора провален"');
    console.assert(calculate(993, 3, '/')=== 331, '"Тест калькулятора провален"');

    //Тест 2.5: calculateArea
    console.assert(calculateArea('circle', 2) === Math.PI*4, "Тест калькулятора площади провален");
    console.assert(calculateArea('rectangle', 5) === 25, "Тест калькулятора площади провален");
    console.assert(calculateArea('rectangle', 5, 10) === 50, "Тест калькулятора площади провален");
    console.assert(calculateArea('triangle', 3) === (9 * Math.sqrt(3)) / 4,"Тест калькулятора площади провален");
    console.assert(calculateArea('square', 5) === undefined, "Тест калькулятора площади провален");

    //Тест реверса строк
    console.assert(reverseString('hello') === 'olleh', "Тест реверсера строк провален");
    //Тест рандомного числа
    const randomNum = getRandomNumber(1,5);
    console.assert(1 <= randomNum && randomNum <= 5, "Тест рандомного числа провален")

    //тест объекта book
    console.assert(book.toggleAvailability() === false, "Тест провален");
    console.assert(book.getInfo().includes("Зеленая Миля"), "Тест провален");

    //Тест student
    console.assert(student.getAverageGrade() === 90, "Тест студента провален");
    student.addGrade("physics",100);
    console.assert(student.grades.physics === 100, "Тест студента провален");


    // Тест 3: taskManager
    console.assert((taskManager.getStats() || {}).total === 3, "Тест taskManager провален");
    taskManager.addTask("Тест");

    console.assert(taskManager.tasks.length === 4);

    taskManager.completeTask(1);
    console.assert(taskManager.getTasksByStatus(true).length === 2);

    taskManager.deleteTask(3);
    console.assert(taskManager.tasks.find(t=>t.id===3) === undefined);


    // Тест 4: классы и наследование
    const { Vehicle, Car, ElectricCar, createVehicleFactory } = taskClasses();
    const vehicle = new Vehicle('Toyota', 'Camry', 2015);
    vehicle.displayInfo();
    console.log(`Возраст: ${vehicle.age} лет`);

    const car = new Car('Honda', 'Civic', 2018, 4);
    car.displayInfo();
    car.honk();

    const electricCar = new ElectricCar('Tesla', 'Model 3', 2020, 4, 75);
    electricCar.displayInfo();
    console.log(`Запас хода: ${electricCar.calculateRange()} км`);

    const testVehicle = new Vehicle('Test', 'Model', 2010);
    console.assert(testVehicle.age === (new Date().getFullYear() - 2010), 'Тест возраста провален');

    const createCarFactory = createVehicleFactory(Car);
    const myNewCar = createCarFactory('BMW', 'X5', 2022);
    console.log('Создан новый автомобиль:');
    myNewCar.displayInfo();

    console.log('Всего создано транспортных средств:', Vehicle.getTotalVehicles());

    // Добавьте остальные тесты...
    vehicle.year = 2020;

    console.assert(vehicle.year === 2020);
    console.assert(Vehicle.compareAge(vehicle, testVehicle) >=0);
    console.assert(Vehicle.getTotalVehicles() >0);




    console.assert(validateDate("01.01.1900"), "Минимальная дата должна быть допустима");
    console.assert(validateDate("31.12.2099"), "Максимальная дата должна быть допустима");

    // День
    console.assert(!validateDate("00.01.2026"), "День 00 недопустим");
    console.assert(validateDate("01.01.2026"), "День 01 допустим");
    console.assert(validateDate("31.01.2026"), "День 31 допустим");
    console.assert(!validateDate("32.01.2026"), "День 32 недопустим");

    // Месяц
    console.assert(!validateDate("01.00.2026"), "Месяц 00 недопустим");
    console.assert(validateDate("01.01.2026"), "Месяц 01 допустим");
    console.assert(validateDate("01.12.2026"), "Месяц 12 допустим");
    console.assert(!validateDate("01.13.2026"), "Месяц 13 недопустим");

    // Год
    console.assert(!validateDate("01.01.1899"), "Год 1899 недопустим");
    console.assert(validateDate("01.01.1900"), "Год 1900 допустим");
    console.assert(validateDate("01.01.2099"), "Год 2099 допустим");
    console.assert(!validateDate("01.01.2100"), "Год 2100 недопустим");

    // Формат
    console.assert(!validateDate("01-01-2026"), "Неверный разделитель");
    console.assert(!validateDate("1.01.2026"), "Пропущен ведущий ноль дня");
    console.assert(!validateDate("01.1.2026"), "Пропущен ведущий ноль месяца");
    console.assert(!validateDate(""), "Пустая строка недопустима");

    console.log("Все тесты пройдены! ✅");
}

// Запуск тестов
runTests();