import App from "./app";
import { withInstall } from "../../utils/index";

const BarGraph = withInstall<typeof App>(App);

export { BarGraph };
export default BarGraph;
