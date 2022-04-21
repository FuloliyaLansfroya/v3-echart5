<template>
  <div style="display: flex">
    <div>
      <LineGraph :cateAxis="state.cateAxis" :data="state.data0" />
    </div>
    <div><BarGraph :cateAxis="state.cateAxis1" :data="state.data01" /></div>
    <div><PieGraph :data="state.data1" /></div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, toRefs } from "vue";
const state = reactive({
  data0: [
    {
      type: "area",
      name: "data",
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      type: "area",
      name: "data2",
      data: [12, 13, 10, 13, 9, 23, 21],
    },
  ],
  data01: [
    {
      type: "area",
      name: "dat3a",
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      type: "area",
      name: "dat4a2",
      data: [12, 13, 10, 13, 9, 23, 21],
    },
  ],
  data1: {
    type: "ring",
    name: "示例数据",
    data: [
      { name: "京东", value: 950.44 },
      { name: "百度", value: 1700 },
      { name: "腾讯", value: 2600 },
      { name: "头条", value: 2000 },
      { name: "字节", value: 3000 },
    ],
  },
  cateAxis: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  cateAxis1: ["Mons", "Tues", "Weds", "Thus", "Fris", "Sats", "Suns"],
});
</script>
