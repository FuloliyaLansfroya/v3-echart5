const stringTag = '[object String]',
  numberTag = '[object Number]',
  asyncTag = '[object AsyncFunction]',
  funcTag = '[object Function]',
  objectTag = '[object Object]';

const objectToString = (value: any) => {
  return Object.prototype.toString.call(value);
}
import { WithInstall } from './types'
import { App } from 'vue'
/** 是否为数字类型 */
export const isNumber = (value: any) => {
  return typeof value == 'number' || objectToString(value) === numberTag;
}
export const withInstall = <T>(comp: T): WithInstall<T> & Plugin => {
  const c = comp as any
  c.install = (app: App) => {
    app.component(c.name, c)
  }

  return c
}
export const isInViewPort = (element: HTMLElement) => {
  const viewWidth = window.innerWidth || document.documentElement.clientWidth;
  const viewHeight = window.innerHeight || document.documentElement.clientHeight;
  const {
      top,
      right,
      bottom,
      left,
  } = element.getBoundingClientRect();

  // 让元素显示在视口内的需多少差值，这里只考虑元素超出下边界
  const dvalue = bottom - viewHeight;
  const topValue = top - dvalue;
  const inViewPort = (
          top >= 0
          && left >= 0
          && right <= viewWidth
          && bottom <= viewHeight
  );

  return {
      inViewPort,
      top: topValue,
  };
};
/** echart的tooltip函数 */
export function tooltipAdaptor(pos: number[], params: object, dom: HTMLElement) {
  const { inViewPort, top } = isInViewPort(dom);
  if (!inViewPort) {
    dom.style.top = `${top - 20}px`; // 20是给个差值让元素离视口下边界远一点
  }
  return 'bottom';
}