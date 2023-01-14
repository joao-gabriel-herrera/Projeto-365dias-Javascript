// Projeto código nosso de cada dia (dia 26)
// Criando um email dinâmico com Template literal (` `)
/* Utilizar o Template Literal facilita na hora 
de formatar um texto pelo javascript, pois deixa 
o código mais limpo e deixa você usar a formatação
 que quiser em seu texto */
const nome = "João";
const inscritos = "1.000.000";
const email = `Ola ${nome}

Nós da equipe Youtube o parabenizamos
pela sua incrível marca de ${inscritos}
de inscritos, sinal de seu enorme esforço
e dedicação pelos demais!

Continue assim!

Atenciosamente, 
Youtube.`;
console.log(email);
