import propTypes from 'prop-types'
import { IconExcel, IconImage, IconPDF, IconPPT, IconVideo, IconDocx } from './Icons'

const IconDocument = ({ documentType }) => (
  <React.Fragment>
    {documentType === 'pdf' && <IconPDF /> }
    {documentType === 'docx' && <IconDocx /> }
    {documentType === 'xlsx' && <IconExcel /> }
    {documentType === 'video' && <IconVideo /> }
    {documentType === 'pptx' && <IconPPT /> }
    {documentType === 'image' && <IconImage /> }
  </React.Fragment>
)

IconDocument.propTypes = {
  documentType: propTypes.string
}

 export default IconDocument