import { IgnoreOptions, ShadowOptions } from './meta';
export interface GridOptions extends ShadowOptions {
  /** 是否显示直角坐标系网格，默认false */
  show?: boolean;

  /** grid 组件离容器左侧的距离，支持数值，字符串百分比(如：'20%')，默认'10%' */
  left?: number | 'left' | 'center' | 'right';

  /** grid 组件离容器上侧的距离，支持数值，字符串百分比(如：'20%')，默认60 */
  top?: number | 'top' | 'middle' | 'bottom';

  /** grid 组件离容器右侧的距离，支持数值，字符串百分比(如：'20%')，默认'10%' */
  right?: number | 'left' | 'center' | 'right';

  /** grid 组件离容器下侧的距离，支持数值，字符串百分比(如：'20%')，默认60 */
  bottom?: number | 'top' | 'middle' | 'bottom';

  /** grid 组件的宽度。默认自适应 */
  width?: 'auto' | number;

  /** grid 组件的高度。默认自适应 */
  height?: 'auto' | number;

  /** grid 区域是否包含坐标轴的刻度标签, 默认false */
  containLabel?: boolean;

  /** 网格背景色，默认透明(transparent) */
  backgroundColor?: string;

  borderColor?: string;

  /** 默认1 */
  borderWidth?: number;

  /** 本坐标系特定的 tooltip 设定, https://echarts.apache.org/zh/option.html#grid.tooltip */
  tooltip?: IgnoreOptions;
}
