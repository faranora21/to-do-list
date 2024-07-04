// User type into input
// Click add and the item should add to an array.
// Display the item.
// Loop through the array
// Display each item in the arrray

const todoArray = [];

function addItem() {
  // Get the input value
  // Store into the array
  const inputbox = document.getElementById("input-box");
  todoArray.push(inputbox.value);
  console.log(todoArray);
  //display item
  displayItem(todoArray);
}

function displayItem(array) {
  //get the ul id
  const checklist = document.getElementById("check-list");
  checklist.innerHTML = ""; // clear all content beofre adding new one
  todoArray.forEach((item, index) => {
    //append the new li todo item to the parent ul
    checklist.innerHTML += `<li id="li-${index}">
            <input
              class="form-check-input"
              type="checkbox"
            />
            <label class="form-check-label" for="flexCheckDefault">
              ${item}
            </label>
            <button type="button" class="btn btn-danger">Delete</button>
          </li>`;
  });
}
