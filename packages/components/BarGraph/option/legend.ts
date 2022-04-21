import { LegendOptions, LegendOrder, LegendOrderInfo } from "../../../types";

/** 获取图例 */
export const legend = (data: any[], legendOrder: LegendOrder): LegendOptions => {
  if (data.length <= 1) return { show: false };

  // legend排序的处理
  const sortFunctionMap = {
    asc: (a: LegendOrderInfo, b: LegendOrderInfo) => a.latestData - b.latestData,
    desc: (a: LegendOrderInfo, b: LegendOrderInfo) => b.latestData - a.latestData,
  };
  const legendDataList: LegendOrderInfo[] = data.map((v) => {
    return v.data
      ? {
          name: v.name,
          latestData: v.data.slice(-1)[0],
        }
      : v;
  });
  if (legendOrder !== "none") {
    legendDataList.sort(sortFunctionMap[legendOrder]);
  }

  return {
    data: legendDataList.map((v) => v.name),
    type: "scroll",
    orient: "horizontal",
  };
};
