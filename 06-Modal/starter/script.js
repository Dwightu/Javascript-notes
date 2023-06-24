'use strict';


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnOpenModal = document.querySelectorAll('.show-modal');


btnOpenModal.forEach(i=>{
    i.addEventListener('click',()=>{
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    })
})

btnCloseModal.addEventListener('click',()=>{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})

document.addEventListener('keydown',(e)=>{
    if(e.key==='Escape'){
        if(!modal.classList.contains('hidden')){
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
        }
    }
})