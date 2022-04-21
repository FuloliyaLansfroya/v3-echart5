import { BarChart } from "echarts/charts";
import _ from "lodash";
import LineGraph from "../LineGraph";
import { use } from "echarts/core";
import { grid, dataZoom } from "../../method/option/";
import { tooltip } from "../../method/option/tooltip";
import { legend, series } from "./option";
import { defineComponent } from "vue";
use([BarChart]);
export default defineComponent({
  name: "BarGraph",
  extends: LineGraph,
  props: {
    data: { type: Array, default: () => [] },
  },
  methods: {
    getOptions(): any {
      const options = {
        grid: grid(this.$props.dataZoomEnableX, this.$props.dataZoomEnableY, this.$props.dataZoomType, this.$props.data),
        legend: legend(this.$props.data, this.$props.legendOrder),
        tooltip: tooltip(this.$props.tooltipFormatter, "axis"),
        xAxis: this.$props.rotateAxis ? this.normalizedValueAxis : this.normalizedCateAxis,
        yAxis: this.$props.rotateAxis ? this.normalizedCateAxis : this.normalizedValueAxis,
        series: series(this.$props.data, this.$props.rotateAxis),
        dataZoom: dataZoom(this.$props.dataZoomEnableX, this.$props.dataZoomEnableY, this.$props.dataZoomType, this.$props.data),
      };
      return options;
    },
  },
});
