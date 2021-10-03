import PokemonPicture from "@/components/PokemonPicture";
import {shallowMount} from "@vue/test-utils";

describe('PokemonPictureShould', () => {

    test('match with the snapshot', () => {
        const wrapper = shallowMount( PokemonPicture,{
          props: {
              pokemonId: 1,
              pokemonShow: false
          }
        })

        expect ( wrapper.html() ).toMatchSnapshot()
    })

    test('show the hidden image', () => {
        const wrapper = shallowMount( PokemonPicture,{
            props: {
                pokemonId: 1,
                pokemonShow: false
            }
        })

        const image = wrapper.find('img')

        expect(image.exists()).toBeTruthy()
        expect(image.classes('hidden-pokemon')).toBeTruthy()
    })

    test('show the pokemon', () => {
        const wrapper = shallowMount( PokemonPicture,{
            props: {
                pokemonId: 1,
                pokemonShow: true
            }
        })

        const image = wrapper.find('img')

        expect(image.exists()).toBeTruthy()
        expect(image.classes('fade-in')).toBeTruthy()
    })

    test ('show the pokemon with id 100', () => {
        const wrapper = shallowMount( PokemonPicture,{
            props: {
                pokemonId: 100,
                pokemonShow: true
            }
        })

        const image = wrapper.find('img')

        expect(image.attributes('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg')
    })

})