import { SeriesOptions, ShadowOptions,BorderStyle} from '../../../types';

export interface ItemStyleOptions extends ShadowOptions, BorderStyle {
  /** 指针颜色 */
  color?: string;
}
export interface AxisLineStyleOptions {
  /** 仪表盘轴线样式 */
  color?: Array<Array<number|string| undefined>>;

  /** 仪表盘轴线宽度 */
  width?: number;
}

export interface SplitLineStyleOptions {
  /** 分隔线颜色 */
  color?: string ;

  /** 分隔线宽度 */
  width?: number;
}
export interface ProgressOptions {
  /** 是否显示进度条 */
  show?: boolean;

  /** 是否显示多条进度条是否重叠 */
  overlap?: boolean;

  /** 进度条宽度 */
  width?: number;

  /** 进度条末端是否为圆角 */
  roundCap?: boolean;

  /** 是否裁掉超出部分 */
  clip?: boolean;

  /** 进度条样式 */
  itemStyle?: ItemStyleOptions;
}

export interface AxisLabelOptions {
  show?: boolean;

  distance?: number;

  color?: string;
}
export interface AxisTickOptions {
  /** 是否显示刻度 */
  show?: boolean;

  /** 分隔线之间分割的刻度数 */
  splitNumber?: number;

  /** 刻度线长度 */
  length?: number;

  /** 刻度线与轴线的距离 */
  distance?: number;
  lineStyle?: SplitLineStyleOptions
}
export interface AxisLineOptions {
  /** 是否显示仪表盘轴线 */
  show?: boolean;

  /** 轴线是否为圆角 */
  roundCap?: boolean;

  /** 轴线样式 */
  lineStyle?: AxisLineStyleOptions;
}
export interface PointerOptions {
  /** 是否显示指针 */
  show?: boolean;

  /** 指针样式 */
  icon?: string;

  /** 距离容器左上方距离，可以是百分比也可以是像素值 */
  offsetCenter?: string[]|number[];

  /** 指针长度 */
  length?: string | number;

  /** 指针宽度 */
  width?: number;

  /** 指针样式 */
  itemStyle?: ItemStyleOptions;
}
export interface SplitLineOptions {
  /** 是否显示分割线 */
  show?: boolean;

  /** 分割线长度 */
  length?: number;

  /** 分割线距离轴线距离 */
  distance?: number;

  /** 分割线样式 */
  lineStyle?: SplitLineStyleOptions;
}
export interface TitleOptions {
  show?: boolean;

  /** 相对圆心的偏移，使用百分比或像素 */
  offsetCenter?: string[]|number[];

  /** 字体大小 */
  fontSize?: number;

  /** 字体颜色 */
  color?: string;

  /** 字体背景 */
  backgroundColor?: string;

  /** 字体高度 */
  borderRadius?: number;

  /** 标签格式化器，支持字符串模板和函数 */
  rich?: Record<string, any>;

}

export interface DetailOptions extends TitleOptions {
  /** 标签格式化器，支持字符串模板和函数 */
  formatter?: ValueFormatterFunc;
}

export type ValueFormatterFunc = ((value: number) => string|number)

export interface DataOptions {
  name: string;

  value: number | string;

  itemStyle?: ItemStyleOptions;

  title?: TitleOptions;

  detail?: DetailOptions;
}

export interface GaugeSeriesOptions extends SeriesOptions {
    /** 设置仪表盘圆盘的开始和结束角度 */
    startAngle?: number;

    endAngle?: number;

    radius?: number | string;

    /** 指针 */
    pointer?: PointerOptions;

    /** 仪表盘显示的最大数据值 */
    max: number;

    /** 仪表盘中心相对于容器的位置 */
    center: string[];

    /** 进度条参数 */
    progress?: ProgressOptions;

    /** 刻度标签 */
    axisLabel?: AxisLabelOptions;

    /** 刻度样式 */
    axisTick?: AxisTickOptions;

    /** 仪表盘轴线 */
    axisLine?: AxisLineOptions;

    /** 分隔线 */
    splitLine?: SplitLineOptions;

    /** 标题 */
    title?: TitleOptions;

    /** 细节 */
    detail?: DetailOptions;

    /** data 数据 */
    data: DataOptions[];
}

export interface DashboardSizes {
    /** 仪表盘线条宽度，默认为 18 */
    boardLineWidth: number;
  
    /** 仪表盘的长度 */
    max: number;
  }
  
  export interface SubBoardData {
    /** 每个 data 的 标签值 */
    label: string;
  
    /** 每个 data 的 数值 */
    value: number | string;
  
    /** 数据的格式化 */
    formatValue?: ValueFormatterFunc;
  
    /** 数据的参考最大值 */
    maxValue: number | string;
  }
  
  export interface DashboardDataItem {
    /** 每个 data 的indicator 值 */
    key?: string;
  
    /** 每个 data 的 标签值 */
    label: string;
  
    /** 每个 data 的 数值 */
    value: number | string;
  
    /** 数据的参考最大值 */
    maxValue?: number | string;
  
    /** 数据的格式化 */
    formatValue?: ValueFormatterFunc;
  
    /** 数据的指针颜色 */
    color: string;
  
    /** 数据的标题位置 */
    titleOffsetCenter?: string[];
  
    /** 数据的数值位置 */
    detailOffsetCenter?: string[];
  
    /** 数据的标题颜色 */
    titleColor?: string;
  
    /** 数据的数值颜色 */
    detailColor?: string;
  }
  