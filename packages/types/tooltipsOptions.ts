export interface FormatterParams {
    componentType: 'series';
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
    data: Record<string, any>;
    // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）
    value: number | Array <any>| Record<string, any>;
    // 坐标轴 encode 映射信息，
    // key 为坐标轴（如 'x' 'y' 'radius' 'angle' 等）
    // value 必然为数组，不会为 null/undefied，表示 dimension index 。
    // 其内容如：
    // {
    //     x: [2] // dimension index 为 2 的数据映射到 x 轴
    //     y: [0] // dimension index 为 0 的数据映射到 y 轴
    // }
    encode?: Record<string, any>;
    // 维度名列表
    dimensionNames: string[];
    // 数据的维度 index，如 0 或 1 或 2 ...
    // 仅在雷达图中使用。
    dimensionIndex: number;
    // 数据图形的颜色
    color: string;

    // 饼图的百分比
    percent?: number;

    /** 当前横坐标标签(值) */
    axisValue?: string;

    /** 数据项前面的标识 */
    marker?: string;
}

/** tooltip格式化函数 */
export type TooltipFormatterFunc = (params: FormatterParams | FormatterParams[], ticket?: string, callback?: ((ticket: string, html: string) => void)) => string | HTMLElement[]

export type TooltipFormatter = string | TooltipFormatterFunc

/** 触发类型 */
export type TriggerType =
    | 'item' // 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用
    | 'axis' // 坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
    | 'none'; // 什么都不触发

export interface TooltipOptions {
  /** 是否显示提示框组件, 包括提示框浮层和 axisPointer，默认true */
  show?: boolean;

  /** 触发类型 */
  trigger: TriggerType

  /** 是否显示提示框浮层，默认显示。只需tooltip触发事件或显示axisPointer而不需要显示内容时可配置该项为false */
  showContent?: boolean;

  /** 鼠标是否可进入提示框浮层中，默认为false，如需详情内交互，如添加链接，按钮，可设置为 true */
  enterable?: boolean;

  /** 是否将 tooltip 框限制在图表的区域内,当图表外层的 dom 被设置为 'overflow: hidden'，或者移动端窄屏，导致 tooltip 超出外界被截断时，此配置比较有用 */
  confine?: boolean;

  /** 是否将 tooltip 的 DOM 节点添加为 HTML 的 <body> 的子节点。只有当 renderMode 为 'html' 是有意义的, 默认值是 false */
  appendToBody?: boolean;

  /** 指定 tooltip 的 DOM 节点的 CSS 类。（只在 html 模式下生效） */
  className?: string;

  /** 提示框浮层的位置，默认不设置时位置会跟随鼠标的位置 */
  position?:
  Array<number | string> // 相对于容器左上侧的相对或绝对位置
  | 'inside' // 鼠标所在图形的内部中心位置，只在 trigger 为'item'的时候有效
  | 'top' // 鼠标所在图形上侧，只在 trigger 为'item'的时候有效
  | 'left' // 鼠标所在图形左侧，只在 trigger 为'item'的时候有效
  | 'right' // 鼠标所在图形右侧，只在 trigger 为'item'的时候有效
  | 'bottom' // 鼠标所在图形底侧，只在 trigger 为'item'的时候有效
  | ((...args: any[]) => any);

  /** 提示框浮层内容格式器，支持字符串模板和回调函数两种形式 */
  formatter?: TooltipFormatter;
}
