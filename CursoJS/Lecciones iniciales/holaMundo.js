//Tipos de Datos en JS

var nombre = "Felipe";
console.log(nombre);
console.log(typeof nombre);
var num = 100;
console.log(num);
console.log(typeof num);
var object = {
    nombre:"Paola",
    apellido:"Lara",
    tel:"567802"
}
console.log(object);

function funcion (){}
console.log(funcion)
console.log(typeof funcion)

var simbolo = Symbol("Los que se aferran a la vida, mueren");

console.log(simbolo)
console.log(typeof simbolo)

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
} 

console.log(Persona)
console.log(typeof Persona)

var x
console.log(x)
console.log(typeof x)

var y = null;
console.log(y)
console.log(typeof y)

//Arrays

var autos = ['Porsche', 'Ferrari', 'Jeep']
console.log(autos)
console.log(typeof autos)

var autos2 = ['BMW', 'Audi', 'Jac']
console.log(autos)
console.log(typeof autos)

var z = '';
console.log(z)
console.log(typeof z)