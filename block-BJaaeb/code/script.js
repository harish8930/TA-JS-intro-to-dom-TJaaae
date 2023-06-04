/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/
function createInputElm(label, type = "text") {
  // Create the label element
  const labelElement = document.createElement("label");

  // Create the input element
  const inputElement = document.createElement("input");
  inputElement.type = type;

  // Set the label text
  labelElement.textContent = label;

  // Append the input element to the label element
  labelElement.appendChild(inputElement);

  // Return the label element with the input element inside
  return labelElement;
}


// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`

// Your code goes here

// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
// Your code goes here
function createList(data) {
  // Create the unordered list element
  const ulElement = document.createElement("ul");

  // Iterate over the data array
  for (let i = 0; i < data.length; i++) {
    // Create a list item element
    const liElement = document.createElement("li");
    
    // Set the text content of the list item
    liElement.textContent = data[i];
    
    // Append the list item to the unordered list
    ulElement.appendChild(liElement);
  }

  // Return the generated HTML markup
  return ulElement.outerHTML;
}

// TEST
createList(['ALABAMA', 'ALASKA', 'HAWAII', 'KENTUCKY']);
createList(['Afghanistan', 'Antarctica', 'Congo', 'Estonia']);

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

// Your code goes here

// TEST
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn JS', isDone: true },
]);
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn React', isDone: true },
  { name: 'Learn JS', isDone: true },
]);
