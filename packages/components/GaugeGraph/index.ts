import App from './app';

import { withInstall } from '../../utils/index'

const GaugeGraph = withInstall<typeof App>(App)

export * from './const';

export * from './types';

export { GaugeGraph }


export default GaugeGraph;
