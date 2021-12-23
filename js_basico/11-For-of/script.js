// Array de objetos
let clientes = [
    {
        nome:'Ciclano',
        idade:35,
        linguagens:['javascript', 'python', 'php']
    },

    {
        nome:'Beltrano',
        idade:25,
        linguagens:['c#', 'c++', 'c']
    },

    {
        nome:'Fulano',
        idade:22,
        linguagens:['go', 'closure', 'r']
    },
]

let htmlClientes = ''

//cliente é uma variável dentro do array de objetos clientes
for(let cliente of clientes){

    let listaLinguagens = ''

    for(let linguagem of cliente.linguagens) {

        listaLinguagens +=  `<li>${linguagem}</li>`
    }



    htmlClientes += `
        <li>
            <b>Nome:</b> ${cliente.nome} <br>
            <b>Idade:</b>${cliente.idade} <br>
            <b>Lingagens:</b> <br>
            <ul>
               ${listaLinguagens}
            </ul>
            <hr> 
        </li>
    `
}

document.getElementById('listaClientes').innerHTML = htmlClientes