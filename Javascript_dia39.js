// Projeto código nosso de cada dia (dia 39)
// Adicionando elementos no documento html via javascipt
let filmeJoao =
  "https://br.web.img3.acsta.net/pictures/210/530/21053062_20131025204305591.jpg";
let filmeMariane =
  "https://br.web.img3.acsta.net/medias/nmedia/18/87/90/23/19962722.jpg";
const img1 = document.createElement("img");
img1.src = filmeJoao;
img1.style.width = "400px";
document.body.appendChild(img1);
const img2 = document.createElement("img");
img2.src = filmeMariane;
img2.style.width = "400px";
img2.style.height = "597px";
document.body.appendChild(img2);
