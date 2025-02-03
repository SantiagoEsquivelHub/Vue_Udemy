<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button @click="changeValue(1)">+1</button>
      <button @click="changeValue(-1)">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter'

interface Props {
  value: number
}

const props = defineProps<Props>()

const { counter, squareCounter, changeValue } = useCounter(props.value)
</script>
