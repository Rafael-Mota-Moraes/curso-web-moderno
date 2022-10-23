function tratarErroELancar(erro) {
  // throw new Error("...");
  // throw 10;
  throw "mensagem";
}

function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!!!!!");
  } catch (e) {
    tratarErroELancar(e);
  } finally {
    console.log("SEMPRE SERÁ EXECUTADO!");
  }
}

const obj = { name: "Rafael" };
imprimirNomeGritado(obj);
