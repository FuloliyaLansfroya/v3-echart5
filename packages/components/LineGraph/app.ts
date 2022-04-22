import { LineChart } from "echarts/charts";
import _ from "lodash";
import CanvasContainer from "../CanvasContainer";
import { use } from "echarts/core";
import { valueAxis, cateAxis, grid, dataZoom } from "../../method/option/";
import { tooltip } from "../../method/option/tooltip";
import { LineSeriesOptions } from "./types/LineSeriesOptions";
import { CateAxisOptions, ValueAxisOptions } from "../../types";
import { legend, series } from "./option";
import { isObject } from "../../utils";
import { defineComponent } from "vue";
use([LineChart]);
export default defineComponent({
  name: "LineGraph",
  extends: CanvasContainer,
  props: {
    /**
     * 传入数据
     *
     * 1、如果只显示一条默认折线图，直接传入数据(number[])即可
     * 2、如果要显示多条曲线，或要自定义曲线配置时，请传入LineSeriesOptions[]
     */
    data: { type: Array, default: () => [] },
    /**
     * 类目轴配置
     *
     * 1、默认类目轴是x轴
     * 2、默认类目轴可以只传类目数据，例如['2021/07/01', '2021/07/02',...]
     * 3、当类目轴有多条，或者需要覆盖默认配置时，可以传CateAxisOptions[]
     */
    cateAxis: { type: Array, default: () => [] },
    /**
     * 数值轴配置
     *
     * 1、y轴默认为数值轴
     * 2、数值轴默认可以不传
     * 3、如果数值轴有多条，或者需要覆盖默认配置时，可以传ValueAxisOptions[]
     */
    valueAxis: { type: Array, default: () => [] },
    /** 是否旋转坐标轴，即x轴y轴互换(x变数值轴，y轴变类目轴) */
    isRotateAxis: { type: Boolean, default: false },
    /** 是否显示数值刻度分割线 */
    valueSplitLine: { type: Boolean, default: true },
    /** 是否显示数值轴坐标轴线 */
    valueAxisLine: { type: Boolean, default: true },
    /** 是否显示数值轴坐标刻度 */
    valueAxisTick: { type: Boolean, default: true },
    /** 是否显示数值轴坐标刻度标签 */
    valueAxisLabel: { type: Boolean, default: true },
    /** 是否是百分数 */
    isPercent: { type: Boolean, default: false },
    /** tooltip格式化器 */
    tooltipFormatter: { type: Function, default: null },
    /**
     * x轴是否支持缩放
     * 默认不支持缩放； 可以通过设置为true，支持缩放；
     * */
    dataZoomEnableX: { type: Boolean, default: false },
    /**
     * y轴是否支持缩放
     * 默认不支持缩放； 可以通过设置为true，支持缩放；
     * */
    dataZoomEnableY: { type: Boolean, default: false },
    /**
     * 缩放类型
     * 默认为内置型数据区域缩放。（当前只支持X、Y轴使用同种类型）
     */
    dataZoomType: { type: String, default: "inside" },
    /**
     * legend排序： 根据最后一组数据排序
     * 注意：如果extra中有设置legend时，此处会被extra中的值覆盖
     * */
    legendOrder: { type: String, default: "none" },
  },
  computed: {
    normalizedValueAxis() {
      const { isPercent, valueAxisLine, valueAxisTick, valueSplitLine, valueAxisLabel } = this.$props;
      const position = { position: this.$props.isRotateAxis ? "top" : "bottom" };
      if (this.$props.valueAxis.length) {
        return _.merge(
          this.$props.valueAxis.map(() => valueAxis(valueAxisLine, valueAxisTick, valueSplitLine, valueAxisLabel, isPercent)),
          this.$props.valueAxis
        );
      }
      return [_.merge(valueAxis(valueAxisLine, valueAxisTick, valueSplitLine, valueAxisLabel, isPercent), position)];
    },
    normalizedCateAxis() {
      if (!this.$props.cateAxis.length) return [cateAxis([], this.$props.isRotateAxis)];
      if (this.$props.cateAxis[0] && isObject(this.$props.cateAxis[0])) {
        return _.merge(
          (this.$props.cateAxis as any[]).map((ca) => cateAxis(ca.data, this.$props.isRotateAxis)),
          this.$props.cateAxis
        );
      }
      return [cateAxis(this.$props.cateAxis as string[], this.$props.isRotateAxis)];
    },
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
