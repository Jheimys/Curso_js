let inputNumero = prompt('Digite qual tabuada você quer saber:')
let numero = parseInt(inputNumero)

let resultado = ''

for(let contador = 0; contador < 11; contador++){
    
    resultado += `${numero} x ${contador} = ${numero*contador}<br>`
  
}

document.write(resultado)