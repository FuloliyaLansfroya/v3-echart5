import { App } from "vue-demi";

import CanvasContainer from "./components/CanvasContainer/index";
import BarGraph from "./components/BarGraph/index";
import LineGraph from "./components/LineGraph/index";
import PieGraph from "./components/PieGraph/index";
import SunburstGraph from "./components/SunburstGraph/index";
const componentList = [BarGraph, LineGraph, PieGraph,SunburstGraph];

const install = (app: App): void => {
  componentList.forEach((component) => {
    app.component(component.name, component);
  });
};
export { BarGraph, LineGraph, PieGraph,SunburstGraph };
export default install;
