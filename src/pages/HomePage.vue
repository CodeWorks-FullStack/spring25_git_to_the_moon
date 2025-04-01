<script setup>
import AutoUpgrades from '@/components/AutoUpgrades.vue';
import Moon from '@/components/Moon.vue';

</script>

<template>
  <Moon />
  <AutoUpgrades />
</template>

<style lang="scss">
.upgrades {
  padding: 3em;
  background-color: pink;
  border: 10px double green;
  color: yellow;
  font-weight: bold;
  text-shadow: 1px 1px green;

  button {
    color: green;
    background-color: yellow;
    box-shadow: 0 0 20px purple;
  }
}
</style>
