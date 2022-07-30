// let - é uma variável que pode ser alterada
// let - tem escopo de bloco, escopo de função e escopo local
// escopo de bloco - é o escopo de uma variável que está dentro de um bloco
// escopo de local - é o escopo de uma variável que está dentro de uma função
// escopo global - é o escopo de uma variável que está fora de uma função ou bloco


let nome = 'João';
console.log(nome); // João
nome = 'Maria';
console.log(nome); // Maria

// criação de variável de escopo global
var nome2 = 'Alan';
let nome3 = 'Anderson';
function teste() {
    console.log(nome2); // Alan
    console.log(nome3); // Anderson
}

teste();

// criação de variável de escopo local
function teste2() {
  var nome4 = 'João';
  console.log(nome4);
}

function teste3() {
  console.log(nome4);
}

teste2();
//! teste3(); // Erro de referência não capturado: nome3 não está definido

// criação de variável de escopo de bloco com let
let a = 10; // escopo global
let testar = true; // escopo global

if(testar) {
  let b = 20; // escopo de bloco
  console.log(a + b); // 20
}

//! console.log(a + b); // Erro: b não está definido

// criação de variável de escopo de bloco com var
var c = 10; // escopo global
var testar2 = true; // escopo global

if(testar2) {
  var d = 20; // escopo de bloco
  console.log(c + d); // 30
}

console.log(c + d); // 30

//? diferença entre let e var é que let tem escopo de bloco e var não tem escopo de bloco, ou seja, se uma variavel for criada com let dentro de um bloco ela só existe dentro do bloco, e o var ignora o escopo de bloco.

// var - Global e Local
// let - Global, Local e Bloco
