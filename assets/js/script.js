/* Author: 

*/

let tasks = document.querySelectorAll(".task");
let taskList = document.querySelectorAll(".task-list");
let addtasks = document.querySelectorAll(".add-task-form");

addtasks.forEach((addTask) => {
  addTask.addEventListener("submit", (e) => {
    e.preventDefault();
    let task = e.target.querySelector("input").value;
    console.log(task);
  });
});

tasks.forEach((task) => {
  task.addEventListener("dragstart", () => {
    task.classList.add("dragging");
  });
  task.addEventListener("dragend", () => {
    task.classList.remove("dragging");
  });
});

taskList.forEach((list) => {
  list.addEventListener("dragover", (e) => {
    e.preventDefault();
    let task = document.querySelector(".dragging");
    list.append(task);
  });
});
