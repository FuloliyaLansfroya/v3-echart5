import { BarChart } from "echarts/charts";
import _ from "lodash";
import LineGraph from "../LineGraph";
import { BarSeriesOptions } from './types/barSeriesOptions';
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
    /**
     * 传入数据
     *
     * 1、如果只显示一条默认柱状图，直接传入数据(number[])即可
     * 2、如果要显示多条柱状，或要自定义配置时，请传入BarSeriesOptions[]
     */
    data: { type: Array, default: () => [] },
  },
  methods: {
    getOptions(): any {
      const options = {
        grid: grid(this.$props.dataZoomEnableX, this.$props.dataZoomEnableY, this.$props.dataZoomType, this.$props.data),
        legend: legend(this.$props.data, this.$props.legendOrder),
        tooltip: tooltip(this.$props.tooltipFormatter, "axis"),
        xAxis: this.$props.isRotateAxis ? this.normalizedValueAxis : this.normalizedCateAxis,
        yAxis: this.$props.isRotateAxis ? this.normalizedCateAxis : this.normalizedValueAxis,
        series: series(this.$props.data, this.$props.isRotateAxis),
        dataZoom: dataZoom(this.$props.dataZoomEnableX, this.$props.dataZoomEnableY, this.$props.dataZoomType, this.$props.data),
      };
      return options;
    },
  },
});
