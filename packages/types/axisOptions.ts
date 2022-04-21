import { IgnoreOptions } from './meta';

type AxisLineSymbol = 'none' | 'arrow'

/** 坐标轴线配置 */
export interface AxisLine {
  /** 是否显示坐标轴线，默认true */
  show?: boolean;

  /** X轴或者Y轴的轴线是否在另一个轴的0刻度上，默认true，只有在另一个轴为数值轴且包含0刻度时有效 */
  onZero?: boolean;

  /** 轴线两边的箭头。可以是字符串，表示两端使用同样的箭头；或者长度为 2 的字符串数组，分别表示两端的箭头。默认不显示箭头，即 'none'。两端都显示箭头可以设置为 'arrow'，只在末端显示箭头可以设置为 ['none', 'arrow'] */
  symbol?: AxisLineSymbol | AxisLineSymbol[];

  /** 轴线两边的箭头的大小，第一个数字表示宽度（垂直坐标轴方向），第二个数字表示高度（平行坐标轴方向 */
  symbolSize?: number[];

  /** 轴线两边的箭头的偏移，如果是数组，第一个数字表示起始箭头的偏移，第二个数字表示末端箭头的偏移；如果是数字，表示这两个箭头使用同样的偏移 */
  symbolOffset?: number[];
}

/** 坐标刻度配置 */
export interface AxisTick {
  /** 是否显示坐标轴刻度 */
  show?: boolean;

  /** 类目轴中在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐 */
  alignWithLabel?: boolean;

  /** 坐标刻度是否朝外，默认朝外 */
  inside?: boolean;

  /** 坐标轴刻度的长度，默认5 */
  length?: number;
}

/** 坐标刻度标签配置 */
export interface AxisLabel {
  /** 是否显示刻度标签，默认true */
  show?: boolean;

  /** 刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠。旋转的角度从 -90 度到 90 度 */
  rotate?: number;

  /** 刻度标签与轴线之间的距离，默认8 */
  margin?: number;

  /** 标签格式化器，支持字符串模板和函数 */
  formatter?: string | ((value: number | string, index: number) => string);
}

/** 坐标轴刻度分割线 */
export interface SplitLine {
  /** 是否显示分隔线。默认数值轴显示，类目轴不显示 */
  show?: boolean;
}

/** 坐标轴指示器配置 */
export interface AxisPointer {
  /** 默认不显示，但是如果 tooltip.trigger 设置为 'axis' 或者 tooltip.axisPointer.type 设置为 'cross'，则自动显示 axisPointer */
  show?: boolean;

  /** 指示器类型，可选直线、阴影、无 */
  type?: 'line' | 'shadow' | 'none';

  /** 指示器标签配置 */
  label?: IgnoreOptions;
}

/** 类目轴数据 */
export type CateAxisData = string[] | Array<{
    value: string; // 类目轴名称
    // 类目标签文字样式,不常用，省略具体类型，需要设置则自定参考https://echarts.apache.org/zh/option.html#xAxis.data.textStyle
    textStyle?: IgnoreOptions;
  }>

export interface AxisOptions {
  /** 是否显示坐标轴，默认true */
  show?: boolean;

  /** 坐标轴类型，分类目轴和数值轴 */
  type: 'value' | 'category';

  /** 坐标轴名称，设置则会显示在轴末端 */
  name?: string;

  /** 相对于默认位置的偏移，相同的位置上有多个轴时有效 */
  offset?: number;

  /** 坐标名称显示位置，默认end */
  nameLocation?: 'end' | 'start' | 'center' | 'middle';

  /** 坐标轴名称与轴线之间的距离 */
  nameGap?: number;

  /** 坐标轴名字旋转，角度值 */
  nameRotate?: number;

  /** 是否反向坐标轴 */
  inverse?: boolean;

  /** 坐标轴轴线相关设置 */
  axisLine?: AxisLine;

  /** 坐标刻度相关配置 */
  axisTick?: AxisTick;

  /** 坐标刻度标签配置 */
  axisLabel?: AxisLabel;

  /** 坐标刻度分隔线 */
  splitLine?: SplitLine;

  /** 坐标轴指示器 */
  axisPointer?: AxisPointer;
}

/** 类目轴配置(通常是X轴) */
export interface CateAxisOptions extends AxisOptions {
  /** 类目轴数据配置 */
  data: CateAxisData;

  /** 类目轴位置，默认第1个为bottom,第2个为top */
  position?: 'top' | 'bottom';
}

/** 数值轴配置(通常是Y轴) */
export interface ValueAxisOptions extends AxisOptions {
  /** 数值轴位置，默认第1个为left,第2个为right */
  position?: 'left' | 'right';
}
