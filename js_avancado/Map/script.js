// Qual a diferença do map e do forEach ???(pesquisar)
//resposta: 
const clientes = [
    {name:'Fulano', lastname:'Da Silva'},
    {name:'Ciclano', lastname:'santos'},
    {name:'Beltrano', lastname:'Moreira'},
]

let clienteFinal = []


//O map sempre vai montar um array
/*
No map sempre tenho que fazer o return, como usei uma arrow de um unico parametro o
return fica implicito.

const clienteFinalMap = clientes.map((cliente)=>{
    return cliente.name + ' ' + cliente.lastname
})
*/

const clienteFinalMap = clientes.map(cliente => cliente.name + ' ' + cliente.lastname)

console.log(clienteFinalMap)