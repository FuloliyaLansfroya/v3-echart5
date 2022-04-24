import App from './app'
import { withInstall } from '../../utils/index'

const SunburstGraph = withInstall<typeof App>(App)

export { SunburstGraph }
export default SunburstGraph