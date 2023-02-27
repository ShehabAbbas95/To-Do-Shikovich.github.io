// Get the new content div to add or remove from it
const content = document.getElementById("newContent");
// Get the paragraphs with the class newParagraph to manipulate them 
const contents = document.getElementsByClassName("newParagraph");
// Get the user input
input = document.getElementById("userInput");
// Set a counter to use as an Id for each item
let count = 0;
// Check if there's a saved value for the counter to be used upon reload the page
localStorage.length? count = localStorage.getItem("count"): null;
// Check if there's a saved items in the localStorage to be used upon reload the page
// It's better tu use it as a function but leave it for now
if (localStorage.length> 0 ){
    for(i=0;i<=localStorage.length;i++){
        const newParagraph = document.createElement("p");
        newParagraph.innerText = localStorage.getItem(i);
        content.appendChild(newParagraph);
        newParagraph.className = "newParagraph";
    }
}
/* ----------- */
// Function to add items
function addParagraph() {
    // Get the user input textbox value
    userInput = input.value;
    if (userInput){
        // Creat a new element
        const newParagraph = document.createElement("p");
        // Add the text to the new created element
        newParagraph.innerText = `Task ${count+1}: ${userInput}`;
        // Add a class for the new created element
        newParagraph.className = "newParagraph";
        // Append the new created element to the div 
        content.appendChild(newParagraph);
        // Add value to the local storage
        localStorage.setItem(count,userInput);
        // Increas the counter
        count++;
        // Add the counter to localStorage
        localStorage.setItem("count",count);
        // Update the value for the input to show the place holder
        input.value = "";
    } else {
        alert("Please Type anything in the textbox"); 
    }
}



function removeParagraph(){
    if (contents.length > 0 ){
        // Remove the last child in the div from the DOM
        const removedParagraph = contents[contents.length - 1];
        content.removeChild(removedParagraph);
        // Remove the last child in the div from the localStorage
        lastItemKey = localStorage.getItem("count");
        localStorage.removeItem(lastItemKey -1);
        // Upgrade the counter in the localStorage
        count--;
        lastItemKey = localStorage.setItem("count",count);
        
    } else {
        alert("You didn't have new paragraphs yet");
    }
}
function clearAll() {
    // Clear the localStorage
    localStorage.clear()
    if (contents.length > 0){
        // Remove the all items from the DOM
        while (contents.length){
            content.removeChild(contents[0]);
        }
    }
    else {
        alert(`You didn't have new paragraphs yet`)
    }
    // Reset the counter
    count = 0;
}
