let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

export function getTasks(){
    return tasks;
}

export function setTasks(newTasks){
    tasks = newTasks;
    localStorage.setItem('tasks', JSON.stringify(tasks));
}