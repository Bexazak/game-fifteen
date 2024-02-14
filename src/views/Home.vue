<script setup>
// import { ref } from 'vue'
// import { useShuffleArray } from './composables/useShuffleArray.js'
// import { useCountUp } from './composables/useCountUp.js'
// import { useTimeFormat } from './composables/useTimeFormat.js'
// import IconTada from './components/icons/iconTada.vue'
//
// const matrix = ref([
//   { value: 1 },
//   { value: 2 },
//   { value: 3 },
//   { value: 4 },
//   { value: 5 },
//   { value: 6 },
//   { value: 7 },
//   { value: 8 },
//   { value: 9 },
//   { value: 10 },
//   { value: 11 },
//   { value: 12 },
//   { value: 13 },
//   { value: 14 },
//   { value: 15 },
//   { value: null }
// ])
//
// // ------------------------------
//
// let hoveredItem = ref({
//   index: null,
//   value: null
// })
//
// const setMouseOverItem = (index, value) => {
//   hoveredItem.value = {
//     index,
//     value
//   }
// }
//
// // ------------------------------
//
// let isShowNoticeForStartGame = ref(false)
//
// let selectedItem = ref({
//   index: null,
//   value: null
// })
//
// const setMouseClickItem = (index, value) => {
//
//   if (!isGameOn.value) {
//     isShowNoticeForStartGame.value = true
//     return
//   }
//   if (value === null && selectedItem.value.value === null) return
//
//   if (index === selectedItem.value.index) {
//     selectedItem.value = {
//       index: null,
//       value: null
//     }
//     return
//   }
//
//   let emptyIndex = matrix.value.findIndex(item => item.value === null)
//
//   if (selectedItem.value.index !== null && index !== selectedItem.value.index && index === emptyIndex) {
//     moveItem(index, selectedItem.value.index)
//     return
//   }
//
//   selectedItem.value = {
//     index,
//     value
//   }
// }
//
// // ------------------------------
//
// let isGameOn = ref(false)
// const { count } = useCountUp(isGameOn)
//
// const startGame = () => {
//   // if (!isShuffledItems.value) useShuffleArray(matrix.value)
//   isGameOn.value = true
//   isWin.value = false
//   movesCount.value = 0
//   isShowNoticeForStartGame.value = false
// }
//
// const finishGame = () => {
//   isGameOn.value = false
//   isShuffledItems.value = false
// }
//
// // ------------------------------
//
// let isShuffledItems = ref(false)
//
// const shuffleItems = () => {
//   isShuffledItems.value = true
//   useShuffleArray(matrix.value)
// }
//
// // ------------------------------
//
// let isWrongMove = ref(false)
// let isWin = ref(false)
// let movesCount = ref(0)
//
// const moveItem = (index, prevIndex) => {
//   if (selectedItem.value.index === null) return
//
//   const emptyIndex = matrix.value.findIndex(item => item.value === null)
//   const emptyItem = matrix.value[emptyIndex]
//
//   if (
//       prevIndex === emptyIndex - 1 && emptyIndex % 4 !== 0 ||
//       prevIndex === emptyIndex + 1 && emptyIndex % 4 !== 3 ||
//       prevIndex === emptyIndex - 4 ||
//       prevIndex === emptyIndex + 4
//   ) {
//     matrix.value[emptyIndex] = selectedItem.value
//     matrix.value[prevIndex] = emptyItem
//     movesCount.value++
//
//     checkWin()
//   } else {
//     isWrongMove.value = true
//     setTimeout(() => isWrongMove.value = false, 300)
//   }
//
//   selectedItem.value = {
//     index: null,
//     value: null
//   }
// }
//
// const checkWin = () => {
//   const winMatrix = matrix.value.map(item => item.value)
//   isWin.value = JSON.stringify(winMatrix) === JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null])
//
//   if (isWin.value) {
//     isGameOn.value = false
//   }
// }
// // ------------------------------

</script>

<template lang="pug">
  div.wrapper Home
    //div.game_place
    //  div(
    //    v-for="(item, index) in matrix"
    //    :key="item.value"
    //    @mouseenter="setMouseOverItem(index, item.value)"
    //    @mouseleave="setMouseOverItem(null, null)"
    //    @click="setMouseClickItem(index, item.value)"
    //    :class=`{
    //      'game_place__item--hovered': hoveredItem.index === index,
    //      'game_place__item--selected': selectedItem.index === index,
    //      'game_place__item--wrong': isWrongMove && item.value === null
    //    }`
    //  ).game_place__item {{ item.value }}
    //
    //div.game_panel
    //  div.game_info
    //    div.game_info__item
    //      span Moves
    //      span {{ movesCount }}
    //    div.game_info__item
    //      span Game time
    //      span {{ useTimeFormat(count) }}
    //
    //  div(v-if="isShowNoticeForStartGame").game_start_notice To start the game, click the Start Game button below
    //
    //  div(v-if="isWin").game_won
    //    IconTada.game_won__icon
    //    div.game_won__text Congrats! You win!
    //
    //  div.game_settings
    //    button(v-if="!isGameOn" @click="shuffleItems").v-btn.v-btn--blue Shuffle numbers
    //    button(v-if="!isGameOn" @click="startGame").v-btn.v-btn--green Start game
    //    button(v-if="isGameOn" @click="finishGame").v-btn.v-btn--red Finish game

</template>

<!--<style lang="scss">-->
<!--.wrapper {-->
<!--  width: 100%;-->
<!--  display: flex;-->
<!--  justify-content: center;-->
<!--  gap: 20px;-->
<!--}-->
<!--.game {-->
<!--  &_place {-->
<!--    display: flex;-->
<!--    flex-wrap: wrap;-->
<!--    gap: 10px;-->
<!--    width: 430px;-->

<!--    .game_place__item {-->
<!--      width: 100px;-->
<!--      height: 100px;-->
<!--      background-color: #f0f0f0;-->
<!--      display: flex;-->
<!--      justify-content: center;-->
<!--      align-items: center;-->
<!--      color: #2c3e50;-->
<!--      flex-direction: column;-->
<!--      transition: background-color .3s;-->
<!--      border-radius: 5px;-->
<!--      font-size: 32px;-->
<!--      font-weight: bold;-->
<!--      cursor: pointer;-->
<!--      &&#45;&#45;hovered {-->
<!--        background-color: #B2DFDB;-->
<!--      }-->
<!--      &&#45;&#45;selected {-->
<!--        background-color: #00695C;-->
<!--        color: #f0f0f0;-->
<!--      }-->
<!--      &&#45;&#45;wrong {-->
<!--        background-color: #FF5252;-->
<!--        color: #f0f0f0;-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--  &_panel {-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    align-items: flex-start;-->
<!--    width: 300px;-->
<!--    background-color: rgba(0, 105, 92, .3);-->
<!--    padding: 10px;-->
<!--    border: 2px solid #00695C;-->
<!--    border-radius: 6px;-->
<!--    gap: 10px;-->
<!--    justify-content: space-between;-->
<!--  }-->
<!--  &_info {-->
<!--    width: 100%;-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    gap: 10px;-->
<!--    &__item {-->
<!--      display: flex;-->
<!--      justify-content: space-between;-->
<!--      width: 100%;-->
<!--    }-->
<!--  }-->
<!--  &_settings {-->
<!--    width: 100%;-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    gap: 10px;-->
<!--  }-->
<!--  &_start_notice {-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    align-items: center;-->
<!--    font-size: 22px;-->
<!--    color: #ffffff;-->
<!--  }-->
<!--  &_won {-->
<!--    width: 100%;-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    align-items: center;-->
<!--    justify-content: center;-->
<!--    gap: 10px;-->

<!--    &__icon {-->
<!--      max-width: 100px;-->
<!--      animation: tada 1s 10;-->
<!--    }-->
<!--    &__text {-->
<!--      display: flex;-->
<!--      flex-direction: column;-->
<!--      align-items: center;-->
<!--      font-size: 24px;-->
<!--      font-weight: bold;-->
<!--      color: #ffffff;-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->
