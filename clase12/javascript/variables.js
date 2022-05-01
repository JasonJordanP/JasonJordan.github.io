let edad= 10;

edad=20; //cambio el valor de edad

console.log(edad);
console.log (typeof edad);

const altura= 174.5; //uso una constante, no se peude modificar el valor
console.log (altura);

var nombre= "Carlos"; //metodo que ya no se usa para aplicar valores es GLOBAL

let apellido= "Perez"; //variable string
console.log (apellido + edad); //junta ambos datos
console.log (nombre, apellido, edad);


const flag= true;
console.log (flag, typeof flag); //Es un boolean

const nombres= ["miguel", "yolanda", "Eduardo"]; //Array con strings

let miamigofav= nombres[2]; //Elijo la posición de eduardo
console.log(miamigofav); //Lo muestro en la consola
console.error(miamigofav); //muestro un mensaje de error
console.info(nombres[0]); //muestro info de ese lugar en el array


//CREAR UN OBJETO

let persona = { 
    edad: 15,
    nombre: "Matilda",
    apellido: "Solari",
    mejorAmiga: nombres[1],
}

console.log (persona, typeof persona);


//UNDEFINED

let perro= undefined
console.log (perro, typeof perro)

// (LO PUEDO VOLVER UN OBJETO Y DARLE VALORES)

perro= {
    edad: 5,
    nombre: "manchitas",
    raza: "doberman",
}
console.log (perro, typeof perro)

//NULL (la máquina lo considera un object)

let gato= null
console.log (gato, typeof gato)

//CONVERTIR TODO A MAYUSCULAS 

nombre= nombre.toUpperCase();
console.log (nombre);

//CONVERTIR TODO A MINUSCULAS

nombre= nombre.toLowerCase();
console.log (nombre);

//CONOCER LA CANTIDAD DE CARACTERES DE UN STRING

console.log (nombre.length);

//SUMAR NUMERO DE STRING COMO SI FUERA VALOR NUMERICO

let numeroString = "100"

numeroString = Number(numeroString) + 1;
console.log (numeroString);