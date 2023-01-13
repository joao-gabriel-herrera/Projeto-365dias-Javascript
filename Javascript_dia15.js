// Projeto código nosso de cada dia (dia 15)
//Projeto radar de velocidade
// Velocidade máxima 70 km/h
// Cada 5km acima da velocidade = 1 ponto na carteira
// 12 pontos =  carteira suspensa
meuRadar(113);
function meuRadar(velocidade) {
  const velMaxima = 70;
  const kmPorPonto = 5;
  const pontosParaSuspender = 12;
  if (velocidade <= velMaxima) console.log("Dentro do limite");
  else {
    const pontos = Math.floor((velocidade - velMaxima) / kmPorPonto);
    if (pontos >= pontosParaSuspender)
      console.log("Carteira suspensa", "(", pontos, "pontos )");
    else {
      console.log(pontos, " ponto(s)");
    }
  }
}
