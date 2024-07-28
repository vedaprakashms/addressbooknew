<script setup lang="ts">
import { QrcodeStream } from 'vue-qrcode-reader'
const showcode = (avf) => {
  console.log(avf)
}
</script>
<template>
  <div>
    <qrcode-stream @detect="showcode"></qrcode-stream>
  </div>
</template>
