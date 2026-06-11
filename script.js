const pontos = document.querySelectorAll(".ponto");
const titulo = document.getElementById("titulo");
const descricao = document.getElementById("descricao");
const infoBox = document.querySelector(".info-box");

infoBox.style.display = "none";

pontos.forEach((ponto) => {

    ponto.addEventListener("click", () => {

        titulo.textContent = ponto.dataset.titulo;
        descricao.textContent = ponto.dataset.descricao;
        infoBox.style.display = "block";
        let posicaoX = ponto.offsetLeft;
        if(posicaoX > 900){
            posicaoX = 1100;
        }
        infoBox.style.left = posicaoX + "px";
        infoBox.style.top = (ponto.offsetTop + 40) + "px";
    });
});

