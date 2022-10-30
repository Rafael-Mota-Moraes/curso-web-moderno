// operador ... rest(juntar)/spread(espalhar)
// Usar rest como parâmetro de função

// usar spread como objeto
const funcionario = { nome: "Rafael", salario: 12345.99 };
const clone = { ativo: true, ...funcionario };
console.log(clone);

// usar spread com array
const grupoA = ["João", "Pedro", "Gloria"];
const grupoFinal = ["Maria", "Rafaela", ...grupoA];

console.log(grupoFinal);
