// Projeto código nosso de cada dia (dia 23)
// Natureza dinâmica de objetos em javascript
// Criando objeto
const casa = {
  cor: "blue",
  qtdJanelas: 5,
  tamanhoTerreno: "145m2",
  andares: 1,
};
console.log(casa);
// Adicionando propriedades ao objeto externamente
casa.murada = true;
console.log(casa);
// Adicionando funções ao objeto
casa.negociarValor = function negociarValor() {
  console.log("Negociando valor...");
};
console.log(casa);
// Excluindo propriedades de objetos externamente
delete casa.murada;
delete casa.negociarValor;
delete casa.andares;
console.log(casa);
