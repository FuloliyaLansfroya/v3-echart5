export interface LegendOptions {
  /** 图例类型，默认plain */
  type?: 'plain' | 'scroll';

  /** 是否显示，默认true */
  show?: boolean;

  /** 是否显示，默认true */
  icon?: 'circle' | 'rect' | 'none';

  /** 图例组件离容器左侧的距离，默认auto, 也支持number的像素 */
  left?: 'auto' | 'left' | 'center' | 'right' | number ;

  /** 图例组件离容器上侧的距离,默认auto */
  top?: 'auto' | 'middle' | 'bottom' | number;

  /** 图例组件离容器右侧的距离 */
  right?: 'auto' | number;

  /** 图例组件离容器下侧的距离 */
  bottom?: 'auto' | number;

  /** 布局朝向 */
  orient?: 'horizontal' | 'vertical';

  /** 图例标记和文本的对齐。默认自动，根据组件的位置和 orient 决定，当组件的 left 值为 'right' 以及纵向布局（orient 为 'vertical'）的时候为右对齐，即为 'right' */
  align?: 'auto' | 'left' | 'right';

  /** 图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔 */
  itemGap?: number;

  /** 格式化图例文本 */
  formatter?: string | ((name: string) => string);

  /** 图例选择的模式，默认true，控制是否可以通过点击图例改变系列的显示状态。默认开启图例选择，可以设成 false 关闭。
    除此之外也可以设成 'single' 或者 'multiple' 使用单选或者多选模式。 */
  selectedMode?: boolean;

  /** 图例选中状态表 */
  selected?: Record<string, boolean>;

  /** 图例的 tooltip 配置，配置项同 tooltip。默认不显示，可以在 legend 文字很多的时候对文字做裁剪并且开启 tooltip */
  tooltip?: { show: boolean };

  /** 图例数据 */
  data?: string[];
}

/** legend排序 */
export type LegendOrder = 'none' | 'desc' | 'asc';

export interface LegendOrderInfo {
  name: string;
  latestData: number;
}
