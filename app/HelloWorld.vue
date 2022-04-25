<template>
  <div style="display: flex">
    <div>
      <LineGraph :cateAxis="state.cateAxis" :data="state.data0" :LineOption="state.LineOption">
        <!-- <template #chartSlot>123</template> -->
      </LineGraph>
    </div>
    <!-- <div><BarGraph :cateAxis="state.cateAxis1" :data="state.data01" /></div>
    <div><PieGraph :data="state.data1" /></div> -->
    <!-- <div><SunburstGraph :data="state.data3" :option="state.sunburstOptions" /></div> -->
  </div>
</template>
<script lang="ts" setup>
import { reactive, toRefs } from "vue";
const state = reactive({
  data0: [
    {
      name: "data",
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: "data2",
      data: [12, 13, 10, 13, 9, 23, 21],
    },
  ],
  LineOption: [
    {
      name: 'data',
      type: 'area'
    }
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
  data3: [
    {
      name: "Grandpa",
      children: [
        {
          name: "Uncle Leo",
          value: 15,
          children: [
            {
              name: "Cousin Jack",
              value: 2,
            },
            {
              name: "Cousin Mary",
              value: 5,
              children: [
                {
                  name: "Jackson",
                  value: 2,
                },
              ],
            },
            {
              name: "Cousin Ben",
              value: 4,
            },
          ],
        },
        {
          name: "Father",
          value: 10,
          children: [
            {
              name: "Me",
              value: 5,
            },
            {
              name: "Brother Peter",
              value: 1,
            },
          ],
        },
      ],
    },
    {
      name: "Nancy",
      children: [
        {
          name: "Uncle Nike",
          children: [
            {
              name: "Cousin Betty",
              value: 1,
            },
            {
              name: "Cousin Jenny",
              value: 2,
            },
          ],
        },
      ],
    },
  ],
  cateAxis: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  cateAxis1: ["Mons", "Tues", "Weds", "Thus", "Fris", "Sats", "Suns"],
  sunburstOptions: {
    radius: [60, '90%'],
    itemStyle: {
      borderRadius: 7,
      borderWidth: 2
    },
    label: {
      show: false
    }
  }
});
</script>
