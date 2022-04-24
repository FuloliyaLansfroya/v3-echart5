import { SeriesOptions, IgnoreOptions, CapType, LineType, SymbolType, ShadowOptions } from "../../../types";

export interface formatterParams {
  componentType: "series";
  // 系列类型
  seriesType: string;
  // 系列在传入的 option.series 中的 index
  seriesIndex: number;
  // 系列名称
  seriesName: string;
  // 数据名，类目名
  name: string;
  // 数据在传入的 data 数组中的 index
  dataIndex: number;
  // 传入的原始数据项
  data: Object;
  // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）
  value: number | number[] | Object;
  // 坐标轴 encode 映射信息，
  // key 为坐标轴（如 'x' 'y' 'radius' 'angle' 等）
  // value 必然为数组，不会为 null/undefied，表示 dimension index 。
  // 其内容如：
  // {
  //     x: [2] // dimension index 为 2 的数据映射到 x 轴
  //     y: [0] // dimension index 为 0 的数据映射到 y 轴
  // }
  encode: Object;
  // 维度名列表
  dimensionNames: Array<String>;
  // 数据的维度 index，如 0 或 1 或 2 ...
  // 仅在雷达图中使用。
  dimensionIndex: number;
  // 数据图形的颜色
  color: string;
}

export interface SunburstLabel {
  /**旋转 */
  rotate: "radial" | "tangential" | number;
  /**文字对齐方式 */
  align: "left" | "center" | "right";
  /**当某个扇形块的角度小于该值（角度制）时，扇形块对应的文字不显示。该值用以隐藏过小扇形块中的文字 */
  minAngle: number;
  /**是否显示标签。 */
  show: boolean;
  /**标签的位置 */
  position:
    | "top"
    | "left"
    | "right"
    | "bottom"
    | "inside"
    | "insideLeft"
    | "insideRight"
    | "insideTop"
    | "insideBottom"
    | "insideTopLeft"
    | "insideBottomLeft"
    | "insideTopRight"
    | "insideBottomRight"
    | number[]
    | string[];
  /**距离图形元素的距离。 */
  distance: number;
  /**是否对文字进行偏移。默认不偏移 */
  offset: number[];
  /**标签内容格式器，支持字符串模板和回调函数两种形式 https://echarts.apache.org/zh/option.html#series-sunburst.label.formatter */
  formatter: string | ((params: formatterParams | any[]) => string);
  /**文字的颜色 */
  color: string;
  /**文字字体的风格。 */
  fontStyle: "normal" | "italic" | "oblique";
  /**文字字体的粗细。 */
  fontWeight: "normal" | "bold" | "bolder" | "lighter" | number;
  /**文字的字体系列。 */
  fontFamily: string;
  /**文字的字体大小。 */
  fontSize: number;
  /**文字垂直对齐方式，默认自动。 */
  verticalAlign: "top" | "middle" | "bottom";
  /**行高 */
  backgroundColor: string;
  /**文字块背景色 */
  lineHeight: number;
  /**文字块边框颜色 */
  borderColor: string;
  /**文字块边框宽度 */
  borderWidth: number;
  /**  文字块边框描边类型*/
  borderType: LineType | number | number[];
  /** 用于设置虚线的偏移量，可搭配 borderType 指定 dash array 实现灵活的虚线效果。 */
  borderDashOffset: number;
  /**文字块的圆角 */
  borderRadius: number | number[];
  /** 文字块的内边距 */
  padding: number | number[];
  /**文字块的背景阴影颜色。 */
  shadowColor: string;
  /**文字块的背景阴影长度 */
  shadowBlur: number;
  /**文字块的背景阴影 X 偏移 */
  shadowOffsetX: number;
  /**文字块的背景阴影 Y 偏移 */
  shadowOffsetY: number;
  width: number;
  height: number;
  /**文字本身的描边颜色 */
  textBorderColor: string;
  /**文字本身的描边宽度 */
  textBorderWidth: number;
  /**文字本身的描边类型。 */
  textBorderType: LineType | number | number[];
  /** 用于设置虚线的偏移量，可搭配 borderType 指定 dash array 实现灵活的虚线效果。 */
  textBorderDashOffset: number;
  /**文字阴影颜色 */
  textShadowColor: string;
  /**文字背景阴影长度 */
  textShadowBlur: number;
  /**文字背景阴影 X 偏移 */
  textShadowOffsetX: number;
  /**文字背景阴影 Y 偏移 */
  textShadowOffsetY: number;
  /** 文字超出宽度是否截断或者换行*/
  overflow: "none" | "trucate" | "break" | "breakAll";
  /**在overflow配置为'truncate'的时候，可以通过该属性配置末尾显示的文本 */
  ellipsis: string;
  /** https://echarts.apache.org/zh/option.html#series-sunburst.label.rich*/
  rich: object;
}
/**标签的视觉引导线配置 */
export interface SunburstLabelLine {
  /**是否显示视觉引导线 */
  show: boolean;
  /** 是否显示在图形上方*/
  showAbove: boolean;
  /**视觉引导项第二段的长度 */
  length2: number;
  /**是否平滑视觉引导线，默认不平滑，可以设置成 true 平滑显示，也可以设置为 0 到 1 的值，表示平滑程度 */
  smooth: boolean | number;
  /** 通过调整第二段线的长度，限制引导线两端之间最小的夹角，以防止过小的夹角导致显示不美观。
可以设置为 0 - 180 度*/
  minTurnAngle: number;
  /**https://echarts.apache.org/zh/option.html#series-sunburst.labelLine.lineStyle */
  lineStyle: object;
}
/**旭日图扇形块的样式 */
export interface ItemStyle extends ShadowOptions {
  color: string;
  borderColor: string;
  borderWidth: number;
  borderType: LineType | number | number[];
  /**用于设置虚线的偏移量，可搭配 borderType 指定 dash array 实现灵活的虚线效果。 */
  borderDashOffset: number;
  /**用于指定线段末端的绘制方式，默认值为 'butt'。 */
  borderCap: CapType;
  /**用于设置2个长度不为0的相连部分如何连接在一起的属性，默认值为 'bevel' */
  borderJoin: "bevel" | "round" | "miter";
  /** 用于设置斜接面限制比例 */
  borderMiterLimit: number;
  opacity: number;
}


/**淡出状态配置。开启 emphasis.focus 后有效。 */
export interface blur {
  label: SunburstLabel;
  labelLine: SunburstLabelLine;
  itemStyle: ItemStyle;
}

/**选中状态配置。开启 selectedMode 后有效。 */
export interface select {
  label: SunburstLabel;
  labelLine: SunburstLabelLine;
  itemStyle: ItemStyle;
}

/**旭日图是一种有层次的结构，为了方便同一层样式的配置，我们提供了 level 配置项 */
export interface levels {
  /**当前层的内半径和外半径，注意其它层的内外半径不会因为该层的改变自适应 */
  radius: string[] | number[];
  label: SunburstLabel;
  labelLine: SunburstLabelLine;
  itemStyle: ItemStyle;
  emphasis: IgnoreOptions;
  blur: blur;
  select: select;
}

export interface SunburstSeries extends SeriesOptions,SunburstOptions {
  data: SunburstData[];
}
export interface SunburstOptions {
  name?: string
  /** 所有图形的 zlevel 值。https://echarts.apache.org/zh/option.html#series-sunburst.zlevel */
  zlevel?: number;
  /** 组件的所有图形的z值。控制图形的前后顺序。z值小的图形会被z值大的图形覆盖。 */
  z?: number;
  /**旭日图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标 */
  center?: number[] | string[];
  /**旭日图的半径 */
  radius?: Array<number | string> | number | string;
  /**描述了每个扇形块中，文本标签的样式。 */
  label?: SunburstLabel;
  /**标签的视觉引导线配置 */
  labelLine?: SunburstLabelLine;
  /**旭日图扇形块的样式 */
  itemStyle?: ItemStyle;
  /**点击节点后的行为 */
  nodeClick?: boolean | "rootToNode" | "link";
  /**扇形块根据数据 value 的排序方式，如果未指定 value，则其值为子元素 value 之和。默认值 'desc' */
  sort?: "desc" | "asc" | "null" | Function;
  /**如果数据没有 name，是否需要渲染文字 */
  renderLabelForZeroData?: boolean;
  emphasis?: IgnoreOptions;
  blur?: blur;
  select?: select;
  levels?: levels
  /**选中模式的配置，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选'single'，'multiple'，'series' 分别表示单选，多选以及选择整个系列。 */
  selectedMode?: boolean | "single" | "multiple" | "series";
  animation?: boolean;
  animationThreshold?: number;
  animationDuration?: number | Function;
  animationEasing?: string;
  animationDelay?: number | Function;
  animationDurationUpdate?: number | Function;
  animationEasingUpdate?: string;
  animationDelayUpdate?: number | Function;
}
export interface SunburstData {
  value: number;
  name?: string;
  link?: string;
  target?: "blank" | "self";
  children?: SunburstData;
}
