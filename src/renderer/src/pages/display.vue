<script setup>
import Displaycard from '@renderer/components/displaycard.vue'
import { ref } from 'vue'

const addrs = ref()
window.api
  .findall()
  .then((r) => {
    addrs.value = r
  })
  .catch((e) => console.log(e))
</script>
<template>
  <input
    type="button"
    value="PDF Generate"
    class="text-xl text-white bg-slate-500 p-2 text-center"
  />
  <div class="grid grid-cols-3">
    <Displaycard v-for="i in addrs" :key="i" :data="i" />
  </div>
</template>
