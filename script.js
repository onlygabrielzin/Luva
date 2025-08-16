const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual o nome dessa lenda?",
        alternativas: [
            {
                texto: "Maycon Nascimento Ramos",
                afirmacao: "Acertou"
            },
            {
                texto: "Luva de pedreiro",
                afirmacao: "Errou"
            },
            {
                texto: "Tandela",
                afirmacao: "Errou"
            },
            {
                texto: "Pykezera",
                afirmacao: "Errou"
            }            
        ]
    },
    {
        enunciado: "Quantos dias o Maycon já ficou sem comer?",
        alternativas: [
            {
                texto: "3",
                afirmacao: "Errou"
            },
            {
                texto: "43",
                afirmacao: "Errou"
            },
            {
                texto: "7",
                afirmacao: "Acertou"
            },
            {
                texto: "31",
                afirmacao: "Errou"
            }            
        ]
    },
    {
        enunciado: "Qual o nome da vó de Luva?",
        alternativas: [
            {
                texto: "Carla Ramos",
                afirmacao: "Errou"
            },
            {
                texto: "Edvania",
                afirmacao: "Acertou"
            },
            {
                texto: "Né",
                afirmacao: "Errou"
            },
            {
                texto: "Giovana",
                afirmacao: "Errou"
            }
        ]
    },
    {
        enunciado: "O nariz de Ramos cruza quantos continentes",
        alternativas: [
            {
                texto: "7",
                afirmacao: "Acertou"
            },
            {
                texto: "3",
                afirmacao: "Errou"
            },
            {
                texto: "5",
                afirmacao: "Errou"
            },
            {
                texto: "9",
                afirmacao: "Errou"
            }
        ]
    },
    {
        enunciado: "Quantos quilos de carne ele corta por dia?",
        alternativas: [
            {
                texto: "13Kg",
                afirmacao: "Errou"
            },
            {
                texto: "6Kg",
                afirmacao: "Errou"
            },
            {
                texto: "777Kg",
                afirmacao: "Acertou"
            },
            {
                texto: "99Kg",
                afirmacao: "Errou"
            }
        ]
    },
    {
        enunciado: "Quando ele vai comprar um PC?",
        alternativas: [
            {
                texto: "Ele vai comprar um carro",
                afirmacao: "Acertou"
            },
            {
                texto: "Nunca",
                afirmacao: "Errou"
            },
            {
                texto: "Amanhã",
                afirmacao: "Errou"
            },
            {
                texto: "Depois de 7 anos de aposentadoria",
                afirmacao: "Errou"
            }
        ]
    },    
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();

let contagemAfirmacoes = {}; // Objeto para armazenar a contagem de cada afirmação

function respostaSelecionada(opcaoSelecionada) {
    const afirmacaoSelecionada = opcaoSelecionada.afirmacao;
    if (contagemAfirmacoes.hasOwnProperty(afirmacaoSelecionada)) {
        contagemAfirmacoes[afirmacaoSelecionada]++;
    } else {
        contagemAfirmacoes[afirmacaoSelecionada] = 1;
    }
    
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    const totalPerguntas = perguntas.length;
    const totalAcertos = contagemAfirmacoes["Acertou"] || 0; // Se não houver acertos, considera como 0
    const porcentagemAcertos = (totalAcertos / totalPerguntas) * 100;

    caixaPerguntas.textContent = "Resultado do Quiz!";
    textoResultado.textContent = `Você acertou ${totalAcertos} de ${totalPerguntas} perguntas. Sua taxa de acerto foi ${porcentagemAcertos.toFixed(2)}%.`;
    caixaAlternativas.textContent = "";
}

