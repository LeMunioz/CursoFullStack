const colores = ['rojo', 'azul', 'verde', 'morado', 'naranja', 'rosa', 'rojo', 'azul', 'verde', 'morado', 'naranja', 'rosa'];
//duplicamos el arreglo y lo revolvemos
let tarjetas = revolver(colores.concat(colores)); 
let TarjetasSeleccionadas = [];
let score = 0;
let tiempo = 30;
let Intervalo;

const iniciarB = document.getElementById('iniciarB');
const contenedorJuego = document.getElementById('juegoContenedor');
const puntaje = document.getElementById('score');
const cronometro = document.getElementById('tiempo');

function generaCartas() {
   for (const color of tarjetas) {
       const tarjeta = document.createElement('div');
       tarjeta.classList.add('Tarjeta');
       tarjeta.dataset.color = color;
       tarjeta.textContent = '?';
       contenedorJuego.appendChild(tarjeta);
   }
}

function revolver(arreglo) {
    for (let i = arreglo.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arreglo[i], arreglo[j]] = [arreglo[j], arreglo[i]];
    }
    return arreglo;
}

function handleClickTarjeta(event) {
    const tarjeta = event.target;
    if (!tarjeta.classList.contains('Tarjeta') || tarjeta.classList.contains('coincidencia')) {
        return;
    }
    tarjeta.textContent = tarjeta.dataset.color;
    tarjeta.style.backgroundColor = tarjeta.dataset.color;
    TarjetasSeleccionadas.push(tarjeta);
    if (TarjetasSeleccionadas.length === 2) {
        setTimeout(checar, 500);
    }
}

function checar() {
    const [tarjeta1, tarjeta2] = TarjetasSeleccionadas;
    if (tarjeta1.dataset.color === tarjeta2.dataset.color) {
        tarjeta1.classList.add('coincidencia');
        tarjeta2.classList.add('coincidencia');
        score += 2;
        puntaje.textContent = `Score: ${score}`;
    } else {
        tarjeta1.textContent = '?';
        tarjeta2.textContent = '?';
        tarjeta1.style.backgroundColor = '#ddd';
        tarjeta2.style.backgroundColor = '#ddd';
    }
    TarjetasSeleccionadas = [];
}

function Inicio() {
    let tiempoQueda = 30;
    iniciarB.disabled = true;
    score = 0; // Reset score to zero
    puntaje.textContent = `Score: ${score}`;
    IniciarCronometro(tiempoQueda);
    tarjetas = revolver(colores.concat(colores)); 
    TarjetasSeleccionadas = [];
    contenedorJuego.innerHTML = '';
    generaCartas();
    contenedorJuego.addEventListener('click', handleClickTarjeta);
}


function IniciarCronometro(tiempoQueda) {
    cronometro.textContent = `Time Left: ${tiempoQueda}`;
    gameInterval = setInterval(() => {
        tiempoQueda--;
        cronometro.textContent = `Time Left: ${tiempoQueda}`;

        if (tiempoQueda === 0) {
            clearInterval(gameInterval);
            let tiempoQueda = 30;
            alert('Game Over!');
            iniciarB.disabled = false;
        }
    }, 1000);
}

iniciarB.addEventListener('click', Inicio);


