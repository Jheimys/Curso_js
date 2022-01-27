

let formulario = document.querySelector('#formCadastro')

formulario.onsubmit = function(evento){
   /*
   - O onsubmit é uma rotina de tratamento.

   A rotina de tratamento onsubmit é chamada imediatamente antes que o formulário seja enviado; ela
   pode cancelar o envio retornando false. Isso oferece uma oportunidade para um programa Java-
   Script verificar se existem erros na entrada do usuário, a fim de evitar o envio de dados 
   incompletos ou inválidos pela rede, para um programa do lado do servidor.

   O onsubmit pode ser substituido pelo  addEventListener usando a sintaxe 
   formuario.addEventListsener(submit, function(envent){}). Note que o botão de cadastro está 
   dentro do formulário por isso posso controla-lo usando o onsubmit.

   Sem o preventDefault quando clicar no botão cadatrar vai emvidar os dados para a pagina
   gravarDados.html, dessa forma não consigo fazer o controle dos dados preenchidos no 
   formulário. Portanto, para fazer o controle dos dados usamos o preventDefault e os dados
   serão enviados apenas se forem preenchidos de maneira correta.

   Para selecionar alguma coisa do formulário temos que fazer:
   document.forms['id do formulário']['o que quer selecionar Ex: nome'].value
   */

    evento.preventDefault()

    let inputName = document.forms['formCadastro']['nome']
    let temErro = false

    if(!inputName.value){
        /*
           - o sinal '!' é uma negação. Portanto, !inputName.value signfica caso ele não tenha
            valor.

            -A sintaxe inputName.nextSibling.nextSibling pega a primeira classe irmã do inputName
        */
       temErro = true
        inputName.classList.add('inputError')
        let span = inputName.nextSibling.nextSibling
        span.innerText = 'Digite o nome corretamente'
    }else{
        inputName.classList.remove('inputError')
        let span = inputName.nextSibling.nextSibling
        span.innerText = ''
    } 

    let inputEmail = document.forms['formCadastro']['email']
    if(!inputEmail.value){
        temErro = true
        inputEmail.classList.add('inputError')
        let span = inputEmail.nextSibling.nextSibling
        span.innerText = 'Digite o email corretamente'
    } else{
        inputEmail.classList.remove('inputError')
        let span = inputEmail.nextSibling.nextSibling
        span.innerText = ''
    }

    let inputCidade = document.forms['formCadastro']['cidade']

    if(!inputCidade.value){
        temErro = true
        inputCidade.classList.add('inputError')
        let span = inputCidade.nextSibling.nextSibling
        span.innerText = 'Selecione uma cidade'
    }else{
        inputCidade.classList.remove('inputError')
        let span = inputCidade.nextSibling.nextSibling
        span.innerText = ''
    }

    if(!temErro){
        formulario.submit()
    }
}