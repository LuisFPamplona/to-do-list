import {showTask} from "./ui.js";
import {addTask} from "./taskManager.js"
import { colorMode } from "./ui.js";

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const ADD_BTN = document.querySelector('#add-task');

const INPUT = document.querySelector('#task');
INPUT.focus()

const LIGHT_MODE = document.getElementById('light-mode');
const DARK_MODE = document.getElementById('dark-mode');

ADD_BTN.addEventListener('click', addTask);
LIGHT_MODE.addEventListener('click',()=>{
  colorMode('light');
})
DARK_MODE.addEventListener('click',()=>{
  colorMode('dark');
})

tasks.forEach(task => {
  showTask(task.text, task.position);
  
  document.addEventListener('keypress', function(e){
    if(e.key == 'Enter' && document.activeElement === INPUT){
      ADD_BTN.click();
    }
  })

  if (task.done) {
    let taskDiv = document.getElementById('task' + task.position);
    taskDiv.style.backgroundColor = 'green';
    taskDiv.style.color = 'white';
  }
});


