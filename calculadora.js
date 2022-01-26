const sumar = (numero1,numero2) => {
    return numero1 + numero2;
}

const restar = (numero1,numero2) => {
    return numero1 - numero2;
} 

const multiplicar = (numero1,numero2) => {
    return numero1 * numero2;
} 

const dividir = (numero1,numero2) => {
    return numero1 / numero2;
} 

const mostrarResultado = (operacion, numero1, numero2, resultado) =>{
    const respuesta = document.createElement('h3');
    respuesta.textContent = `La ${operacion} del ${numero1} y ${numero2} es ${resultado}`; 
    document.body.appendChild(respuesta);
}

module.exports ={
    sumar, restar, multiplicar, dividir
}

/*para empezar abrimos la terminal 

npm init -y para responder yes a todas las preguntas
para hacer nuestro package json
npm install --save-dev jest   para instalar  la librer[ia 


https://jestjs.io/docs/getting-started


module exports para exportar

crear calculadora.test.js archivo para hacer archivo donde se hagan las pruebas lo toma como javascript del lado del servidor
*/


//calculadora.test
/* const sumar = require ('./caclculadora');//para importar el archivo con el que vamos a trabajar

describe('Pruebas en el componente calculadora', () =>{

    test('Prueba en la funci[on sumar', () => {

        expect(sumar(3, 5)).toBe(8);//expect hace referencia a que es lo que espero de la funcion
    })

});//englobar o ver a que archivo se le hace la prueba 

pacjkcasge json cambiar lo que hay en test por jest

$ npm run test en teminal para correr la prueba 


para hacer que siempre ejecuten las pruebas sin el comando npm run test agregamos en package jason en test jest --watchAll


para que deje de trabajar el watch all ctrl c dentro de la terminal

*/