// // objetos

// const persona = {
//   //clave : valor
//   name: "Nicolas",
//   age: 17,
//   isWorking: true,
//   sisters: ["caro", "sofi", "tefi"],
//   walk: function () {
//     //si la funcion retorna void es que no devuelve nada, sino aclara el tipo de dato
//     return "estoy caminando";
//     //si la funcion no devuelve nada va a devolver undefined por default
//   },
// };

// console.log(persona.name);
// //otra manera de acceder al valor de un objeto
// //console.log(persona["name"]);
// console.log(persona.sisters[2]);
// //si cuando estan muestro/ejecuto una funcion no le ponen los parentesis no va a funcionar
// //si pongo los () ejecuto la funcion y si no los pongo solo la llamo (no ejecuto)
// console.log(persona.walk());

// //reasignamos/modificamos un valor de alguna propiedad
// persona.age = 18;
// console.log(persona.age);

// //delete borra las ppropiedades seleccionadas del objeto
// delete persona.age;

//Ejercicio 1 -------------------------------------------------------------------------------

// function createObject(name, subs) {
//   const canal = {
//     nombre: name,
//     subscriptores: subs,
//     hash: name.length * subs,
//     getStatus: () => {
//       return `El canal de ${name} tiene ${subs} subscriptores`;
//     },
//   };
//   return canal;
// }

// const o = createObject("dani", 100);
// console.log(o.nombre);
// console.log(o.subscriptores);
// console.log(o.hash);
// console.log(o.getStatus());

//Ejercicio 2-------------------------------------------------------------------------

//1) Imprimiria 70 y 180

//2) Da error porq no esta definido (no tiene el igual)

//3) Destructuracion se llama el atajo

//ejercicio 3

const objeto = { a: true, b: 42, c: false };

function getBooleanos(objeto) {
  const arr = [];
  for (const propiedad in objeto) {
    if (objeto[propiedad] === true || objeto[propiedad] === false) {
      arr.push(propiedad);
    }
  }
  return arr;
}

console.log(getBooleanos(objeto));
