//ARITMÉTICOS  +,-,*, /,%,++,--

let a=10
let b=20

let c=(a+b);
let d=(a-b);
let e=(a/b);
let f=(a*b);
console.log (c, d, e, f)
let anio = 2023;        // es resto (%) te dice lo que resta de una división, lo que sobra. 
let resto = anio % 2;
console.log (resto);

let valor = 0;
valor = valor + 1;      //ESTO ES IGUAL A...
console.log (valor);
valor ++;              // ...ESTO.     SUMAN 1.
console.log (valor);

valor = 10;
valor = valor - 1;      //ESTO ES IGUAL A...
console.log (valor);
valor --;              // ...ESTO.     RESTAN 1.
console.log (valor);

//LÓGICOS
//  AND &&, OR ||, NOT !

let usuario = "Juancito"
let password = "1234"

//AND ----->

let usuarioValidoAnd = (usuario === "Juancito" && password === "1234") //AMBAS SON CORRECTAS
let usuarioValidoOr = (usuario === "Mike" || password === "1234") //AL MENOS UNA DE LAS DOS ES CORRECTA
let usuarioValidoNot = !(usuario === "Juancito") // o puede ser así (usuario !== "Juancito")



//RELACIONALES  (SON BOOLEAN, TE DICEN SI SON TRUE O FALSE)
let x = 90;
let y = 60;

console.log (x > y);     
x < y
x === y
x >= y
x <= y