import { DefaultLabelFormatterCallbackParams } from 'echarts';

export type LabelFormatterParams = DefaultLabelFormatterCallbackParams;

/** 这里只列举常见类型(area实际上是line, echarts没有这个类型), 更多参见https://echarts.apache.org/zh/option.html#series */
export type SeriesType =
  'line' | 'area'
  | 'bar' | 'pie' | 'rose'
  | 'ring' | 'scatter' | 'radar' | 'tree' | 'gauge' | 'funnel' | 'sankey'

export interface SeriesOptions {
  type: SeriesType;
  /** 系列名称，用于tooltip的显示，legend的图例筛选，在setOption更新数据和配置项时用于指定对应的系列 */
  name?: string;
}
/** tooltip格式化函数 */
export type ValueFormatter = (params: string | number, ticket?: string, callback?: ((ticket: string, html: string) => void)) => string;
