// Projeto código nosso de cada dia (dia 37)
// Conversor de moedas
const dolar = 5.4;
const real = 699;

function converterMoedas(reais) {
  total = dolar * reais;
  return total;
}
const resultado = converterMoedas(real);
console.log(`R$ ${resultado.toFixed(2)}`);
