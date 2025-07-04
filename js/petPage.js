document.addEventListener('DOMContentLoaded', function () {
            const menuToggle = document.querySelector('.menu-toggle');
            const mainNav = document.getElementById('main-nav');

            if (menuToggle && mainNav) {
                menuToggle.addEventListener('click', function () {
                    mainNav.classList.toggle('nav-open');
                });
            }
        });