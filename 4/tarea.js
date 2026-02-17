const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

let tasks = [];

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({ text: taskText});
        taskInput.value = "";
        displayTasks();
    }
}

function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
        <label for="task-${index}">${task.text}</label>`;
    li.querySelector("input").addEventListener("change", () => toggleTask(index));
    taskList.appendChild(li);
    });
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);

displayTasks();




/*const taskInput = document.getElementById("InputTarea");

const addTaskBtn = document.getElementById("btnAgregar");
const taskList = document.getElementById("listaTareas");
const clearCompletedBtn = document.getElementById("TareaCompletada");


let tareas = [];
function AgregarTarea() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tareas.push({ text: taskText});
        taskInput.value = "";
        MostrarTareas();
    }
}

function MostrarTareas() {
    taskList.innerHTML = "";
    tareas.forEach((tareas, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${tareas.completed ? "checked" : ""}>
            <label for="task-${index}">${tareas.text}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
}    

function toggleTask(index) {
    tareas[index].completed = !tareas[index].completed;
    MostrarTareas();
}    

function TareasHechas() {
    tareas = tareas.filter(tarea => !tarea.completed);
    MostrarTareas();
}

addTaskBtn.addEventListener("click", AgregarTarea);
clearCompletedBtn.addEventListener("click", TareasHechas);
displayTasks();*/