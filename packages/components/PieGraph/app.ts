import { PieChart } from "echarts/charts";
import _ from "lodash";
import CanvasContainer from "../CanvasContainer";
import { use } from "echarts/core";
import { FormatterParams, TooltipFormatter } from "../../types";
import { RatioDataType, RatioSeriesOptions } from "./types/ratioSeriesOptions";
import { tooltip } from "../../method/option/tooltip";
import { legend, series } from "./option";
import { formatterTransfer } from "../../utils";
import { sortData } from "./util";
import { defineComponent } from "vue";
use([PieChart]);
export default defineComponent({
  name: "PieGraph",
  extends: CanvasContainer,
  props: {
    /**
     * 传入数据
     *
     * 如果只显示一个默认饼状图，直接传入数据(number[])即可
     */
    data: { type: [Object, Array], default: () => [] },
    /** 文字标签展示的位置，默认为outside展示在外面，inside展示在扇区内部，center只有在type为ring的时候才可以展示，显示在圆环中心, none展示为默认，hidden则不展示 */
    labelPosition: { type: String, default: "none" },
    /** 是否自动排序，desc表示倒序，asc表示升序，none不进行排序，数据以顺时针开始展示 */
    sortType: { type: String, default: "none" },
    /** 是否显示legend */
    showLegend: { type: Boolean, default: true },
    /** tooltip格式化器 */
    tooltipFormatter: { type: [String, Function], default: null },
  },
  computed: {
    sortedData() {
      const cloneData = _.cloneDeep(this.data);
      if (Array.isArray(this.data)) {
        return sortData(cloneData as RatioDataType, this.sortType);
      }
      (cloneData as RatioSeriesOptions).data = sortData((cloneData as RatioSeriesOptions).data, this.sortType);
      return cloneData;
    },
  },
  methods: {
    getOptions(): any {
      const defaultFormatter: TooltipFormatter = (params: FormatterParams | FormatterParams[]) => {
        params = Array.isArray(params) ? params[0] : params;
        const { seriesName: oSeriesName, name, value, marker, percent } = params;
        const seriesName = oSeriesName ? `${oSeriesName}<br />` : "";
        return `${seriesName}${marker} ${name} ${formatterTransfer(+value, { thousand: true })}(${percent}%)`;
      };
      const options: Record<string, any> = {
        tooltip: tooltip(this.tooltipFormatter, undefined, defaultFormatter),
        series: series(this.sortedData, this.labelPosition),
      };
      if (this.showLegend) {
        options.legend = legend();
      }
      return options;
    },
  },
});
