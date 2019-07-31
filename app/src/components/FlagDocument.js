import propTypes from 'prop-types'
import { FlagEn, FlagSpan, FlagGerman, FlagMandarin, FlagFrench, FlagKorea, FlagJapan } from './Icons'

const FlagDocument = ({ lang }) => (
  <React.Fragment>
    {lang === 'en' && <FlagEn />}
    {lang === 'es' && <FlagSpan />}
    {lang === 'gr' && <FlagGerman />}
    {lang === 'cn' && <FlagMandarin />}
    {lang === 'fr' && <FlagFrench />}
    {lang === 'kr' && <FlagKorea />}
    {lang === 'jp' && <FlagJapan />}
  </React.Fragment>
)

FlagDocument.propTypes = {
  lang: propTypes.string
}

 export default FlagDocument