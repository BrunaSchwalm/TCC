document.addEventListener('DOMContentLoaded', function() {
    const botaoAlternar = document.getElementById('botaoAlternar');
    const informacoesEscondidas = document.getElementById('informacoes-escondidas');

    botaoAlternar.addEventListener('click', function() {
        if (informacoesEscondidas.classList.contains('escondido')) {
            informacoesEscondidas.classList.remove('escondido');
            informacoesEscondidas.classList.add('visivel');
            botaoAlternar.textContent = 'Ver Menos'; // Mudar texto do botão
        } else {
            informacoesEscondidas.classList.remove('visivel');
            informacoesEscondidas.classList.add('escondido');
            botaoAlternar.textContent = 'Saiba Mais'; // Mudar texto do botão de volta
        }
    });
});