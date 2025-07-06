// Função para obter elemento pelo id
const obterElemento = (id) => document.getElementById(id);

// Gera número aleatório entre 1 e 100 
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Número máximo de tentativas
const maxTentativas = 10;

// Variável para controlar as tentativas
let tentativasRestantes = maxTentativas;

// Atualiza texto de tentativas ao carregar a página
obterElemento("tentativas").textContent = "Você tem " + tentativasRestantes + " tentativas.";

// Função chamada ao clicar no botão
function verificarPalpite() {
    // Pega o valor digitado e converte para número
    const valorInput = Number(obterElemento("palpite").value); 

    const paragrafoSistema = obterElemento("sistema");
    const paragrafoTentativas = obterElemento("tentativas");

    // Validação do valor digitado
    if (isNaN(valorInput) || valorInput < 1 || valorInput > 100+1) {
        paragrafoSistema.textContent = "Digite um número válido entre 1 e 100.";
        return;
    }

    // Verifica se acertou
    if (valorInput === numeroSecreto) {
        paragrafoSistema.textContent = "Parabéns! Você acertou!";
        paragrafoTentativas.textContent = "";
        desativarInputEBotao();
    } else {
        tentativasRestantes--;

        if (tentativasRestantes === 0) {
            paragrafoSistema.textContent = "Fim de jogo! O número era " + numeroSecreto + ".";
            paragrafoTentativas.textContent = "";
            desativarInputEBotao();
        } else {
            paragrafoSistema.textContent = valorInput < numeroSecreto
                ? "O número secreto é maior."
                : "O número secreto é menor.";
            paragrafoTentativas.textContent = "Tentativas restantes: " + tentativasRestantes;
        }
    }

    // Limpa o input
    obterElemento("palpite").value = "";
}

// Função para desativar input e botão após fim do jogo
function desativarInputEBotao() {
    obterElemento("palpite").disabled = true;
    document.querySelector("button").disabled = true;
}
