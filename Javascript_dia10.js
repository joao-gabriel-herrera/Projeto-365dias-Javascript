// Projeto código nosso de cada dia (dia 10)
// Usando switch case em JavaScript
let permissaoAtual = "gerencia"; //operacional; supervisão; gerência;
switch (permissaoAtual) {
  case "operacional":
    console.log("Você é um usuário da Operação!");
    break;
  case "supervisao":
    console.log("Você é um usuário da Supervisão!");
    break;
  case "gerencia":
    console.log("Você é um usuário da Gerência!");
    break;
  default:
    console.log("Usuário não encontrado!");
}
