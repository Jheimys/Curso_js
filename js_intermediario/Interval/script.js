
let contador = document.querySelector('#contador')
let count = 0

let intervalo = setInterval(()=>{
    count++
    contador.innerText = count
},1);

let btnPausar = document.querySelector('#btnPausar')

btnPausar.onclick = function(){
    clearInterval(intervalo)
}