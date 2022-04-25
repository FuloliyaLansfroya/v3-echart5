import { DEF_POINTER_ICON, DEF_RADIUS } from '../const';
import { DashboardDataItem, DashboardSizes } from '../types';

/** 定制仪表盘的统一样式，内部写死 */
export const staticGaugeStyleOpts = () => ({
  /** 图表类型 */
  type: 'gauge',

  /** 仪表盘半径，默认指定为相对于容器高宽中较小的一项的一半的百分比 */
  radius: DEF_RADIUS,

  pointer: {
    icon: DEF_POINTER_ICON,
  },
});

/** 定制仪表盘的统一样式，上层可以控制的 */
export const gaugeStyleOpts = (lineColor: string,
  sizes: DashboardSizes, offset: Record<string, any>, switchControl: Record<string, any>) => ({

  /** 仪表盘开始和结束角度 */
  startAngle: offset.startAngle,
  endAngle: offset.endAngle,

  /** 仪表盘最大值 */
  max: sizes.max,

  /** 仪表盘相对于容器左上角的位置 */
  center: offset.center,

  /** 刻度标签 */
  axisLabel: {
    show: switchControl.showAxisLabel,
  },
  /** 刻度样式 */
  axisTick: {
    show: switchControl.showAxisTick,
  },
  /** 仪表盘轴线 */
  axisLine: {
    roundCap: true,
    lineStyle: {
      width: sizes.boardLineWidth,
      color: [[sizes.max, lineColor]],
    },
  },
  /** 仪表盘进度条 */
  progress: {
    show: switchControl.showProgress,
    width: sizes.boardLineWidth,
    roundCap: true,
  },

  /** 仪表盘分隔线 */
  splitLine: {
    show: switchControl.showSplitLine,
    lineStyle: {
      color: lineColor,
    },
  },
});

/** 仪表盘中的数据显示格式 */
export const seriesDataStyle = (data: DashboardDataItem[], lineColor: string) => ({
  data: data.map(((d) => ({
    name: d.label,
    value: d.value,
    itemStyle: {
      color: d.color || lineColor,
    },
    title: {
      offsetCenter: d.titleOffsetCenter,
      color: d.titleColor,
    },
    detail: {
      offsetCenter: d.detailOffsetCenter,
      color: d.detailColor,
      formatter: d.formatValue,
    },
  }))),
});
