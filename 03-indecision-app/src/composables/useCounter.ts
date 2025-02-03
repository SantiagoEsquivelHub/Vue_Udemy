import { computed, ref } from 'vue'

export const useCounter = (value: number) => {
  const counter = ref(value ?? 10)
  const squareCounter = computed(() => counter.value * counter.value)

  const changeValue = (value: number) => {
    counter.value += value
  }

  return {
    counter,
    squareCounter,
    changeValue,
  }
}
