import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useShuffleArray } from '@/composables/useShuffleArray.js'

export const useGameStore = defineStore('game', () => {
  const isGameOn = ref(false)
  const isShuffledItems = ref(false)
  const isShowNoticeForStartGame = ref(false)
  const isWin = ref(false)
  const movesCount = ref(0)

  const matrix = ref([
    {value: 1},
    {value: 2},
    {value: 3},
    {value: 4},
    {value: 5},
    {value: 6},
    {value: 7},
    {value: 8},
    {value: 9},
    {value: 10},
    {value: 11},
    {value: 12},
    {value: 13},
    {value: 14},
    {value: 15},
    {value: null}
  ])


  const startGame = () => {
    // if (!isShuffledItems.value) useShuffleArray(matrix.value)
    isGameOn.value = true
    isWin.value = false
    movesCount.value = 0
    setShowNoticeForStartGame(false)
  }

  const stopGame = () => {
    isGameOn.value = false
    isShuffledItems.value = false
    movesCount.value = 0
  }

  const shuffleItems = () => {
    isShuffledItems.value = true
    useShuffleArray(matrix.value)
  }

  const setShowNoticeForStartGame = (value) => {
    isShowNoticeForStartGame.value = value
  }

  const setIsWin = (value) => {
    isWin.value = value
  }

  const movesCountIncrement = () => {
    movesCount.value++
  }

  return {
    matrix,
    isGameOn,
    isShowNoticeForStartGame,
    isWin,
    movesCount,

    startGame,
    stopGame,
    shuffleItems,
    setShowNoticeForStartGame,
    setIsWin,
    movesCountIncrement
  }
})