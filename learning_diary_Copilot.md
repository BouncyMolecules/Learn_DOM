
Task 1 

- `document` is provided by the browser; it is not a JavaScript keyword. It represents the current page and is commonly used to access the DOM.

What can I do with the document variable? 

'Use document to find, read, and change elements on the current web page. For example, select myList with document.getElementById("myList").'


Task 2:

`document.getElementById("myList")` finds the element whose `id` is `myList`.


- An element exposes properties. Properties provide information or values; methods perform actions.


In script.js, first select the list, then change it. For example, to change the first item:

const myList = document.getElementById("myList");
myList.querySelector("li").textContent = "New item";

## Task 3: Exploring the `<ul id="myList">` element

The assignment says “parameters,” but for things that can be read from a DOM element, the more accurate word is **properties**. A property is information or a value belonging to an object. A method is an action you call. A method's parameter is a named input; the value supplied when calling it is an argument. For example, `"myList"` is the argument passed to `getElementById()`.

Useful properties of this list include:

- `myList.id` - reads the list's ID, `"myList"`.
- `myList.children` - gives the list's child elements, the `<li>` items.
- `myList.children.length` - counts the child elements.
- `myList.textContent` - reads all text in the list. Setting it replaces the list's contents, including its `<li>` elements.
- `myList.classList` - lets you inspect, add, or remove CSS classes.

I tried these properties and changed the first list item's text in `script.js`:

```js
const myList = document.getElementById("myList");
const firstItem = myList.querySelector("li");

console.log(myList.id);                 // "myList"
console.log(myList.children.length);    // Number of list items
console.log(myList.textContent);        // Text inside the list

firstItem.textContent = "Updated item"; // Changes the first <li>
```

`querySelector("li")` is a method that finds the first matching `<li>` inside the list. `"li"` is the argument telling it what to find. The change to `textContent` updates the page displayed in the browser; it does not edit the original HTML file.


## Task 4: DOM elements in this HTML page

The examples below refer to the elements in `index.html`. Select an element by its ID like this:

```js
const myDiv = document.getElementById("myDiv");
```

### `<div id="myDiv">`

- `myDiv.id` - tells you its ID, `"myDiv"`.
- `myDiv.textContent` - reads or changes its text.
- `myDiv.classList` - lets you check, add, or remove CSS classes.

### `<ul id="myList">` and its `<li>` items

- `myList.id` - tells you its ID, `"myList"`.
- `myList.children` - gives you its child elements, the `<li>` items.
- `myList.textContent` - reads or changes the text inside the list.
- `myList.classList` - lets you check, add, or remove CSS classes.

For each list item, stored here in a variable named `item`:

- `item.textContent` - reads or changes that item's text.
- `item.parentElement` - gives you the parent element, the `<ul>`.
- `item.classList` - lets you check, add, or remove CSS classes.

### `<table id="myTable">`, sections, rows, and cells

- `myTable.id` - tells you its ID, `"myTable"`.
- `myTable.rows` - gives you the table's rows.
- `myTable.caption` - gives you the table caption, or `null` because this table has no caption.
- `myTable.textContent` - reads or changes the text inside the table.

For the `<thead>` and `<tbody>` sections:

- `tableHead.rows` - gives you the rows in the table header.
- `tableBody.rows` - gives you the rows in the table body.
- `tableHead.parentElement` - gives you the parent `<table>`.

For each `<tr>` row, stored in a variable named `row`:

- `row.cells` - gives you the cells (`<th>` or `<td>`) in that row.
- `row.rowIndex` - tells you the row's zero-based position in the table.
- `row.textContent` - reads the text in the row.

For each `<th>` or `<td>` cell, stored in a variable named `cell`:

- `cell.textContent` - reads or changes the cell's text.
- `cell.cellIndex` - tells you the cell's zero-based position within its row.
- `cell.parentElement` - gives you the row containing the cell.

### `<form id="myForm">`

- `myForm.id` - tells you its ID, `"myForm"`.
- `myForm.elements` - gives you the form controls, such as inputs, the select menu, and the button.
- `myForm.elements.length` - tells you how many controls it contains.
- `myForm.classList` - lets you check, add, or remove CSS classes.

### Labels and the color menu

For each `<label>`:

- `label.textContent` - reads the label's visible text.
- `label.htmlFor` - tells you the ID of the control the label describes. In HTML, this is written as the `for` attribute.

For the `<select id="color">` menu, stored in `colorSelect`:

- `colorSelect.value` - tells you the value of the currently selected option.
- `colorSelect.options` - gives you the available `<option>` elements.
- `colorSelect.selectedIndex` - tells you the zero-based position of the selected option.

For each `<option>`, stored in a variable named `option`:

- `option.value` - tells you the option's value, such as `"red"`.
- `option.textContent` - tells you its displayed text, such as `"Red"`.
- `option.selected` - tells you whether that option is currently selected.

### Text, radio, and checkbox inputs

For the text `<input id="name">`, stored in `nameInput`:

- `nameInput.value` - reads or changes the text entered by the user.
- `nameInput.type` - tells you the input type, `"text"`.
- `nameInput.name` - tells you its form field name, `"name"`.

For the radio `<input>` elements with IDs `"sizeSmall"` and `"sizeLarge"`, stored in a variable named `radio`:

- `radio.value` - tells you that option's value, `"small"` or `"large"`.
- `radio.checked` - tells you whether that radio option is selected; you can also set it to `true` or `false`.
- `radio.name` - tells you the shared group name, `"size"`.

For the checkbox `<input id="agree">`, stored in `agreeCheckbox`:

- `agreeCheckbox.checked` - tells you whether the box is ticked; you can also set it to `true` or `false`.
- `agreeCheckbox.value` - tells you its value. If no value is specified in HTML, browsers commonly use `"on"`.
- `agreeCheckbox.name` - tells you its form field name, `"agree"`.

### `<button id="submitBtn">`

- `submitBtn.textContent` - reads or changes the button's label.
- `submitBtn.type` - tells you its type, `"button"`.
- `submitBtn.disabled` - tells you whether it is disabled; you can set it to `true` or `false`.

### Other page elements

- `document.documentElement` - gives you the root `<html>` element; its `lang` property is `"en"`.
- `document.head` - gives you the page's `<head>` element.
- `document.body` - gives you the page's `<body>` element.
- `document.title` - reads or changes the text shown in the browser tab (`"Learn DOM"`).
- The `<script>` element's `src` property gives the URL of the JavaScript file it loads.
- `meta.getAttribute("charset")` - reads the `charset` attribute (`"UTF-8"`) from the `<meta>` element.
- `<br>` elements create line breaks; they do not have a special text or value to read.

### Selecting elements without an ID

Use IDs when available:

```js
const myTable = document.getElementById("myTable");
const myForm = document.getElementById("myForm");
const colorSelect = document.getElementById("color");
const nameInput = document.getElementById("name");
const submitBtn = document.getElementById("submitBtn");
```

For elements without IDs, search from a selected parent:

```js
const listItems = myList.querySelectorAll("li");
const tableRows = myTable.querySelectorAll("tr");
```

The properties available depend on the kind of element. For example, text inputs have a useful `value` property, while a list has `children` and a table has `rows`.

## Task 1

- It helped to start with a simple explanation of `document` and then connect it to examples in my own page.
- The button example made it easier to see how JavaScript finds an element and changes its text.
- I had to check `index.html` myself to confirm the button's ID and whether the page had an `<h1>` for the script to update.

## Task 2

- It helped to break the list task into small steps: find `myList`, create a new `<li>`, and append it to the list.
- Using an input and separate buttons made it clear how the same text can add a new item or replace the first item's text.
- I had to check that the input and button IDs in `index.html` matched the IDs used by `script.js`, and try what happens when the input is empty.
