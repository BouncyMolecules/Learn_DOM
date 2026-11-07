
Task 1 

- `document` is provided by the browser; it is not a JavaScript keyword. It represents the current page and is commonly used to access the DOM.

What can I do with the document variable? 

'Use document to find, read, and change elements on the current web page . for example, select myList with document.getElementsById("myList")'


Task 2:

`document.getElementById("myList")` finds the element whose `id` is `myList`.


- An element exposes properties. Properties provide information or values; methods perform actions.


In script.js, first select the list, then change it. For example, to change the first item:

const myList = document.getElementById("myList");
myList.querySelector("li").textContent = "New item";

Task 3:


For the <ul id="myList"> element, JavaScript can access properties such as:

myList.id - tells you its ID, such as "myList".
myList.children - gives you the list’s child elements—the <li> items.
myList.textContent  - reads or changes all the text inside the list.
myList.classList  - lets you check, add, or remove CSS classes.


'These are called properties, not parameters. Parameters are values passed into a method, like "myList" in document.getElementById("myList").'

