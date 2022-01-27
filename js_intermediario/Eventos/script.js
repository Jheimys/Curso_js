/*
    Podemos criar um evento de click com o 'onclick' ou com 'addEventListener', em 
    ambos podemos usar uma função anônima ou uma função criada anteriomente.

    Observe a sintataxe do addEventListener: nome.addEventListener('evento_desejado', função)

    Ao invés de adicionar um evento podemos também remover um evento com removeEventListener
*/
let btnTeste = document.getElementById('btnTeste')
let contador = 0

function clickBtn(){
    contador++
    console.log('mensagem 1')

    if(contador >= 5){
        btnTeste.removeEventListener('click', clickBtn)
    }
}

// FORMAS DE SE CRIAR UM EVENTO DE CLICK


/* 

1° Maneira ---> onclick:

- Usando uma função de callback:

    btnTeste.onclick = function(){
        alert('ok')
    }

- Usando uma função externa:
    btnTeste.onclick = clickBtn

*/




// 2° Maneira addEventListener:


/*

Observe a sintaxe do addEventListener!

1° forma usando uma função de callback
    btnTeste.addEventListener('click', function(){
        console.log('mensagem 1')
    })


2° forma: usando a funçã externa:*/
btnTeste.addEventListener('click', clickBtn)







