const perguntasFaq =
document.querySelectorAll(".faq-titulo");

perguntasFaq.forEach((pergunta) => {

    pergunta.addEventListener("click", () => {
        const resposta =
        pergunta.nextElementSibling;
        resposta.classList.toggle("ativo");
    });
});

function calcularEconomia(){

    let agua = Number(document.getElementById("agua").value);
    let energia = Number(document.getElementById("energia").value);
    let produtividade = Number(document.getElementById("produtividade").value);

    let economiaAgua = 0;
    let economiaEnergia = 0;
    let aumentoProdutividade = 0;
    let reducaoCO2 = 0;

    let tecnologias =
    document.querySelectorAll(
    '.tecnologias input:checked'
    );

    tecnologias.forEach(item => {

        switch(item.value){

            case "irrigacao":
                economiaAgua += 35;
                aumentoProdutividade += 10;
                break;

            case "drone":
                aumentoProdutividade += 5;
                reducaoCO2 += 2;
                break;

            case "sensor":
                economiaAgua += 15;
                aumentoProdutividade += 4;
                break;

            case "solar":
                economiaEnergia += 30;
                reducaoCO2 += 6;
                break;

            case "estacao":
                economiaAgua += 10;
                aumentoProdutividade += 3;
                break;

            case "satelite":
                aumentoProdutividade += 6;
                reducaoCO2 += 3;
                break;
        }

    });

    let aguaEconomizada =
        (agua * economiaAgua / 100) * 12;

    let energiaEconomizada =
        (energia * economiaEnergia / 100) * 12;

    document.getElementById("resultadoAgua")
    .innerHTML =
    aguaEconomizada.toLocaleString("pt-BR") +
    " m³/ano";

    document.getElementById("resultadoEnergia")
    .innerHTML =
    energiaEconomizada.toLocaleString("pt-BR") +
    " kWh/ano";

    document.getElementById("resultadoProdutividade")
    .innerHTML =
    "+" + aumentoProdutividade + "%";

    document.getElementById("resultadoCO2")
    .innerHTML =
    reducaoCO2.toFixed(1) +
    " ton/ano";
}