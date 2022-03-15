
//references to active elements

const userInput= document.getElementById("user-input");
const btn = document.getElementById("trigger-click")
const displayData = document.getElementById("display-data");
const err = document.querySelector(".error");


function addItem() {
    // default value of error paragraph that means there are no errors by default
    err.textContent = null;

    // removing whitespaces 去掉额外空白的地方
    userInput.value = userInput.value.trim();

    //if user inputs is not empty
    if(userInput.value !== ""){
        //create a list item
        let listItem = document.createElement("li");
        //assigning the value of text-field to the list item
        listItem.textContent = "> " + userInput.value;
        //appending the new element to DOM
        displayData.appendChild(listItem);
    } else {
        err.textContent = "Please enter a value.";
    }
}
btn.addEventListener("click", addItem);
