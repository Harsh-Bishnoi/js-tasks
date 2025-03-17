// change color
function changeColor() {
    document.getElementById("para").style.color = "blue";
}

// get input value
function getValueBtn() {
    const inputValue = document.getElementById("input-box").value;
    alert(inputValue);
}

// Create a New Element
function createNewElement() {
    let para = document.createElement("p");
    para.textContent = "This is new paragraph";
    document.body.appendChild(para);
}

// Remove an Element
function removeElement() {
    document.getElementById("remove").style.display = "none";
}

// onload
function changeBgColor() {
    document.body.style.background = "yellow";
}

//  Count the Number of Paragraphs
function countParagraph() {
    let paraNumber = document.getElementsByTagName("P");
    const countNmber = paraNumber.length;
    alert("The Number Of Paragraph is " + countNmber);
}

// Add a CSS Class to an Element
function addClass() {
    document.getElementById("lorem").style.color = "red";
}

// Get the Value of a Selected Option
function getValue() {
    let dropdownBtn = document.getElementById("dropdown").value;
    alert(dropdownBtn);
}