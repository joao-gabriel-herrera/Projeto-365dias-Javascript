// Projeto código nosso de cada dia (dia 4)
// Usando funções em Javascript
// Boas práticas em função: verbo + substantivo, ex: resetaCor, aumentarFonte, ativarModoEscuro

// Função sem parâmetro:

let siteFont = "Arial";
function trocaFonte() {
  siteFont = "Verdana";
}
console.log(siteFont);
trocaFonte();
console.log(siteFont);

// Função com parâmetro:
let siteColor = "#fff";
function trocaCor(cor) {
  siteColor = cor;
}
console.log(siteColor);
trocaCor("#000");
console.log(siteColor);

// Função com mais de um parâmetro:
let corSite = "verde";
function trocarCor(cor, tonalidade) {
  corSite = cor + " " + tonalidade;
}
console.log(corSite);
trocarCor("azul", "escuro");
console.log(corSite);
// Função com retorno:
function multiplicaPorDois(valor) {
  return valor * 2;
}
// console.log(multiplicaPorDois(5));
let resultado = multiplicaPorDois(5);
console.log(resultado);
