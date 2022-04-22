import { LegendOptions, LegendOrder, LegendOrderInfo } from '../../../types';

/**
 * 获得图例
 * @param data 数据
 * @param legendOrder 图例排序方式 'none' | 'desc' | 'asc'
 * @returns 图例配置项
 */
export const legend = (data: any[], legendOrder: LegendOrder): LegendOptions => {
  if (data.length <= 1) return { show: false };

  // legend排序的处理
  const sortLegend = {
    asc: (a: LegendOrderInfo, b: LegendOrderInfo) => a.latestData - b.latestData,
    desc: (a: LegendOrderInfo, b: LegendOrderInfo) => b.latestData - a.latestData,
  };
  const legendList: LegendOrderInfo[] = data.map((val) => {
    return val.data ? {
      name: val.name,
      latestData: val.data.slice(-1)[0],
    } : val;
  });
  if (legendOrder !== 'none') {
    legendList.sort(sortLegend[legendOrder]);
  }

  return {
    data: legendList.map((val) => val.name),
    type: 'scroll',
    orient: 'horizontal',
  };
};
