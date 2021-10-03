import pokemonApi from "@/api/pokemonApi";


export const NUMBER_OF_POKEMONS = 650;

export const getPokemonIdsList = () => {
    const pokemonIds = Array.from( Array(NUMBER_OF_POKEMONS) )
    return pokemonIds.map((_, index) => index + 1)
}

const getPokemonOptions = async () => {
    const mixedPokemons = getPokemonIdsList().sort( () => Math.random() - 0.5 )
    const pokemons = await getPokemonNames( mixedPokemons.slice(0,4) )
    return pokemons
}

export const getPokemonNames = async ( [firstPokemonId,secondPokemonId,thirdPokemonId,fourthPokemonId] = []) => {
    const [firstResponse, secondResponse, thirdResponse, fourthResponse] = await Promise.all( [
        pokemonApi.get(`/${firstPokemonId}`),
        pokemonApi.get(`/${secondPokemonId}`),
        pokemonApi.get(`/${thirdPokemonId}`),
        pokemonApi.get(`/${fourthPokemonId}`)
    ] )

    return [
        {name: firstResponse.data.name, id: firstResponse.data.id},
        {name: secondResponse.data.name, id: secondResponse.data.id},
        {name: thirdResponse.data.name, id: thirdResponse.data.id},
        {name: fourthResponse.data.name, id: fourthResponse.data.id}
    ]
}

export default getPokemonOptions;