<template>

  <h1 v-if="!pokemon">Cargando datos ...</h1>

  <div v-else>

    <h1 >¿Quién es este pokémon?</h1>

    <PokemonPicture :pokemonId="pokemon.id" :pokemonShow="showPokemon" />

    <PokemonOptions :pokemons="pokemonArr" />

  </div>

</template>

<script>
import PokemonPicture from "@/components/PokemonPicture";
import PokemonOptions from "@/components/PokemonOptions";
import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
  name: "PokemonPage",
  components: {PokemonOptions, PokemonPicture},
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false
    }
  },
  methods: {
    async mixPokemonArr() {
      this.pokemonArr = await getPokemonOptions()
      const rndInt = Math.floor( Math.random() * 4 )
      this.pokemon = this.pokemonArr[ rndInt ]
    }
  },
  mounted() {
    this.mixPokemonArr()
  }
}
</script>