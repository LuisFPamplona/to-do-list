import {addTask, editTask, doneTask, deleteTask} from "./taskManager.js"

let mode = 'light';

export function createNewElement(name,type, id, value){
    switch (type) {
        case 'button':
            let newButton = document.createElement(type);
            newButton.id = name+id;
            newButton.className = name;
            newButton.innerHTML = value;
        
            return newButton;
        break;

        case 'input':
            let newInput = document.createElement(type);
            newInput.id = name+id;
            newInput.className = name;
            newInput.value = value;

            return newInput;
        break;
    
        case 'span':
            let newSpan = document.createElement('span');
            newSpan.textContent = value;
            newSpan.id = name+id;
            newSpan.className = name;
            
            return newSpan;
        break;

        case ('div'):
            let newDiv = document.createElement('div');
            newDiv.id = name+id;
            newDiv.className = name;

            return newDiv;
        break;
        
        default:
            console.log('type doesnt exist')
            break;
    }
}

export function showTask(text, id){ 
    let taskContainer = document.querySelector('#task-container');

    let newTask = createNewElement('task', 'div', id)

    let taskText = createNewElement('span', 'span', id, text)

    let buttonGroup = createNewElement('buttonGroup', 'div')

    let newDelete = createNewElement('delete', 'button', id, '&#x274C');
    newDelete.onclick = ()=>{deleteTask(id)};

    let newEdit = createNewElement('edit', 'button', id, '&#x270F');
    newEdit.onclick = ()=>{editTask(id)};

    let newDone = createNewElement('done', 'button', id, '&#x2705')    
    newDone.onclick = ()=>{doneTask(id, mode)};
    
    buttonGroup.appendChild(newEdit);
    buttonGroup.appendChild(newDelete);
    buttonGroup.appendChild(newDone);
    
    newTask.appendChild(taskText);
    newTask.appendChild(buttonGroup);
    
    taskContainer.appendChild(newTask);
    
    }

export function colorMode(colorMode){
    let inputContainer = document.querySelector('.input-container');
    let inputText = document.querySelector('.task-text');
    let lightMode = document.querySelector('#light-mode');
    let darkMode = document.querySelector('#dark-mode');

    switch(colorMode){
        case 'light' :
            document.body.style.backgroundColor = 'white';
            inputContainer.style.borderColor = 'black'
            lightMode.style.borderColor = 'black'
            darkMode.style.borderColor = 'black'
            inputText.style.color = 'black'

            mode = 'light';
            break;
        case 'dark':
            document.body.style.backgroundColor = 'black';
            inputContainer.style.borderColor = 'white'
            lightMode.style.borderColor = 'white'
            darkMode.style.borderColor = 'white'
            inputText.style.color = 'white'

            mode = 'dark';
            break;
    }
}