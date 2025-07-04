<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function () {
            const menuToggle = document.querySelector('.menu-toggle');
            const mainNav = document.getElementById('main-nav');

            if (menuToggle && mainNav) {
                menuToggle.addEventListener('click', function () {
                    mainNav.classList.toggle('nav-open');
                    // Altera o ícone do hambúrguer para um 'X' e vice-versa
                    const icon = menuToggle.querySelector('i');
                    if (mainNav.classList.contains('nav-open')) {
                        icon.classList.remove('fa-bars');
                        icon.classList.add('fa-times');
                    } else {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                });

                // Fecha o menu se um link for clicado (para navegação suave)
                mainNav.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => {
                        mainNav.classList.remove('nav-open');
                        menuToggle.querySelector('i').classList.remove('fa-times');
                        menuToggle.querySelector('i').classList.add('fa-bars');
                    });
                });
            }

            // Funcionalidade de "Saiba Mais" para os eventos
            document.querySelectorAll('.btn-alternar').forEach(button => {
                button.addEventListener('click', function () {
                    const infoDiv = this.nextElementSibling; // O div de informações está logo após o botão
                    infoDiv.classList.toggle('escondido');
                    this.textContent = infoDiv.classList.contains('escondido') ? 'Saiba Mais' : 'Ver Menos';
                });
            });
        });


        // PAgina cachorros individual
        document.addEventListener('DOMContentLoaded', function() {
        const menuToggle = document.querySelector('.menu-toggle');
        const mainNav = document.getElementById('main-nav');

        if (menuToggle && mainNav) {
            menuToggle.addEventListener('click', function() {
                mainNav.classList.toggle('nav-open');
            });
        }
    });
=======
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões com a classe 'btn-alternar'
    const botoesAlternar = document.querySelectorAll('.btn-alternar');

    botoesAlternar.forEach(function(botao) {
        botao.addEventListener('click', function() {
            // Encontra o elemento pai mais próximo que tem a classe 'detalhes-evento'
            const eventoWrapper = this.closest('.evento-wrapper');

            // Dentro desse 'detalhesEvento', encontra a div com a classe 'informacoes-evento'
            const informacoesEscondidas = eventoWrapper.querySelector('.informacoes-evento');

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

>>>>>>> 67e502314b183bad8e70283ee600d0a1ab6bfbbf
