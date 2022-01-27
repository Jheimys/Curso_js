//Seletor
document.querySelector('#titulo').innerHTML = '<i>Exemplo</i>'

/*
document.getElementById('titulo').innerHTML = 'EXEMPLO'
 Essa é outra maneira para selecionar um elemento pelo id
*/

document.querySelector('a').innerText = '<b>teste ancora</b>'
/*
OBS1: Note a diferença entre innerHTML e o innerText, o primeiro entende como 
se fosse uma tag e o segundo como se fosse um texto.

OBS2: o querySelector seleciona apenas um elemento, se precisar selecionar mais 
de um temos que usar o querySelectorAll.
*/


//Selecionando mais de 1 item 
let ancoras = document.querySelectorAll('a')

ancoras.forEach(function(elemento){ // função anonima/ callback
    elemento.innerHTML = 'teste'
})

//Selecionando mais de um item por classe

let boxes = document.querySelectorAll('.box')

boxes.forEach(function(box, index){
    box.innerHTML = 'box' + (index + 1)
})
