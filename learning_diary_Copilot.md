
Task 1 

- `document` is provided by the browser; it is not a JavaScript keyword. It represents the current page and is commonly used to access the DOM.

What can I do with the document variable? 

Use document to find, read, and change elements on the current web page . for example, select myList with document.getElementsById("myList")




Task 2:

`document.getElementById("myList")` finds the element whose `id` is `myList`.


- An element exposes properties. Properties provide information or values; methods perform actions.

- `myList.id` reads the ID, `myList.children` accesses its direct child elements, and `myList.children.length` counts them.
- `myList.textContent` reads or changes text. `myList.classList` provides ways to inspect or update CSS classes.
- `myList.getAttribute("id")` is a method call. `"id"` is the argument telling it which HTML attribute to read.
- `myList.querySelector("li")` finds the first matching list item. `"li"` is the CSS selector argument.
- `console.dir(myList)` is useful in a browser's developer console for exploring an element's properties.
- Since this project's `script.js` is included after the list in the HTML, the list is available when that script runs.

## Prompts that improve output

The most useful prompts give the assistant the relevant code or element name, state the goal, and ask for an explanation at the desired level. Follow-up questions can clarify unfamiliar terms or ask for an example that applies directly to the project.

Examples:

1. **Give context and ask a focused question:**  
   “In my HTML, I have `<ul id="myList">`. How do I select this list in `script.js`?”
2. **State the desired change:**  
   “Using the list with ID `myList`, show JavaScript that changes the first `<li>` to ‘Updated item’.”
3. **Ask for a concrete distinction:**  
   “In `myList.getAttribute("id")` and `myList.querySelector("li")`, what are the methods and what are their arguments?”
4. **Request an appropriate level and format:**  
   “Explain the properties and methods available on this `<ul>` in beginner-friendly language, with a short code example for each.”
5. **Ask for a summary with a clear purpose:**  
   “Summarize what I learned about `document` and `myList` for a short presentation, including one example of reading and one of changing the list.”

Being specific about the actual HTML, the file where the JavaScript runs, and the kind of answer needed makes the response more relevant and easier to apply.