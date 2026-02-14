let textoPrueba = "El rápido zorro marrón salta sobre el perro perezoso.";
let tiempoInicio, tiempoFin;

function iniciarPrueba() {

    // Establecer el texto de la prueba
    document.getElementById("inputText").value = textoPrueba;

    // Reiniciar entrada del usuario y salida
    let entradaUsuario = document.getElementById("userInput");
    entradaUsuario.value = "";
    entradaUsuario.readOnly = false;
    entradaUsuario.focus();

    document.getElementById("output").innerHTML = "";

    // Iniciar temporizador
    tiempoInicio = new Date().getTime();
}

function terminarPrueba() {

    tiempoFin = new Date().getTime();

    // Deshabilitar la entrada del usuario
    document.getElementById("userInput").readOnly = true;

    // Calcular el tiempo transcurrido y las palabras por minuto (PPM)
    var tiempoTranscurrido = (tiempoFin - tiempoInicio) / 1000; // en segundos
    var textoEscritoUsuario = document.getElementById("userInput").value;

    // Separar el texto usando una expresión regular para contar palabras correctamente
    var palabrasEscritas = textoEscritoUsuario.split(/\s+/).filter(function (palabra) {
        return palabra !== "";
    }).length;

    var ppm = 0; // Valor por defecto

    if (tiempoTranscurrido !== 0 && !isNaN(palabrasEscritas)) {
        ppm = Math.round((palabrasEscritas / tiempoTranscurrido) * 60);
    }

    // Mostrar los resultados
    var divSalida = document.getElementById("output");
    divSalida.innerHTML =
        "<h2>Resultados de la prueba de escritura:</h2>" +
        "<p>Palabras escritas: " + palabrasEscritas + "</p>" +
        "<p>Tiempo transcurrido: " + tiempoTranscurrido.toFixed(2) + " segundos</p>" +
        "<p>Palabras por minuto (PPM): " + ppm + "</p>";
}
