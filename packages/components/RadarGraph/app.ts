import { RadarChart } from "echarts/charts";
import _ from "lodash";
import CanvasContainer from "../CanvasContainer";
import { use } from "echarts/core";
import { tooltip } from "../../method/option/tooltip";
import { legend, radar, series } from "./option";
import { defineComponent } from "vue";
use([RadarChart]);
export default defineComponent({
  name: "RadarGraph",
  extends: CanvasContainer,
  props: {
    /**
     * 传入雷达图数据数据
     */
    data: { type: [Object, Array], default: () => [] },
    /**
     * 雷达图指示器
     */
    RadarIndicator: { type: Array, default: () => [] },
    /**
     * 雷达图配置
     * 传入数据类型为RadarOption[]
     */
    RadarOption: { type: Object, default: null },
    /**
     * 雷达图坐标系配置
     */
    IndicatorOption: { type: Object, default: null },
    /** tooltip格式化器 */
    tooltipFormatter: { type: Function, default: null },
    /**
     * legend排序： 根据最后一组数据排序
     * 注意：如果extra中有设置legend时，此处会被extra中的值覆盖
     * */
    legendOrder: { type: String, default: "none" },
  },
  methods: {
    getOptions(): any {
      const options: Record<string, any> = {
        legend: legend(),
        tooltip: tooltip(this.$props.tooltipFormatter),
        series: series(this.$props.data, this.$props.RadarOption),
        radar: radar(this.$props.RadarIndicator, this.$props.IndicatorOption),
      };
      console.log(options);
      return options;
    },
  },
});
