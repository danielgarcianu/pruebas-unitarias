

const {sumar, restar, multiplicar, dividir} = require ('./calculadora');

describe('Pruebas en el componente calculadora', () =>{

    test('Prueba en la funci[on sumar', () => {

        expect(sumar(3, 5)).toBe(8);
    })

});



describe('Pruebas en el componente calculadora', () =>{
    test('Prueba en la funcion restar', () => {
        expect(restar(5, 3)).toBe(2);
    })
})

describe('Pruebas en el componente calculadora', () =>{
    test('Prueba en la funcion multiplicar', () => {
        expect(multiplicar(5, 3)).toBe(15);
    })
})

describe('Pruebas en el componente calculadora', () =>{
    test('Prueba en la funcion dividir', () => {
        expect(dividir(18, 3)).toBe(5);
    })
})


