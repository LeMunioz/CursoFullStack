
    function HacerOperacion() {
    // obtener los valores de los inputs
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Checar si los valores son números válidos antes de realizar la operación
    if (!isNaN(num1) && !isNaN(num2)) {
    // Hacer 
            let result = multiply(num1, num2);
            // Mostrar el resultado
            displayResult(resultado);
        } else {
            displayResult('Porfas ingresa numeros validos en ambos campos.');
        }
    }

            function multiply(a, b) {
                // introducir un punto de interrupción para depuración
                debugger;

                // multiplicar los dos números
                return a * b;
            }

            function displayResult(resultado) {
                // mostrar el resultado en la página
                const resultElement = document.getElementById('resultado');
                resultElement.textContent = `El resultado es: ${resultado}`;
            }
        