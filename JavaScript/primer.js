//Declaracion variables //

var numero = 1;// Creamos variable tipo number
var palabra = 'palabra' // creamos variable tipo string 

// definimos variables con la palabra reservada let para evitar el llamado de las mismas desde 
//cualquier parte del codigo
let numero2 = 2;
let palabra2 = 'palabra2';

//Definir constantes con la palabra reservada const
const numConstante = 4; //Siempre que sepan que no van a mutar o modificar un valor utilizar CONST
//CONST aplica la misma condicion que let 

console.log(numConstante) //muestra un valor en la pantalla 

// --------------------------------------------------------------------------------------------//

//Condicionales 

const edad1 = 10
const edad2 = 20
const edad3 = 18

if(edad1 >= 18) {
    console.log('Sos mayor de edad')
}else{
    console.log('Sos menor de edad')
}

// --------------------------------------------------------------------------------------------//

//Bucles y arrays 

const array = [2, 3, 'hola', True] //creacion de array []

//Bucle while
while(array.length < 1){
    console.log('test')
}

//Bucle for
for(let i = 1; i < array.length; i++) //siempre adentro del FOR van a usar LET 
{    console.log('posicion: ', i, 'valor: ', array[i]);   
}