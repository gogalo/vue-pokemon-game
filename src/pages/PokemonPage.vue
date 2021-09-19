<template>

  <h1 v-if="!pokemon">Cargando datos ...</h1>

  <div v-else>

    <h1 >¿Quién es este pokémon?</h1>

    <PokemonPicture
        :pokemonId="pokemon.id"
        :pokemonShow="showPokemon"
    />

    <PokemonOptions
        :pokemons="pokemonArr"
        @selection="checkAnswer"
    />

    <template v-if="showAnswer" class="fade-in">

      <h2 >{{ message }}</h2>

      <button @click="newGame">Nuevo juego</button>

    </template>

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
      showPokemon: false,
      showAnswer: false,
      message: ''
    }
  },
  computed: {
    getpokemonName() {
      // name to ucfirst
      return this.pokemon.name.charAt(0).toUpperCase() + this.pokemon.name.slice(1)
    }
  },
  methods: {
    async mixPokemonArr() {
      this.pokemonArr = await getPokemonOptions()
      const rndInt = Math.floor( Math.random() * 4 )
      this.pokemon = this.pokemonArr[ rndInt ]
    },
    checkAnswer(selectedId) {
      console.log(selectedId, this.pokemon.id)
      if (selectedId === this.pokemon.id) {
        this.message = `Correcto!!!, es ${ this.getpokemonName }`
      } else {
        this.message = `Upssss!!!, se trata de ${ this.getpokemonName }`
      }
      this.showPokemon = true
      this.showAnswer = true
    },
    newGame() {
      this.pokemon = null
      this.showPokemon = false
      this.showAnswer = false
      this.pokemonArr = []
      this.mixPokemonArr()
    }
  },
  mounted() {
    this.mixPokemonArr()
  }
}
</script>

<style scoped>
button {
  background-color: #e7e7e7;
  color: rgb(44, 62, 80);
  border: none;
  border-radius: 5px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  opacity: 0.7;
}
button:hover {
  opacity: 1;
}
</style>