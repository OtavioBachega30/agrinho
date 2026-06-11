const perguntasFaq =
document.querySelectorAll(".faq-titulo");

perguntasFaq.forEach((pergunta) => {

    pergunta.addEventListener("click", () => {
        const resposta =
        pergunta.nextElementSibling;
        resposta.classList.toggle("ativo");
    });
});