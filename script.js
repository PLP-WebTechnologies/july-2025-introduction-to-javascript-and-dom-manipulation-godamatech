//===========================================
// PART 1: Mastering JavaScript Basics
//===========================================
const numberInput = document.getElementById('numberInput');
const checkNumberBtn = document.getElementById('checkNumberBtn');
const numberResult = document.getElementById('numberResult');

// Add a click event listener to the button
checkNumberBtn.addEventListener('click', () => {
    // Get the user's input and convert it to a number
    let userNumber = parseInt(numberInput.value);

    // Check if the input is a valid number
    if (isNaN(userNumber)) {
        numberResult.textContent = "Please enter a valid number.";
        numberResult.style.color = 'red';
    } else {
        // Use a conditional (if/else) to check if the number is even or odd
        if (userNumber % 2 === 0) {
            numberResult.textContent = `The number ${userNumber} is even.`;
            numberResult.style.color = 'green';
        } else {
            numberResult.textContent = `The number ${userNumber} is odd.`;
            numberResult.style.color = 'blue';
        }
    }
});


//===========================================
// PART 2: JavaScript Functions
//===========================================

// Function 1: A function to format a full name
function formatFullName(firstName, lastName) {
    // Ensure both inputs are strings and not empty
    if (typeof firstName === 'string' && firstName.length > 0 &&
        typeof lastName === 'string' && lastName.length > 0) {
        return `${firstName.charAt(0).toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName.charAt(0).toUpperCase()}${lastName.slice(1).toLowerCase()}`;
    } else {
        return "Invalid name provided.";
    }
}

// Function 2: A function to create a personalized greeting
function createGreeting(formattedName) {
    return `Hello, ${formattedName}! Welcome to the assignment.`;
}

// DOM elements for Part 2
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const greetBtn = document.getElementById('greetBtn');
const greetingResult = document.getElementById('greetingResult');

greetBtn.addEventListener('click', () => {
    // Get values from the input fields
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;

    // Call our functions to process the data
    const fullName = formatFullName(firstName, lastName);
    const greetingMessage = createGreeting(fullName);
    
    // Display the result on the webpage
    greetingResult.textContent = greetingMessage;
});


//===========================================
// PART 3: JavaScript Loops
//===========================================

// A button to start the loop example
const countdownBtn = document.getElementById('countdownBtn');
const countdownList = document.getElementById('countdownList');

// Loop Example 1: A `for` loop to create a countdown list
countdownBtn.addEventListener('click', () => {
    // Clear the list before starting a new countdown
    countdownList.innerHTML = ''; 

    for (let i = 5; i > 0; i--) {
        // Create a new list item for each number
        const listItem = document.createElement('li');
        listItem.textContent = `Countdown: ${i}...`;
        countdownList.appendChild(listItem);
    }

    // Add a final item
    const finalItem = document.createElement('li');
    finalItem.textContent = "Blast Off!";
    countdownList.appendChild(finalItem);
});

// Loop Example 2: You could also use a `while` loop for another example
// This one isn't in the HTML, but is a valid example.
let counter = 0;
const numbers = [10, 20, 30, 40, 50];
let sum = 0;

while (counter < numbers.length) {
    sum += numbers[counter];
    counter++;
}
console.log(`The sum of the numbers in the array is: ${sum}`);


//===========================================
// PART 4: Mastering the DOM with JavaScript
//===========================================

// DOM Interaction 1: Change element properties
const domBox = document.getElementById('dom-box');
const boxText = document.getElementById('boxText');

// Listen for a click on the box
domBox.addEventListener('click', () => {
    // Generate a random color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    // Change the background color and text
    domBox.style.backgroundColor = randomColor;
    boxText.textContent = 'Color Changed!';
});

// DOM Interaction 2: Toggle a CSS class
const toggleBtn = document.getElementById('toggleBtn');

// Add a CSS class to the box initially
domBox.classList.add('visible');

toggleBtn.addEventListener('click', () => {
    // Use .toggle() to add or remove a class in one line
    domBox.classList.toggle('hidden');
    // Update the button text based on the box's visibility
    if (domBox.classList.contains('hidden')) {
        toggleBtn.textContent = 'Show the Box';
    } else {
        toggleBtn.textContent = 'Hide the Box';
    }
});

// DOM Interaction 3: Create and append elements dynamically
const part4Section = document.getElementById('part4');
const newElementBtn = document.createElement('button');
newElementBtn.textContent = 'Add a New Element';

// Append the new button to the DOM
part4Section.appendChild(newElementBtn);

newElementBtn.addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "This paragraph was created dynamically!";
    newParagraph.style.fontStyle = 'italic';
    part4Section.appendChild(newParagraph);
});
