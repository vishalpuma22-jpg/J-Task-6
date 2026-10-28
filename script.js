
/* ==========================================
   PART 1: ARRAY HIGHER-ORDER METHODS
========================================== */

// Task 1: forEach()
let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
numbers.forEach(num => console.log(num));

// Task 2: map()
console.log([1, 2, 3, 4, 5].map(num => num * 5));

// Task 3: filter()
console.log([10, 25, 15, 40, 30].filter(num => num > 20));

// Task 4: Employee salary <= 300000
let employees = [
    { name: "Arun", salary: 250000 },
    { name: "Bala", salary: 400000 },
    { name: "Kumar", salary: 200000 },
    { name: "Ravi", salary: 350000 }
];
console.log(employees.filter(emp => emp.salary <= 300000));

// Task 5: find()
console.log(employees.find(emp => emp.salary > 200000));

// Task 6: reduce()
console.log([10, 20, 30, 40].reduce((sum, n) => sum + n, 0));

// Task 7: some()
console.log([1, 3, 5, 8, 9].some(n => n % 2 === 0));

// Task 8: every()
console.log([1, 2, 3, 4, 5].every(n => n > 0));

// Task 9: Sort ascending
console.log([50, 10, 40, 20, 30].sort((a, b) => a - b));

// Task 10: Sort descending
console.log([50, 10, 40, 20, 30].sort((a, b) => b - a));


/* ==========================================
   PART 2: STRING METHODS
========================================== */

// Task 11: charAt()
let str = "javascript";
console.log(str.charAt(4));

// Task 12: charCodeAt()
console.log(str.charCodeAt(2));

// Task 13: trim()
console.log("   Hello JavaScript   ".trim());

// Task 14: Uppercase and lowercase
let language = "JavaScript";
console.log(language.toUpperCase());
console.log(language.toLowerCase());

// Task 15: includes()
console.log(language.includes("script"));

// Task 16: startsWith() and endsWith()
console.log(language.startsWith("Java"));
console.log(language.endsWith("Script"));

// Task 17: replaceAll()
console.log("java is easy, java is powerful".replaceAll("java", "python"));

// Task 18: split()
console.log("html-css-javascript-react".split("-"));

// Task 19: join()
console.log(["Arun", "Bala", "Ravi"].join(", "));

// Task 20: slice()
console.log("Learn JavaScript".slice(6, 16));


/* ==========================================
   PART 3: DATE METHODS
========================================== */

// Task 21: Current year, month, date, and day
let today = new Date();
console.log("Year:", today.getFullYear());
console.log("Month:", today.getMonth() + 1);
console.log("Date:", today.getDate());
console.log("Day:", today.getDay());

// Task 22: Current month name
let months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];
console.log(months[today.getMonth()]);

// Task 23: Hours, minutes, seconds
console.log("Hours:", today.getHours());
console.log("Minutes:", today.getMinutes());
console.log("Seconds:", today.getSeconds());

// Task 24: Change year, month, and date
let date = new Date();
date.setFullYear(2003);
date.setMonth(0);
date.setDate(30);
console.log(date);


/* ==========================================
   PART 4: ASYNCHRONOUS JAVASCRIPT
========================================== */

// Task 25: setTimeout()
setTimeout(() => {
    console.log("Welcome to JavaScript");
}, 3000);

// Task 26 and 27: setInterval() and clearInterval()
let interval = setInterval(() => {
    console.log("Learning JavaScript");
}, 2000);

setTimeout(() => {
    clearInterval(interval);
    console.log("Interval stopped");
}, 8000);

// Task 28: Execution order
function one() {
    console.log("One");
}

function two() {
    console.log("Two");
}

function three() {
    console.log("Three");
}

one();
setTimeout(two, 0);
three();


/* ==========================================
   PART 5: PROMISES AND API FETCHING
========================================== */

// Task 29: Promise resolve
new Promise((resolve) => {
    resolve("Login successful");
}).then(result => console.log(result));

// Task 30: Promise reject
new Promise((resolve, reject) => {
    reject("Invalid password");
}).catch(error => console.warn(error));

// Task 31: finally()
new Promise(resolve => {
    resolve("Success");
})
    .then(result => console.log(result))
    .catch(error => console.warn(error))
    .finally(() => console.log("Process completed"));

// Task 32: Print all product titles
fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) throw new Error("Request failed");
        return response.json();
    })
    .then(products => {
        products.forEach(product => console.log(product.title));
    })
    .catch(error => console.warn(error.message))
    .finally(() => console.log("Task 32 completed"));

// Task 33: Print title, price, and category
fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) throw new Error("Request failed");
        return response.json();
    })
    .then(products => {
        products.forEach(product => {
            console.log(product.title, product.price, product.category);
        });
    })
    .catch(error => console.warn(error.message))
    .finally(() => console.log("Task 33 completed"));

// Task 34: Handle API errors
fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) throw new Error("Failed to fetch products");
        return response.json();
    })
    .then(products => console.log(products))
    .catch(error => console.warn("Error:", error.message));

// Task 35: finally()
fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) throw new Error("Request failed");
        return response.json();
    })
    .then(products => console.log(products))
    .catch(error => console.warn(error.message))
    .finally(() => console.log("API call completed"));


/* ==========================================
   PART 6: REAL-TIME MINI TASKS
========================================== */

// Task 36: Employee salary report
let staff = [
    { name: "Arun", salary: 250000 },
    { name: "Bala", salary: 450000 },
    { name: "Kumar", salary: 180000 },
    { name: "Ravi", salary: 300000 }
];

staff
    .filter(emp => emp.salary < 300000)
    .forEach(emp => console.log(emp.name, emp.salary));

// Task 37: Product price calculator
fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) throw new Error("Request failed");
        return response.json();
    })
    .then(products => {
        let result = products.map(product => ({
            title: product.title,
            price: product.price
        }));
        console.log(result);
    })
    .catch(error => console.warn(error.message))
    .finally(() => console.log("Task 37 completed"));

// Task 38: Product search by category
fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) throw new Error("Request failed");
        return response.json();
    })
    .then(products => {
        let result = products.filter(
            product => product.category === "electronics"
        );
        console.log(result);
    })
    .catch(error => console.warn(error.message))
    .finally(() => console.log("Task 38 completed"));

// Task 39: Number analysis
let values = [10, 15, 20, 25, 30];

console.log("Doubled:", values.map(n => n * 2));
console.log("Greater than 20:", values.filter(n => n > 20));
console.log("Total:", values.reduce((sum, n) => sum + n, 0));
console.log("Has even number:", values.some(n => n % 2 === 0));
console.log("All positive:", values.every(n => n > 0));

// Task 40: Product listing with error handling
fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then(products => {
        products.forEach(product => {
            console.log({
                title: product.title,
                price: product.price,
                category: product.category
            });
        });
    })
    .catch(error => console.warn("Error:", error.message))
    .finally(() => console.log("API call completed"));