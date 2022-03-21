
//create edit button and add to each list itme
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var btn = document.createElement("button");
  var txt = document.createTextNode("✎");
  btn.className = "editBtn";
  btn.addEventListener("click", editTask);
  btn.appendChild(txt);
  li.appendChild(btn);
}

// create a close button and add it to every list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Click on the edit button to open prompt and edit task
function editTask() {
    var editedTask = prompt("Write updated task here...");
    if (editedTask === "") {
      alert("Task cannot be blank!");
    } else {
    var div = this.parentElement;
    div.style.display = "none";
    var li = document.createElement("li");
  var t = document.createTextNode(editedTask);
  li.appendChild(t);
  if (editedTask === "") {
    alert("Task cannot be blank!");
  } else {
    document.getElementById("myUL").appendChild(li);
    li.id = "li-text"
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
  var btn = document.createElement("button");
  var txt = document.createTextNode("✎");
  btn.className = "editBtn";
  btn.addEventListener("click", editTask);
  btn.appendChild(txt);
  li.appendChild(btn);
}}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);



// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("Task cannot be blank!");
  } else {
    document.getElementById("myUL").appendChild(li);
    li.id = "li-text"
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
  var btn = document.createElement("button");
  var txt = document.createTextNode("✎");
  btn.className = "editBtn";
  btn.addEventListener("click", editTask);
  btn.appendChild(txt);
  li.appendChild(btn);
}
