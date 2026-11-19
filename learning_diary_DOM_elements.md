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