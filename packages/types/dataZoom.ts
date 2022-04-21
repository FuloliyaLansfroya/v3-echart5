export type DataZoomTypes = 'inside' | 'slider'; // 内置型、滑动条型（还可以设置为框选型，详细参见 https://echarts.apache.org/zh/option.html#dataZoom）
type FilterModeOptions = 'none' | 'filter' | 'weakFilter' | 'empty';
type RangeModeOptions = 'value' | 'percent';

export interface DataZoomOptions {
  type?: DataZoomTypes;
  disabled?: boolean; // inside类型： 是否禁用缩放功能，默认请设置为true
  show?: boolean; // slider类型： 是否显示滑动条
  xAxisIndex?: number[]; // 用于设置控制轴的范围
  yAxisIndex?: number[]; // 用于设置控制轴的范围
  filterMode: FilterModeOptions; // 不过滤数据
  rangeMode: RangeModeOptions[]; // 数据窗口起始范围：按照绝对值/百分比
  start: number; // 数据窗口范围
  end: number;
  minValueSpan: number; // 用于限制窗口大小的最小值
  bottom?: number; // 到图表底部的距离
  textStyle?: Record<string, any>; // dataZoom 文字
}
