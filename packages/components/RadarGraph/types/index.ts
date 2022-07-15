import { PieSeriesOption } from "echarts";
import { SeriesOptions, ShadowOptions } from "../../../types";

type commonPosition = number | string | "left" | "center" | "right";

/** 占比区块样式 */
export interface ItemStyle extends ShadowOptions {
  /** 图形颜色，默认从全局调色盘 option.color 获取颜色，这里类型做了简化，完整类型参看https://echarts.apache.org/zh/option.html#series-line.itemStyle.color */
  color?: string;

  /** 扇形的圆角大小 */
  borderRadius?: number;

  /** 扇形区块边框的颜色 */
  borderColor?: string;

  /** 扇形区块边框大小 */
  borderWidth?: number;

  /** 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形 */
  opacity?: number;

  /** 阴影颜色，支持16进制(#ccc)或rgba(rgba(0, 0, 0, 0.5))形式 */
  shadowColor?: string;

  /** 阴影模糊程度 */
  shadowBlur?: number;
}

export type RatioDataType = Array<{ value: number; name: string }>;

export interface IndicatorType {
  name: string;
  max?: number;
  min?: number;
  color?: string;
}

export interface IndicatorOptionType {
  id?: string;
  zlevel?: number;
  z?: number;
  center?: Array<string | number>;
  radius?: number | string | Array<string | number>;
  startAngle?: number;
  nameGap?: number;
  splitNumber?: number;
  shape?: string;
  scale?: boolean;
  silent?: boolean;
  triggerEvent?: boolean;
  [propName: string]: any;
}

export interface radarType extends Array<IndicatorType>, IndicatorOptionType {}

/** 文本标签的统一管理 */
export interface LabelLayout {
  /** 是否隐藏重叠的标签，默认为隐藏true */
  hideOverlap?: boolean;

  /** 文本标签是否可以再次拖动，默认为true */
  draggable?: boolean;
}

/** 占比图配置pie */
export interface RatioOption extends SeriesOptions {
  /** 小于这个角度（0 ~ 360）的扇区，不显示标签 */
  minShowLabelAngle?: number;

  /** 是否展示成南丁格尔图，通过半径区分数据大小，圆心角展现数据的百分比 */
  roseType?: boolean;

  /** 组件离容器上侧的距离 */
  top?: commonPosition;

  /** 组件离容器右侧的距离 */
  right?: commonPosition;

  /** 组件离容器下侧的距离 */
  bottom?: commonPosition;

  /** 组件离容器左侧的距离 */
  left?: commonPosition;

  /** 文本标签提示 */
  label?: PieSeriesOption["label"];

  /** 文本标签提示与所指占比图区块之间的连接 */
  labelLine?: PieSeriesOption["labelLine"];

  /** 文本标签布局 */
  labelLayout?: LabelLayout;

  /** 占比图的高亮状态 */
  emphasis?: PieSeriesOption["emphasis"];

  /** 占比图区块的样式 */
  itemStyle?: ItemStyle;

  /** 占比图的内外半径，数组第一项是内半径，第二项是外半径，可以设置为数字或者百分比，默认为[0, '75%'] */
  radius?: number[] | string[];

  /** 折线图的淡出状态。开启 emphasis.focus 后有效 */
  blur?: PieSeriesOption["blur"];

  /** 折线图的选中状态。开启 selectedMode 后有效 */
  select?: PieSeriesOption["select"];

  /** 选中模式的配置，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选'single'，'multiple'，分别表示单选还是多选 */
  selectedMode?: "single" | "multiple" | boolean;

  /** 选中扇区的偏移距离 */
  selectedOffset?: number;

  /** 图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件 */
  silent?: boolean;

  /** 是否开启动画,默认开启 */
  animation?: boolean;

  /** 图表标注 */
  markPoint?: PieSeriesOption["markPoint"];

  /** 图表标线 */
  markLine?: PieSeriesOption["markLine"];

  /** 图表标域，常用于标记图表中某个范围的数据，例如标出某段时间投放了广告 */
  markArea?: PieSeriesOption["markArea"];

  /** 初始化动画类型，expansion为沿圆弧展开的效果，scale为缩放效果 */
  animationType?: "expansion" | "scale";
}

export interface RatioSeries extends RatioOption {
  /** 具体数据项 */
  data: RatioDataType;
}
