const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

    menuBtn.addEventListener('click', () => { //Adicionar um evento na lista que após o clique chama uma função que ...
        menu.classList.toggle('open'); //Abre o menu
        menuBtn.classList.toggle('open');
        document.body.classList.toggle('menu-open'); // Adicionar e remover a classe ao body
    });