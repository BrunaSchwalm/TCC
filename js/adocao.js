document.addEventListener('DOMContentLoaded', function () {
            const menuToggle = document.querySelector('.menu-toggle');
            const mainNav = document.getElementById('main-nav');
            const filterToggleButton = document.querySelector('.filter-toggle-button');
            const filtersSidebar = document.querySelector('.filters-sidebar');
            const animalCards = document.querySelectorAll('.animal-card');
            const filterCheckboxes = document.querySelectorAll('.filters-sidebar input[type="checkbox"]');
            const clearFiltersBtn = document.querySelector('.clear-filters-btn');

            // Toggle do Menu de Navegação (Header)
            if (menuToggle && mainNav) {
                menuToggle.addEventListener('click', function () {
                    mainNav.classList.toggle('nav-open');
                    const icon = menuToggle.querySelector('i');
                    if (mainNav.classList.contains('nav-open')) {
                        icon.classList.remove('fa-bars');
                        icon.classList.add('fa-times');
                    } else {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                });

                mainNav.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => {
                        mainNav.classList.remove('nav-open');
                        menuToggle.querySelector('i').classList.remove('fa-times');
                        menuToggle.querySelector('i').classList.add('fa-bars');
                    });
                });
            }

            // Lógica para Alternar Filtros em Telas Pequenas
            if (filterToggleButton && filtersSidebar) {
                filterToggleButton.addEventListener('click', function () {
                    filtersSidebar.classList.toggle('open');
                    const icon = filterToggleButton.querySelector('i');
                    if (filtersSidebar.classList.contains('open')) {
                        icon.classList.remove('fa-filter');
                        icon.classList.add('fa-times'); // Ícone de "X" quando aberto
                    } else {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-filter'); // Ícone de filtro quando fechado
                    }
                });
            }

            // Função para aplicar os filtros
            function applyFilters() {
                const activeFilters = {
                    porte: [],
                    sexo: [],
                    idade: [],
                    apadrinhamento: [],
                    larTemporario: []
                };

                // Coletar filtros ativos
                filterCheckboxes.forEach(checkbox => {
                    if (checkbox.checked) {
                        activeFilters[checkbox.name].push(checkbox.value);
                    }
                });

                animalCards.forEach(card => {
                    let matchesAllFilters = true;

                    // Verificar Porte
                    if (activeFilters.porte.length > 0) {
                        const cardPorte = card.dataset.porte;
                        if (!activeFilters.porte.includes(cardPorte)) {
                            matchesAllFilters = false;
                        }
                    }

                    // Verificar Sexo
                    if (activeFilters.sexo.length > 0) {
                        const cardSexo = card.dataset.sexo;
                        if (!activeFilters.sexo.includes(cardSexo)) {
                            matchesAllFilters = false;
                        }
                    }

                    // Verificar Idade
                    if (activeFilters.idade.length > 0) {
                        const cardIdade = card.dataset.idade;
                        if (!activeFilters.idade.includes(cardIdade)) {
                            matchesAllFilters = false;
                        }
                    }

                    // Verificar Apadrinhamento
                    if (activeFilters.apadrinhamento.length > 0) {
                        const cardApadrinhamento = card.dataset.apadrinhamento;
                        if (!activeFilters.apadrinhamento.includes(cardApadrinhamento)) {
                            matchesAllFilters = false;
                        }
                    }

                    // Verificar Lar Temporário
                    if (activeFilters.larTemporario.length > 0) {
                        const cardLarTemporario = card.dataset.larTemporario;
                        if (!activeFilters.larTemporario.includes(cardLarTemporario)) {
                            matchesAllFilters = false;
                        }
                    }

                    // Mostrar ou esconder o card
                    if (matchesAllFilters) {
                        card.style.display = 'flex'; // Mostra o card (assumindo display flex para o card)
                    } else {
                        card.style.display = 'none'; // Esconde o card
                    }
                });
            }

            // Adicionar event listeners para os checkboxes de filtro
            filterCheckboxes.forEach(checkbox => {
                checkbox.addEventListener('change', applyFilters);
            });

            // Lógica para Limpar Filtros
            if (clearFiltersBtn) {
                clearFiltersBtn.addEventListener('click', function () {
                    filterCheckboxes.forEach(checkbox => {
                        checkbox.checked = false;
                    });
                    applyFilters(); // Aplica os filtros novamente para mostrar todos os animais
                    console.log('Filtros limpos e aplicados!');
                });
            }

            // Chamar applyFilters() no carregamento inicial para garantir que todos os animais sejam exibidos por padrão
            applyFilters();
        });