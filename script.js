
const myDiv = document.getElementById("myDiv");
const myList = document.getElementById("myList");

console.log(myList.id);              // "myList"
console.log(myList.children.length); // Number of list items
console.log(myList.textContent);     // Text inside the list

const listItemText = document.getElementById("listItemText");
const addItemBtn = document.getElementById("addItemBtn");
const changeItemBtn = document.getElementById("changeItemBtn");

addItemBtn.addEventListener("click", () => {
  const text = listItemText.value.trim();

  if (text === "") {
    alert("Please enter some text for the list item.");
    return;
  }

  const newItem = document.createElement("li");
  newItem.textContent = text;
  myList.appendChild(newItem);
  listItemText.value = "";
});

changeItemBtn.addEventListener("click", () => {
  const text = listItemText.value.trim();

  if (text === "") {
    alert("Please enter the replacement text.");
    return;
  }

  const firstItem = myList.querySelector("li");
  firstItem.textContent = text;
});


const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
  document.getElementById("pageTitle").textContent = "You clicked the button!";
});

const demoButton = document.getElementById("demoButton");
const enableDemoButton = document.getElementById("enableDemoButton");

demoButton.addEventListener("click", () => {
  demoButton.textContent = "Disabled";
  demoButton.style.backgroundColor = "tomato";
  demoButton.style.color = "white";
  demoButton.disabled = true;
});

enableDemoButton.addEventListener("click", () => {
  demoButton.textContent = "Click me to disable";
  demoButton.style.backgroundColor = "";
  demoButton.style.color = "";
  demoButton.disabled = false;
});

const updateDivBtn = document.getElementById("updateDivBtn");

updateDivBtn.addEventListener("click", () => {
  myDiv.textContent = "The div's text, color, and class have changed.";
  myDiv.style.backgroundColor = "lightyellow";
  myDiv.className = "div-highlight";
});