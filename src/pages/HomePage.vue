<script setup>
import AutoUpgrades from '@/components/AutoUpgrades.vue';
import ClickUpgrades from '@/components/ClickUpgrades.vue';
import Moon from '@/components/Moon.vue';

</script>

<template>
  <Moon />
  <AutoUpgrades  />
  <ClickUpgrades />
</template>

<style lang="scss">
.upgrades {
  display: flex;
  padding: 3em;
  background-color: slategray;
  gap: 3em;

  .upgrade {
    background-color: black;
    padding: 3em;
    text-align: center;
    color: yellow;
    border-radius: 1em;

    button {
      background-color: transparent;
      padding: 1em;
      color: yellow;
      border: 1px solid yellow;
    }
  }
}
</style>
