<script setup>
import { storeToRefs } from 'pinia'
import { useGameStore } from '@/stores/game'
import { useTimeFormat } from '@/composables/useTimeFormat.js'
import { useCountUp } from '@/composables/useCountUp.js'
import IconTada from '@/components/icons/iconTada.vue'
import IconPlay from '@/components/icons/iconPlay.vue'
import IconStop from '@/components/icons/iconStop.vue'
import IconShuffle from '@/components/icons/iconShuffle.vue'

const gameStore = useGameStore()
const { isGameOn } = storeToRefs(gameStore)
const { count } = useCountUp(isGameOn)

</script>

<template lang="pug">
  div.game_panel
    div.game_info
      div.game_info__item
        span Moves
        span {{ gameStore.movesCount }}
      div.game_info__item
        span Time
        span {{ useTimeFormat(count) }}

    div(v-if="gameStore.isShowNoticeForStartGame").game_start_notice To start the game, click the Start Game button below

    div(v-if="gameStore.isWin").game_won
      IconTada.game_won__icon
      div.game_won__text Congrats! You win!
      router-link(:to="{ name: 'Results' }").game_won__results See results

    div.game_settings
      button(v-if="!gameStore.isGameOn" @click="gameStore.shuffleItems").v-btn.v-btn--blue
        i.v-icon
          IconShuffle
        | Shuffle numbers
      button(v-if="!gameStore.isGameOn" @click="gameStore.startGame").v-btn.v-btn--green
        i.v-icon
          IconPlay
        | Start game

      button(v-if="gameStore.isGameOn" @click="gameStore.stopGame").v-btn.v-btn--red
        i.v-icon
          IconStop
        | Stop game

</template>