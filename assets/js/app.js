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