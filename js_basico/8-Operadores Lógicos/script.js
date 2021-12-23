
let inputNota1 = prompt('Digite a sua primeira nota!')
let inputNota2 = prompt('Digite a sua segunda nota!')

let nota1 = parseInt(inputNota1)
let nota2 = parseInt(inputNota2)

let media = (nota1 + nota2)/2

let notaMinima = 7 

if(media >= notaMinima){
    document.write('ok,você foi aprovado!')
} else{
    document.write('Infelizmente, você não foi aprovado!')
}

document.write('<br>')

if(media >= notaMinima && media >= 9){

    document.write('Parabéns, você foi muito bem!')

} else if(media >= notaMinima && media >= 7){

    document.write('Parabéns, continue estudando!')

} else {
    document.write('Não desista, continue estudando!')
}