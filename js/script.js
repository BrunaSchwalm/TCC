document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões com a classe 'btn-alternar'
    const botoesAlternar = document.querySelectorAll('.btn-alternar');

    botoesAlternar.forEach(function(botao) {
        botao.addEventListener('click', function() {
            // Encontra o elemento pai mais próximo que tem a classe 'detalhes-evento'
            const detalhesEvento = this.closest('.detalhes-evento');

            // Dentro desse 'detalhesEvento', encontra a div com a classe 'informacoes-evento'
            const informacoesEscondidas = detalhesEvento.querySelector('.informacoes-evento');

            // Alterna a classe 'escondido' para mostrar ou esconder o conteúdo
            informacoesEscondidas.classList.toggle('escondido');

            // Opcional: Altera o texto do botão
            if (informacoesEscondidas.classList.contains('escondido')) {
                this.textContent = 'Saiba Mais';
            } else {
                this.textContent = 'Ver Menos';
            }
        });
    });
});