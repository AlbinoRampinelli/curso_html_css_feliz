// alert("Caixa Troll");
//1 Acessar a Janela (Browser)
//2 Pegar todo HTML
//3 Pegar o botão
//4 saber se o botão esta sendo clicado.

//5 Acessar a janela
//6 Pegar o HTML todo
//7 pegar o elements

//8 Movr o elemento para a direita.



const btnRight = document.querySelector('.button-arrow.-right');
const btnLeft = document.querySelector('.button-arrow.-left');

const elements = document.querySelector('.elements');

let  pixels = 0;

btnRight.addEventListener('click',function(){
    pixels = pixels + 10;
    elements.style = `transform: translateX(${pixels}px)`; 
});

btnLeft.addEventListener('click',function(){
    pixels = pixels - 10;
    elements.style = `transform: translateX(${pixels}px)`; 
});


