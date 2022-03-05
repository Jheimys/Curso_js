/*
    AJAX - Asynchronous JavaScript And XMl
*/


function exibirNaTela(dados){
    console.log('exibir na tela', dados)
}

const botaoCarregar = document.querySelector('#botaoCarregar')

botaoCarregar.onclick = () => carregarFotos(exibirNaTela)



function carregarFotos(callback){
    
    const xhttp = new XMLHttpRequest()
    
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const respose = JSON.parse(this.responseText)
            
            if(callback){
                callback(respose)
            }
            
        }
    }
    
    xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true)
    xhttp.send()

}