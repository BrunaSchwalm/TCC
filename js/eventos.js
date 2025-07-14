document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os botões "Saiba Mais"
    const botoesSaibaMais = document.querySelectorAll('.btn-alternar');

    // Seleciona o pop-up e seus elementos
    const popupOverlay = document.getElementById('popup-overlay');
    const popupContent = document.getElementById('popup-content');
    const popupBody = document.getElementById('popup-body');
    const closePopup = document.getElementById('close-popup');

    // Adiciona evento de clique para cada botão
    botoesSaibaMais.forEach(botao => {
        botao.addEventListener('click', function () {
            const eventId = this.getAttribute('data-event-id');
            const infoEvento = document.getElementById(`${eventId}-info`);

            // Clona o conteúdo do evento para o pop-up
            popupBody.innerHTML = infoEvento.innerHTML;

            // Exibe o pop-up
            popupOverlay.style.display = 'flex';
            setTimeout(() => {
                popupOverlay.classList.add('active');
            }, 10);
        });
    });

    // Fecha o pop-up quando clicar no botão de fechar
    closePopup.addEventListener('click', function () {
        popupOverlay.classList.remove('active');
        setTimeout(() => {
            popupOverlay.style.display = 'none';
        }, 300);
    });

    // Fecha o pop-up quando clicar fora do conteúdo
    popupOverlay.addEventListener('click', function (e) {
        if (e.target === popupOverlay) {
            popupOverlay.classList.remove('active');
            setTimeout(() => {
                popupOverlay.style.display = 'none';
            }, 300);
        }
    });
});

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
});
