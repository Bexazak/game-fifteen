<script setup>
import IconGithub from '@/components/icons/iconGithub.vue'

</script>

<template lang="pug">
  footer.footer
    span Designed by
    a(href="https://github.com/Bexazak/game-fifteen" target="_blank")
      i.v-icon
        IconGithub
      | Bexazak

</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  span {
    margin-right: 10px;
  }
  .v-icon {
    margin-right: 5px;
  }
  a {
    display: flex;
    align-items: center;
  }
}
</style>