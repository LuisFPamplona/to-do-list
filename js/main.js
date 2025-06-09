import {showTask} from "./ui.js";
import {addTask} from "./taskManager.js"

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

tasks.forEach(task => {
  showTask(task.text, task.position);

  if (task.done) {
    let taskDiv = document.getElementById('task' + task.position);
    taskDiv.style.backgroundColor = 'green';
    taskDiv.style.color = 'white';
  }
});


const ADD_BTN = document.querySelector('#add-task');
ADD_BTN.addEventListener('click', addTask);