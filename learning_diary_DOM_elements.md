# The DOM: Document Object Model 

is the browsers' live , tree-shaped, representation of a web page. It organizes HTML elements, such as lists and headings, and their text as objects. JS can us document to these objects, read their information, and change what appears on the page.

DOM elements are the HTML tags that make up a page—such as headings (<h1>), paragraphs (<p>), links (<a>), and buttons (<button>).

Your index.html includes a <div>, a <ul> with <li> items, a <table> with rows and cells, and a <form> with labels, inputs, a dropdown, and a button. JavaScript can select and work with these elements through document.

## Task 1: The document variable

- `document` is a browser-provided object that represents the current webpage.
- Use methods like `document.getElementById()` to find an HTML element.
- You can read or change an element's text with its `textContent` property.
- You can listen for events, such as a button click, and respond to them.

## Task 2: myList

- I can access the list with `document.getElementById("myList")` and find an existing list item with `myList.querySelector("li")`.
- To add an item, I can create an `<li>` with `document.createElement("li")`, set its `textContent`, and add it to the list with `myList.appendChild()`.
- I can change an existing item's text by setting its `textContent`; the input and buttons let me try adding an item or changing the first one.

## Task 3: button element

The examples assume `button` refers to a button element. `addEventListener()` is a method, not a property.

| Property or method | What it does | Example |
| --- | --- | --- |
| `textContent` | Reads or changes the button's text. | `button.textContent = "Saved";` |
| `disabled` | `true` prevents the button from being clicked; `false` enables it. | `button.disabled = true;` |
| `type` | Sets the button's behavior: `"button"`, `"submit"`, or `"reset"`. | `button.type = "button";` |
| `id` | Gets or sets the button's unique identifier. | `button.id = "saveButton";` |
| `className` | Gets or sets the button's CSS class names. | `button.className = "primary";` |
| `style` | Lets JavaScript set inline CSS styles. | `button.style.color = "white";` |
| `onclick` | Assigns a function to run when the button is clicked. | `button.onclick = handleClick;` |
| `addEventListener()` | Adds a click handler; multiple listeners can be added. | `button.addEventListener("click", handleClick);` |

## Task 5: div element

The examples assume `myDiv` refers to the `<div>` element. Setting `innerHTML` parses HTML; use `textContent` for plain text.

| Property | What it does | Example |
| --- | --- | --- |
| `innerHTML` | Reads or replaces the HTML inside the div. | `myDiv.innerHTML = "<strong>Hello</strong>";` |
| `textContent` | Reads or replaces the text inside the div. | `myDiv.textContent = "Hello";` |
| `style` | Lets JavaScript set inline CSS styles. | `myDiv.style.backgroundColor = "lightyellow";` |
| `className` | Gets or replaces all CSS class names on the div. | `myDiv.className = "div-highlight";` |
| `classList` | Adds, removes, or toggles individual CSS classes. | `myDiv.classList.add("div-highlight");` |
| `id` | Gets or sets the div's unique identifier. | `myDiv.id = "myDiv";` |
| `children` | Gives the div's direct child elements. | `myDiv.children.length` |

## Task 5: ul and li elements

The examples use `myList` for the `<ul>` and `item` for an `<li>`. `appendChild()` and `remove()` are methods, not properties.

| Property or method | What it does | Example |
| --- | --- | --- |
| `children` | Gives the list's direct child elements; it updates when items are added or removed. | `myList.children.length` |
| `firstElementChild` | Gets the first child element, or `null` if there are no items. | `myList.firstElementChild.textContent` |
| `lastElementChild` | Gets the last child element, or `null` if there are no items. | `myList.lastElementChild.textContent` |
| `textContent` | Reads all text in the list; setting it replaces the list's contents. | `myList.textContent` |
| `appendChild()` | Adds a node to the end of the list. | `myList.appendChild(item);` |
| `remove()` | Removes the element it is called on from the page. | `item.remove();` |

## Task 5: table element

The examples use `myTable` for the table and `row` for a `<tr>`. `insertRow()`, `insertCell()`, and `deleteRow()` are methods.

| Property or method | What it does | Example |
| --- | --- | --- |
| `rows` | Gives all the table's rows, including header and body rows. | `myTable.rows` |
| `rows.length` | Counts all the table's rows. | `myTable.rows.length` |
| `cells` | Gives the `<th>` and `<td>` cells in one row. | `row.cells.length` |
| `insertRow()` | Adds a row to the table and returns it. | `const row = myTable.insertRow();` |
| `insertCell()` | Adds a `<td>` cell to a row and returns it. | `const cell = row.insertCell();` |
| `deleteRow(index)` | Deletes the row at the table's zero-based row index. | `myTable.deleteRow(row.rowIndex);` |

## Task 5: form element

The examples use `myForm` for the form and `event` for its submit event. `reset()` and `preventDefault()` are methods.

| Property, event, or method | What it does | Example |
| --- | --- | --- |
| `elements` | Gives the controls inside the form. | `myForm.elements.name.value` |
| `action` | Gets or sets the URL used for a normal form submission. | `myForm.action` |
| `method` | Gets or sets the submission method, usually `"get"` or `"post"`. | `myForm.method` |
| `reset()` | Restores controls to their initial values. | `myForm.reset();` |
| `submit` event | Fires when the form is submitted; listen to it to handle the form. | `myForm.addEventListener("submit", handleSubmit);` |
| `preventDefault()` | Stops the browser's normal submission, which may navigate or reload the page. | `event.preventDefault();` |