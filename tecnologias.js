  const perguntas = [
    {
        pergunta: "Qual o tamanho da sua área de cultivo?",
        alternativas: [
            {
                texto: "Até 50 hectares",
                imagem: "../imagens/1folha.png",
                pontos: {
                    sensor: 2,
                    irrigacao: 1
                }
            },
            {
                texto: "50 a 100 hectares",
                imagem: "../imagens/2folhas.png",
                pontos: {
                    sensor: 2,
                    irrigacao: 2,
                    drone: 1
                }
            },
            {
                texto: "100 a 500 hectares",
                imagem: "../imagens/3folhas.png",
                pontos: {
                    drone: 3,
                    satelite: 2,
                    sensor: 2
                }
            },
            {
                texto: "Mais de 500 hectares",
                imagem: "../imagens/4folhas.png",
                pontos: {
                    drone: 4,
                    satelite: 4,
                    sensor: 2
                }
            }
        ]
    },
    {
        pergunta: "Sua região sofre com períodos de seca?",
        alternativas: [
            {
                texto: "Nunca",
                imagem: "../imagens/1folha.png",
                pontos: {
                    estacao: 1
                }
            },
            {
                texto: "Raramente",
                imagem: "../imagens/2folhas.png",
                pontos: {
                    estacao: 2
                }
            },
            {
                texto: "Frequentemente",
                imagem: "../imagens/3folhas.png",
                pontos: {
                    irrigacao: 4,
                    sensor: 2,
                    estacao: 3
                }
            },
            {
                texto: "Quase o ano todo",
                imagem: "../imagens/4folhas.png",
                pontos: {
                    irrigacao: 5,
                    sensor: 4,
                    estacao: 3
                }
            }
        ]
    },
    {
        pergunta: "Como é realizado o monitoramento da plantação?",
        alternativas: [
            {
                texto: "Apenas observação visual",
                imagem: "../imagens/1folha.png",
                pontos: {
                    drone: 4,
                    satelite: 3,
                    sensor: 2
                }
            },
            {
                texto: "Caminhadas periódicas",
                imagem: "../imagens/2folhas.png",
                pontos: {
                    drone: 3,
                    sensor: 2
                }
            },
            {
                texto: "Utilizo câmeras",
                imagem: "../imagens/3folhas.png",
                pontos: {
                    drone: 2,
                    sensor: 2
                }
            },
            {
                texto: "Já utilizo tecnologias digitais",
                imagem: "../imagens/4folhas.png",
                pontos: {
                    drone: 1,
                    satelite: 1
                }
            }
        ]
    },
    {
        pergunta: "Como é feita a irrigação atualmente?",
        alternativas: [
            {
                texto: "Não possuo irrigação",
                imagem: "../imagens/1folha.png",
                pontos: {
                    sensor: 2,
                    irrigacao: 5
                }
            },
            {
                texto: "Manual",
                imagem: "../imagens/2folhas.png",
                pontos: {
                    sensor: 3,
                    irrigacao: 4
                }
            },
            {
                texto: "Automatizada simples",
                imagem: "../imagens/3folhas.png",
                pontos: {
                    irrigacao: 2,
                    sensor: 2
                }
            },
            {
                texto: "Inteligente",
                imagem: "../imagens/4folhas.png",
                pontos: {
                    irrigacao: 0
                }
            }
        ]
    },
    {
        pergunta: "Qual sua principal prioridade?",
        alternativas: [
            {
                texto: "Economizar água",
                imagem: "../imagens/1folha.png",
                pontos: {
                    sensor: 3,
                    irrigacao: 4
                }
            },
            {
                texto: "Aumentar a produtividade",
                imagem: "../imagens/2folhas.png",
                pontos: {
                    sensor: 3,
                    satelite: 2,
                    drone: 3
                }
            },
            {
                texto: "Reduzir custos",
                imagem: "../imagens/3folhas.png",
                pontos: {
                    solar: 4,
                    sensor: 2
                }
            },
            {
                texto: "Tornar a  fazenda mais sustentável",
                imagem: "../imagens/4folhas.png",
                pontos: {
                    solar: 3,
                    irrigacao: 2,
                    sensor: 2
                }
            }
        ]
    },
    {
        pergunta: "Como é fornecida a energia da propriedade?",
        alternativas: [
            {
                texto: "Apenas rede elétrica",
                imagem: "../imagens/1folha.png",
                pontos: {
                    solar: 5
                }
            },
            {
                texto: "Rede elétrica + gerador",
                imagem: "../imagens/2folhas.png",
                pontos: {
                    solar: 4
                }
            },
            {
                texto: "Parte renovável",
                imagem: "../imagens/3folhas.png",
                pontos: {
                    solar: 2
                }
            },
            {
                texto: "Totalmente renovável",
                imagem: "../imagens/4folhas.png",
                pontos: {
                    solar: 0
                }
            }
        ]
    },
    {
        pergunta: "Com que frequência você consulta os dados climáticos?",
        alternativas: [
            {
                texto: "Nunca",
                imagem: "../imagens/1folha.png",
                pontos: {
                    estacao: 5
                }
            },
            {
                texto: "Apenas quando necessário",
                imagem: "../imagens/2folhas.png",
                pontos: {
                    estacao: 3
                }
            },
            {
                texto: "Semanalmente",
                imagem: "../imagens/3folhas.png",
                pontos: {
                    estacao: 2
                }
            },
            {
                texto: "Diariamente",
                imagem: "../imagens/4folhas.png",
                pontos: {
                    estacao: 0
                }
            }
        ]
    },
    {
        pergunta: "Qual tecnologia você gostaria de implementar primeiro?",
        alternativas: [
            {
                texto: "Drone agrícola",
                imagem: "../imagens/1folha.png",
                pontos: {
                    drone: 4
                }
            },
            {
                texto: "Sensores de solo",
                imagem: "../imagens/2folhas.png",
                pontos: {
                    sensor: 4
                }
            },
            {
                texto: "Irrigação Inteligente",
                imagem: "../imagens/3folhas.png",
                pontos: {
                    irrigacao: 4
                }
            },
            {
                texto: "Painéis sSolares",
                imagem: "../imagens/4folhas.png",
                pontos: {
                    solar: 4    
                }
            }
        ]
    },
];

let perguntaAtual = 0;
let drone = 0;
let sensor = 0;
let irrigacao = 0;
let solar = 0;
let satelite = 0;
let estacao = 0;

const pergunta =
document.getElementById("pergunta");
const alternativas =
document.getElementById("alternativas");
const resultado =
document.getElementById("resultado");
const passos =
document.querySelectorAll(".passo");

function adicionarPontos(pontos){
    drone += pontos.drone || 0;
    sensor += pontos.sensor || 0;
    irrigacao += pontos.irrigacao || 0;
    solar += pontos.solar || 0;
    satelite += pontos.satelite || 0;
    estacao += pontos.estacao || 0;
}

function mostrarPergunta(){
    pergunta.textContent =
    perguntas[perguntaAtual].pergunta;
    alternativas.innerHTML = "";

    perguntas[perguntaAtual]
    .alternativas
    .forEach(alternativa => {
        const botao =
        document.createElement("button");
        botao.className =
        "opcao";
        botao.innerHTML = `
    <img
        src="${alternativa.imagem}"
        class="imagem-opcao"
        alt="${alternativa.texto}"
    >

    <p class="texto-opcao">
        ${alternativa.texto}
    </p>
`;
        botao.onclick = () => {
            adicionarPontos(
                alternativa.pontos
            );
            passos[perguntaAtual]
            .classList.add("concluido");
            perguntaAtual++;
            if(
                perguntaAtual <
                perguntas.length
            ){
                mostrarPergunta();
            }
            else{
                mostrarResultado();
            }
        };
        alternativas.appendChild(botao);
    });
}

function obterImagemTecnologia(nome){

    const imagens = {
        "Drone Agrícola": "imagens/drone.png",
        "Sensores de Solo": "imagens/sensor.png",
        "Irrigação Inteligente": "imagens/irrigacao.png",
        "Painéis Solares": "imagens/solar.png",
        "Monitoramento por Satélite": "imagens/satelite.png",
        "Estação Meteorológica": "../imagens/estacao.png"
    };

    return imagens[nome] || "imagens/imagem.png";
}

function mostrarResultado(){

    const tecnologias = [
        {
            nome: "Drone Agrícola",
            pontos: drone
        },
        {
            nome: "Sensores de Solo",
            pontos: sensor
        },
        {
            nome: "Irrigação Inteligente",
            pontos: irrigacao
        },
        {
            nome: "Painéis Solares",
            pontos: solar
        },
        {
            nome: "Monitoramento por Satélite",
            pontos: satelite
        },
        {
            nome: "Estação Meteorológica",
            pontos: estacao
        }
    ];

    tecnologias.sort((a,b) => b.pontos - a.pontos);

    document.querySelector(".card-pergunta")
    .style.display = "none";
    document.querySelector(".diagnostico")
    .classList.add("resultado");

   resultado.innerHTML = `

<h3 class="titulo-podio">
    Tecnologias Recomendadas
</h3>

<div class="podio">

    <div class="lugar segundo">

        <img
            src="imagens/2lugar.png"
            class="medalha-podio"
        >

        <div class="bloco segundo-bloco">

            <img
                src="${obterImagemTecnologia(tecnologias[1].nome)}"
                class="imagem-tecnologia"
            >

            <div class="nome">
                ${tecnologias[1].nome}
            </div>

        </div>

    </div>

    <div class="lugar primeiro">

        <img
            src="imagens/1lugar.png"
            class="medalha-podio"
        >

        <div class="bloco primeiro-bloco">

            <img
                src="${obterImagemTecnologia(tecnologias[0].nome)}"
                class="imagem-tecnologia"
            >

            <div class="nome">
                ${tecnologias[0].nome}
            </div>

        </div>

    </div>

    <div class="lugar terceiro">

        <img
            src="imagens/3lugar.png"
            class="medalha-podio"
        >

        <div class="bloco terceiro-bloco">

            <img
                src="${obterImagemTecnologia(tecnologias[2].nome)}"
                class="imagem-tecnologia"
            >

            <div class="nome">
                ${tecnologias[2].nome}
            </div>

        </div>

    </div>

</div>

<button onclick="reiniciar()" class="reiniciar">
    Refazer Diagnóstico
</button>

`;
}

function reiniciar(){

    document.querySelector(".diagnostico")
.classList.remove("resultado");

    perguntaAtual = 0;
    drone = 0;
    sensor = 0;
    irrigacao = 0;
    solar = 0;
    satelite = 0;
    estacao = 0;

    passos.forEach(passo => {
        passo.classList.remove(
            "concluido"
        );
    });
    resultado.innerHTML = "";
    document.querySelector(
        ".card-pergunta"
    ).style.display = "block";

    mostrarPergunta();
}
mostrarPergunta();

const perguntasFaq =
document.querySelectorAll(".faq-titulo");

perguntasFaq.forEach((pergunta) => {

    pergunta.addEventListener("click", () => {
        const resposta =
        pergunta.nextElementSibling;
        resposta.classList.toggle("ativo");
    });
});