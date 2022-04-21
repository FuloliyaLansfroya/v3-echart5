import App from './app'
import { withInstall } from '../../utils/index'

const LineGraph = withInstall<typeof App>(App)

export { LineGraph }
export default LineGraph