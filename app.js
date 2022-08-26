// find

var anderson = {
  nome: "Anderson Jorge",
  empresa: "ICN",
  salario: 1000
}

var alan = {
  nome: "Alan Paulo",
  empresa: "Umbler",
  salario: 800
}

var junior = {
  nome: "Jorge Paulo",
  empresa: "Disney",
  salario: 500
}

var users = [anderson, alan, junior];

var usuario = users.find(user => user.nome === "Anderson Jorge");
var usuario2 = users.find(user => user.empresa === "ICN");
var usuario3 = users.find(user => user.salario < 800);


console.log(usuario);
console.log(usuario2);
console.log(usuario2.empresa);
console.log(usuario3)
