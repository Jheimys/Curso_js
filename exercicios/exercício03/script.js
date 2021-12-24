let nome 
let idade 

function enter(){
     nome = prompt('Digite seu nome')
     idade = prompt('digite sua idade')  

     if(idade >= 18  && nome === 'tomas anderson' || nome === 'Tomas Anderson') {
         document.write(`<h1> Olá ${nome}, você é MAIOR de idade.</h1>  <h2> Você é personagem do filme The Matrix!.</h2>`)
     
     } else if(idade>= 18) {
        document.write(`<h1> Olá ${nome} você é maior de idade! </h1>` )
     
     } else {
         document.write(`<h1> Olá, ${nome} você é menor de idade! </h1>`)
     }
     
}


