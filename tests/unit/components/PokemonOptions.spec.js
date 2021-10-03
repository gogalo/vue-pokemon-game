import {shallowMount} from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions";
import {getPokemons} from "../mocks/pokemons.mocks";

describe('PokemonOptionsShould', () => {

    let wrapper
    let tags

    beforeEach( () => {
        wrapper = shallowMount( PokemonOptions,{
            props: {
                pokemons: getPokemons()
            }
        })
        tags = wrapper.findAll('li')
    })

    afterEach( () => {
        wrapper = null
        tags = null
    })

    test('match with the snapshot', () => {
        expect ( wrapper.html() ).toMatchSnapshot()
    })

    test( 'show four options correctly', () => {
        expect(tags.length).toBe(4)
        expect(tags[0].text()).toBe('bulbasaur')
        expect(tags[1].text()).toBe('ivysaur')
        expect(tags[2].text()).toBe('venusaur')
        expect(tags[3].text()).toBe('charmander')
    })

    test( 'emit selection event when click on li tags', () => {
        const [tag1, tag2, tag3, tag4 ] = tags;

        tag1.trigger('click')
        tag2.trigger('click')
        tag3.trigger('click')
        tag4.trigger('click')

        expect(wrapper.emitted('selection').length).toBe(4)
    })

    test( 'emit selection event with correct values', () => {
        const [tag1, tag2, tag3, tag4 ] = tags

        tag1.trigger('click')
        tag2.trigger('click')
        tag3.trigger('click')
        tag4.trigger('click')

        expect(wrapper.emitted('selection')[0]).toStrictEqual([1])
        expect(wrapper.emitted('selection')[1]).toStrictEqual([2])
        expect(wrapper.emitted('selection')[2]).toStrictEqual([3])
        expect(wrapper.emitted('selection')[3]).toStrictEqual([4])
    })

})