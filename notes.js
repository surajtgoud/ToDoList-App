var userInput = document.getElementById("userInput");
var button = document.querySelector("button");


function listAdder() {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(userInput.value));
    ul.appendChild(li);
    userInput.value = "";
}

button.addEventListener("click", function () {
    if (userInput.value.length > 0) {
        listAdder();
    }
})


userInput.addEventListener("keypress", function () {
    if (userInput.value.length > 0 && event.which === 13) {
        listAdder();
    }
})
