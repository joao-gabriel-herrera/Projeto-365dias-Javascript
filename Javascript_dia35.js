// Projeto código nosso de cada dia (dia 35)
// Segurança virtual
const verificarEntrada = () => {
  nomeConvidado = document.getElementById("nome").value;
  convidadosJoao = [
    "amanda",
    "sabrina",
    "rafael",
    "dalben",
    "pedro",
    "marcelo",
    "josiane",
  ];
  convidadosJoao.includes(nomeConvidado.toLowerCase())
    ? (document.getElementById("permissaoDeEntrada").innerText =
        "Você pode entrar!")
    : (document.getElementById("permissaoDeEntrada").innerText =
        "Você não pode entrar!");
};
