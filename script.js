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

function browserNameAndVersion() {
  // Get the user agent string.
  var userAgent = navigator.userAgent;

  // Initialize the browser name and version variables.
  var browserName = "";
  var browserVersion = "";

  // Check for the Chrome browser.
  if (userAgent.indexOf("Chrome") > -1) {
    browserName = "Chrome";
    browserVersion = userAgent.match(/Chrome\/(\d+\.\d+)/)[1];
  }

  // Check for the Firefox browser.
  else if (userAgent.indexOf("Firefox") > -1) {
    browserName = "Firefox";
    browserVersion = userAgent.match(/Firefox\/(\d+\.\d+)/)[1];
  }

  // Check for the Safari browser.
  else if (userAgent.indexOf("Safari") > -1) {
    browserName = "Safari";
    browserVersion = userAgent.match(/Version\/(\d+\.\d+)/)[1];
  }

  // Check for the Internet Explorer browser.
  else if (userAgent.indexOf("MSIE") > -1) {
    browserName = "Internet Explorer";
    browserVersion = userAgent.match(/MSIE (\d+\.\d+)/)[1];
  }

  // Return the browser name and version.
  return {
    browserName: browserName,
    browserVersion: browserVersion,
  };
}
var browserDetails = browserNameAndVersion();
document.getElementById("browserName").innerHTML = browserDetails.browserName;
document.getElementById("browserVersion").innerHTML =
  browserDetails.browserVersion;

console.log(browserDetails.browserName);
console.log(browserDetails.browserVersion);

// 6.Geolocation:
function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        // Display the latitude and longitude.
        if (latitude && longitude) {
          console.log(latitude, longitude);
        } else {
          console.log("Location information is unavailable.");
        }
      },
      function (error) {
        console.log("The request to get location failed.");
      }
    );
  } else {
    console.log("The geolocation API is not supported by your browser.");
  }
}

// 7.JS Common Events:
function handleClick(event) {
  // Get the x and y coordinates of the click.
  var x = event.clientX;
  var y = event.clientY;

  // Display an alert with the coordinates.
  alert("The coordinates of the click are: " + x + ", " + y);
}

// Attach the `handleClick()` function to the `click` event.
document.addEventListener("click", handleClick);

//b
function handleKeyDown(event) {
  // Get the key code of the pressed key.
  var keyCode = event.keyCode;

  // Display an alert with the key code.
  alert("The key code of the pressed key is: " + keyCode);
}

// Attach the `handleKeyDown()` function to the `keydown` event.
document.addEventListener("keydown", handleKeyDown);

//c
function handleMouseOver(event) {
  // Get the image element.
  var image = event.target;

  // Get the original image source.
  var originalSource = image.src;

  // Change the image source to another image.
  image.src =
    "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000";
}

// Attach the `handleMouseOver()` function to the `mouseover` event.
originalSource.addEventListener("mouseover", handleMouseOver);
