// API = https://pokeapi.co/
//https://www.youtube.com/watch?v=Uptu3NrBFBM&list=WL&index=80

// funcção que recebe o id como parâmetro para buscar o pokemon da api
const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

const generatePokemonPromises = () => Array(150).fill().map((_, index) =>
    fetch(getPokemonUrl(index + 1)).then(response => response.json()))

const generateHTML = pokemons => {
    //console.log(pokemons)
// o reduce resume um aarray em uma string
return lisPokemons = pokemons.reduce((accumulator, pokemon) => {
    const types = pokemon.types.map(typeInfo => typeInfo.type.name)

    accumulator += `
    <li class="card ${types[0]}">
    <img class="card-image" alt="${pokemon.name}" src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" />
        <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
        <p class="card-subtitle">${types.join(' | ')}</p>
    </li>`
    return accumulator
}, '')


//console.log(ul)
}    
// Função que busca os pokemons
const fetchPokemon = () => {
                                                     
    const pokemonPromises = generatePokemonPromises() 

    //const pokemonPromises = []

    // loop para adicionar cada pokemon que vai de 1 a 150
    //for (let i = 1; i <= 150; i++){
        // adiciona o valor na array pokemonPromises
    //    pokemonPromises.push(fetch(getPokemonUrl(i)).then(response => response.json()))
    //}

    // requisição para fazer AJAX no browser, fazendo requisição assincrona
   /* fetch(url) 
        //retorna a resposta da promise response convertida em json
        .then(response => response.json()) 
        //retorna a resposta da promise pokemon que está dentro da response que foi convertida em json
        .then(pokemon => {
            console.log(pokemon)
        })
        */
    
    // retorna uma promise de todas que foram feitas em pokemonPromises
    Promise.all(pokemonPromises)
        .then (generateHTML)
     .then(pokemons => {
        // recebe o valor de data-js="pokedex" que é o atributo que está no index.html em ul 
        const ul = document.querySelector('[data-js="pokedex"]')
         // Exibe no html
         ul.innerHTML = pokemons
     })
    }

// invoca a função
fetchPokemon()


