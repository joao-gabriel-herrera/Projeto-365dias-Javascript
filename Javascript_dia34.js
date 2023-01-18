// Projeto código nosso de cada dia (dia 34)
// Utilizando as Arrows functions
// Facilitador na hora de criar funções
let a = 5;
let b = 10;
// Sem parâmetros
let semParametro = () => console.log("Não possuo parâmetros");
semParametro();
// Um parâmetro
let frase = "Hello World";
let fraseArray = (frase) => frase.split(" ");
console.log(fraseArray(frase));
// Mais de um parâmetro
let c = (num1, num2) => num1 + num2;
console.log(c(a, b));
//  Com operações
let d = (x, y) => {
  let op;
  x >= 5 ? (op = x * y) : (op = x / y);
  return op;
};
console.log(d(a, b));
// Casos de uso
let roupas = [
  { produto: "Camisa", preco: 25, cor: "Amarelo" },
  { produto: "Calça", preco: 80, cor: "Azul" },
  { produto: "Jaqueta", preco: 100, cor: "Preto" },
  { produto: "Camiseta", preco: 15, cor: "Rosa" },
  { produto: "Calção", preco: 20, cor: "Azul" },
];
let precoMaiorQue50 = roupas.filter((roupa) => {
  return roupa.preco >= 50;
});
console.log(precoMaiorQue50);
