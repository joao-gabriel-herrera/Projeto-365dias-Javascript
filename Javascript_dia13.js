// Projeto código nosso de cada dia (dia 13)
// Escrevendo uma função que usa 2 números e retorna o maor valor entre eles
function encontraMaior(numero1, numero2) {
  return numero1 < numero2 ? numero2 : numero1;
}
let maiorValor = encontraMaior(69, 33);
console.log(maiorValor);
