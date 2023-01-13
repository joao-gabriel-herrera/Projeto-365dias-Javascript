// Projeto código nosso de cada dia (dia 17)
// Função que exibe somente as proptiedades string presentes no objeto
const filme = {
  titulo: "vingadores",
  ano: 2018,
  lucro: 1000000,
  diretor: "joao",
  personagem: "thor",
};
exibirPropriedades(filme);
function exibirPropriedades(obj) {
  for (let prop in obj) {
    if (typeof obj[prop] === "string") console.log(prop, ": ", obj[prop]);
  }
}
