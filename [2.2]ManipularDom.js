
    function AgregarTarea() {
    const input = document.getElementById("tareaInput");
    const Tarea = input.value.trim();

    if (Tarea !== "") {
        const ul = document.getElementById("cosasLista");

        // Crea nueva lista
        const li = document.createElement("li");
        // Crea el span para el texto de la tarea
        const span = document.createElement("span");
        span.textContent = Tarea;
        // Crea botones
        const editButton = document.createElement("button");
        editButton.textContent = "Editar";
        editButton.onclick = () => editarTarea(span);
        const removeButton = document.createElement("button");
        removeButton.textContent = "quitar";
        removeButton.onclick = () => removeTask(li);

        // Junta todo en el li
        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(removeButton);

        // Junta el li al ul
        ul.appendChild(li);

        // Borra el input
        input.value = "";
    }
    else {
            alert("Porfas pon algo nomanches.");
        }
}

// Funcion para editar una tarea existente
function editarTarea(span) {
    // Prompt para poner otra tarea
    const newTask = prompt("Edita tu tarea:", span.textContent);
    
    // Actualiza solo si se ingresa algo no vacio
    if (newTask !== null && newTask.trim() !== "") {
        span.textContent = newTask.trim(); // Set the new task text
    }
}

// Funcion para eliminar una tarea
function removeTask(tarea) {
    const ul = document.getElementById("cosasLista"); // obtiene la lista de tareas
    ul.removeChild(tarea); //mata al niño muajajajaj
}
