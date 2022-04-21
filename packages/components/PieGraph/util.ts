import { RatioDataType } from './types/ratioSeriesOptions';

export const sortData = (data: RatioDataType, type = 'none') => {
  if (type === 'desc') { return data.sort((pre, next) => next.value - pre.value); }
  if (type === 'asc') { return data.sort((pre, next) => pre.value - next.value); }
  return data;
};
