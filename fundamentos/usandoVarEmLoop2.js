var funcs = [];

for (var i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i);
  });
}

funcs[2]();
funcs[8](); // VAR NÃO TEM ESCOPO DE FUNÇÃO!
