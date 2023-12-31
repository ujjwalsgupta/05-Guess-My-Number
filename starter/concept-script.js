"use strict";

//todo: What's the DOM and DOM Manipulation

//! Document Object Model (DOM):
//* It is a Structured Representation of HTML Documents.
//* It allows JavaScript to access HTML elements and STYLES to Manipulate them.
//* It is a connection between JavaScript & HTML.

// --------------------------------------------------------------------

//todo: Selecting and Manipulating Elements

//! Selecting the textContent inside the Class "message":

console.log(document.querySelector(".message").textContent);
// Output: Start guessing...

//? DOCUMENT:
//* Document serves as an entry point for the web page's content, that is DOM tree.
//* It is an object.

//? .querySelector():
//* querySelector() is a Document object's method that returns the FIRST ELEMENT within the document that matches the specified selector, or group of selectors.
//* If no matches are found, null is returned.

//? .textContent():
//* .textContent is used to select all the text inside a selected element.

//! Assigning a new value to the .textContent inside of the Class "message":

document.querySelector(".message").textContent = "🎉 Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 20;

//! Assigning the value to the input field:
document.querySelector(".guess").value = 12;

//! Reading the value from the input field:
console.log(document.querySelector(".guess").value);
// Output: 12

//? .value:
//* .value property is used to Assign as well as Read the value from the input field.

// --------------------------------------------------------------------

//todo: Handling Click Events

//? Event:
//* An event is something which happens on the web page, e.g., mouse click, key press, moving mouse, etc.

//? Event Listener:
//* Reacting to a certain event after its completion.

document.querySelector(".check").addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);
  document.querySelector(".message").textContent = "🎉 Correct Number!";
});

// Here, on the click of button, we are logging the input value in the console & changing the textContent of the message.

//? .addEventListener():
//* .addEventListener() is a method which will be called whenever an event is received.

//? Inside .addEventListener(),
//* -> There are 2 arguments that needs to passed,
//* 1) Name/Type (Event Name) of the Event.
// Here, 'click' event listener is responsible for performing some actions via function on a mouse click on a certain selected element.
//* 2) The function (Anonymous Event Handler) performing the task related to that Name/Type of the Event.
// (What reaction that eventListener should do on clicking this event is done by this anonymous function).

//? Syntax:
// .addeventListener("EventName/Type", "EventHandler" (Anonymous function))

//! NOTE: There is no need to call the Anonymous function inside the .addEventListener(), JS calls that function as soon as the event happens.
//! i.e., in this case, it is the click of the button.

// --------------------------------------------------------------------

//todo: Manipulating CSS Styles

//? document.querySelector("Element Selector / Class Selector / ID Selector").style.cssProperty = "value";

//* .style after selecting the element to select the properties of their css.

//* .cssProperty after selecting the .style object to select the properties of the selector.
//! NOTE: the property name should always be written in CamelCaseConvention, So convert the css property name to camelCasing.
//! The value of the css property should always be written as a string (inside the double quotes).

//todo: IMPORTANT NOTE: While doing css changes through DOM, The DOM affects the HTML through the Inline CSS properties. This means the CSS file is untouched from the changes done in .styles inside DOM.

// --------------------------------------------------------------------

//todo: Refactoring Our Code: The DRY Principle

//? We can refactor our code by relacing the repetitive DOM code with performing same tasks by assigning them a function

// For Example:
//* This DOM is written so many times in our code but with a different value each time, so in order to refactor our code, we need to assign it to a function

document.querySelector(".message").textContent = "🎉 Correct Number!";

document.querySelector(".message").textContent = "⛔ No Number";

// Solution:

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

displayMessage("🎉 Correct Number!");
displayMessage("⛔ No Number");

//? By writing this way (calling the function with parameters), we can avoid large blocks of code as well as this helps in increasing the readibility of our code.
