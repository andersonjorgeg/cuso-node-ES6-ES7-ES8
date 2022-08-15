//parâmetros opcionais
//! obs: os parâmetros opcionias sempre tem que ser os ultimos

function soma(a, b = 50) {
  console.log(a + b);
};

function sub(a, b, inverter = false) {
  if (inverter) {
    return b - a;
  } else {
    return a - b;
  }
};

