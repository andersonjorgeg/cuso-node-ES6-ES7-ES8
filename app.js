// JSON - encurtados

var nome = "Anderson Jorge";
var idade = 37;
var empresa = "Google";

// JSON - completo
var user = {
  nome: nome,
  idade: idade,
  empresa: empresa
}

// JSON - reduzido
var user2 = {
  nome,
  idade,
  empresa
}

console.log(user);
console.log(user2);
