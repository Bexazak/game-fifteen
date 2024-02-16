import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useResultsStore = defineStore('results', () => {
  const results = ref([])

  const getResult = () => {
    const data = localStorage.getItem('gameResults')
    if (data) {
      results.value = JSON.parse(data)
    }
  }
  const addResult = (data) => {
    results.value.push(data)
    localStorage.setItem('gameResults', JSON.stringify(results.value))
  }

  return {
    results,

    getResult,
    addResult,
  }
})
