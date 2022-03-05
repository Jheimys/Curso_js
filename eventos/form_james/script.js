
const txtTitulo = document.getElementById('txtTitulo')
const btn = document.getElementById('btn')
const formCadastro = document.querySelector('.formCadastro')

const txtDescricao = document.getElementById('txtDescricao')
const contadorContainer = document.getElementById('contador')

const resta = contadorContainer.getElementsByTagName('span')[0]
const maxima = txtDescricao.maxLength

const chkAceito = document.getElementById('chkAceito')

const feedbackMessage = document.getElementById('feedbackMessage')

const feedbackMessageCloseBtn = feedbackMessage.getElementsByTagName('button')[0]

mostrarNumero(maxima)

// Esse evento ocorre no envio do formulário
formCadastro.addEventListener('submit', function(e){

    /*txtTitulo.value possui um valor se não possuir valor (!txtTitulo.value) vai executar
    a função showErrorMensage */

    console.log(txtTitulo.value) 

    if(!txtTitulo.value){
        showErrorMensage('Preencha todos os campos', function(){

            txtTitulo.focus()
        })
            e.preventDefault()
    }
})

function showErrorMensage(msg, cb){

    feedbackMessage.classList.add('show')
    feedbackMessage.getElementsByTagName('p')[0].textContent = msg
    
    feedbackMessageCloseBtn.focus()
   
    function hideErrorMessage() {
        
        console.log('clicando close')
        feedbackMessage.classList.remove('show')
        feedbackMessageCloseBtn.removeEventListener('click', hideErrorMessage)
        feedbackMessageCloseBtn.removeEventListener('keyup', pressedKeyBoadOnBtn)
        
        
        if(typeof cb === 'function'){
            cb()
        }
    }

    function pressedKeyBoadOnBtn(e){
        if(e.keyCode === 27){
            hideErrorMessage()
        }
    }

  

    feedbackMessageCloseBtn.addEventListener('click', hideErrorMessage)
    feedbackMessageCloseBtn.addEventListener('keyup', pressedKeyBoadOnBtn)
     
}

//contadorContainer.removeAttribute('style')
//OBS: esse método .style só funciona se o style for inline.
contadorContainer.style.display = 'block'

function checkLength(){
    let numeroLetrasDigitadas = this.value.length
    let caracteresRestantes = parseInt(maxima) - parseInt(numeroLetrasDigitadas)
    //O .textContent troca o valor de resta pelo valor de caracteresRestantes
    //resta.textContent = caracteresRestantes
   mostrarNumero(caracteresRestantes)
}

function mostrarNumero(n){
    resta.textContent = n
}

txtDescricao.addEventListener('input', checkLength)

btn.disabled = true

chkAceito.addEventListener('change', function(){
    btn.disabled = !this.checked
    
})