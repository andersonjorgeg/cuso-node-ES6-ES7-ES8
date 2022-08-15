// operador spread (...) - espalha os elementos de um array ou objeto em outro array ou objeto

var nome = "Anderson Jorge";
var idade = 37;

var empresa =  {
  nomeEmpresa: "Google",
  cidade: "São Paulo",
  site: "www.google.com.br",
  email: "anderson.jorge33@gmail.com"
}

// antes do ES6
var user = {
  nome,
  idade,
  nomeEmpresa: empresa.nomeEmpresa,
  cidade: empresa.cidade,
  site: empresa.site,
  email: empresa.email
}

// usando o operador spread (...)
var user2 = {
  nome,
  idade,
  ...empresa
}

console.log(user);
console.log(user2);

// array
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var array2 = [...array, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(array2);
