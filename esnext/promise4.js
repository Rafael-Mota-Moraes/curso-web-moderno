function gerarNumerosEntre(min, max, tempo) {
  if (min > max) {
    [min, max] = [max, min];
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      const fator = max * min + 1;
      const aleatorio = parseInt(Math.random() * fator) + min;
      resolve(aleatorio);
    }, tempo);
  });
}

function gerarVariosNumeros() {
  return Promise.all([
    gerarNumerosEntre(1, 60, 700),
    gerarNumerosEntre(20, 40, 1000),
    gerarNumerosEntre(20, 80, 1500),
    gerarNumerosEntre(10, 180, 4000)
  ]);
}

console.time("tempo");
gerarVariosNumeros()
  .then((numeros) => console.log(numeros))
  .then(() => {
    console.timeEnd("tempo");
  });
