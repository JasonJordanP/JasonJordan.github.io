const botonResumen = get ('botonResumen');
let totalAPagar;
const valorDeTicket = 200;
const descuentoFinalEstudiante = 200*(80/100)
const descuentoFinalTrainee = 200*(50/100)
const descuentoFinalJunior = 200*(15/100)
const cantidadTickets = get('cantidad');
let inputPrecio = get('precio')

function get(id) {
    return document.getElementById(id);
}

botonResumen.addEventListener('click', function(){
  
    let valor = inputPrecio.value;

    if (valor === '1') {
        inputPrecio= (parseInt(valorDeTicket)-parseInt(descuentoFinalEstudiante))
    }
    if (valor === '2') {
        inputPrecio= (paseInt(valorDeTicket)-parseInt(descuentoFinalTrainee)) 
    }
    if (valor === '3') {
        inputPrecio= (parseInt(valorDeTicket)-parseInt(descuentoFinalJunior))
    }
    return inputPrecio;
     
}) 

function operacion () {

let entradas = cantidadTickets.value;
return parseInt(entradas) * parseInt(inputPrecio);
}

get('totalAPagar').innerHTML = operacion;