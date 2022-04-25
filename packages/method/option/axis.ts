// import { CateAxisOptions, ValueAxisOptions, CateAxisData } from '../../components/trend/types';
import { computeStringShowLength } from '../../components/LineGraph/util';
import { isNumber } from '../../utils';

// 合并指标时，用来标记不属于当前X轴的数据，在tooltips里面过滤掉
export const TINY_NUMBER = 0.00001;

const scales = [
  { num: 100000000, base: '亿' },
  { num: 10000000, base: '千万' },
  { num: 1000000, base: '百万' },
  { num: 10000, base: '万' },
];

/** 获取默认数值轴配置 */
export const valueAxis = (
  axisLine = true,
  axisTick = true,
  splitLine = true,
  axisLabel = true,
  isPercent = false
): any => ({
  type: 'value',
  // 显示坐标轴线,对比时不展示
  axisLine: {
    show: axisLine,
  },
  // 显示坐标轴刻度线
  axisTick: {
    show: axisTick,
  },
  // 数值轴刻度分隔线
  splitLine: {
    show: splitLine,
  },
  // 坐标刻度标签
  axisLabel: {
    show: axisLabel,
    formatter: (val: number | string) => {
      if (isPercent) {
        return `${val}%`;
      }

      let ft = `${val}`;
      scales.some((sc) => {
        if (val >= sc.num) {
          ft = `${(+val / sc.num).toFixed(1).replace(/\.0$/, '')}${sc.base}`;
          return true;
        }
        return false;
      });
      return ft;
    },
  },
});

/** 获取默认类目轴 */
export const cateAxis = (data: any, isRotate: boolean): any => ({
  type: 'category',
  data,
  axisTick: {
    alignWithLabel: false,
  },
  axisLabel: {
    formatter: (val: string | number) => {
      if (isNumber(val)) {
        return `${val}`;
      }
      val = String(val);
      const { length, maxIndex } = computeStringShowLength(val, 8);
      return length >= 8 && maxIndex + 1 < val.length && isRotate ? `${val.slice(0, maxIndex + 1)}...` : val;
    },
  },
  axisLine: {
    onZero: true,
  },
  axisPointer: { type: 'shadow' },
});
