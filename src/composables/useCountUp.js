import { ref, watch } from 'vue'
export function useCountUp(isGameOn) {
  const count = ref(0)
  let timer = null

  const start = () => {
    count.value++
    timer = setTimeout(start, 1000)
  }

  const stop = () => {
    clearTimeout(timer)
    count.value = 0
  }

  watch(isGameOn, val => {
    if (val) start()
    else stop()
  })

  return { count }
}