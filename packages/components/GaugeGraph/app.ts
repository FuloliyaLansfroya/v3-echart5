import { GaugeChart } from "echarts/charts";
import CanvasContainer from "../CanvasContainer";
import { use } from "echarts/core";
import { tooltip } from "../../method/option/tooltip";
import { defineComponent } from "vue";
use([GaugeChart]);
export default defineComponent({
  name: "GaugeGraph",
  extends: CanvasContainer,
  props: {
    /**
     * 传入数据
     *
     * 1、如果只显示一条默认折线图，直接传入数据(number[])即可
     * 2、如果要显示多条曲线，或要自定义曲线配置时，请传入GaugeSeriesOptions[]
     */
    data: { type: Array, default: () => [] },
    cateAxis: { type: Array, default: () => [] },
    
  },
});
