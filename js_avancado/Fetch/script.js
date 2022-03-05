/*
    Promises - (Promessa)
*/

function tranformarEmJson(respose){
    return respose.json()
}

function exibirNaTela(dados){
    console.log('exibir na tela', dados)
}

function exibirErro(){
    console.log('Ops, deu erro!')
}

const botaoCarregar = document.querySelector('#botaoCarregar')

botaoCarregar.onclick = () => 
fetch('https://jsonplaceholder.typicode.com/photos')
    .then(tranformarEmJson)
    .then(exibirNaTela)
    .catch(exibirErro)


