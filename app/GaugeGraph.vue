<template>
  <div style="display: flex">
    <div>
      <GaugeGraph :boardData="state.data" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, toRefs } from "vue";
import * as echarts from "echarts";
const state = reactive({
  data: [
    {
      label: "消耗",
      value: 50.44,
      color: "#47b7ff",
      formatValue: (value: any) => `${value}%`,
    },
  ],
});
</script>

    
    