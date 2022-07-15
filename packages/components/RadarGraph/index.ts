import App from "./app";
import { withInstall } from "../../utils/index";

const RadarGraph = withInstall<typeof App>(App);

export { RadarGraph };
export default RadarGraph;
