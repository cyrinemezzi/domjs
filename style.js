const btns=document.querySelectorAll('.btn-modal');
const btns=document.querySelector('.bloc-modal');
const close=document.querySelector('.close');
const index=document.querySelector('.bloc-modal img');

const nav=document.querySelector('nav');
window.addEventListener('scroll',()=>{
    if(window.scrollY>30){
        nav.classList.add('nav-animmate')
    }else{
        nav.classList.remove('nav-animmate')
    }
})