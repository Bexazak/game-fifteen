<script setup>
import { useResultsStore } from '@/stores/results'
import IconPlay from '@/components/icons/iconPlay.vue'
import { onMounted } from 'vue'
import { useTimeFormat } from '@/composables/useTimeFormat.js'
const resultStore = useResultsStore()

onMounted(() => {
  resultStore.getResult()
})

</script>

<template lang="pug">
  div.v-content
    div.header_results
      h1 Your results
      router-link(
        v-if="resultStore.results.length"
        :to="{ name: 'Home' }"
      ).v-btn.v-btn--primary
        i.v-icon
          IconPlay
        | Start new game

    table(v-if="resultStore.results.length")
      thead
        tr
          th Date
          th Time
          th Moves
      tbody
        tr(v-for="result in resultStore.results" :key="result.date")
          td {{ result.date }}
          td {{ useTimeFormat(result.time) }}
          td {{ result.moves }}

    div(v-else).empty_results
      span No results yet. Start the game and win!
      router-link(:to="{ name: 'Home' }").v-btn.v-btn--primary
        i.v-icon
          IconPlay
        | Start game

</template>

<style lang="scss" scoped>
.empty_results {
  text-align: center;
  padding: 10px;
  border: 2px solid #00695C;
  border-radius: 6px;
  background-color: rgba(0, 105, 92, .3);
}
.header_results {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  h1,
  .v-btn {
    margin: 0;
  }
}
</style>
