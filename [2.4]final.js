
    // actualiza año en el footer
    document.getElementById('anio').textContent = new Date().getFullYear();

    // Funcion requerida por el enunciado: validar campos y alertar
    function mandarMensaje(){
      const nombre = document.getElementById('nombre').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();

      if(!nombre || !mensaje){
        alert('Por favor completa tu nombre y comentario antes de enviar.');
        return;
      }
      alert('¡Gracias, ' + nombre + '! Tu comentario fue enviado.\n\nMensaje: ' + mensaje);

      // Limpiar campos
      document.getElementById('nombre').value = '';
      document.getElementById('mensaje').value = '';
    }
  