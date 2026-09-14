console.log("=== Part 1: Loops, Functions, Arrow Functions & Arrays ===");

console.log("--- 1. Loops: Even numbers from 1 to 30 ---");
let evenNumbers = [];
for (let i = 1; i <= 30; i++) {
    if (i % 2 === 0) {
        console.log(i);
        evenNumbers.push(i);
    }
}
if (typeof document !== 'undefined') {
    document.getElementById("out-loop").textContent = "Even numbers (1-30): " + evenNumbers.join(", ");
}

console.log("--- 2. Functions: calculateArea ---");
function calculateArea(width, height) {
    return width * height;
}
let areaResult = calculateArea(5, 10);
console.log("Area (width: 5, height: 10):", areaResult);
if (typeof document !== 'undefined') {
    document.getElementById("out-area").textContent = "calculateArea(5, 10) => Area = " + areaResult;
}

console.log("--- 3. Anonymous Functions: square ---");
const square = function(number) {
    return number * number;
};
let squareResult = square(6);
console.log("Square of 6:", squareResult);
if (typeof document !== 'undefined') {
    document.getElementById("out-square").textContent = "square(6) => " + squareResult;
}

console.log("--- 4. Arrow Functions: add ---");
const add = (a, b) => a + b;
let addResult = add(7, 8);
console.log("Add (7 + 8):", addResult);
if (typeof document !== 'undefined') {
    document.getElementById("out-arrow").textContent = "add(7, 8) => " + addResult;
}

console.log("--- 5. Arrays: colors ---");
const colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
let firstColor = colors[0];
let lastColor = colors[colors.length - 1];
console.log("First Element:", firstColor);
console.log("Last Element:", lastColor);
if (typeof document !== 'undefined') {
    document.getElementById("out-array").textContent = "Colors Array: [" + colors.join(", ") + "]\nFirst Element: " + firstColor + "\nLast Element: " + lastColor;
}


console.log("\n=== Part 2: Variables, Operators, Conditions & Switch ===");

console.log("--- Question 1: Arithmetic Operators on score ---");
let score = 50;
let q1Logs = ["Initial score: " + score];
console.log("Initial score:", score);

score += 10;
console.log("After score += 10:", score);
q1Logs.push("After score += 10: " + score);

score -= 5;
console.log("After score -= 5:", score);
q1Logs.push("After score -= 5: " + score);

score *= 2;
console.log("After score *= 2:", score);
q1Logs.push("After score *= 2: " + score);

score /= 3;
console.log("After score /= 3:", score);
q1Logs.push("After score /= 3: " + score);

if (typeof document !== 'undefined') {
    document.getElementById("out-q1").textContent = q1Logs.join("\n");
}

console.log("--- Question 2: fullName ---");
let firstName = "Ahmed";
let lastName = "Hamada";
let fullName = firstName + " " + lastName;
console.log("Full Name:", fullName);
if (typeof document !== 'undefined') {
    document.getElementById("out-q2").textContent = "Full Name: " + fullName;
}

console.log("--- Question 3: String Methods on city ---");
let city = "Cairo";
let cityUpper = city.toUpperCase();
let cityLen = city.length;
let cityHasA = city.toLowerCase().includes("a");
console.log("City in Uppercase:", cityUpper);
console.log("City Length:", cityLen);
console.log("Contains letter 'a':", cityHasA);
if (typeof document !== 'undefined') {
    document.getElementById("out-q3").textContent = "City: " + city + "\nUppercase: " + cityUpper + "\nLength: " + cityLen + "\nContains 'a': " + cityHasA;
}

console.log("--- Question 4: Comparison Operators ---");
let num1 = 10;
let num2 = "10";
let comp1 = (num1 == num2);
let comp2 = (num1 === num2);
let comp3 = (num1 > 5);
let comp4 = (num1 != num2);
let explanation = "Difference: == compares values with automatic type conversion (loose equality), while === compares both value and data type strictly without conversion (strict equality).";

console.log("num1 == num2:", comp1);
console.log("num1 === num2:", comp2);
console.log("num1 > 5:", comp3);
console.log("num1 != num2:", comp4);
console.log(explanation);

if (typeof document !== 'undefined') {
    document.getElementById("out-q4").textContent = "num1 = 10, num2 = '10'\nnum1 == num2: " + comp1 + "\nnum1 === num2: " + comp2 + "\nnum1 > 5: " + comp3 + "\nnum1 != num2: " + comp4 + "\n\n" + explanation;
}

console.log("--- Question 5: Logical Operators ---");
let hasTicket = true;
let age = 20;
let log1 = (hasTicket && age >= 18);
let log2 = (hasTicket || age >= 18);
let log3 = (!hasTicket);

console.log("hasTicket && age >= 18:", log1);
console.log("hasTicket || age >= 18:", log2);
console.log("!hasTicket:", log3);

if (typeof document !== 'undefined') {
    document.getElementById("out-q5").textContent = "hasTicket = true, age = 20\nhasTicket && age >= 18: " + log1 + "\nhasTicket || age >= 18: " + log2 + "\n!hasTicket: " + log3;
}

console.log("--- Question 6: Grade Evaluation ---");
function evaluateGrade(grade) {
    if (grade >= 90) {
        return `Grade ${grade}: Excellent`;
    } else if (grade >= 70) {
        return `Grade ${grade}: Good`;
    } else if (grade >= 50) {
        return `Grade ${grade}: Pass`;
    } else {
        return `Grade ${grade}: Fail`;
    }
}
let g1 = evaluateGrade(95);
let g2 = evaluateGrade(78);
let g3 = evaluateGrade(45);
console.log(g1);
console.log(g2);
console.log(g3);
if (typeof document !== 'undefined') {
    document.getElementById("out-q6").textContent = g1 + "\n" + g2 + "\n" + g3;
}

console.log("--- Question 7: Even or Odd Number ---");
let number = 14;
let parityResult = "";
if (number % 2 === 0) {
    parityResult = `${number} is Even`;
} else {
    parityResult = `${number} is Odd`;
}
console.log(parityResult);
if (typeof document !== 'undefined') {
    document.getElementById("out-q7").textContent = parityResult;
}

console.log("--- Question 8: Login Verification ---");
let username = "admin";
let password = "1234";
let loginResult = "";
if (username === "admin" && password === "1234") {
    loginResult = "Login Successful";
} else {
    loginResult = "Login Failed";
}
console.log(loginResult);
if (typeof document !== 'undefined') {
    document.getElementById("out-q8").textContent = "username: 'admin', password: '1234' => " + loginResult;
}

console.log("--- Question 9: Day Switch Statement ---");
let day = 1;
let dayName = "";
switch (day) {
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break;
    case 3:
        dayName = "Tuesday";
        break;
    case 4:
        dayName = "Wednesday";
        break;
    case 5:
        dayName = "Thursday";
        break;
    case 6:
        dayName = "Friday";
        break;
    case 7:
        dayName = "Saturday";
        break;
    default:
        dayName = "Invalid day";
}
console.log(dayName);
if (typeof document !== 'undefined') {
    document.getElementById("out-q9").textContent = "day = 1 => " + dayName;
}
