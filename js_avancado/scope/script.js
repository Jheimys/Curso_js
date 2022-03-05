/*
 Temos dois tipos de escopo: global e local.
 - O escopo determina a vizibilidade de uma variável

 - As funções em js criam seu proprio escorpo.
   - IMPORTANTE: as variáveis de uma função não são acessíveis fora dela.

HOISTING (içar, reguer): é o comportamento padrão do JS de mover as 
declarações para o topo de um escopo

*/

//Ex. de hoisting

function teste(){
    function outraFucao(){
        console.log('sou a outra função')
    }
    outraFucao()
}
teste()

// ARROW FUNCTION

const teste1 = (a, b) => a + b
const resultado = teste1(1,2)
console.log(resultado)

// Quando tem apenas um parametro podemos remover o parentese
const teste2 = parametro => parametro
console.log(teste2('ok'))


const botao = document.querySelector('#button')

botao.onclick = () => {
    console.log(this)
}