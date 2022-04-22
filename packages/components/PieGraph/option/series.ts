import _ from 'lodash';
import { isObject } from '../../../utils';
import { RatioDataType, RatioSeriesOptions } from '../types/ratioSeriesOptions';
import {SeriesType} from '../../../types'

/** pie类型的饼图默认配置 */
const genPieSeries = (): Omit<RatioSeriesOptions, 'data'> => ({
  type: 'pie',
  selectedMode: true,
  selectedOffset: 10,
  label: {
    color: '#555',
  },
  itemStyle: {
    borderRadius: 0,
    borderWidth: 0,
  },
  labelLayout: {
    hideOverlap: false,
    draggable: true,
  },
});

/** ring类型的饼图默认配置 */
const genRingSeries = (): Omit<RatioSeriesOptions, 'data'> => ({
  type: 'pie',
  radius: ['45%', '70%'],
  label: {
    color: '#555',
    position: 'center',
    show: false,
  },
  labelLayout: {
    hideOverlap: false,
    draggable: true,
  },
  emphasis: {
    focus: 'self',
    itemStyle: {
      borderWidth: 0,
    },
    label: {
      show: true,
      fontSize: '18',
      fontWeight: 'bold',
    },
  },
  blur: {
    itemStyle: {
      opacity: 0.6,
    },
  },
});

/** rose类型的饼图默认配置 */
const genRoseSeries = (): Omit<RatioSeriesOptions, 'data'> => ({
  type: 'pie',
  roseType: true,
  radius: ['18%', '70%'],
  itemStyle: {
    borderWidth: 0,
  },
  label: {
    color: '#555',
  },
  labelLayout: {
    hideOverlap: false,
    draggable: true,
  },
});

/** 获得饼图类型 */
const getTypeSeries = (type: SeriesType) => {
  if (type === 'pie') {
    return genPieSeries();
  }
  if (type === 'ring') {
    return genRingSeries();
  }
  return genRoseSeries();
};

// 获得label位置
export const genLabelOpt = (labelPosition: string) => {
  if (labelPosition === 'none') {
    return {};
  }
  if (labelPosition === 'hidden') {
    return { label: { show: false }, labelLine: { show: false } };
  }
  if (labelPosition === 'center') {
    return { label: { show: false, position: labelPosition } };
  }
  return { label: { show: true, position: labelPosition as 'inside' | 'outside' | 'center' } };
};

/**
 * 生成饼图series
 * @param data 数据
 * @param labelPosition label位置 
 * @returns 
 */
export const series = (data: RatioDataType | RatioSeriesOptions, labelPosition: string): RatioSeriesOptions[] => {
  const labelOpt = genLabelOpt(labelPosition);
  if (isObject(data)) {
    const typeSeries = getTypeSeries((data as RatioSeriesOptions).type);
    return [_.merge(typeSeries, labelOpt, data, { type: 'pie', data: (data as RatioSeriesOptions).data, name: '' })];
  }
  data = data as RatioDataType;
  return [_.merge({ data }, getTypeSeries('rose'), labelOpt)];
};
