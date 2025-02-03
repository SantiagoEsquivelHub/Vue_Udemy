<template>
  <section
    v-if="isLoading || randomPokemon === null"
    class="flex flex-col justify-center items-center w-screen h-screen"
  >
    <h1 class="text-3xl">Wait please...</h1>
    <h3 class="animate-pulse">Loading Pokemons</h3>
  </section>

  <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="m-5">Who is this Pokemon?</h1>
    <h3 class="capitalize">{{ gameStatus }}</h3>

    <!-- Pokemon Picture -->
    <PokemonPicture
      :pokemon-id="randomPokemon.id"
      :show-pokemon="gameStatus !== GameStatus.Playing"
    />

    <!-- Pokemon Options -->
    <PokemonOptions
      :options="options"
      @selected-option="onSelectedOption"
      :block-selection="blockSelection"
    />
  </section>
</template>

<script setup lang="ts">
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import { usePokemonGame } from '../composables/usePokemonGame';
import { GameStatus } from '../interfaces';

const {
  isLoading,
  pokemonOptions: options,
  randomPokemon,
  blockSelection,
  gameStatus,
  checkAnswer,
} = usePokemonGame();

const onSelectedOption = (value: number) => {
  checkAnswer(value);
};
</script>
