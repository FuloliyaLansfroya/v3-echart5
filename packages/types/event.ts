export interface CallbackParams {
  /** 当前点击的图形元素所属的组件名称'series'、'markLine'、'markPoint'、'timeLine' */
  componentType?: string;
  // 系列类型。值可能为：'line'、'bar'、'pie' 等。当 componentType 为 'series' 时有意义
  seriesType?: string;
  seriesIndex?: number;
  // 系列名称。当 componentType 为 'series' 时有意义。
  seriesName?: string;
  // 数据名，类目名
  name?: string;
  dataIndex?: number;
  // 传入的数据值
  value: any;
}
