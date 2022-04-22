import { DataZoomTypes, GridOptions } from '../../types';

export const grid = (dataZoomXShow: boolean, dataZoomYShow: boolean, dataZoomType: DataZoomTypes, data: any[]): GridOptions => {
  const config: GridOptions = {};

  // 开启了slider dataZoom后，x轴位置调整，防止遮挡住dataZoom
  if (dataZoomXShow && dataZoomType === 'slider') {
    config.bottom = 105;
  }

  // 开启了slider dataZoom后，y轴位置调整，防止遮挡住dataZoom (注意right值可能会被extra中的right值覆盖)
  if (dataZoomYShow && dataZoomType === 'slider') {
    config.right = 90;
  }

  return config;
};
