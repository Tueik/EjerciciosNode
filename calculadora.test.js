// importar la funcionalidad a testear *objeto

const calculadora = require('./calculadora');

//Empezamos con el testing
// 3. Se importa la calculadora
const calculadora = require('./calculadora');
 
// Empezamos con el testing
test('Sumar dos numeros', () => {
    expect (calculadora.sumar(5,5)).toBe(10); //true
})
 
test('Restar dos numeros', () => {
    expect (calculadora.restar(5,5)).toBe(0); //true
})
 
test('Multiplicar dos numeros', () => {
    expect (calculadora.multiplicar(5,5)).toBe(25); //true
})
 
test('Dividir dos numeros', () => {
    expect (calculadora.dividir(5,5)).toBe(1); //true
})
