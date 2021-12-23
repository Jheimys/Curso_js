/*

-string
-number
-boolean
-array
-object
-undefined
-null

*/

//string
let nome = 'James'
console.log(nome)

let sobrenome = 'Bassani'
console.log(sobrenome)

//Para concatenar usamos a string literal
console.log(`${nome} ${sobrenome}`)


//array
let habilidades = ['java', 'js', 'php']
console.log(habilidades)
console.log(habilidades.length)
console.log(habilidades[2])

//objetos ---> permite guardar um conjunto de informações

let pessoa = {
    nome:'James',
    sobrenome:'Bassani',
    idade:38,
    habilidades: ['java', 'js', 'php']

}

console.log(pessoa)
console.log(pessoa.nome)

//undefined --> é uma variável que foi criada mais não foi definida. EX:
let endereco
console.log(endereco)