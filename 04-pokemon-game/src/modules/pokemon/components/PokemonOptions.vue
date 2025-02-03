<template>
  <section class="mt-5 flex flex-col">
    <button
      v-for="{ id, name } in options"
      :key="id"
      @click="$emit('selectedOption', id)"
      :disabled="blockSelection"
      class="bg-white disabled:shadow-none disabled:bg-gray-100 capitalize shadow-md rounded-lg p-3 m-2 cursor-pointer w-40 text-center transition-all hover:bg-gray-100"
    >
      {{ name }}
    </button>
  </section>
</template>

<script setup lang="ts">
import type { Pokemon } from '../interfaces';

interface Props {
  options: Pokemon[];
  blockSelection: boolean;
}

const { options } = defineProps<Props>();

defineEmits<{
  selectedOption: [id: number];
}>();
</script>
