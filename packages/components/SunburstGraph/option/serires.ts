import { SunburstData, SunburstSeries, SunburstOptions} from "../types/SunburstOptions";

/**
 * 生成旭日图series
 * @param data 数据
 * @param sunburstOptions 旭日图配置
 * @returns series配置项
 */
export const series = (data: SunburstData[], sunburstOptions: SunburstOptions): SunburstSeries => {
  if (sunburstOptions) {
    return {
      type: "sunburst",
      data: data,
      ...sunburstOptions,
    };
  } else {
    return {
      type: "sunburst",
      data: data,
    };
  }
};
