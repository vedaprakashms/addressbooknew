<script setup lang="ts">
import { k } from '@renderer/models'
import QRCode from 'qrcode'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
const ved = ref('')
const toast = useToast()
const addressdata = ref(k)

const recorddata = () => {
  console.log(addressdata.value)
  window.api.insetData(JSON.stringify(addressdata.value)).then((r) => {
    console.log(r)
    toast('Added record to DB with ID' + r._id)
    QRCode.toDataURL(r._id)
      .then((r: string) => {
        ved.value = r
      })
      .catch(() => console.log)
    console.log(ved.value)
    addressdata.value = k
  })
}
</script>

<template>
  <!-- <div>
    This is a home page
    <input v-model="data" type="text" @keyup.enter="generateQR" />
    <button @click="generateQR">image gen</button>
    <button @click="ipcHandle">ping</button>
    <img :src="ved" alt="" />
  </div> -->
  <div>
    <h1 class="text-3xl font-extrabold text-white bg-yellow-600 text-center">Address Book</h1>
    <div class="m-2 grid">
      <h2 class="text-2xl text-green-300">Name</h2>
      <input
        v-model="addressdata.name"
        type="text"
        class="h-8 font-mono font-extrabold text-xl text-blue-950 capitalize"
        placeholder="Input the Recipient Name"
      />
      <h2 class="text-2xl text-green-300">Address Line 1</h2>
      <input
        v-model="addressdata.Addr1"
        type="text"
        class="h-8 font-mono font-extrabold text-xl text-blue-950 capitalize"
        placeholder="Input the Address Line 1"
      />
      <h2 class="text-2xl text-green-300">Address Line 2</h2>
      <input
        v-model="addressdata.Addr2"
        type="text"
        class="h-8 font-mono font-extrabold text-xl text-blue-950 capitalize"
        placeholder="Input the Address Line 2"
      />
      <h2 class="text-2xl text-green-300">PinCode</h2>
      <input
        v-model="addressdata.Pincode"
        type="number"
        class="h-8 font-mono font-extrabold text-xl text-blue-950 capitalize"
        placeholder="Input Pincode"
      />
      <h2 class="text-2xl text-green-300">Mobile</h2>
      <input
        v-model="addressdata.Mobile"
        type="tel"
        class="h-8 font-mono font-extrabold text-xl text-blue-950 capitalize"
        placeholder="Input Mobile"
      />
      <h2 class="text-2xl text-green-300">Home Phone</h2>
      <input
        v-model="addressdata.HomePhone"
        type="tel"
        class="h-8 font-mono font-extrabold text-xl text-blue-950 capitalize"
        placeholder="Input Home Phone"
      />
      <input
        type="button"
        class="text-2xl text-white border-2 border-teal-900 m-2 text-center bg-teal-700 hover:bg-teal-500"
        value="Record"
        @click="recorddata"
      />
    </div>
    <div
      class="grid grid-cols-8 max-w-m p-1 m-1 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <div class="col-span-7">
        <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {{ addressdata.name }}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          {{ addressdata.Addr1 }}, {{ addressdata.Addr2 }}, {{ addressdata.Pincode }}, phone:
          {{ addressdata.Mobile }}, {{ addressdata.HomePhone }}
        </p>
      </div>
      <div><img :src="ved" /></div>
    </div>
  </div>
</template>
