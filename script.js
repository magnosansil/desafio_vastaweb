// Define o comportamento do botão de menu hamburguer
function clickMenu() {
    menu.style.display == 'block' ? menu.style.display = 'none' : menu.style.display = 'block';
}

// Define o comportamento da rolagem de tela ao selecionar algum dos elementos do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Define o comportamento do botão "Ler mais"
const span = document.getElementById('toggle-content');
const hiddenContent = document.getElementById('hidden-content');

span.addEventListener('click', function () {
    hiddenContent.classList.toggle('show');
});

// Descreve o comportamento do botão "CARREGAR MAIS PROJETOS"
const toggleButton = document.getElementById('toggle-button');
const hiddenFigures = document.querySelectorAll('.portfolio-images figure.hidden');

toggleButton.addEventListener('click', function () {
    hiddenFigures.forEach(function (figure) {
        figure.classList.toggle('hidden');
    });
    // Se o botão for ativado, seu conteúdo mudará para "MOSTRAR MENOS". Caso ativado novamente, voltará ao valor original
    toggleButton.textContent = (toggleButton.textContent === 'MOSTRAR MENOS') ? 'CARREGAR MAIS PROJETOS' : 'MOSTRAR MENOS'; 
});
// Define que o botão só poderá ser ativado em telas com 768px de largura ou menos
window.addEventListener('resize', function () {
    if (window.innerWidth <= 768) {
        toggleButton.removeAttribute('disabled');
    } else {
        toggleButton.setAttribute('disabled', 'disabled');
    }
});

if (window.innerWidth <= 768) {
    toggleButton.removeAttribute('disabled');
}

// Define o comportamento dos botões de "MENU" e "SOBRE" no footer
const footerMenu = document.querySelector('.footer-menu');
const footerAbout = document.querySelector('.footer-about');

footerMenu.addEventListener('click', function () {
    const menuList = footerMenu.querySelector('ul');
    menuList.style.display = menuList.style.display === 'none' ? 'block' : 'none';
});

footerAbout.addEventListener('click', function () {
    const aboutList = footerAbout.querySelector('ul');
    aboutList.style.display = aboutList.style.display === 'none' ? 'block' : 'none';
});