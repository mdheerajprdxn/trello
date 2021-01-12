/* Author: 

*/

window.onload = function () {
  let cards = document.querySelectorAll(".card");
  let taskList = document.querySelectorAll(".card-list");
  let addtasks = document.querySelectorAll(".add-task-form");
  let listContainer = document.querySelector(".list-container");

  function addTasks() {
    addtasks = document.querySelectorAll(".add-task-form");
    addtasks.forEach((addTask) => {
      addTask.addEventListener("submit", (e) => {
        e.preventDefault();
        addNewTask(e);
      });
    });
  }

  function addNewTask(e) {
    e.preventDefault();
    let cardList = e.target.previousElementSibling;
    let input = e.target.querySelector("input").value;
    if (input == "") return;
    e.target.querySelector("input").value = "";
    let card = document.createElement("li");
    card.classList.add("card");
    card.classList.add("draggable");
    card.setAttribute("draggable", "true");
    let cardTitle = document.createElement("h3");
    cardTitle.innerHTML = input;
    card.append(cardTitle);
    console.log("appended");
    cardList.append(card);
    addDraggable();
  }

  function addDraggable() {
    cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.addEventListener("dragstart", () => {
        card.classList.add("dragging");
      });
      card.addEventListener("dragend", () => {
        card.classList.remove("dragging");
      });
    });
  }

  function refreshTaskLists() {
    taskList = document.querySelectorAll(".card-list");
    taskList.forEach((list) => {
      list.addEventListener("dragover", (e) => {
        e.preventDefault();
        let task = document.querySelector(".dragging");
        list.append(task);
      });
    });
  }
  refreshTaskLists();

  let addList = document.querySelector("#add-new-list");
  addList.addEventListener("click", () => {
    createNewList();
  });

  function createNewList(title = "title") {
    let newList = document.createElement("div");
    cardTitle = document.createElement("h2");
    cardTitle.innerHTML = title;
    newList.classList.add("card-container");
    newList.append(cardTitle);

    // create UL
    let cardList = document.createElement("ul");
    cardList.classList.add("card-list");
    newList.append(cardList);

    //create form
    let form = document.createElement("form");
    let formElement = document.createElement("div");
    formElement.classList.add("form-element");
    let str = `<form action="" class="add-task-form">
    <div class="form-element">
      <input type="text" class="add-task" placeholder="&#x2b; Add Another Task">
    </div>
  </form>`;
    // let input = document.createElement("");
    newList.insertAdjacentHTML("beforeend", str);
    listContainer.append(newList);
    listContainer.append(addList);
    refreshTaskLists();
    addTasks();
  }
};
