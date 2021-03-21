// 1: Set the text of the <h1> element
const h1 = document.querySelector("h1");
h1.textContent = "Saturday To-do List";

// 2: Set the color of the <h1> to a different color
h1.style.color = "steelblue";

// 3: Set the content of the '.desc' paragraph
const description = document.querySelector(".desc");
description.innerHTML = `Let's try to complete <strong>all</strong> of it!`;

// 4: Set the class of the <ul> to 'list'
const list = document.querySelector("ul");
list.className = "list";

// 5: Create a new list item and add it to the <ul>
const item = document.createElement("li");
item.innerHTML = "<input> New List Item";
list.appendChild(item);

// 6: Change all <input> elements from text fields to checkboxes
const allInputs = document.querySelectorAll("input");
for (let i = 0; i < allInputs.length; i++) {
  allInputs[i].setAttribute("type", "checkbox");
}

// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>
const extra = document.querySelector(".extra");
const button = document.createElement("button");
button.innerHTML = "Delete";
extra.appendChild(button);

// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
button.addEventListener("click", () => {
  extra.style.display = "none";
});
