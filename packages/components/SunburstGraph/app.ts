import { SunburstChart } from "echarts/charts";
import CanvasContainer from "../CanvasContainer";
import { use } from "echarts/core";
import { SunburstData } from "./types/SunburstOptions";
import { defineComponent } from "vue";
import { series } from './option'
use([SunburstChart]);
export default defineComponent({
  name: "SunburstGraph",
  extends: CanvasContainer,
  props: {
    /**
     * 传入数据
     * 传入的数据格式： SunburstData
     */
    data: { type: Array, default: () => [] },
    /** 旭日图配置 */
    option: { type: Object, default: () => {} },
  }, 
  methods: {
    getOptions(): any {
      const options = { 
        series: series(this.$props.data, this.$props.option)
      };
      return options;
    },
  }
});
