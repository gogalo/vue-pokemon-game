import getPokemonOptions, {
    NUMBER_OF_POKEMONS,
    getPokemonIdsList,
    getPokemonNames
} from "@/helpers/getPokemonOptions";
import {getPokemons} from "../mocks/pokemons.mocks";

describe('getPokemonOptionsHelpersShould', () => {

    let pokemonIds;
    let pokemonNames;

    beforeEach(async () => {
        pokemonIds = getPokemonIdsList()
        pokemonNames = await getPokemonNames([1,2,3,4])
    });

    afterEach(() => {
        pokemonIds = null;
        pokemonNames = null;
    });

    test('return an array when calling getPokemonIdsList', () => {
        expect(Array.isArray(pokemonIds)).toBeTruthy()
    })

    test('return an array with 650 elements when calling getPokemonIdsList', () => {
        expect(pokemonIds.length).toBe(NUMBER_OF_POKEMONS)
    })

    test('return an array and the first an the last elements are 1 and 650 when calling getPokemonIdsList', () => {
        expect(pokemonIds[0]).toBe(1)
        expect(pokemonIds[649]).toBe(650)
    })

    test('return an array of numbers when calling getPokemonIdsList', () => {
        expect(pokemonIds.every((element) => typeof element === 'number')).toBeTruthy()
    })

    test('return an array when calling getPokemonNames', async () => {
        expect(Array.isArray(pokemonNames)).toBeTruthy()
    })

    test('return an array of pokemons names and ids objects when calling getPokemonNames', async () => {

        const pokemonsObjects = getPokemons()

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