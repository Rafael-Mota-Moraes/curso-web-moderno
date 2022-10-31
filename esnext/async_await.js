function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve("Vishh");
    }, tempo);
  });
}

// esperarPor(2000)
//   .then(console.log("Executando promise 1..."))
//   .then(esperarPor)
//   .then(console.log("Executando promise 2..."))
//   .then(esperarPor)
//   .then(console.log("Executando promise 3..."));

async function executar() {
  await esperarPor(1200);
  console.log("Async/Await 1");
  await esperarPor(1200);
  console.log("Async/Await 2");
  await esperarPor(1200);
  console.log("Async/Await 3");
}

executar();
