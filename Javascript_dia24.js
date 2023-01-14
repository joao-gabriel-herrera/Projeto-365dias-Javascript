// Projeto código nosso de cada dia (dia 24)
// Clonando objetos em javascript
const computador = {
  processador: "i5",
  placaDeVideo: "gtx 960",
  armazenamento: 120,
};
console.log(computador);
//  1º método Object.assign
const objetoClonado = Object.assign(
  {
    // Posso adicionar novas propriedades nesse espaço
    memoria: "8gb",
  },
  computador
);
console.log(objetoClonado);
// 2º metodo {...} (spread)
const objetoClonado2 = { ...computador };
console.log(objetoClonado2);
