// desestruturação

var user =  {
  nome: "Anderson Jorge",
  prof: "Ajudante de mecânica de manutenção",
  empresa: "ICN",
  curso: "Técnico em mecânica"
}

var { nome, prof, empresa } = user; // destruct
var curso = user.curso; // antigo

console.log(nome);
console.log(prof);
console.log(empresa);
console.log(curso);
