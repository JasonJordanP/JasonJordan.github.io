let alumnos = ["Juan", "Maria", "Ariana", "Pedro"];

let tamanio = alumnos.length;
//alert (tamanio);
console.log (tamanio);

//RECORRER EL ARRAY DE NOMBRES Y MOSTRAR UNO POR UNO
for (let i=0; i < tamanio; i++) {
    console.log (i, alumnos[i], typeof alumnos [i])
}

//FOREACH

for (let nombre of alumnos) { 
    console.log (nombre)
}

//WHILE   (RECORRE EL ARRAY HASTA QUE SE CUMPLA CIERTA CONDICION. EN ESTE CASO MUESTRA NOMBRES HASTA ENCONTRAR A ARIANA)
let i=0
while (alumnos[i] !=='Ariana') {
   console.log (i, alumnos[i]);
   i++;
} 

//CON OBJETOS

let alumnosObj = [   
    { 
        edad: 15,
        nombre: prompt ("ingrese el nombre") //ESTO MUESTRA UN CARTEL Y LE PERMITE AL USUARIO LLENAR EL DATO
    },
    { 
        edad: 19,
        nombre: "Damian"
    },
    { 
        edad: 13,
        nombre: "Hernan"
    }
]

//COMO DETECTO AL MENOR DE ESOS TRES ALUMNOS?

let primero = true;
let alumnoMasChico;

for (const alumnoObj of alumnosObj) {
    if (primero) {
        alumnoMasChico = alumnoObj;
        primero = false;
    }
    if (alumnoObj.edad < alumnoMasChico.edad) {
        alumnoMasChico = alumnoObj;
    }
}

//AL FINALIZAR EL CICLO FOR, OBTENGO AL MENOR ALUMNO:
 console.log ('El alumno más chico es', alumnoMasChico);

//VALORES QUE EVALUA JS COMO FALSE

let aux = 0
let aux2 = null
let aux3= undefined 


//PARA CREAR UN VECTOR CON DATOS CARGADOS POR EL USUARIO

let vector = [];
let personas = [];
const cantidadDePersonas= prompt ("Ingrese la cantidad de elementos");
// alert (`se van a cargar ${cantidadDePersonas} a la base de datos´) Con comillas movidas

for (let i=0; i<cantidadDePersonas; i++) {
    const nombree = prompt ("Ingrese el nombre");
    const apellidoo = prompt ("Ingrese el apellido");
    //para crear un objeto cono estos dos datos, podemos hacer lo siguiente:
    const persona = construirPersona (nombree, apellidoo);    //MÁS ABAJO CREO LA FUNCTION!
    personas.push() //ESTO AGREGA LOS OBJETOS COMPLETADOS, AL ARRAY "PERSONAS"
}

function construirPersona (nombree, apellidoo) {
    const persona= {
        nombre:nombree,
        apellido:apellidoo
    };
    return  persona;
}