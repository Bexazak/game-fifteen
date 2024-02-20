<script setup>
import { reactive } from 'vue'
import IconPuzzle from '@/components/icons/iconPuzzle.vue'
import IconGithub from '@/components/icons/iconGithub.vue'

const menuItems = reactive([
  { title: 'Play game', routeName: 'Home' },
  { title: 'Results', routeName: 'Results' },
  { title: 'Rules', routeName: 'Rules' }
])

</script>

<template lang="pug">
  header.header
    div.wrapper.wrapper_header
      router-link(:to="{ name: 'Home' }").header_logo
        i.v-icon
          IconPuzzle
        span 15 Game

      nav
        router-link(
          v-for="item in menuItems"
          :key="item.title"
          :to="{ name: item.routeName }"
        ) {{ item.title }}

        a(href="https://github.com/Bexazak/game-fifteen" target="_blank")
          i.v-icon
            IconGithub

</template>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid var(--color-border);
  nav {
    display: flex;
    align-items: center;
    gap: 1em;
    .v-icon {
      margin-right: 0;
      color: #ffffff;
    }
  }
  &_logo {
    display: flex;
    align-items: center;
    color: var(--vt-c-text-dark-1);
    .v-icon {
      width: 32px;
      height: 32px;
      color: hsla(160, 100%, 37%, 1);
    }
    span {
      font-size: 1.5em;
      font-weight: bold;
    }
  }
  nav {
    a {
      margin-left: 1em;
      text-decoration: none;
      &:first-child {
        @media (max-width: 960px) {
          margin-left: 0;
        }
      }
    }
  }
}
</style>