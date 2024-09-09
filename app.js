let newTask = document.getElementById("newTaskText");

let submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", addTaskToList)




function addTaskToList() {
    let ul = document.getElementById("listedTasks");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(newTask.value));
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "\u00D7";
    deleteButton.style.borderRadius = "50%";
    li.appendChild(deleteButton);
    ul.appendChild(li);
    deleteButton.addEventListener("click", deleteTask)
}

function deleteTask() {

    


    console.log("WHAT")
    


}




/*



// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

*/