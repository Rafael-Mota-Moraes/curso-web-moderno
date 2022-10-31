let p = new Promise((resolve) => {
  resolve(["Ana", "Bia", "Carlos", "Daniel"]);
});

p.then((valor) => valor[0]).then((valor) => console.log(valor));
