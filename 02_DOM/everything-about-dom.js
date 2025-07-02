/*
Everything About DOM Selectors in JavaScript

The DOM (Document Object Model) allows you to access and manipulate HTML elements using JavaScript.
Selectors are methods to select (find) elements in the DOM.

1. getElementById
    - Selects a single element by its unique ID.
*/
const heading = document.getElementById('main-heading');
console.log(heading);
and now through heading we can access it 

/*
2. getElementsByClassName
    - Selects all elements with a given class name.
    - Returns an HTMLCollection (array-like).
*/
const items = document.getElementsByClassName('list-item');
console.log(items);

/*
3. getElementsByTagName
    - Selects all elements with a given tag name.
    - Returns an HTMLCollection.
*/
const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);

/*
4. querySelector
    - Selects the first element that matches a CSS selector.
    - Can use any valid CSS selector (id, class, tag, attribute, etc.).
*/

const firstButton = document.querySelector('.btn');
console.log(firstButton);

/*
5. querySelectorAll
    - Selects all elements that match a CSS selector.
    - Returns a NodeList (can use forEach).
    note node list is not like array 
*/
const allButtons = document.querySelectorAll('.btn');
allButtons.forEach(btn => console.log(btn));

/*
Example HTML for reference:

<html>
  <body>
     <h1 id="main-heading">Welcome</h1>
     <ul>
        <li class="list-item">Item 1</li>
        <li class="list-item">Item 2</li>
     </ul>
     <p>Paragraph 1</p>
     <p>Paragraph 2</p>
     <button class="btn">Click Me</button>
     <button class="btn">Submit</button>
  </body>
</html>
*/

/*
Summary:
- Use getElementById for unique IDs.
- Use getElementsByClassName or getElementsByTagName for multiple elements (returns HTMLCollection).
- Use querySelector for the first match, querySelectorAll for all matches (returns NodeList).
*/

/*
How to use map on a NodeList:

- NodeList (from querySelectorAll) is not a true array, so it doesn't have array methods like map directly.
- To use map, first convert the NodeList to an array using Array.from() or the spread operator [...].

Example:
*/

const allButtons = document.querySelectorAll('.btn');

//Array.from(allButtons) this from method convert it 

// Convert NodeList to Array using Array.from()
const buttonTexts1 = Array.from(allButtons).map(btn => btn.textContent);
console.log(buttonTexts1);

// Or using the spread operator
const buttonTexts2 = [...allButtons].map(btn => btn.textContent);
console.log(buttonTexts2);

/*
How to create and add a new DOM element:

1. Use document.createElement to create a new element.
2. Set its properties (like textContent, className, etc.).
3. Use appendChild or append to add it to the DOM.

Example:
*/

// Create a new <li> element
const newListItem = document.createElement('li');

// Set its text content
newListItem.textContent = 'Item 3';

// Optionally, add a class
newListItem.className = 'list-item';

// Find the <ul> to append to
const ul = document.querySelector('ul');

// Append the new <li> to the <ul>
ul.appendChild(newListItem);

// Now, the DOM has a new list item: <li class="list-item">Item 3</li>

