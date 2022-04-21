import _ from 'lodash';
import { isPlainObject } from '../../../method/util';
import { RatioDataType, RatioSeriesOptions } from '../types/ratioSeriesOptions';
import {SeriesType} from '../../../types'

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

const getTypeSeries = (type: SeriesType) => {
  if (type === 'pie') {
    return genPieSeries();
  }
  if (type === 'ring') {
    return genRingSeries();
  }
  return genRoseSeries();
};

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

/** 生成趋势图series */
export const series = (data: RatioDataType | RatioSeriesOptions, labelPosition: string): RatioSeriesOptions[] => {
  const labelOpt = genLabelOpt(labelPosition);
  if (isPlainObject(data)) {
    const typeSeries = getTypeSeries((data as RatioSeriesOptions).type);
    return [_.merge(typeSeries, labelOpt, data, { type: 'pie', data: (data as RatioSeriesOptions).data, name: '' })];
  }
  data = data as RatioDataType;
  return [_.merge({ data }, getTypeSeries('rose'), labelOpt)];
};
