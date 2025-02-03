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

<script lang="ts">
import { useCounter } from '@/composables/useCounter'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    value: {
      type: Number,
      default: 10,
    },
  },
  setup(props) {
    const { counter, squareCounter, changeValue } = useCounter(props.value)

    return {
      counter,
      squareCounter,
      changeValue,
    }
  },
})
</script>
