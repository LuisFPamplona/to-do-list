import {getTasks, setTasks} from "./storage.js";
import {createNewElement, showTask} from "./ui.js";

let tasks = getTasks();

export function addTask(){ 

    let taskInput = document.querySelector('#task').value;
    let inputValue = taskInput.trim();

    if(inputValue == ''){
        console.log('tarefa vazia')
    }else{
  
        let taskId = Date.now(); // garante um número único com base no tempo
        
        tasks.push({
            text: inputValue,
            position: taskId,
            done: false
        });
        
        
        console.log(tasks);
        
        showTask(inputValue, taskId);

        document.querySelector('#task').value = '';

    }

    setTasks(tasks);
    console.log(tasks)
}

export function editTask(id){
    console.log('edit')

    let taskIndex = tasks.findIndex(task => task.position === id);
    if (taskIndex !== -1) {

        let editedText;

        let todolist = document.querySelector('.to-do-list');

        let spanText = document.getElementById('span'+id).textContent;

        let overlay = document.getElementById('overlay');
        overlay.style.display = 'block';

        let taskDiv = document.getElementById('task'+id);

        let tempDiv = createNewElement('tempDiv', 'div', id)

        let tempInput = createNewElement('temp-input', 'input', id, spanText)
        
        let tempButton = createNewElement('temp-button', 'button', id, '&#x2705',)

        let tempForm = createNewElement('temp-form', 'form', id);
        
        if(document.getElementById('tempDiv'+id) == null){
            todolist.appendChild(tempDiv)
            tempDiv.appendChild(tempForm)
            tempForm.appendChild(tempInput)
            tempForm.appendChild(tempButton)
        }
        tempInput.focus();

        let TEMP_FORM = document.querySelector('#temp-form'+id);
        TEMP_FORM.addEventListener('submit', (e)=>{
            e.preventDefault();
            defineText();
        })

        overlay.addEventListener('click', (e)=>{
            todolist.removeChild(tempDiv);
            overlay.style.display = 'none';
        })

        function defineText(){
            editedText = String(document.getElementById('temp-input'+id).value).trim();
            
            
            if (String(editedText).trim() == ''){
                console.log('edicao vazia')
            }else{
                console.log(editedText);
                tasks[taskIndex].text = editedText;
                
                let span = document.getElementById('span'+id)
                span.textContent = editedText;
            }

            todolist.removeChild(tempDiv);
            overlay.style.display = 'none';
        }
            
        console.log(tasks)

        setTasks(tasks);
    }
}

export function doneTask(id){
    console.log('Done');
    
    let taskIndex = tasks.findIndex(task => task.position === id);
    
    if (taskIndex !== -1) {
        
        let thisTask = document.querySelector('#task'+id);
            
        if(tasks[taskIndex].done == false){
            tasks[taskIndex].done = true;
            
            thisTask.style.backgroundColor = '#6aa358';
            thisTask.style.color = 'white';
                      
        } else if(tasks[taskIndex].done == true){
            tasks[taskIndex].done = false;

            thisTask.style.backgroundColor = '';
            thisTask.style.color = 'black';
        }
    }

    setTasks(tasks);
    console.log(tasks)
}

export function deleteTask(id) {
    let thisTask = document.querySelector('#task'+id);
    thisTask.remove();

    // encontrar o índice do objeto que tem position === id
    let taskIndex = tasks.findIndex(task => task.position === id);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
    }

    console.log(tasks);

    setTasks(tasks);
    console.log(tasks)

}