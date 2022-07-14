import _ from "lodash";
import { isObject } from "../../../utils";
import { RatioDataType, RatioOption, RatioSeries } from "../types";
import { SeriesType } from "../../../types";

/** pie类型的饼图默认配置 */
const getSeries = (): Omit<RatioOption, "data"> => ({
  type: "radar",
});

// 获得label位置
export const genLabelOpt = (labelPosition: string) => {
  if (labelPosition === "none") {
    return {};
  }
  if (labelPosition === "hidden") {
    return { label: { show: false }, labelLine: { show: false } };
  }
  if (labelPosition === "center") {
    return { label: { show: false, position: labelPosition } };
  }
  return { label: { show: true, position: labelPosition as "inside" | "outside" | "center" } };
};

/**
 * 生成雷达图series
 * @param data 数据
 * @param RatioOption 配置
 * @returns
 */
export const series = (data: RatioDataType, RatioOption: RatioOption): RatioSeries[] => {
  if (RatioOption) {
    const typeSeries = getSeries();
    return [_.merge(typeSeries, RatioOption, { type: "radar", data, name: "" })];
  }
  data = data as RatioDataType;
  return [_.merge({ data }, getSeries())];
};
