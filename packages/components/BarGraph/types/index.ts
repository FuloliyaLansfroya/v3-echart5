import { SeriesOptions, IgnoreOptions, LineType, ShadowOptions, CallbackParams } from "../../../types";

/** 样式 */
export interface ItemStyle extends ShadowOptions {
  /** 图形颜色，默认从全局调色盘 option.color 获取颜色，这里类型做了简化，完整类型参看https://echarts.apache.org/zh/option.html#series-bar.itemStyle.color */
  color?: string | ((params: CallbackParams) => string);

  /** 图形的描边颜色。支持的颜色格式同color，默认#000 */
  borderColor?: string;

  /** 圆角半径，单位px，支持传入数组分别指定 4 个圆角半径。 */
  borderRadius?: number | number[];

  /** 描边线宽。为0时无描边 */
  borderWidth?: boolean;

  /** 描边类型 */
  borderType?: LineType;
}

export interface BarData {
    /**  柱状图数据 */
    data: number[]
    /** 柱状图名称，用来链接数据对应的option */
    name: string
}

/** 柱状图配置(line|area) */
export interface BarOption extends SeriesOptions {
  /** 从调色盘 option.color 中取色的策略 */
  colorBy?: "series" | "data";

  /** 该系列使用的坐标系，默认cartesian2d */
  coordinateSystem?: "cartesian2d" | "polar";

  /** 使用的x轴的index，在单个图表实例中存在多个x轴的时候有用 */
  xAxisIndex?: number;

  /** 使用的y轴的index，在单个图表实例中存在多个y轴的时候有用 */
  yAxisIndex?: number;

  /** 是否显示柱条的背景色。通过 backgroundStyle 配置背景样式 */
  showBackground?: boolean;

  /** 柱条的背景样式 */
  backgroundStyle?: IgnoreOptions;

  /** 是否显示标签，默认false,参考https://echarts.apache.org/zh/option.html#series-bar.label */
  label?: IgnoreOptions;

  /** 柱状拐点标志的样式 */
  itemStyle?: ItemStyle;

  /** 柱状图的高亮状态 */
  emphasis?: IgnoreOptions;

  /** 柱状图的淡出状态。开启 emphasis.focus 后有效 */
  blur?: IgnoreOptions;

  /** 数据选中时的图形样式和标签样式。开启 selectedMode 后有效 */
  select?: IgnoreOptions;

  /** 选中模式的配置，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选'single'，'multiple'，分别表示单选还是多选 */
  selectedMode?: "single" | "multiple" | boolean;

  /** 数据堆叠，同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加 */
  stack?: string;

  /** 柱状图在数据量远大于像素点时候的降采样策略，开启后可以有效的优化图表的绘制效率，默认关闭，也就是全部绘制不过滤数据点 */
  sampling?:
    | "lttb" // 采用 Largest-Triangle-Three-Bucket 算法，可以最大程度保证采样后线条的柱状，形状和极值
    | "average" // 取过滤点的平均值
    | "max" // 取过滤点的最大值
    | "min" // 取过滤点的最小值
    | "sum"; // 取过滤点的和

  /** 是否裁剪超出坐标系部分的图形,默认true */
  clip?: boolean;

  /** 使用 dimensions 定义 series.data 或者 dataset.source 的每个维度的信息,详见https://echarts.apache.org/zh/option.html#series-bar.dimensions */
  dimensions?: string[];

  /** 图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件 */
  silent?: boolean;

  /** 是否开启动画,默认开启 */
  animation?: boolean;
}

export interface BarSeries extends BarOption {
    data: number[] | BarData
}