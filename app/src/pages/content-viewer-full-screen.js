/* eslint-disable no-loops/no-loops */
/* eslint-disable no-undef */
/* eslint-disable react/no-danger */
import { Document as PdfViewer, Page, pdfjs } from 'react-pdf'
import styled from 'styled-components'
import propTypes from 'prop-types'
import React, { Component } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import { IconShowMore, IconX } from '../components/Icons'
import Document from '../services/document'
import SweetLoading from '../components/UI/SweetLoading'

pdfjs.GlobalWorkerOptions.workerSrc = '/static/kukudoc/scripts/pdfWorker.js'

class ContentViewerFullScreen extends Component {  
  state = {
    pdfWidth: 800,
    currentPdf: 1,
    zoomLevel: 1,
    showControl: false,
    instance: null
  } 

  static async getInitialProps({ req, query, params }) {
    if (req) {
      return { query: req.query, params: req.params }
    }
    return { query, params }
  }

  async componentDidMount() {
    const { query } = this.props

    this.setState({
      id: query.id,
      type: query.type,
      url: query.url,
      loading: true
    }, () => {
      if (query.type == 'video' || query.type == 'image' || query.type == 'ppt') {
        setTimeout(() => {
          this.setState({ loading: false })
        }, 1000)
      } else if (query.type != 'pdf') {
        this.loadAndRenderDoc(query.id, query.type)
      }

      setTimeout(() => {
        // prevent the loading icon keep going forever
        this.setState({ loading: false })
      }, 6000)
    })
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
          
          const $docxjsWrapper = $('#docxjs-wrapper1')
          const element = $docxjsWrapper[0]
          const endCallBackFn = function(result){
              _this.setState({ loading: false })
              if (result.isError) {
                console.log(result)
              } else {
                instance.ui.desktopUI.jsViewer.setZoom(0.8)
              }
          }
          if (type === 'docx') {
              window.docxAfterRender(element, endCallBackFn)
          } else if (type === 'xlsx') {
              window.cellAfterRender(element, endCallBackFn)
          }
        })

        _this.setState({ instance: instance })
      }
    }
    xhr.send()
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    const pdfPages = []
    for(let x = 1;x <= numPages;x++) {
      pdfPages.push(x)
    }

    this.setState({ 
      loading: false,
      currentPdf: 1,
      pdfPages: pdfPages
    })
  }

  showControl = () => {
    const { showControl } = this.state
    this.setState({
      showControl: !showControl
    })
  }

  zoomIn() {
    const { type, zoomLevel, instance } = this.state
    if (type === 'docx' || type === 'xlsx') {
      instance.ui.desktopUI.jsViewer.setZoom(zoomLevel + 0.2)
    }
    if (zoomLevel < 1.2) {
      this.setState({ zoomLevel: zoomLevel + 0.2 })
    }
  }

  zoomOut() {
    const { type, zoomLevel, instance } = this.state
    if (type === 'docx' || type === 'xlsx') {
      instance.ui.desktopUI.jsViewer.setZoom(zoomLevel - 0.2)
    }
    if (zoomLevel > 1) {
      this.setState({ zoomLevel: zoomLevel - 0.2 })
    }
  }

  nextPage() {
    const { currentPdf, pdfPages } = this.state
    if (currentPdf < pdfPages.length) {
      this.setState({ currentPdf: currentPdf + 1 })
    }
  }

  prevPage() {
    const { currentPdf } = this.state
    if (currentPdf > 1) {
      this.setState({ currentPdf: currentPdf +-1 })
    }
  }

  render(props) {
    const { id, type, url, currentPdf, pdfWidth, showControl, zoomLevel, loading } = this.state
    return (
      <React.Fragment>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .cms-header {
              display: none;
            }
            .pdfViewer,
            #docxjs-wrapper,
            #docxjs-wrapper1 {
                margin: 0 auto;
            }
            body, html {
              background-color: transparent;
            }
          `
          }}
        />
        {
          type == 'pdf' && (
          <ContentPdf className='pdfViewer'>
            <PdfViewer
              renderMode='svg'
              file={Document.download(id)}
              onLoadSuccess={this.onDocumentLoadSuccess}
            >
              <Page width={pdfWidth * zoomLevel} pageNumber={currentPdf} />
            </PdfViewer>
          </ContentPdf>
)}
        {
          type === 'docx' && <Content id='docxjs-wrapper1' />
        }
        {
          type === 'xlsx' && <ContentExcel id='docxjs-wrapper1' />
        }
        {
          type === 'image' && (
          <ContentMedia>
            <img src={Document.generateUrl(id)} alt='content url' />
          </ContentMedia>
)}
        {
          type === 'video' && (
          <ContentMedia className='width-video'>
            <video width='100%' controls controlsList='nodownload'>
              <source src={Document.generateUrl(id)} type='video/mp4' />
            </video>
          </ContentMedia>
)}
        {
          type == 'ppt' &&
          (
            <ContentMedia>
              <iframe title='PPT Viewer' style={{ width: '100%', height: '100%' }} src={url} />
            </ContentMedia>
          )
        }
        <Control className={showControl ? 'active': ''}>
          {
            type == 'pdf' && (
            <React.Fragment>
              <div
                className='icon icon-left'
                role='button'
                tabIndex={0}
                onKeyDown={e => this.prevPage()}
                onClick={e => this.prevPage()}
              >
                {'<'}
              </div>
              <div
                className='icon icon-right'
                role='button'
                tabIndex={0}
                onKeyDown={e => this.nextPage()}
                onClick={e => this.nextPage()}
              >
                {'>'}
              </div>
            </React.Fragment>
)}
          {
            (type == 'pdf' || type == 'docx' || type == 'xlsx') && (
            <React.Fragment>
              <div
                className='icon icon-minus'
                role='button'
                tabIndex={0}
                onKeyDown={e => this.zoomOut()}
                onClick={e => this.zoomOut()}
              >
                {'_'}
              </div>
              <div
                className='icon icon-plus'
                role='button'
                tabIndex={0}
                onKeyDown={e => this.zoomIn()}
                onClick={e => this.zoomIn()}
              >
                {'+'}
              </div>
              <div
                className='icon menu'
                role='button'
                tabIndex={0}
                onKeyDown={() => this.showControl()}
                onClick={() => this.showControl()}
              >
                { !showControl && <IconShowMore /> }
                { showControl && <IconX /> }
              </div>
            </React.Fragment>
)}
        </Control>
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
      </React.Fragment>
    )
  }
}

ContentViewerFullScreen.propTypes = {
    query: propTypes.object
}

const Content = styled.div`
  height: 100%;
  width: 900px;

  #docxjs-wrapper {
    height: 100%;

    .docx-outline {
      padding-top: 0;
    }

    .docx-pages {
      margin-top: 0;
    }
  }

  .docx-frame {
    height: 130%;
    background: none !important;
    margin-left: -50px !important;
  }

  .box-content {
    overflow-y: scroll;
  }
`

const ContentMedia = styled.div`
  height: 100%;
  width: 100%;
  padding: 0;

  &.width-video {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const ContentExcel = styled.div`
  height: 100%;
  width: 900px;

  #docxjs-wrapper {
    height: 100%;

    .docx-outline {
      padding-top: 0;
    }

    .docx-pages {
      margin-top: 0;
    }
  }

  .docx-frame {
    height: 130%;
    background: none !important;
    margin-left: -50px !important;
  }

  .box-content {
    overflow-y: scroll;

    &.image-type {
      img {
        width: 100%;
      }
    }
  }
`

const ContentPdf = styled.div`
  height: 100%;
  margin-left: -85px;
`


const Control = styled.div`
  .icon {
    width: 20px;
    height: 25px;
    cursor: pointer;
    color: #fff;
    font-weight: 500;
    font-size: 20px;

    img {
      object-fit: contain;
    }

    &.menu {
      img {
        width: 15px;
      }
    }

    &.icon-plus {
      display: none;
    }

    &.icon-minus {
      padding-bottom: 10px;
      display: none;
    }

    &.icon-right {
      display: none;
    }

    &.icon-left {
      display: none;
    }
  }

  z-index: 100;
  right: 30px;
  position: fixed;
  bottom: 40px;
  display: flex;
  flex-direction: column;

  &.active {
    .icon-plus,
    .icon-minus,
    .icon-right,
    .icon-left {
      display: flex;
    }

    .menu {
      img {
        width: 20px;
      }
    }
  }
`
export default ContentViewerFullScreen
