// Configure Font Awesome library
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

// Tell Font Awesome to skip adding the CSS automatically since it's being imported above
config.autoAddCss = false

// Import icons that we use throughout the app
export {
  faArrowRight,
  faArrowLeft,
  faCheck,
  faDownload,
  faQuestionCircle,
  faHome,
  faUsers,
  faGraduationCap,
  faBuilding,
  faTools,
  faBullseye,
  faChartLine,
  faRocket,
  faEnvelope,
  faMapMarkerAlt,
  faFile,
  faExclamationTriangle,
  faUser,
  faGlobe,
  faBriefcase,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons'