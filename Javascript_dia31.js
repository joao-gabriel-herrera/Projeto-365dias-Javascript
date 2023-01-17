// Projeto código nosso de cada dia (dia 31)
// Montador de postagem de blog
function montadorPostagem(titulo, mensagem, autor) {
  (this.titulo = titulo),
    (this.mensagem = mensagem),
    (this.autor = autor),
    (this.visualizacoes = 0),
    (this.comentarios = []),
    (this.estaAoVivo = false);
}
let novaPostagem = new montadorPostagem("teste", "testando", "joao");
console.log(novaPostagem);
