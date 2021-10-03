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

    test('show the hidden image and the pokemon with id 100', () => {
        const wrapper = shallowMount( PokemonPicture,{
            props: {
                pokemonId: 100,
                pokemonShow: false
            }
        })

        const [image1, image2] = wrapper.findAll('img')

        expect(image1.exists()).toBeTruthy()
        expect(image1.classes('hidden-pokemon')).toBeTruthy()
        expect(image1.attributes('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg')

        expect(image2).toBe(undefined)
    })

    test('show the pokemon', () => {
        const wrapper = shallowMount( PokemonPicture,{
            props: {
                pokemonId: 100,
                pokemonShow: true
            }
        })

        const [image1, image2] = wrapper.findAll('img')

        expect(image1.exists()).toBeTruthy()
        expect(image1.classes('hidden-pokemon')).toBeTruthy()

        expect(image2.exists()).toBeTruthy()
        expect(image2.classes('hidden-pokemon')).toBeFalsy()
        expect(image2.classes('fade-in')).toBeTruthy()
    })

})