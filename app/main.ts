import { createApp } from 'vue'
// import LineGraph from '../packages/components/LineGraph/index'
// import BarGraph from '../packages/components/BarGraph/index'
// import PieGraph from '../packages/components/PieGraph/index'
// import SunburstGraph from '../packages/components/SunburstGraph/index'
import {LineGraph, BarGraph, PieGraph, SunburstGraph} from 'v3-echart5'
import App from './App.vue'
const app = createApp(App)
app.component(LineGraph.name, LineGraph)
app.component(BarGraph.name, BarGraph)
app.component(PieGraph.name, PieGraph)
app.component(SunburstGraph.name, SunburstGraph)
app.mount('#app')
