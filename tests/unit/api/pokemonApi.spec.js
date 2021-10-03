import pokemonApi from "@/api/pokemonApi";

describe('pokemonApiShould', () => {

    test('have the url of the pokemon api configured', () => {
        expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
    })
    
})