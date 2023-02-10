<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./HelloWorld.vue";
import Line from "./LineGraph.vue";
import Gauge from "./GaugeGraph.vue";
import Radar from "./RadarGraph.vue";
import indexDB from "./indexDB.vue";
import Draggle from "./draggle.vue";
</script>

<template>
  <Draggle />
</template>

<style>
html,body {
    height: 100%;
    width:100%;
    margin: 0;
}
#app {
  height: 100%;
  width: 100%;
  position: relative;
}
</style>
