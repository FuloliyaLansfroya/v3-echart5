import { RadarSeriesOption } from "echarts";
import { SeriesOptions } from "../../../types";

export type RatioDataType = Array<{ value: number; name: string }>;

/** 雷达图坐标系数据类型 */
export interface IndicatorType {
  name: string;
  max?: number;
  min?: number;
  color?: string;
}

/** 雷达图坐标系配置 */
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

/** 雷达图radar配置 */
export interface radarType extends Array<IndicatorType>, IndicatorOptionType {}

/** 雷达图配置 */
export interface RatioOption extends SeriesOptions {
  /** 从调色盘 option.color 中取色的策略 'series'/'data' */
  colorBy?: string;

  /** 雷达图所使用的 IndicatorOption 的 index */
  radarIndex?: number;

  /** 文本标签提示 */
  label?: RadarSeriesOption["label"];

  /** 文本标签布局 */
  labelLayout?: RadarSeriesOption["labelLayout"];

  /** 高亮状态的配置 */
  emphasis?: RadarSeriesOption["emphasis"];

  /** 折线拐点标志的样式 */
  itemStyle?: RadarSeriesOption["itemStyle"];

  /** 线条样式 */
  lineStyle?: RadarSeriesOption["lineStyle"];

  /** 区域填充样式 */
  areaStyle?: RadarSeriesOption["areaStyle"];

  /** 是否开启动画,默认开启 */
  animation?: boolean;
}

export interface RatioSeries extends RatioOption {
  /** 具体数据项 */
  data: RatioDataType;
}
