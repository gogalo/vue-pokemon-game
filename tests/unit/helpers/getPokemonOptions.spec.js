import getPokemonOptions, {
    POKEMONS_IDS_LENGTH,
    getPokemons,
    getPokemonNames
} from "@/helpers/getPokemonOptions";

describe('getPokemonOptionsHelpersShould', () => {

    let pokemonsIds;
    let pokemonNames;

    beforeEach(async () => {
        pokemonsIds = getPokemons()
        pokemonNames = await getPokemonNames([1,2,3,4])
    });

    afterEach(() => {
        pokemonsIds = null;
        pokemonNames = null;
    });

    test('return an array when calling getPokemons', () => {
        expect(Array.isArray(pokemonsIds)).toBeTruthy()
    })

    test('return an array with 650 elements when calling getPokemons', () => {
        expect(pokemonsIds.length).toBe(POKEMONS_IDS_LENGTH)
    })

    test('return an array and the first an the last elements are 1 and 650 when calling getPokemons', () => {
        expect(pokemonsIds[0]).toBe(1)
        expect(pokemonsIds[649]).toBe(650)
    })

    test('return an array of numbers when calling getPokemons', () => {
        expect(pokemonsIds.every((element) => typeof element === 'number')).toBeTruthy()
    })

    test('return an array when calling getPokemonNames', async () => {
        expect(Array.isArray(pokemonNames)).toBeTruthy()
    })

    test('return an array of pokemons names and ids objects when calling getPokemonNames', async () => {

        const pokemonsObjects = [
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'venusaur', id: 3 },
            { name: 'charmander', id: 4 }
        ]

        expect(pokemonNames).toStrictEqual(pokemonsObjects)
    })

    test('return an unsorted array of pokemons when calling getPokemonOptions', async () => {
        const pokemonOptions = await getPokemonOptions()
        expect(pokemonOptions).toEqual([
            { name: expect.any(String), id: expect.any(Number) },
            { name: expect.any(String), id: expect.any(Number) },
            { name: expect.any(String), id: expect.any(Number) },
            { name: expect.any(String), id: expect.any(Number) }
        ])
    })

})