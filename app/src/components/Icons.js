import IconExcel from '../static/svg/documentIcons/excel.svg'
import IconImage from '../static/svg/documentIcons/image.svg'
import IconPDF from '../static/svg/documentIcons/pdf.svg'
import IconPPT from '../static/svg/documentIcons/ppt.svg'
import IconVideo from '../static/svg/documentIcons/video.svg'
import IconDocx from '../static/svg/documentIcons/word.svg'
import ApplicationIcon from '../static/svg/applications.svg'
import CostCalculator from '../static/svg/costCalculator.svg'
import ContactIcon from '../static/svg/contact.svg'
import CostIcon from '../static/svg/cost.svg'
import FavoritesIcon from '../static/svg/favorites.svg'
import HomeIcon from '../static/svg/home.svg'
import InformationIcon from '../static/svg/information.svg'
import MaterialsIcon from '../static/svg/materials.svg'
import ServicesIcon from '../static/svg/services.svg'
import Training from '../static/svg/training.svg'
import SearchImage from '../static/imgs/search-icon.png'
import Language from '../static/imgs/lang-icon.png'
import IconStart from '../static/imgs/content-viewer/start.png'
import IconCheck from '../static/imgs/content-viewer/icon-check.png'
import IconStartActive from '../static/imgs/content-viewer/start-active.png'
import FlagEn from '../static/svg/flagIcons/eng.svg'
import FlagSpan from '../static/svg/flagIcons/sp.svg'
import FlagGerman from '../static/svg/flagIcons/ger.svg'
import FlagMandarin from '../static/svg/flagIcons/chi.svg'
import FlagFrench from '../static/svg/flagIcons/fr.svg'
import FlagKorea from '../static/svg/flagIcons/korean.svg'
import FlagJapan from '../static/svg/flagIcons/jap.svg'
import IconExpand from '../static/imgs/content-viewer/icon-expand.png'
import ShowMoreImage from '../static/imgs/content-viewer/icon-show-more.png'
import XImage from '../static/imgs/content-viewer/icon-x.png'
import IconSeeMore from '../static/imgs/calendar/icon-see-more.png'
import IconAddress from '../static/imgs/calendar/icon-address.png'
import IconTime from '../static/imgs/calendar/icon-time.png'
import IconAppSetting from '../static/imgs/icon-app-setting.png'

const IconLang = () => (
  <img src={Language} alt='language' />
)
const IconSearch = () => (
  <img src={SearchImage} alt='search' />
)

const IconShowMore = () => (
  <img src={ShowMoreImage} alt='search' />
)
const IconX = () => (
  <img src={XImage} alt='search' />
)
export  {
    IconExcel, IconImage, IconPDF, IconPPT, IconVideo, ContactIcon, ApplicationIcon, CostIcon,
    FavoritesIcon, HomeIcon, InformationIcon, MaterialsIcon, ServicesIcon, Training, IconSearch, IconLang, IconDocx,
    IconStart, IconCheck, IconStartActive,
    FlagEn, FlagSpan, FlagGerman, FlagMandarin,FlagFrench, FlagKorea, FlagJapan,
    IconExpand, IconShowMore, IconX, IconSeeMore, IconAddress, IconTime, IconAppSetting, CostCalculator
}


