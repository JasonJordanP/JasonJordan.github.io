let estudio = false

//IF


if (estudio) {
        alert ("Muy bien")
} else { 
    alert ("No estudiaste, muy mal")
}

//-------------------------------------

let edad= 1

if (edad === 1) {
    alert ("Tenes un año");
} else if (edad === 2) {
    alert ("Tenes dos años");
} else {
    alert ("Sos un niño");
}

//ESTRUCTURA SWITCH

switch (edad) {
    case 1:
        alert ("sos un bebe");
        break;
    case 2:
        alert ("Tenes dos añitos bebe");
        break;
    default:
        alert ("Sos niño");
}
