var hamMenu = document.querySelector('.ham-menu');
var dropMenu = document.querySelector('.drop-menu');
var dropMenuList = document.querySelectorAll('.drop-menu div');
var dropMenuListText = document.querySelectorAll('.drop-menu div a');

hamMenu.addEventListener('click', () => {
    console.log('fsdgd');
    dropMenu.classList.toggle('drop-down');
    hamMenu.children[0].classList.toggle('top');
    hamMenu.children[1].classList.toggle('mid');
    hamMenu.children[2].classList.toggle('bottom');
})

