<script setup>
import { Pop } from '@/utils/Pop.js';
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';

const upgrades = computed(() => AppState.ClickUpgrades)

function buyUpgrade(upgrade) {

  if (AppState.cheese < upgrade.price) {
    return Pop.toast('Not enough cheese you bum!!!')
  }

  AppState.cheese -= upgrade.price
  upgrade.quantity++
  upgrade.price += 10

}

const clickTotal = computed(() => 1 + AppState.ClickUpgrades.reduce((acc, u) => acc += u.power * u.quantity, 0))



</script>


<template>
  <div class="upgrades">
    <p>Total Click Power {{ clickTotal }} </p>
    <div class="upgrade" v-for="u in upgrades" :key="u.name">
      <p>{{ u.name }}</p>
      <p>{{ u.quantity }} -> {{ u.power }} -> {{ u.quantity * u.power }}</p>
      <button @click="buyUpgrade(u)">purchase {{ u.price }}</button>
    </div>
  </div>
</template>
