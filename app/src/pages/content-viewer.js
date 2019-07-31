/* eslint-disable no-loops/no-loops */
/* eslint-disable no-undef */
import styled from 'styled-components'
import propTypes from 'prop-types'
import React, { Component } from 'react'
import { Dropdown } from 'rbx/components'
import { Input } from 'rbx/elements'
import Zoom from 'react-thumbnail-zoom'
import { Modal } from 'rbx/components/modal/modal'
import ClipLoader from 'react-spinners/ClipLoader'
import { Document as PdfViewer, Page, pdfjs } from 'react-pdf'
import Router from 'next/router'
import 'rbx/index.css'
import {
  IconLang,
  IconStart,
  IconCheck,
  IconStartActive,
  MaterialsIcon
} from '../components/Icons'
import BackButton from '../components/Layout/BackButton'
import FlagDocument from '../components/FlagDocument'
import IconDocument from '../components/IconDocument'
import Menu from '../services/menu'
import Document from '../services/document'
import Mailing from '../services/mailing'
import SweetLoading from '../components/UI/SweetLoading'
import RowItemDocument from '../components/UI/ItemSideMenu/RowItemDocument'
import Icon from '../components/UI/ItemSideMenu/Icon'
import TextDocument from '../components/UI/ItemSideMenu/TextDocument'
import NewItem from '../components/UI/ItemSideMenu/NewItem'
import Language from '../components/UI/ItemSideMenu/Language'
import withUserAuth from '../hocs/withAuth'

pdfjs.GlobalWorkerOptions.workerSrc = '/static/kukudoc/scripts/pdfWorker.js'

class ContentViewer extends Component {

  state = {
    error: false,
    pdfWidth: 1200,
    loading: true,
    showInput: false,
    pdfPages: [],
    documents: [],
    contentFullScreen: null,
    content: null,
    document: {
      name: '',
      type: 'video',
      languages: []
    },
    menu: {
      name: ''
    },
    shareable: true
  }

  static async getInitialProps({ req, query, params }) {
    if (req) {
      return { query: req.query, params: req.params }
    }
    return { query, params }
  }

  async componentDidMount() {
    const { query } = this.props
    let documents = {}
    if (query.menuId === 'favorite') {
      const temp = await Document.favoriteDocuments()
      documents.data = temp.data.map(item => item.documentDTO)
    } else {
      documents = await Document.getByMenu(query.menuId)
    }
 
    const document = documents.data.filter(item => item.id == query.document)[0]
    if (document) {
      // load data
      const shareResponse = await Document.isShareable(document.id)
      const shareable = shareResponse.data === 'OK' ? true : false
      const lang = query.lang ? query.lang.toLowerCase() : 'en'
      const menu = await Menu.get(document.menuId ? document.menuId : query.menuId)
      const contents = await Document.getContent(document.id)
      const content = contents.data.filter(item => item.lang.toLowerCase() === lang)[0]
      let loading = true
      if (document.type == 'ppt' || document.documentType == 'image') {
        loading = false
      }
      this.setState({
        loading: loading,
        menu: menu.data,
        document: document,
        documents: documents.data,
        content: content,
        shareable: shareable
      }, () => {
        if (document.type != 'ppt' &&
            document.documentType != 'video' &&
            document.documentType != 'image' &&
            document.documentType != 'pdf') {
          this.loadAndRenderDoc(content.id, document.documentType)
        }
        setTimeout(() => {
          // prevent the loading icon keep going forever
          this.setState({ loading: false })
        }, 5000)
      })
    } else {
      Router.push('/')
    }
  }

  loadAndRenderDoc = (id, type) => {

    const _this = this
    const xhr = new XMLHttpRequest()
    xhr.open('GET', Document.generateUrl(id)) 
    xhr.responseType = 'blob'
    xhr.onload = function() 
    {
      const blob = xhr.response
      const file = new File([blob], `test.${type}`)
      let instance = null
      if (type == 'docx') {
        instance = window.docxJS = window.createDocxJS ? window.createDocxJS() : new window.DocxJS()
      } else if (type == 'xlsx') {
        instance = window.cellJS = window.createCellJS ? window.createCellJS() : new window.CellJS()
      }

      if (instance) {
        _this.setState( { instance: instance } )
        instance.parse(file, () =>{
          
          const $docxjsWrapper = $('#docxjs-wrapper')
          const element = $docxjsWrapper[0]
          const endCallBackFn = function(result){
              _this.setState({ loading: false })
              if (result.isError) {
                console.log(result)
              }
          }

          if (type === 'docx') {
              window.docxAfterRender(element, endCallBackFn)
          } else if (type === 'xlsx') {
              window.cellAfterRender(element, endCallBackFn)
          }
        })
      }
    }
    xhr.send()
  }

  download = () => {
    const { document, content } = this.state
    if (document.type === 'ppt') {
      window.location.href = content.ppt
    } else if (document.type === 'linkable') {
      window.location.href = Document.download(content.id)
    } else {
      window.location.href = Document.generateUrl(content.id)
    }
  }

  toogleInput = () => {
    const { email, document, content, showInput } = this.state
    if (showInput) {
      if (email && this.validateEmail(email)) {

        if (confirm('Are you sure you want to share this document ?')) {
          this.setState({
            error: false,
            showInput: false
          })
  
          Mailing.shareEmail({
            toEmail: email,
            documentId: document.id,
            language: content.lang
          })

          alert('Share successfully')
        }
      } else {
        this.setState({
          error: true
        })
      }
    } else {
      this.setState({
        showInput: true
      })
    }
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    const { pdfPages } = this.state
    pdfPages.push(1)
    pdfPages.push(2)
    pdfPages.push(3)
    this.setState({
      numPages: numPages,
      loading: false
    })
  }

  onNextDocumentLoadSuccess = () => {
    const { numPages, pdfPages } = this.state
    if (pdfPages.length < numPages) {
      pdfPages.push(pdfPages.length + 1)
      this.setState({
        pdfPages: pdfPages,
        loading: false
      })
    }
  }

  onItemClick = id => {
    const { query } = this.props
    // check this item as viewed
    Document.viewedDocuments(id).then(() => {
      window.location = `/content-viewer?menuId=${query.menuId}&document=${id}`
    })
  }

  handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight
    if (bottom) {
      this.onNextDocumentLoadSuccess()
    }
  }

  handleEnter = (e) => {
    if (e.key === 'Enter') {
      this.toogleInput()
    }
  }

  handleEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  closeModal = () => {
    this.setState({
      contentFullScreen: null
    })
  }

  async handleFavorite() {
    const { query } = this.props
    const { document } = this.state
    if (document.favorite) {
      await Document.deleteFavorite(document.id)
      document.favorite = false
    } else {
      await Document.favorite({ documentId: document.id })
      document.favorite = true
    }

    if (query.menuId === 'favorite') {
      const response = await Document.favoriteDocuments()
      const documents = response.data.map(item => item.documentDTO)
      this.setState({ documents, document })
    } else {
      this.setState({ document })
    }
  }

  requestFullscreen(e) {
    const { content, document } = this.state
    let url = content.url
    let type = document.documentType
    if (document.type === 'ppt') {
      url = content.zip
      type = document.type
    } else if (document.documentType === 'video') {
      $('video')[0].pause()
    }
    this.setState({
      contentFullScreen: {
        id: `${content.id}`,
        type: type,
        url: url
      }
    })
  }

  handleContent(lang) {
    const { query } = this.props
    const { document } = this.state
    window.location = `/content-viewer?menuId=${query.menuId}&document=${document.id}&lang=${lang}`
  }

  validateEmail(email) {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
  }

  render(props) {
    const { query } = this.props
    const {
      contentFullScreen,
      pdfWidth,
      loading,
      pdfPages,
      showInput,
      menu,
      document,
      documents,
      content,
      shareable,
      error
    } = this.state
    let params = ''
    if (contentFullScreen) {
      params = `id=${contentFullScreen.id}&type=${contentFullScreen.type}&url=${contentFullScreen.url}`
    }

    return (
      <React.Fragment>
        <SideMenuDocument>
          <BackButton />
          {
            documents.map(item => (
              <RowItemDocument
                key={item.id}
                className={item.id == query.document ? 'active row-item' : 'row-item'}
                onClick={() => { this.onItemClick(item.id) }}
              >
                <Icon>
                  <IconDocument documentType={item.documentType ? item.documentType : item.type} />
                </Icon>
                <TextDocument style={{ fontSize: '14px' }}>{item.name}</TextDocument>
                { item.languages && item.languages.length > 1 && (
                  <Language>
                    <IconLang />
                  </Language>
                )}
                { !item.viewed && <NewItem /> }
              </RowItemDocument>
            ))
          }
        </SideMenuDocument>
        <Content>
          <Title>
            <MaterialsIcon />
            <span>{menu.name}</span>
          </Title>
          <TitleLang>
            <FlagDocument lang={content ? content.lang.toLowerCase() : 'en'} />
            <span>{document.name}</span>
          </TitleLang>
          <BreathCum>
            {menu.path}
          </BreathCum>
          <RowFilter>
            <div className='col-left'>
              <Dropdown>
                <Dropdown.Trigger>
                  <IconLang />
                  <span className='title-dropdown'>Languages available</span>
                </Dropdown.Trigger>
                <Dropdown.Menu>
                  <Dropdown.Content>
                    {
                      document.languages.map(lang => (
                        <Dropdown.Item
                          key={`${document.id}${lang}`}
                          role='button'
                          tabIndex={0}
                          onClick={() => this.handleContent(lang)}
                          onKeyUp={() => this.handleContent(lang)}
                        >
                          <FlagDocument lang={lang.toLowerCase()} />
                          <span>{lang.toLowerCase()}</span>
                        </Dropdown.Item>
                      ))
                    }
                  </Dropdown.Content>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className='col-right'>
              <div
                role='button'
                tabIndex={0}
                onClick={() => this.handleFavorite()}
                onKeyUp={() => this.handleFavorite()}
                className={(document.favorite ? 'active' : '') + ' button-filter col-favorite'}
              >
                <span>Favorite</span>
              </div>
              <div
                className='button-filter'
                role='button'
                tabIndex={0}
                onClick={e => this.requestFullscreen(e)}
                onKeyUp={e => this.requestFullscreen(e)}
              >
                <span>Open</span>
              </div>
              <div
                role='button'
                tabIndex={0}
                onClick={() => this.download()}
                onKeyUp={() => this.download()}
                className='button-filter'
              >
                <span>Download</span>
              </div>
              <div className={(showInput == true ? 'show' : '') + ' button-filter item-input'}>
                <Input
                  type='text'
                  size='small'
                  placeholder='Email'
                  onKeyPress={e => this.handleEnter(e)}
                  onChange={e => this.handleEmail(e)}
                />
              </div>
              {
                shareable && (
                <ColShare className='button-filter' onClick={() => { this.toogleInput() }}>
                  <span>Share</span>
                </ColShare>
              )}
              { error && <div className='errorEmail'>Please enter correct email</div> }
            </div>
          </RowFilter>
          <ContentRender onScroll={this.handleScroll}>
            {
              document.documentType == 'pdf' && (
              <div className='pdfViewer'>
                <PdfViewer
                  renderMode='svg'
                  file={Document.generateUrl(content.id)}
                  onLoadSuccess={this.onDocumentLoadSuccess}
                >
                  {pdfPages.map(pageNumber => <Page key={pageNumber} width={pdfWidth} pageNumber={pageNumber} /> )}
                </PdfViewer>
              </div>
            )}
            {
              document.documentType === 'docx' &&
              <div id='docxjs-wrapper' className='doc-content' />
            }
            {
              document.documentType === 'xlsx' &&
              <div id='docxjs-wrapper' className='excel-content' />
            }
            {
              document.documentType == 'image' && (
              <div className='box-content image-type'>
                <Zoom>
                  <img src={Document.generateUrl(content.id)} alt='content url' />
                </Zoom>
              </div>
            )}
            {
              document.documentType == 'video' && (
              <div className='box-content image-video'>
                <video width='100%' controls controlsList='nodownload'>
                  <source src={Document.generateUrl(content.id)} type='video/mp4' />
                </video>
              </div>
            )}
            {
              document.type == 'ppt' && (
              <div className='box-content'>
                <iframe id='iframe-amazon' title='Small PPT Viewer' src={content.zip} />
              </div>
            )}
          </ContentRender>
        </Content>
        {
          loading && (
          <SweetLoading>
            <ClipLoader
              sizeUnit='px'
              size={80}
              color='#f99900'
              loading
            />
          </SweetLoading>
        )}
        {
          contentFullScreen && (
          <Modal style={{ zIndex: 100000 }} active>
            <Modal.Background style={{ styleModalBackground }} onClick={()=> {this.closeModal()}} />
            <Modal.Content style={stylecontentFullScreen}>
              <iframe
                id='iframe'
                title='full-screen'
                style={{ width:'100%', height: '100%' }}
                src={`/content-viewer-full-screen?${params}`}
              />
            </Modal.Content>
            <Modal.Close onClick={()=> {this.closeModal()}} />
          </Modal>
        )}
      </React.Fragment>
    )
  }
}

ContentViewer.propTypes = {
  query: propTypes.object
}

const styleModalBackground = {
  backgroundColor: 'rgba(0, 0, 0, 0.7)'
}

const stylecontentFullScreen = {
  width: '100%',
  height: '100%',
  maxHeight: '100%'
}

const ContentRender = styled.div`
  margin-top: 30px;
  overflow-y: scroll;
  position: relative;

  #docxjs-wrapper {
    height: 700px;

    .docx-outline {
      padding-top: 0;
    }

    .docx-pages {
      margin-top: 0;
      border: 0;
    }

    .docx-frame {
      background: #fff !important;
    }

    .docx-division-bottom {
      background: transparent;
      border: 0;
    }
  }

  .pdfViewer {
    height: 700px;
    overflow-x: visible;
    overflow-y: visible;
  }

  .box-content {
    overflow-y: scroll;

    iframe {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
    }

    #iframe-amazon {
      width: 100%;
      height: 600px;
      position: relative;
    }

    &.image-type {
      img {
        width: 100%;
      }
    }

    &.image-video {
      display: flex;
      height: 100%;
      flex-direction: column;

      video {
        height: 100%;
        width: 100%;
        margin: 0 auto;
      }
    }
  }
`

const ColShare = styled.div``

const BreathCum = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colorBlue} !important;
  padding: 10px 0;

  a {
    color: ${props => props.theme.colorBlue} !important;
  }
`
const RowFilter = styled.div`
  color: ${props => props.theme.colorBlue};
  margin-top: 15px;
  display: flex;

  .col-right {
    display: flex;
    flex: 1 1 100%;
    justify-content: flex-end;

    .errorEmail {
      color: red;
      float: right;
      position: absolute;
      margin-top: -25px;
      margin-left: -120px;
    }

    .button-filter {
      display: flex;
      height: 50px;
      align-items: center;
      justify-content: center;
      padding: 0 25px;
      border-top: 1px solid ${props => props.theme.colorBlue};
      border-bottom: 1px solid ${props => props.theme.colorBlue};
      box-sizing: border-box;
      font-size: 14px;
      font-family: ${props => props.theme.bodyFont};
      cursor: pointer;
      margin-left: 10px;
      box-shadow: none !important;
      outline: none !important;

      &.col-favorite {
        position: relative;
        padding-left: 40px;

        &::before {
          position: absolute;
          content: '';
          width: 25px;
          height: 25px;
          left: 10px;
          background-image: url(${IconStart});
          background-size: 100%;
          background-position: center center;
          top: 50%;
          margin-top: -14px;
          background-repeat: no-repeat;
        }

        &.active {
          &::before {
            background-image: url(${IconStartActive});
          }
        }
      }

      &.item-input {
        margin-right: -10px;
        padding: 0;
        display: none;

        input {
          border: none;
          height: 48px;
          width: 230px;
          padding: 0 15px;
          box-sizing: border-box;
          font-size: 14px;
        }

        &.show {
          display: block;
        }
      }
    }
  }

  .col-left {
    display: flex;
    flex: 1 1 auto;

    .dropdown {
      width: 230px;
      border-top: 1px solid ${props => props.theme.colorBlue};
      border-bottom: 1px solid ${props => props.theme.colorBlue};
      height: 50px;
      padding: 0 15px;
      box-sizing: border-box;
      position: relative;

      &.is-active {
        .dropdown-menu {
          display: block;
        }
      }

      .dropdown-menu {
        display: none;
        border: 1px solid ${props => props.theme.colorBlue};
        position: absolute;
        right: 0;
        top: 65px;
        width: 70%;
        left: auto;
        z-index: 10000;
        padding: 0;
        background-color: #f9f9f9;

        &::after,
        &::before {
          bottom: 100%;
          left: calc(100% - 20px);
          border: solid transparent;
          content: " ";
          height: 0;
          width: 0;
          position: absolute;
          pointer-events: none;
        }

        &::after {
          border-bottom-color: ${props => props.theme.colorBody};
          border-width: 10px;
          margin-left: -10px;
        }

        &::before {
          border-bottom-color: ${props => props.theme.colorBlue};
          border-width: 11px;
          margin-left: -11px;
        }

        .dropdown-content {
          background-color: ${props => props.theme.colorBox};
          display: flex;
          flex-direction: column;
          padding: 0;
          box-shadow: none;
          border-radius: 0;

          .dropdown-item {
            cursor: pointer;
            display: flex;
            align-items: center;
            height: 50px;
            border-bottom: 1px solid ${props => props.theme.colorBlue};
            box-sizing: border-box;
            background-color: ${props => props.theme.colorBox} !important;
            padding: 0 15px;

            svg {
              width: 35px;
              margin-left: 0;
              margin-right: 10px;
            }

            span {
              color: ${props => props.theme.colorTextBody};
              font-size: 14px;
            }

            &:last-child {
              border-bottom: 1px solid transparent;
            }
          }
        }
      }

      .dropdown-trigger {
        cursor: pointer;
        height: 50px;
        display: flex;
        align-items: center;

        &::before {
          position: absolute;
          content: '';
          width: 14px;
          height: 14px;
          right: 15px;
          background-image: url(${IconCheck});
          background-size: 100%;
          background-position: center center;
          top: 50%;
          margin-top: -7px;
          background-repeat: no-repeat;
        }

        span.title-dropdown {
          font-size: 14px;
          font-family: ${props => props.theme.bodyFont};
        }

        img {
          width: 18px;
          object-fit: contain;
          margin-right: 10px;
        }
      }
    }
  }
`

const Title = styled.div`
  color: ${props => props.theme.colorTextBody};
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
    width: 45px;

    path {
      fill: ${props => props.theme.colorTextBody} !important;
    }
  }
`

const TitleLang = styled.div`
  color: ${props => props.theme.colorTextBody};
  display: flex;
  align-items: center;

  svg {
    width: 30px;
  }
`

const Content = styled.div`
  flex: 1 1 100%;
  box-sizing: border-box;
  height: 100%;
  overflow-y: scroll;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
`

const SideMenuDocument = styled.div`
  position: relative;
  display: flex;
  box-sizing: border-box;
  height: 100%;
  flex-direction: column;
  width: 300px;
  background-color: ${props => props.theme.colorContent};
  flex: 1 1 auto;
  min-width: 300px;
  border-right: 1px solid ${props => props.theme.colorBlue};
  max-width: 300px;

  .active {
    font-weight: bolder;
  }
`

export default withUserAuth(ContentViewer)
