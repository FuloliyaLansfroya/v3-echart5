import * as echarts from 'echarts/core';

import {
  TitleComponent,
  LegendComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
  ToolboxComponent,
  MarkLineComponent,
  MarkPointComponent,
  DataZoomComponent,
  DataZoomInsideComponent,
  DataZoomSliderComponent,
} from 'echarts/components';

import {
  CanvasRenderer,
} from 'echarts/renderers';

echarts.use([
  TitleComponent,
  LegendComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
  ToolboxComponent,
  MarkLineComponent,
  MarkPointComponent,
  DataZoomComponent,
  DataZoomInsideComponent,
  DataZoomSliderComponent,
  CanvasRenderer
]);

export default echarts;