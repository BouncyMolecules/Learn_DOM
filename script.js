
const myList = document.getElementById("myList");

console.log(myList.id);              // Shows "myList"
console.log(myList.children.length); // Shows how many list items it has

myList.querySelector("li").textContent = "Updated item";