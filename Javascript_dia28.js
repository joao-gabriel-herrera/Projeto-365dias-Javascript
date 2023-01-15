// Projeto código nosso de cada dia (dia 28)
// Criando um montador de endereço
function montarEndereco(rua, cidade, cep) {
  (this.rua = rua), (this.cidade = cidade), (this.cep = cep);
}
const endereco = new montarEndereco("Arthur monteiro", "Tremembé", 15984565);
function exibirEndereco(endereco) {
  for (let chave in endereco) {
    console.log(chave + ": " + endereco[chave]);
  }
}
exibirEndereco(endereco);
