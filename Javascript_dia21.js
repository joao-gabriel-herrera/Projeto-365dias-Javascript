// Projeto código nosso de cada dia (dia 21)
// Função que mostra os números primos dentro de um determinado limite
exbirNumerosPrimos(15);
function exbirNumerosPrimos(limite) {
  for (let numero = 2; numero <= limite; numero++) {
    if (numeroPrimo(numero)) console.log(numero);
  }
}
function numeroPrimo(numero) {
  for (let div = 2; div < numero; div++) {
    if (numero % div === 0) {
      return false;
    }
  }
  return true;
}
