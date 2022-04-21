// import { DataZoomOptions, DataZoomTypes } from '../../types';

export const dataZoom = (xShow: boolean, yShow: boolean, type: any, data: any[]): any[] => {
  const dataZoomConfig: any[] = [];
  const itemDefaultConfig: any = {
    filterMode: 'none',
    rangeMode: ['percent', 'percent'],
    start: 0,
    end: 100,
    minValueSpan: 1,
  };

  if (xShow) {
    dataZoomConfig[0] = {
      ...itemDefaultConfig,
      type,
      xAxisIndex: [0, Infinity],
    };
    if (data.length > 1 && type === 'slider') dataZoomConfig[0].bottom = 40; // slider时，防止和legend重叠
    type === 'inside' ? (dataZoomConfig[0].disabled = !xShow) : (dataZoomConfig[0].show = xShow);
  }

  if (yShow) {
    dataZoomConfig[1] = {
      ...itemDefaultConfig,
      type,
      yAxisIndex: [0, Infinity],
      textStyle: {
        color: 'rgba(255, 255, 255, 0)',
      }, // 默认不显示Y轴的文字，因为文字长度、格式不一，暂不处理
    };
    type === 'inside' ? (dataZoomConfig[1].disabled = !xShow) : (dataZoomConfig[1].show = xShow);
  }

  return dataZoomConfig;
};
