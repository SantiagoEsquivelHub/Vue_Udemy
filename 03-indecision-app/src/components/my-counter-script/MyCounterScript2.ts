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
