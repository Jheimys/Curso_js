
let nome = prompt('Digite seu nome')
let idade = prompt('Digite sua idade')

if(idade >= 18 && nome ==='Tomas Anderson' || nome === 'tomas anderson') {
    document.write(`Olá ${nome}, você é MAIOR de idade. Você é personagem do filme The Matrix!.`)

} else if(idade>= 18) {
    document.write(`Olá ${nome} você é maior de idade!`)

} else {
    document.write(` Olá, ${nome} você é menor de idade!`)
}