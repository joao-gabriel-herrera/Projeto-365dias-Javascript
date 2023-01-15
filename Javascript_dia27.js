// Projeto código nosso de cada dia (dia 27)
// Trabalhando com a função Date
// Puxa a data e hora atual
const data1 = new Date();
console.log(data1);
// Definindo data manualmente
// 1º método
const data2 = new Date("March 06 2019 09:30");
console.log(data2);
// 2º método
// Ano / mês (começa do 0 e vai até o 11) / dia / hora / minuto / segundo ....
const data3 = new Date(2025, 0, 01, 8, 12, 45);
console.log(data3);
// Alterando e coletando atributos de data externamente
// Definindo um atributo
data1.setFullYear(2029);
console.log(data1);
// Pegando um atributo
const ano = data1.getFullYear();
console.log(ano);
// Transformar informação em uma string
const string = data3.toDateString();
console.log(string);
// Obter GMT em string
const GMT = data2.toTimeString();
console.log(GMT);
// Transformando em um parão de banco de dados
const dados = data3.toISOString();
console.log(dados);
