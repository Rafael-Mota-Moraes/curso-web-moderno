let dobro = function (a) {
  return a * 2;
};

dobro = (a) => {
  return 2 * a;
};

dobro = (a) => a * 2; // Return implícito

console.log(dobro(Math.PI));

let ola = () => "Olá";
console.log(ola());
