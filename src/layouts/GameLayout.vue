<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

defineOptions({
  name: 'GameLayout',
  inheritAttrs: false
})

</script>

<template lang="pug">
  Header
  div.wrapper
    h1 Fifteen Puzzle Game
  div.wrapper.wrapper_game
    slot
  Footer

</template>

<style lang="scss" scoped>
.wrapper {
  justify-content: center;
}
</style>