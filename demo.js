/*----------side-menu----------*/
let sideMenu = document.querySelector('#side-menu');
let sideMenuToggle = document.querySelector('#side-toggle');

sideMenuToggle.addEventListener('click',function(e){
    sideMenu.classList.toggle('side-menu-click');
    
})