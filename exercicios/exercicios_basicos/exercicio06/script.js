
//Array de objetos
let listaAtores = [
    {
      nome: 'Keanu Reeves',
      personagem: 'Neo',
      filme: 'The Matrix',
    },
    {
      nome: 'David Prowse',
      personagem: 'Darth Vader',
      filme: 'Star Wars Episódios IV-VI',
    },
    {
      nome: 'Bruce Wayne',
      personagem: 'Batman',
      filme: 'Batman - O Início'
    },
  ]

  
  htmlAtores = ''

  //Usar o for para percorrer esse array de objetos
  for(let contador = 0; contador < listaAtores.length; contador++){

    let ator = listaAtores[contador]
    let nome = ator.nome
    let personagem = ator.personagem
    let filme = ator.filme

    htmlAtores += `
    <div class="actor">
      <h3>${nome}</h3>
      <p>Interpreta o personavem ${personagem} no filme ${filme}.</p>
    </div>
  `
  }

  document.getElementById('content').innerHTML = htmlAtores