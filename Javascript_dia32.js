// Projeto código nosso de cada dia (dia 32)
// Criando uma Array de objetos com javascript
// Primeira opção
let faixas = [
  { tooltip: "até R$ 700,00", minimo: 0, maximo: 700 },
  { tooltip: "de R$ 700,00 a R$ 1000,00", minimo: 700, maximo: 1000 },
  { tooltip: "R$ 1000,00 ou mais", minimo: 1000, maximo: 9999999 },
];
//Segunda opção (factory functions)
function criaFaixaPreco(tooltip, minimo, maximo) {
  return {
    tooltip,
    minimo,
    maximo,
  };
}
let faixas2 = [
  criaFaixaPreco("a", 0, 700),
  criaFaixaPreco("a", 700, 1000),
  criaFaixaPreco("a", 1000, 99999999),
];
console.log(faixas);
console.log(faixas2);
