import { isObject } from "../../../utils";
import { LineOption, LineSeries, LineData } from '../types';
import {CallbackParams, SeriesType} from '../../../types'
export const genBarItemColor = (type: SeriesType, isRotateAxis: boolean, length = 10) => {
  if (type !== 'bar') { return {}; }
  if (isRotateAxis) {
    return {
      itemStyle: {
        color(params: CallbackParams) {
          const colorList = isRotateAxis ? new Array(length).fill(0).map((item, i) => `rgb(${70 + i * 10}, ${130 + i * 10}, 255)`).reverse() : [];
          return colorList[params.dataIndex || 0];
        },
      },
    };
  }
  return {};
};

/**
 * 生成柱状图series
 * @param data 数据
 * @param isRotateAxis 是否轴旋转
 * @returns series配置项
 */
export const series = (data: number[] |LineData[] , LineOption:LineOption[], isRotateAxis: boolean): LineSeries[] => {
  if (data[0] && isObject(data[0])) {
      return (data as LineData[]).map((val:LineData) => {
        const value = LineOption.find((v:LineOption)=>{ return v.name === val.name})
        if(value) {
          // 还原真实的type
        const type = value.type === 'area' ? 'line' : value.type;
        // 面积图额外配置
        const areaExtra = value.areaStyle || (value.type === 'area'
          ? { areaStyle: {}, emphasis: { focus: 'series' } }
          : {});
        const itemStyle = genBarItemColor(value.type, isRotateAxis, data.length);
        return {
          ...val,
          ...itemStyle,
          ...value,
          type,
          ...areaExtra,
        };
        } else {
          return {
            ...val,
            type:'line', 
          };
        }
      });
  }
  return [{
    type: 'line',
    data: data as number[],
  }];
};
