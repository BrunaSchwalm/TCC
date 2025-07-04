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