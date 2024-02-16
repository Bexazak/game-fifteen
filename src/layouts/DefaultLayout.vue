<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

defineOptions({
  name: 'DefaultLayout',
  inheritAttrs: false,
})

</script>

<template lang="pug">
  Header
  div.wrapper.wrapper_content
    slot
  Footer
</template>