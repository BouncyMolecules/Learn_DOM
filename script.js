
const myList = document.getElementById("myList");
const firstItem = myList.querySelector("li");

console.log(myList.id);              // "myList"
console.log(myList.children.length); // Number of list items
console.log(myList.textContent);     // Text inside the list

firstItem.textContent = "Updated item";


const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
  alert("Button clicked!");
});