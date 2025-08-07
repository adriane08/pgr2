const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você já deve ter percebido que o nosso planeta está mudando. Qual o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "Não sabe o que vai acontecer com o planeta. "
            },
            {
                texto: "Isso é normal.",
                afirmacao: "Sabe que isso não vai afetar a sua rotina"
            }
        ]
    },
    {
        enunciado: "Com as chamadas mudanças climáticas, temos um novo desafio: diminuir os impactos no meio ambiente. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Faz a sua parte, com pequenas atitudes diárias.",
                afirmacao: "Acredita que pequenas atitudes vão fazer a diferença."
            },
            {
                texto: "Não liga para esse assunto.",
                afirmacao: "Acredita que pequenas atitudes não vão fazer diferença."
            }
        ]
    },
    {
        enunciado: "Quando você vê lixo jogado na rua ou pessoas jogando lixo em locais inadequados, como você se posiciona?",
        alternativas: [
                      {
                texto: "Coloco o lixo em lixeiras.",
                afirmacao: "No final, vai saber que fez a sua parte!"
            },
        
            {
                texto: "Finjo que não vi.",
                afirmacao: "E é o ciclo do planeta e as mudanças fazem parte..."
            }
        ]
    }
    
    
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

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
