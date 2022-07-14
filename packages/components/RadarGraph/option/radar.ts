import _ from "lodash";
import { IndicatorType, IndicatorOptionType, radarType } from "../types/index";
/**
 * 生成雷达图坐标系配置
 * @param indicator 坐标系数据
 * @param IndicatorOption 坐标系配置
 * @returns
 */
export const radar = (indicator: IndicatorType[], IndicatorOption: IndicatorOptionType): radarType[] => {
  if (IndicatorOption) {
    return [_.merge(IndicatorOption, { indicator })];
  }
  indicator = indicator as IndicatorType[];
  return [_.merge({ indicator })];
};
