import dayjs from 'dayjs';

import { WithInstall } from './types'
import { App } from 'vue'


const stringTag = '[object String]',
        numberTag = '[object Number]',
        asyncTag = '[object AsyncFunction]',
        funcTag = '[object Function]',
        objectTag = '[object Object]';

function objectToString(value: any) {
    return Object.prototype.toString.call(value);
}

function isObjectLike(value: any) {
    return value != null && typeof value == 'object';
}

/** 是否为字符串类型 */
export const isString = (value: any) => {
    return typeof value == 'string' || objectToString(value) === stringTag;
}

/** 是否为数字类型 */
export const isNumber = (value: any) => {
    return typeof value == 'number' || objectToString(value) === numberTag;
}

/**
 * 是否为object
 * （非null、非数组/weak/map等）
 * */
export const isObject = (value: any) => {
    if (!isObjectLike(value) || objectToString(value) != objectTag) {
        return false;
    }
    return true;
}

/** 是否为函数 */
export const isFunction = (value: any) => {
    const tag = objectToString(value);
    return tag === funcTag || tag === asyncTag;
}

/** 格式化配置设置对象
 * 如果存在time，那么会将数据作为时间进行处理，忽略prefix, suffix以外的其他参数
 */
export interface Formatter {
    /** 需要扩大的倍数，小数则为缩小 */
    ratio?: number; //

    /** 是否按千分位分割，用逗号,拼接 */
    thousand?: boolean;

    /** 前缀 */
    prefix?: string;

    /** 后缀 */
    suffix?: string;

    /** 小数位个数 */
    point?: number;

    /** 时间格式化 */
    time?: string;
}

/**
 * 数据格式化函数
 * time存在时，忽略unit以外的设置
 * origin可以传入Date类型、string类型的YYYYMMDD、number类型的Unix时间戳作为参数
 */
export function formatterTransfer(origin: number | string | Date, formatter: Formatter) {
    const { ratio = 1, thousand = true, prefix = '', suffix = '', point = 2, time } = formatter;
    if (time) {
        let dayInstance: null | dayjs.Dayjs = null;
        const type = typeof origin;
        if (type === 'number' || type === 'string' || origin instanceof Date) {
            dayInstance = type === 'string' ? dayjs(origin, 'YYYYMMDD') : dayjs(origin);
        }
        if (!dayInstance?.isValid()) {
            console.error('origin or formatter.time parameter error');
        }
        return `${prefix}${dayInstance?.format(time)}${suffix}`;
    }

    let computed = origin;
    if (typeof origin !== 'number') { return `${prefix}${computed}${suffix}`; }

    if (!Number.isNaN(origin)) {
        computed = (+origin * ratio).toFixed(point).replace(/(\.?0+)$/, '') || '-';
        computed = thousand ? computed.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,') : computed;
    } else {
        computed = '-';
    }

    return `${prefix}${computed}${suffix}`;
}

/** 组件注册函数 */
export const withInstall = <T>(comp: T): WithInstall<T> & Plugin => {
  const component = comp as any
  component.install = (app: App) => {
    app.component(component.name, component)
  }
  return component
}

/** 视口 */
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