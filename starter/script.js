"use strict";

//todo: What's the DOM and DOM Manipulation

//! Document Object Model (DOM):
//* It is a Structured Representation of HTML Documents.
//* It allows JavaScript to access HTML elements and STYLES to Manipulate them.
//* It is a connection between JavaScript & HTML.

//? Selecting the textContent inside the Class .message:

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
