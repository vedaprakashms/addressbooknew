<script setup lang="ts">
import QRCode from 'qrcode'
import { PropType, ref } from 'vue'
const img = ref('')
interface adr {
  name: string
  Addr1: string
  Addr2: string
  Pincode: string
  Mobile: string
  HomePhone: string
  _id: string
}

const props = defineProps({
  data: Object as PropType<adr>
})

QRCode.toDataURL(props.data?._id).then((r) => (img.value = r))
</script>
<template>
  <div class="grid grid-cols-4 bg-slate-400 border-2 border-green-600 rounded-lg p-1 m-1">
    <div class="col-span-3">
      <h1 class="text-2xl text-white text-center">
        {{ props.data?.name }}
      </h1>
      <p>
        {{ props.data?.Addr1 }}, {{ props.data?.Addr2 }}, {{ props.data?.Pincode }}, <br />
        Phone:
        {{ props.data?.Mobile }}, {{ props.data?.HomePhone }}
      </p>
    </div>
    <div>
      <img :src="img" />
    </div>
  </div>
</template>
