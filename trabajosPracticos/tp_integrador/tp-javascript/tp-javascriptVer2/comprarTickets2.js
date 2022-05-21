const botonResumen = get('botonResumen');
let totalAPagar;
const valorDeTicket = 200;
const descuentoFinalEstudiante = 200*(80/100)
const descuentoFinalTrainee = 200*(50/100)
const descuentoFinalJunior = 200*(15/100)
let ticketsFinal;
let descuentoCorrecto;

function get(id) {
    return document.getElementById(id);
}

botonResumen.addEventListener('click', function(){
    calcular((+cantidadTickets),(+descuentoCorrecto));
})

let seleccion = get('select')

function detectarDescuentoCorrecto () {
    
    let eleccion = seleccion.value;
    let descuentoCorrecto;
    
    if (eleccion === 'estudiante') {
       descuentoCorrecto = descuentoFinalEstudiante
    }
    else if (eleccion === 'trainee') {
       descuentoCorrecto = descuentoFinalTrainee
    }
    else if (eleccion === 'junior') {
       descuentoCorrecto = descuentoFinalJunior
    }
    return descuentoCorrecto
} 

let cantidadTickets = get('cantidad'); 

/*function saberCantidad () {
    let ticketsFinal = parseInt(cantidadTickets);
    return ticketsFinal;
}
/*function calcular(ticketsFinal, descuentoCorrecto) {
    const ValorA = Number(ticketsFinal);
    const ValorB = Number(descuentoCorrecto);
    let resultadoFinal= ValorA * ValorB;
    return resultadoFinal
 }*/

 function calcular() {
    const ValorA = parseInt(cantidadTickets);
    const ValorB = parseInt(descuentoCorrecto);
    let resultadoFinal= ValorA * ValorB;
    return resultadoFinal
 }

get('totalAPagar').innerHTML = calcular();
    
 /*const respuesta = get ('totalAPagar')

    const div = document.createElement ('p')
    div.nodevalue = calcular();

    div.appendChild(respuesta);


 
  
    if (precio === "0") {
        let inputPrecio= (valorDeTicket - descuentoFinalEstudiante);
        return inputPrecio
    }
    if (precio === "1") {
        let inputPrecio= (valorDeTicket - descuentoFinalTrainee); 
        return inputPrecio
    }
    if (precio === "2") {
        let inputPrecio= (valorDeTicket - descuentoFinalJunior)
        return inputPrecio
    };
}) 
*/