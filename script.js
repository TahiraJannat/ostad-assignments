function getDayOfWeek(date) {
    const day = new Date(date);
    const dayOfWeek = day.getDay();
    const dayNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    // Current Day
    document.getElementById(
        "currentDay"
    ).innerHTML = `The day of this week is ${dayNames[dayOfWeek]}`;
    return dayNames[dayOfWeek];
}
// Specific dates day
const date = "2023-06-20";
const dayOfWeek = getDayOfWeek(date);

document.getElementById(
    "dayWeek"
).innerHTML = `The day of the week for ${date} is ${dayOfWeek}`;
console.log(`The day of the week for ${date} is ${dayOfWeek}`);

//2. Sum of Squares root
function sumOfSquareRoot(numbers) {
    // Calculate the sum of squares of all the numbers.
    let sumOfSquares = numbers.reduce((a, b) => a + b ** 2, 0);

    // Calculate the square root of the sum of squares.
    let squareRootOfSum = Math.sqrt(sumOfSquares);

    // Return the square root of the sum of squares.
    return squareRootOfSum;
}

var numInput = prompt("Enter a series of numbers with spaces in between each:");
var numbers = numInput.split(" ");
const numbersArray = [1, 2, 3, 4, 6];

const squareRootOfSumOfSquares = sumOfSquareRoot(numbers);
const squareRootOfSumOfSquaresArray = sumOfSquareRoot(numbersArray);
document.getElementById("squareRootOfSumOfSquares").innerHTML =
    squareRootOfSumOfSquares;
document.getElementById("squareRootOfSumOfSquaresArray").innerHTML =
    squareRootOfSumOfSquaresArray;

// 3. Prime number finding

function primeNumber(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
const number = parseInt(prompt("Enter a positive number: "));
const isPrime = primeNumber(number);
console.log("isPrime", isPrime);
document.getElementById("primeNumBool").innerHTML = isPrime;

document.getElementById("primeNum").innerHTML = isPrime
    ? `${number} is a prime number`
    : `${number} is not a prime number`;

//4. Window object
function openNewWindow(url, width = "", height = "") {
    // Open a new window with the specified URL.
    url = "https://www.google.com";
    window.open(url, " ", "width= " + width + ",height= " + height);
}
// openNewWindow("https://www.google.com", 400, 300);
openNewWindow("https://www.example.com", 800, 600);

// 5.Navigator Object:
