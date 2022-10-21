const nome = "Rebeca";
const concatenacao = "Olá " + nome + "!";

const templateString = `
  Olá 
${nome}
  !
`;

console.log(concatenacao, templateString);

console.log(`1 + 1 = ${1 + 1}`);

const up = (s) => s.toUpperCase();

console.log(`Eii ${up("cuidado")}`);
