//Toast ---> É uma msg de alerta 

// Exercício: fazer uma msg personalizada depois que cadastrar a tarefa.

/*
    settimeout e setinterval, são funções que controlam o tempo

*/

let toast = document.querySelector('.toast')
let btnCadastrar = document.querySelector('#btnCadastrar')

/*
1° FORMA:

btnCadastrar.onclick = function(){
    toast.classList.add('visible')

    setTimeout(function(){
        toast.classList.remove('visible')
    }, 2000)
}

*/

// 2° FORMA:

function removeToast(){
    toast.classList.remove('visible')
}

btnCadastrar.onclick = function(){
    toast.classList.add('visible')
  


    setTimeout(removeToast, 2000)
}

