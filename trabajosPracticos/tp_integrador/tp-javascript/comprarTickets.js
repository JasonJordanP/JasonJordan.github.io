const botonResumen = get ('botonResumen');
let totalAPagar = [];
const valorDeTicket = 200;
let descEstudiante = 80 
let descTrainee = 50 
let descJunior = 15 


function porcentajeEst (valorDeTicket, descEstudiante){
    const descuentoFinalEstudiante = valorDeTicket*(descEstudiante/100)
} 

function porcentajeTrainee (valorDeTicket, descTrainee){
    const descuentoFinalTrainee = valorDeTicket*(descTrainee/100)
} 

function porcentajeJunior (valorDeTicket, descJunior){
    const descuentoFinalJunior = valorDeTicket*(descJunior/100)
} 


botonResumen.addEventListener('click', function(){
    let inputPrecio = get('precio')

    const valor = inputPrecio.value;

    if (valor === '1') {
        let inputPrecio= (valorDeTicket-descFinalEstudiante)
    }
    if (valor === '2') {
        let inputPrecio= (valorDeTicket-descFinalTrainee) 
    }
    if (valor === '3') {
        let inputPrecio= (valorDeTicket-descuentoFinalJunior)
    }
}) 

function get(id) {
    return document.getElementById(id);
}

