<script setup>
import { ref } from 'vue'
import { useGameStore } from '@/stores/game'
import { useResultsStore } from '@/stores/results'
import { storeToRefs } from 'pinia'
import { useCountUp } from '@/composables/useCountUp.js'

const gameStore = useGameStore()
const resultsStore = useResultsStore()
const { isGameOn } = storeToRefs(gameStore)
const { count } = useCountUp(isGameOn)

// ------------------------------

let hoveredItem = ref({
  index: null,
  value: null
})

const setMouseOverItem = (index, value) => {
  hoveredItem.value = {
    index,
    value
  }
}

// ------------------------------

const setMouseClickItem = (index, value) => {
  if (!gameStore.isGameOn) {
    gameStore.setShowNoticeForStartGame(true)
    return
  }
  if (value === null) return

  let emptyIndex = gameStore.matrix?.findIndex(item => item.value === null)

  moveItem(index, value, emptyIndex)
}

// ------------------------------

let isWrongMove = ref(false)

const moveItem = (index, value, emptyIndex) => {
  const emptyItem = gameStore.matrix[emptyIndex]

  if (
      index === emptyIndex - 1 && emptyIndex % 4 !== 0 ||
      index === emptyIndex + 1 && emptyIndex % 4 !== 3 ||
      index === emptyIndex - 4 ||
      index === emptyIndex + 4
  ) {
    gameStore.matrix[emptyIndex] = {value}
    gameStore.matrix[index] = emptyItem
    gameStore.movesCountIncrement()

    checkWin()
  } else {
    isWrongMove.value = true
    setTimeout(() => isWrongMove.value = false, 300)
  }
}

const checkWin = () => {
  const currentMatrix = gameStore.matrix?.map(item => item.value)
  const winMatrix = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null]
  gameStore.setIsWin(JSON.stringify(currentMatrix) === JSON.stringify(winMatrix))

  if (gameStore.isWin) {
    resultsStore.addResult({
      date: new Date().toLocaleString(),
      moves: gameStore.movesCount,
      time: count
    })
    gameStore.stopGame()
  }
}

</script>

<template lang="pug">
  div.game_place
    div(
      v-for="(item, index) in gameStore.matrix"
      :key="item.value"
      :class=`{
        'game_place__item--hovered': hoveredItem.index === index,
        'game_place__item--wrong': isWrongMove && item.value === null
      }`
      @mouseenter="setMouseOverItem(index, item.value)"
      @mouseleave="setMouseOverItem(null, null)"
      @click="setMouseClickItem(index, item.value)"
    ).game_place__item {{ item.value }}

</template>
