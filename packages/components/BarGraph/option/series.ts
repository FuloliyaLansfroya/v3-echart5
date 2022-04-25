import { isObject } from "../../../utils";
import { genBarItemColor } from "../../LineGraph/option";
import { BarData, BarOption, BarSeries } from "../types";
/**
 * 生成柱状图series
 * @param data 数据
 * @param isRotateAxis 是否轴旋转
 * @returns series配置项
 */
export const series = (data: number[] | BarData[], BarOption: BarOption[], isRotateAxis: boolean): BarSeries[] => {
  if (data[0] && isObject(data[0])) {
    return (data as BarData[]).map((val) => {
      const value = BarOption.find((v: BarOption) => {
        return v.name === val.name;
      });
      if (value) {
        const itemStyle = genBarItemColor(value.type, isRotateAxis, data.length);
        return {
          ...val,
          ...itemStyle,
          ...value,
          type: "bar",
        };
      } else {
        return {
          ...val,
          type: "bar",
        };
      }
    });
  }
  return [
    {
      type: "bar",
      data: data as number[],
    },
  ];
};
