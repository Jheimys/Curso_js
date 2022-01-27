
let quadrado = document.querySelector('.quadrado')

function msn(evento){
    console.log(evento.key)
}

//TIPOS DE EVENTOS:

//quadrado.onclick = msn

//quadrado.onmousemove = msn

//quadrado.onmouseenter = msn 

//quadrado.onmouseout = msn 

window.addEventListener('keypress', msn)