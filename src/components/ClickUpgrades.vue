<script setup>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';

const upgrades = computed(() => AppState.ClickUpgrades)

function buyUpgrade(upgrade) {

}



</script>


<template>
  <div class="upgrades">
    <p>Total Click Power</p>
    <div class="upgrade" v-for="u in upgrades" :key="u.name">
      <p>{{ u.name }}</p>
      <p>{{ u.quantity }} -> {{ u.power }} -> {{ u.quantity * u.power }}</p>
      <button @click="buyUpgrade(u)">purchase {{ u.price }}</button>
    </div>
  </div>
</template>
