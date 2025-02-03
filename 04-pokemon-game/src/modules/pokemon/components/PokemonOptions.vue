<template>
  <section class="mt-5 flex flex-col">
    <button
      v-for="{ id, name } in options"
      :key="id"
      @click="$emit('selectedOption', id)"
      :disabled="blockSelection"
      :class="[
        'custom-element',
        {
          correct: id === correctAnswer && blockSelection,
          incorrect: id !== correctAnswer && blockSelection,
        },
      ]"
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
  correctAnswer: number;
}

const { options } = defineProps<Props>();

defineEmits<{
  selectedOption: [id: number];
}>();
</script>

<style scoped>
.custom-element {
  background-color: #ffffff; /* bg-white */
  text-transform: capitalize; /* capitalize */
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
  border-radius: 0.5rem; /* rounded-lg */
  padding: 0.75rem; /* p-3 */
  margin: 0.5rem; /* m-2 */
  cursor: pointer; /* cursor-pointer */
  width: 10rem; /* w-40 */
  text-align: center; /* text-center */
  transition: all 150ms ease-in-out; /* transition-all */
}

.custom-element:hover {
  background-color: #f3f4f6; /* hover:bg-gray-100 */
}

.custom-element:disabled {
  background-color: #f3f4f6; /* disabled:bg-gray-100 */
  box-shadow: none; /* disabled:shadow-none */
}

.correct {
  background-color: #3b82f6 !important;
  color: white;
}

.incorrect {
  background-color: #fee2e2 !important;
  opacity: 0.7;
}
</style>
