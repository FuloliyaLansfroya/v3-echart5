import { LegendOptions } from '../../../types';

/** 获取图例 */
export const legend = (): LegendOptions => ({
  type: 'scroll',
  orient: 'horizontal',
  bottom: 10,
});
