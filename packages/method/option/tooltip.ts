import _ from 'lodash';
import {TooltipOptions, TooltipFormatter, TriggerType} from '../../types/tooltipsOptions';
import { tooltipAdaptor } from '../util';

export const tooltip = (formatter: TooltipFormatter | null, trigger?: TriggerType, defaultFormatter?: TooltipFormatter): TooltipOptions => ({
  confine: true, // 是否将tooltip框限制在图表的区域内
  trigger: trigger || 'item', // 触发类型
  enterable: true, // 鼠标是否可进入提示框浮层中
  appendToBody: true, // 是否将tooltip的DOM节点添加为HTML的<body>的子节点
  className: 'chart-tooltip', // max-height避免撑高页面
  formatter: formatter || defaultFormatter, // 提示框浮层内容格式器
  position: _.debounce(tooltipAdaptor, 100), // 提示框浮层的位置，默认不设置时位置会跟随鼠标的位置
});
