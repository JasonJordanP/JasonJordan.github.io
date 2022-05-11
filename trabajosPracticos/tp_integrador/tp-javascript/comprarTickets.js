const botonResumen = get ('botonResumen');
let totalAPagar = '';
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
  
    const valor = inputPrecio.value;

    if (valor === '1') {
        inputPrecio= (valorDeTicket-descuentoFinalEstudiante)
    }
    if (valor === '2') {
        inputPrecio= (valorDeTicket-descuentoFinalTrainee) 
    }
    if (valor === '3') {
        inputPrecio= (valorDeTicket-descuentoFinalJunior)
    }
    return inputPrecio;
}) 

function operacion () {

let entradas = cantidadTickets.value;
let calculo= entradas.parseInt()*inputPrecio.parseInt()

}
get('totalAPagar').innerHTML = calculo;

