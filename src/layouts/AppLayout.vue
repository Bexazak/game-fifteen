<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// defineOptions({
//   name: 'AppLayout',
//   inheritAttrs: false,
// })

const layout = computed(() => {
  const layout = route?.meta?.layout || 'DefaultLayout'
  if (layout) {
    return layout
  }
  return 'div'
})

</script>

<template lang="pug">
  component(:is="layout")
    router-view

</template>
