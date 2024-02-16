<script setup>
import { onMounted } from 'vue'
import { useResultsStore } from '@/stores/results'
import IconPlay from '@/components/icons/iconPlay.vue'

const store = useResultsStore()

onMounted(() => {
  store.getResult()
})

</script>

<template lang="pug">
  div.v-content
    div.header_results
      h1 Your results
      router-link(
        v-if="store.results.length"
        :to="{ name: 'Home' }"
      ).v-btn.v-btn--primary
        i.v-icon
          IconPlay
        | Start new game

    table(v-if="store.results.length")
      thead
        tr
          th Date
          th Time
          th Moves
      tbody
        tr(v-for="result in store.results" :key="result.date")
          td {{ result.date }}
          td {{ result.time }}
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
  h1 {
    margin: 0;
  }
  .v-btn {
    margin: 0;
  }
}
</style>
