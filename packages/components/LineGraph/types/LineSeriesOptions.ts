import { SeriesOptions, IgnoreOptions, CapType, LineType, SymbolType, ShadowOptions, LineStyle, CallbackParams } from '../../../types';

/** 折线拐点标志样式 */
export interface ItemStyle extends ShadowOptions {
  /** 图形颜色，默认从全局调色盘 option.color 获取颜色，这里类型做了简化，完整类型参看https://echarts.apache.org/zh/option.html#series-line.itemStyle.color */
  color?: string | ((params: CallbackParams) => string);

  /** 图形的描边颜色。支持的颜色格式同color，默认#000 */
  borderColor?: string;

  /** 描边线宽。为0时无描边 */
  borderWidth?: boolean;

  /** 描边类型 */
  borderType?: LineType;

  /** 用于设置虚线的偏移量，可搭配 borderType 指定 dash array 实现灵活的虚线效果 */
  borderDashOffset?: number;

  /** 用于指定线段末端的绘制方式,默认butt */
  borderCap?: CapType;
}

/** 区域填充样式 */
export interface AreaStyle extends ShadowOptions {
  /** 填充颜色 */
  color?: string | Record<string, any>;

  /** 图形区域的起始位置, 默认情况下，图形会从坐标轴轴线到数据间进行填充。如果需要填充的区域是坐标轴最大值到数据间，或者坐标轴最小值到数据间，则可以通过这个配置项进行设置 */
  origin?: 'auto' | 'start' | 'end';
}

/** 图表标线 */
export interface SeriesMarkLine {
  /** 图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件 */
  silent?: boolean;

  /** 标线两端的标记类型，可以是一个数组分别指定两端，也可以是单个统一指定 */
  symbol?: SymbolType | SymbolType[];

  /** symbol大小 */
  symbolSize?: number;

  /** 标线数值的精度，在显示平均值线的时候有用 */
  precision?: number;

  /** 标线文本，https://echarts.apache.org/zh/option.html#series-line.markLine.label */
  label?: IgnoreOptions;

  /** 标线的样式 */
  lineStyle?: LineStyle;

  /** 高亮样式 */
  emphasis?: IgnoreOptions;

  /** 标线的淡出样式。淡出的规则跟随所在系列 */
  blur?: IgnoreOptions;

  /** 标线的数据数组, 详见https://echarts.apache.org/zh/option.html#series-line.markLine.data */
  data: any;

  /** 是否开启动画 */
  animation?: boolean;
}

/** 图表标注 */
export interface SeriesMarkPoint {
  /** 标记的图形 */
  symbol?: SymbolType;

  /** 标记的大小 */
  symbolSize?: number;

  /** 标记的旋转角度（而非弧度) */
  symbolRotate?: number;

  /** 图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件 */
  silent?: boolean;

  /** 标注的文本 */
  label?: IgnoreOptions;

  /** 标注的样式  */
  itemStyle?: IgnoreOptions;

  /** 标注的高亮样式 */
  emphasis?: IgnoreOptions;

  /** 淡出样式。淡出的规则跟随所在系列 */
  blur?: IgnoreOptions;

  /** 标注的数据数组, https://echarts.apache.org/zh/option.html#series-line.markPoint.data */
  data: any;

  /** 是否开启动画 */
  animation?: boolean;
}

/** 趋势图配置(line|area) */
export interface LineSeriesOptions extends SeriesOptions {

  /** 该系列使用的坐标系，默认cartesian2d */
  coordinateSystem?: 'cartesian2d' | 'polar';

  /** 使用的x轴的index，在单个图表实例中存在多个x轴的时候有用 */
  xAxisIndex?: number;

  /** 使用的y轴的index，在单个图表实例中存在多个y轴的时候有用 */
  yAxisIndex?: number;

  /** 标记的图形，默认空心圆emptyCircle */
  symbol?: SymbolType;

  /** 标记的大小，默认为4 */
  symbolSize?: number | ((value: number[], params?: object) => number);

  /** 标记的旋转角度（而非弧度）。正值表示逆时针旋转 */
  symbolRotate?: number;

  /** 数据堆叠，同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加 */
  stack?: string;

  /** 是否连接空数据，默认false，出现空数据项，线会断掉 */
  connectNulls?: boolean;

  /** 是否裁剪超出坐标系部分的图形,默认true */
  clip?: boolean;

  /** 是否显示标签，默认false,参考https://echarts.apache.org/zh/option.html#series-line.label */
  label?: IgnoreOptions;

  /** 折线端点的标签,默认不显示 */
  endLabel?: IgnoreOptions;

  /** 折线拐点标志的样式 */
  itemStyle?: ItemStyle;

  /** 线条样式 */
  lineStyle?: LineStyle;

  /** 区域填充样式。设置后显示成区域面积图 */
  areaStyle?: AreaStyle;

  /** 折线图的高亮状态 */
  emphasis?: IgnoreOptions;

  /** 折线图的淡出状态。开启 emphasis.focus 后有效 */
  blur?: IgnoreOptions;

  /** 折线图的选中状态。开启 selectedMode 后有效 */
  select?: IgnoreOptions;

  /** 选中模式的配置，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选'single'，'multiple'，分别表示单选还是多选 */
  selectedMode?: 'single' | 'multiple' | boolean;

  /** 是否平滑曲线显示,默认false */
  smooth?: boolean;

  /** 折线图在数据量远大于像素点时候的降采样策略，开启后可以有效的优化图表的绘制效率，默认关闭，也就是全部绘制不过滤数据点 */
  sampling?:
  | 'lttb' // 采用 Largest-Triangle-Three-Bucket 算法，可以最大程度保证采样后线条的趋势，形状和极值
  | 'average' // 取过滤点的平均值
  | 'max' // 取过滤点的最大值
  | 'min' // 取过滤点的最小值
  | 'sum'; // 取过滤点的和

  /** 使用 dimensions 定义 series.data 或者 dataset.source 的每个维度的信息,详见https://echarts.apache.org/zh/option.html#series-line.dimensions */
  dimensions?: string[];

  /** 具体数据项，类型已被缩小 */
  data: (number | string )[];

  /** 图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件 */
  silent?: boolean;

  /** 是否开启动画,默认开启 */
  animation?: boolean;

  /** 图表标注 */
  markPoint?: SeriesMarkPoint;

  /** 图表标线 */
  markLine?: SeriesMarkLine;

  /** 图表标域，常用于标记图表中某个范围的数据，例如标出某段时间投放了广告 */
  markArea?: IgnoreOptions;
}
