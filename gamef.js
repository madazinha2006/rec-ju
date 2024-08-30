let escolhasJogador = ['', '']; // Array para armazenar as escolhas dos jogadores

function jogar(escolha, jogador) {
    escolhasJogador[jogador - 1] = escolha; // Armazena a escolha do jogador no array

    // Verifica se ambos os jogadores já fizeram suas escolhas
    if (escolhasJogador[0] && escolhasJogador[1]) {
        determinarVencedor(); // Chama a função para determinar o vencedor
    }
}

function determinarVencedor() {
    const [escolhaJogador1, escolhaJogador2] = escolhasJogador; // Obtém as escolhas dos jogadores
    let resultado = '';

    // Verifica as condições de vitória ou empate
    if (escolhaJogador1 === escolhaJogador2) {
        resultado = 'Empate!';
    } else if (
        (escolhaJogador1 === 'pedra' && escolhaJogador2 === 'tesoura') ||
        (escolhaJogador1 === 'papel' && escolhaJogador2 === 'pedra') ||
        (escolhaJogador1 === 'tesoura' && escolhaJogador2 === 'papel')
    ) {
        resultado = 'Jogador 1 venceu!';
    } else {
        resultado = 'Jogador 2 venceu!';
    }

    // Exibe o resultado na página
    document.getElementById('result').textContent = `Jogador 1 escolheu ${escolhaJogador1}. Jogador 2 escolheu ${escolhaJogador2}. ${resultado}`;

    // Reseta as escolhas para uma nova partida
    escolhasJogador = ['', ''];
}
