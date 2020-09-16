/*
const elemento = document.querySelector(".data");
const animacaoClass = "animacao";

function animaScroll(){
    const topoDaPagina = window.pageYOffset+((window.innerHeight*3)/4);// 3/4 da janela
    elemento.forEach(function(elementos){
        if(topoDaPagina < elementos.offsetTop){
            elementos.classList.add(animacaoClass);
        }else{
            elementos.classList.remove(animacaoClass);
        }
    })    
    
};
if(elemento.length){
    window.addEventListener("scroll",function(){
        animaScroll();
    })
}
*/
const animacaoClass = "animacao"

function ativaScroll(){
    let img = document.querySelector('[data-anima]');
    if(img.getBoundingClientRect().top < window.innerHeight){
        img.classList.add(animacaoClass);
        console.log('apareceu');

    }else{
        img.classList.remove(animacaoClass);
    }
}

window.addEventListener('scroll',function(){
        ativaScroll();
    })
