//https://www.javascript.com/

//Esto es un comentario en una linea

/*
Esto tambien es 
un comentario 
en varias lineas
*/

//Variable (puede cambiar su valor)
let cantidadPedidos = 10
let cantidadPedidos = 15
//Constante  (Su valor no debe cambiar nunca)
const IVA = 0.19

//En .js existen siete tipo de datos primitivos

//1. String (cadenas de texto)
let nombre = "Hansho"
let saludo = "HOLA MUNDO"
let frase = 'Tu edad es dinamica: ${43}';

//2. Number (numeros, enteros o decimales)
let edad = 43;
let precio = 199.99;

//3. BigInt (números muy grandes, mas allá del limite number)
let numeroGrande = 1234567890123456789012345678901234567890n;

//4. Boolean (verdadero o falso)
let esLider = true;
let tienePedidosPendientes = false

//5. Undefined (valor no asignado)
let cliente;

//6. Null (usencia explicita de valor)
let descuento = null;

//7. Symbol (valores únicos e inmutables, útiles para identificadores)
let idUnico = Symbol("id");

/* 
1. String → texto.
2. Number → números normales (enteros y decimales).
3. BigInt → números gigantes.
4. Boolean → verdadero/falso.
5.Undefined → variable declarada pero sin valor.
6. Null → valor vacío asignado intencionalmente.
7.Symbol → identificador único (avanzado)
*/

//Imprimir en consola un texto
console.log("¡Hola,JavaScript");
