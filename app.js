
let myFullList = document.getElementsByTagName("LI")
let i;
for (i = 0; i < myFullList.length; i++) {
  let thisButton = document.createElement("button");
  let xButton = document.createTextNode("delete");
  thisButton.className = "close";
  thisButton.appendChild(xButton);
  myFullList[i].appendChild(thisButton);

}

let close = document.getElementsByClassName("close");
let c;
for (c = 0; c < close.length; c++) {
  close[c].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement(){
  let li = document.createElement("li");
  let inputValue = document.getElementById("taskInput").value;
  let textTask = document.createTextNode(inputValue);
  li.appendChild(textTask);

  if(inputValue === ''){
    alert("Please enter a task.");
  } else { 
    document.getElementById("theList").appendChild(li);
  }
  
  document.getElementById("taskInput").value = "";
  let thisButton = document.createElement("button");
  let txt = document.createTextNode("delete");
  thisButton.className = "close"
  thisButton.appendChild(txt);
  li.appendChild(thisButton);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

}

thisButton.html = "green"