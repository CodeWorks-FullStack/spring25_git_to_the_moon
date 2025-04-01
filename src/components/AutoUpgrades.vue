<script setup>
import { AppState } from '@/AppState.js';
import { Pop } from '@/utils/Pop.js';
import { computed } from 'vue';

const upgrades = computed(() => AppState.autoUpgrades)

function purchaseUpgrade(upgrade) {
  if (upgrade.price > AppState.cheese) return Pop.toast("Not enough money, honey")

  AppState.cheese -= upgrade.price
  upgrade.quantity++
  upgrade.price += 10
}
</script>


<template>
  <div class="upgrades">
    <p>Total Auto Power</p>
    <div class="upgrade" v-for="upgrade in upgrades" :key="upgrade.name">
      <p>{{ upgrade.name }}</p>
      <p>{{ upgrade.power }} * {{ upgrade.quantity }} -> {{ upgrade.power * upgrade.quantity }}</p>
      <button @click="purchaseUpgrade(upgrade)">purchase {{ upgrade.price }}</button>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>