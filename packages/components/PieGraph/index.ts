import App from './app'
import { withInstall } from '../../utils/index'

const PieGraph = withInstall<typeof App>(App)

export { PieGraph }
export default PieGraph