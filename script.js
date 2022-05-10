var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var delBtn = document.getElementById("delete");


function inputLength() {
	return input.value.length;
}

function createListElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.setAttribute("id","list")
	ul.appendChild(li);
	input.value = "";

	var btn = document.createElement("button");
		btn.appendChild(document.createTextNode("Delete"));
		btn.setAttribute("Id", "delete");
		btn.setAttribute("onclick", "myFunction()");
		li.appendChild(btn);
		btn.onclick = removeParent;
}

function removeParent(evt){
	evt.target.parentNode.remove();
} 

function addListAfterClick() { 
	if (inputLength() > 0) {
		createListElement();
	} else {
		alert("Please insert an item")
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	} 
}

ul.onclick = function(event) {
	var target = event.target;
	target.classList.toggle("done");
}

function myFunction() {
  var element = document.getElementById("list");
  element.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

