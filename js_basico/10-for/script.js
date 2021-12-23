

let opcoes 

for(let contador = 2021; contador >= 1900; contador--){
    opcoes += `<option>${contador}</option>`
}

document.getElementById('ano').innerHTML = opcoes


//-----------------------------------------------------------------

let clientes = ['Thiago', 'Mateus', 'Pedro', 'João']


// O comportamento das tags são diferentes, por esse motivo que na variável lista 
//usamos a strings ' ' e na variável opcoes não.
let lista = ''

for(let contador = 0; contador < clientes.length; contador++){
    lista += `<li>${clientes[contador]} </li>`
}

document.getElementById('listaClientes').innerHTML = lista
