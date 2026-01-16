function calcular() {
    var input1 = document.getElementById("num1").value;
    var input2 = document.getElementById("num2").value;
    var operacion = document.getElementById("operando").value;
    var resultado = 0;
    //validar que no haya un campo vacio
    if (input1 ==="" || input2 ==="" || operacion ===""){
        alert("Porfavor pon la operacion completa estimado no manches");
    }else{
        //convierto los valores de los input a numeros
        input1 = parseFloat(input1);
        input2 = parseFloat(input2);
        switch(operacion){
            case '+':
                resultado = input1 + input2;
                break;
            case '-':
                resultado = input1 - input2;
                break;
            case '*':
                resultado = input1 * input2;
                break;
            case '/':
                resultado = input1 / input2;
                break;
            default:
                alert("Operación no válida");
                return;
        }
        document.getElementById("resultado").innerHTML=resultado;
    }
}

function quitarResultado() {
    document.getElementById("resultado").innerHTML="";
}


// --- CRUD DE TAREAS ---

const arregloTareas = {
    tareas: [],
    borrarTarea: function(indice) {
        this.tareas.splice(indice, 1);
        mostrarTareas();
    }
};

function AgregarTarea() {
    const tarea = document.getElementById("tareainput").value;
    if (tarea === "") {
        alert("Escribe una tarea");
        return;
    }
    arregloTareas.tareas.push(tarea);
    mostrarTareas();
    document.getElementById("tareainput").value = "";
}

/* DIBUJA LISTA */
function mostrarTareas(){

    const ul = document.getElementById("listaTareas");
    ul.innerHTML = "";
    arregloTareas.tareas.forEach(function(tarea, index){
        //creo el elemento li
        const li = document.createElement("li");
        li.innerHTML = tarea;
        //creo el elemento boton
        const botonBorrar = document.createElement("button");
        botonBorrar.innerHTML = "Borrar";
        botonBorrar.setAttribute(
            "onclick",
            "arregloTareas.borrarTarea(" + index + ")"
        );

        li.appendChild(botonBorrar);
        ul.appendChild(li);
    });
}

function BuscarTarea(){
    const texto = document.getElementById("buscar").value;
    const encontrado = arregloTareas.tareas.find(
        t => t.toLowerCase() === texto.toLowerCase()
    );

    if(encontrado){
        alert("si esta: " + encontrado);
    }else{
        alert("No esta");
    }
}

