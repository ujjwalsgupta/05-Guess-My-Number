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

document.querySelector(".check").addEventListener("click", function () {});

//? .addEventListener():
//* .addEventListener() is a method which will be called whenever an event is received.

//? Inside .addEventListener(),
//* -> There are 2 arguments that needs to passed,
//* 1) Name/Type of the Event.
//* 2) The function performing the task related to that Name/Type.
