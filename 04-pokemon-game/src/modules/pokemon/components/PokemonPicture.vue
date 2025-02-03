<template>
  <section>
    <img v-if="!showPokemon" :src="pokemonImage" alt="" class="brightness-0 h-[200px]" />
    <img v-else :src="pokemonImage" alt="" class="fade-in h-[200px]" />
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  pokemonId: number;
  showPokemon?: boolean;
}

const pokemonImage = computed(
  () => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
);

const { pokemonId } = withDefaults(defineProps<Props>(), {
  showPokemon: false,
});
</script>

<style scoped>
img {
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
</style>
