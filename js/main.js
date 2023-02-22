'use strict'

const inputElement = document.getElementById('input-nome');
const inputButton = document.getElementById('cambia-testo');

console.log(inputElement.value);


inputButton.addEventListener('click',
    function(){
        inputElement.value = 'contenuto dopo click';
        // alert('prova');
    }

)