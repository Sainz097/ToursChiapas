var bmenu=document.getElementById('btnmenu');
var menu=document.getElementById('menu');
console.log(menu.getAttribute('class'))
bmenu.addEventListener('click', function(){
    'use strict';
    /*console.log('click');
    console.log(menu.getAttribute('mostrar'))*/
        //bandera=true;
          menu.classList.toggle('mostrar');
});