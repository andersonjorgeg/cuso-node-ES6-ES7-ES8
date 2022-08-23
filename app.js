
function soma(a, b) {
  console.log(a + b);
}

let mult = function(a, b) {
  console.log(a * b);
}

// arrow functions

let mult2 = (a, b, c) => {
  console.log(a * b * c);
}

// arrow function com um parâmetro
let mult4 = a => {
  console.log(a * 2);
}

// arrow function só com uma linha
let mult5 = a => console.log(a * 3);

// arrow function com retorno de forma convencional
let soma2 = (a, b) => {
  return a + b;
}

let resultado = soma2(3, 5);

console.log(resultado);

// arrow function com retorno de forma reduzida
let soma3 = (a, b) => a + b;
console.log(soma3(4, 5));