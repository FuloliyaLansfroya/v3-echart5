import { isObject } from "../../../utils";
import { genBarItemColor } from "../../LineGraph/option";
import { BarSeriesOptions } from "../types/barSeriesOptions";

/**
 * 生成柱状图series
 * @param data 数据
 * @param isRotateAxis 是否轴旋转
 * @returns series配置项
 */
export const series = (data: number[] | BarSeriesOptions[], isRotateAxis: boolean): BarSeriesOptions[] => {
  if (!data.length) return [];
  if (data[0] && isObject(data[0])) {
    return (data as BarSeriesOptions[]).map((value) => {
      const itemStyle = genBarItemColor(value.type, isRotateAxis, value.data.length);
      return {
        ...itemStyle,
        ...value,
        type: "bar",
      };
    });
  }
  return [
    {
      type: "bar",
      data: data as number[],
    },
  ];
};
