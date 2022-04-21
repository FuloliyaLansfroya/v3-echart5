/** 对于不常用的不重要的一些选项，以该类型定义，扩展需要时查询echarts文档 */
export type IgnoreOptions = Record<string, any>;

/** 线段末端的绘制方式 */
export type CapType =
  | 'butt' // 线段末端以方形结束
  | 'round' // 线段末端以圆形结束
  | 'square'; // 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域

/** 线型 */
export type LineType = 'solid' | 'dashed' | 'dotted';

/** 线段起点或终点标记类型，除了下面的枚举值，也支持image://来指定图片 */
export type SymbolType = 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow' | 'none';

/** 占比图类型 */
export type RatioType = 'pie' | 'rose' | 'ring';

export interface ShadowOptions {
  /** 图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果 */
  shadowBlur?: number;

  /** 阴影颜色 */
  shadowColor?: string;

  /** 阴影水平方向上的偏移距离 */
  shadowOffsetX?: number;

  /** 阴影垂直方向上的偏移距离 */
  shadowOffsetY?: number;

  /** 图形透明度, 默认1，支持从0到1的数字，为0时不绘制该图形 */
  opacity?: number;
}

export interface LineStyle extends ShadowOptions {
  /** 线条颜色，修改lineStyle中的颜色不会影响图例颜色，如果需要图例颜色和折线图颜色一致，需修改itemStyle.color，线条颜色默认也会取该颜色 */
  color?: string;

  /** 线宽，默认2 */
  width?: number;

  /** 边的曲度 */
  curveness?: number;

  /** 线型，默认solid */
  type?: LineType;

  /** 用于设置虚线的偏移量，可搭配type指定dash array实现灵活的虚线效果 */
  dashOffset?: number;

  /** 用于指定线段末端的绘制方式,默认butt */
  cap?: CapType;
}
