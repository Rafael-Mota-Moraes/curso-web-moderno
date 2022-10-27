// Cadeia de protótipo

const avo = { attr1: "A" };
const pai = { __proto__: avo, attr2: "B" };
const filho = { __proto__: pai, attr3: "C" };

console.log(filho.attr1);
console.log(filho.attr2);
console.log(filho.attr3);

const carro = {
  velAtual: 0,
  velMaxima: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velAtual) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMaxima;
    }
  },
  status() {
    return `${this.velAtual}Kh/h de ${this.velMaxima}Km/h`;
  }
};

const ferrari = {
  modelo: "F40",
  velMaxima: 324
};

const volvo = {
  modelo: "F40",
  status() {
    return `${this.modelo}: ${super.status()}`;
  }
};

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(100);
console.log(volvo.status());
ferrari.acelerarMais(300);
console.log(ferrari.status());
