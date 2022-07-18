import { createApp } from "vue";
import LineGraph from "../packages/components/LineGraph/index";
import BarGraph from "../packages/components/BarGraph/index";
import PieGraph from "../packages/components/PieGraph/index";
import SunburstGraph from "../packages/components/SunburstGraph/index";
import GaugeGraph from "../packages/components/GaugeGraph/index";
import RadarGraph from "../packages/components/RadarGraph/index";
// import {LineGraph, BarGraph, PieGraph, SunburstGraph, RadarGraph} from 'v3-echart5'
import App from "./App.vue";
const app = createApp(App);
app.component(LineGraph.name, LineGraph);
app.component(BarGraph.name, BarGraph);
app.component(PieGraph.name, PieGraph);
app.component(SunburstGraph.name, SunburstGraph);
app.component(GaugeGraph.name, GaugeGraph);
app.component(RadarGraph.name, RadarGraph);
app.mount("#app");
