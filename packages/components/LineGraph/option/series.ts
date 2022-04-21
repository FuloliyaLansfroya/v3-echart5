import { isPlainObject } from "../../../method/util";
import { TrendSeriesOptions } from '../types/trendSeriesOptions';
import {CallbackDataParams, SeriesType} from '../../../types'
export const genBarItemColor = (type: any, rotateAxis: boolean, length = 10) => {
  if (type !== 'bar') { return {}; }
  if (rotateAxis) {
    return {
      itemStyle: {
        color(params: any) {
          const colorList = rotateAxis ? new Array(length).fill(0).map((item, i) => `rgb(${70 + i * 10}, ${130 + i * 10}, 255)`).reverse() : [];
          return colorList[params.dataIndex || 0];
        },
      },
    };
  }
  return {};
};

/** 生成趋势图series */
export const series = (data: number[] | any[], rotateAxis: boolean): any[] => {
  if (!data.length) return [];
  if (data[0] && isPlainObject(data[0])) {
    return (data as any[]).map((d) => {
      // 还原真实的type
      const type = d.type === 'area' ? 'line' : d.type;
      // 面积图额外配置
      const areaExtra = d.areaStyle || (d.type === 'area'
        ? { areaStyle: {}, emphasis: { focus: 'series' } }
        : {});
      const itemStyle = genBarItemColor(d.type, rotateAxis, d.data.length);
      return {
        ...itemStyle,
        ...d,
        type,
        ...areaExtra,
      };
    });
  }
  return [{
    type: 'line',
    data: data as number[],
  }];
};
