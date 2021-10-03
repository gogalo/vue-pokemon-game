import pokemonApi from "@/api/pokemonApi";


export const POKEMONS_IDS_LENGTH = 650;

export const getPokemons = () => {
    const pokemonArr = Array.from( Array(POKEMONS_IDS_LENGTH) )
    return pokemonArr.map((_, index) => index + 1)
}

const getPokemonOptions = async () => {
    const mixedPokemons = getPokemons().sort( () => Math.random() - 0.5 )
    const pokemons = await getPokemonNames( mixedPokemons.slice(0,4) )
    return pokemons
}

export const getPokemonNames = async ( [a,b,c,d] = []) => {
    const arrPromises = [
        pokemonApi.get(`/${ a }`),
        pokemonApi.get(`/${ b }`),
        pokemonApi.get(`/${ c }`),
        pokemonApi.get(`/${ d }`)
    ]

    const [respA, respB, respC, respD] = await Promise.all( arrPromises )

    return [
        {name: respA.data.name, id: respA.data.id},
        {name: respB.data.name, id: respB.data.id},
        {name: respC.data.name, id: respC.data.id},
        {name: respD.data.name, id: respD.data.id}
    ]
}

export default getPokemonOptions;