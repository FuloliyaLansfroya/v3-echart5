import { isPlainObject } from "../../../method/util";
import { genBarItemColor } from "../../LineGraph/option";
import { BarSeriesOptions } from "../types/barSeriesOptions";

/** 生成趋势图series */
export const series = (data: number[] | BarSeriesOptions[], rotateAxis: boolean): BarSeriesOptions[] => {
  if (!data.length) return [];
  if (data[0] && isPlainObject(data[0])) {
    return (data as BarSeriesOptions[]).map((d) => {
      const itemStyle = genBarItemColor(d.type, rotateAxis, d.data.length);
      return {
        ...itemStyle,
        ...d,
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
