"use strict";
const enter = document.getElementById("submit");
const material = document.getElementById("content");
const section = document.querySelector(".enter-section");
const clear_all = document.getElementById("clear");
const items = document.querySelector(".enter-section");

items.addEventListener("click", deletedone);
// items.classList.add("hide");

// To pass list and run it
enter.addEventListener("click", function () {
  let text = material.value;
  console.log(text);
  if (text === "") {
    alert("Please enter something 🙂");
  } else {
    const lists = document.createElement("ul");
    lists.classList.add("item");

    const todoDiv = document.createElement("li");
    todoDiv.innerText = text;
    todoDiv.classList.add("text");
    lists.appendChild(todoDiv);
    //Create list
    const newTodo = document.createElement("div");
    newTodo.classList.add("icons");
    material.value = "";
    //Create Completed Button

    newTodo.innerHTML = `<i class="bi bi-check-circle done"><i class="bi bi-pencil-square eidt"></i>
    <i class="bi bi-x-circle delete"></i>`;

    //attach final Todo
    lists.appendChild(newTodo);
    const list = document.querySelector(".item");
   items.insertBefore(lists,list);
  }
});

// To clear whole list
clear_all.addEventListener("click", function () {
  section.innerHTML = "";
});

function deletedone(e) {
  const a = e.target;
  const todo = a.parentElement.parentElement;

    if(e.target.classList.contains("bi-check-circle")){
      todo.classList.toggle('pattern');
    }
    if(e.target.classList.contains("bi-x-circle")){
      todo.parentElement.classList.toggle('hide');
    }
    if(e.target.classList.contains("bi-pencil-square")){
      let edit = todo.parentElement.children[0].innerText;
      todo.parentElement.classList.toggle('hide');
      material.value = edit;
      
    }

}


