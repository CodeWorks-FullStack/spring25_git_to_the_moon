<script setup>
import { AppState } from '@/AppState.js';
import { computed } from 'vue';


const cheese = computed(() => AppState.cheese)

function mine() {
  AppState.cheese++
}

</script>

<template>
  <div>
    <img
      src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd36-1-gsfc_20171208_archive_e000868.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=8cf4770eaac790fb6814c992290b9883"
      alt="the moon" height="300" @click="mine()">
      <p>{{ cheese }}</p>
  </div>
</template>