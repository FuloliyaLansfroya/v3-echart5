import { GaugeChart } from "echarts/charts";
import CanvasContainer from "../CanvasContainer";
import { use } from "echarts/core";
import { defineComponent } from "vue";
import _ from "lodash";
import { staticGaugeStyleOpts, seriesDataStyle, gaugeStyleOpts } from "./option/series";
import { DashboardDataItem, SubBoardData } from "./types";
import { DEF_BGLINE_COLOR1, DEF_LINE_WIDTH, DEF_CENTER, DEF_RADIUS } from "./const";
import "./style.css";

use([GaugeChart]);
export default defineComponent({
  name: "GaugeGraph",
  extends: CanvasContainer,
  props: {
    /** =========================常用配置========================= */
    /** 仪表盘需要显示的指标数据 */
    boardData: { type: Array, default: () => [] },

    /** 仪表盘需要显示的副标题数据 */
    subBoardData: { type: Object, default: null },

    /** 仪表盘线条宽度，默认为 10 */
    boardLineWidth: { type: Number, default: DEF_LINE_WIDTH },

    /** =========================以下为不常用配置========================= */

    /** 仪表盘开始角度 */
    startAngle: { type: Number, default: 180 },

    /** 仪表盘结束角度 */
    endAngle: { type: Number, default: 0 },

    /** 仪表盘圆心相对于容器的位置，默认为中心位置 */
    center: { type: Array, default: () => DEF_CENTER },

    /** 仪表盘底线颜色 */
    bgLineColor: { type: String, default: DEF_BGLINE_COLOR1 },

    /** 是否显示刻度（线） */
    showAxisTick: { type: Boolean, default: false },

    /** 是否显示刻度分段（线） */
    showSplitLine: { type: Boolean, default: true },

    /** 是否显示刻度标签（数字） */
    showAxisLabel: { type: Boolean, default: false },
    /** 仪表盘是否进度条 */
    showProgress: { type: Boolean, default: true },
  },
  computed: {
    /** 计算仪表盘半径 */
    gaugeRadius() {
      const radius = this.extra.radius || DEF_RADIUS;
      return (Math.min(+this.canvasWidth, +this.height) / 2) * this.transPercentToNum(radius);
    },
    /** 得出 subValue */
    subValue() {
      if (this.subBoardData.formatValue) {
        return this.subBoardData.formatValue(+this.subBoardData.value) || null;
      }
      return +this.subBoardData.value || null;
    },
    /** subvalue 的弧度 */
    radians() {
      return +this.subBoardData.value / +this.subBoardData.maxValue;
    },
    /** subvalue 的偏移值 */
    descStyle() {
      return `margin-top:-35px;${this.radians < 0.5 ? "margin-left:-40px;" : ""}`;
    },
    /** 副指标的标线旋转角度 */
    subLineStyle() {
      const valueDeg = this.radians * 180;
      const rotateDeg = this.radians < 0.5 ? valueDeg : valueDeg - 180;
      return `transform: rotate(${rotateDeg}deg);`;
    },
    subContainerStyle() {
      /** 如果数值不存在，则返回 null */
      if (!this.subBoardData.value || !this.subBoardData.maxValue) return null;
      const center0 = (this.extra.center && this.extra.center[0]) || this.center[0];
      const center1 = (this.extra.center && this.extra.center[1]) || this.center[1];
      /** 圆心偏离 容器 x 轴的距离 */
      const centerXDis = +this.canvasWidth * this.transPercentToNum(center0);
      /** 圆心偏离 容器 y 轴的距离 */
      const centerYDis = +this.height * this.transPercentToNum(center1);
      const valueXDis = this.gaugeRadius * Math.cos(this.radians * Math.PI);
      const valueYDis = this.gaugeRadius * Math.sin(this.radians * Math.PI);
      /** 由于仪表盘有进度条宽度，副标题 line 进行微调 */
      const left = this.radians < 0.5 ? centerXDis - valueXDis - 2 : centerXDis - valueXDis - 8;
      const top = this.radians < 0.5 ? centerYDis - valueYDis - 5 : centerYDis - valueYDis;
      return `left: ${left}px; 
              top: ${top}px;`;
    },
  },
  methods: {
    extraDOMElement() {
      return this.subBoardData
        ? `<div class="sub-data" style={this.subContainerStyle}>
          <div class="sub-line" style={this.subLineStyle}>
            {" "}
          </div>
          <div class="sub-data-desc" style={this.descStyle}>
            <div class="sub-data-label">{this.subBoardData.label}</div>
            <div class="sub-data-value">{this.subValue}</div>
          </div>
        </div>`
        : "";
    },

    /** 将百分数转化为小数 */
    transPercentToNum(value: string) {
      return +value.replace("%", "") / 100;
    },

    getOptions() {
      const sizes = {
        boardLineWidth: this.boardLineWidth,
        max: +(this.boardData[0].maxValue || 100),
      };
      const switchControl = {
        showAxisTick: this.showAxisTick,
        showSplitLine: this.showSplitLine,
        showAxisLabel: this.showAxisLabel,
        showProgress: this.showProgress,
      };
      const offset = {
        center: this.center,
        startAngle: this.startAngle,
        endAngle: this.endAngle,
      };
      /** 仪表盘样式 */
      const gaugeOpts = gaugeStyleOpts(this.bgLineColor, sizes, offset, switchControl);
      /** 仪表盘数据样式 */
      const gaugeDataStyle = seriesDataStyle(this.boardData, this.bgLineColor);
      /** 对样式进行合并 */
      const series = _.merge(staticGaugeStyleOpts(), gaugeOpts, this.extra, gaugeDataStyle);

      return { series: [series] };
    },
  },
});
