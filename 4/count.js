let contador = 0; 

function increaseCount() {
  contador++; 
  muestraContador();
  checaValorContador();
}
function muestraContador() {
document.getElementById('countDisplay').innerHTML=contador; 
}

function checaValorContador() {
  if (contador === 10) {
    alert("haz superado los 10 seguidores en tinder YEIIII 😊");
  } else if (contador === 20) {
    alert("Nomanches, ya tienes mas de 20!!!");
  }
}

