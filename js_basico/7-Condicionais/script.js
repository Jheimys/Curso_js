
let nome = prompt('Digite seu nome')

if( nome === 'Thiago' || nome === 'thiago') {
    
    document.write(`Olá ${nome}, seja bem vindo!`)

} else if(nome === 'Tiago' || nome === 'tiago'){

    document.write('Verifique se digitou seu nome corretamente')

} else {

    document.write('Você não possui permissão de acesso!')
}