var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var buttonDelete = document.querySelector(".delete-button");
var img = document.querySelector(".img-icon");
var ul = document.getElementsByTagName("ul")[0];
var praButton = document.querySelector("select");
var dateInput = document.getElementById("date-input");
console.log(praButton);
// for Adding Lists
function inputLength() {
  return input.value.length;
}
function createListElement() {
  var li = document.createElement("li");
  var buttonLi = document.createElement("button");
  var divm = document.createElement("div");
  var smallDate = document.createElement("div");
  var pop = document.createElement("div");
  smallDate.className = "small-date";
  pop.className = "small-pra";
  li.className = "text-li";
  buttonLi.className = "delete-button";
  divm.className = "todo-li";
  divm.appendChild(li);
  divm.appendChild(smallDate);
  divm.appendChild(pop);
  divm.appendChild(buttonLi);
  smallDate.appendChild(document.createTextNode(dateInput.value));
  pop.appendChild(document.createTextNode(praButton.value));
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(divm);

  divm.addEventListener("click", function () {
    divm.classList.toggle("done");
  });

  buttonLi.addEventListener("click", function () {
    divm.classList.add("delete");
  });

  input.value = "";
}

function ifStatement() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeyPress(event) {
  if (input.value.length > 0 && event.which === 13) {
    createListElement();
  }
}
//adding praiority colors

button.addEventListener("click", ifStatement);
input.addEventListener("keypress", addListAfterKeyPress);

// praButton.addEventListener("click", function () {
//     document.querySelector("#priority div").classList.toggle("drop-down");

// })

// // for Arrow
// function mouseIn() {
//     button.className = "second-button";
//     img.setAttribute("src", "/img/down-arrow2.svg");
// }

// function mouseOut() {
//     button.className = "input-button";
//     img.setAttribute("src", "/img/down-arrow.svg");
// }
// button.addEventListener("mouseover", mouseIn);
// button.addEventListener("mouseleave", mouseOut);
