// Define num1 and num2
let num1 = parseFloat(prompt("Adj meg egy számot:"));
let num2 = parseFloat(prompt("Adj meg egy másik számot:"));

// Add function
let add = (num1, num2) => num1 + num2;
console.log("Összeadás eredménye:", add(num1, num2));

// Subtract function
let subtract = (num1, num2) => num1 - num2;
console.log("Kivonás eredménye:", subtract(num1, num2));

// Multiply function
let multiply = (num1, num2) => num1 * num2;
console.log("Szorzás eredménye:", multiply(num1, num2));

// Divide function
let divide = (num1, num2) => {
    if (num2 === 0) {
        return "Nem lehet nullával osztani";
    }
    return num1 / num2;
};
console.log("Osztás eredménye:", divide(num1, num2));

// Define name and greeting function
let nev = prompt("Adj meg egy nevet:");
let udv = function () {
    return "Üdv, " + nev + " vagyok";
};
console.log(udv());