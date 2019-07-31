/* eslint-disable no-loops/no-loops */
/* eslint-disable no-undef */
import styled from 'styled-components'
import React, { Component } from 'react'
import propTypes from 'prop-types'
import ToggleContentParent from '../ToggleContentParent'
import Menu from '../../services/menu'
import Image from '../../services/image'
import Authorization from '../../services/authorization'
import Document from '../../services/document'
import { removeAccessToken } from '../../utils/storage'
import RowItem from '../UI/ItemSideMenu/RowItem'
import RowItemDocument from '../UI/ItemSideMenu/RowItemDocument'
import TextDocument from '../UI/ItemSideMenu/TextDocument'
import RowItemSub from '../UI/ItemSideMenu/RowItemSub'
import TextSub from '../UI/ItemSideMenu/TextSub'
import Icon from '../UI/ItemSideMenu/Icon'
import Text from '../UI/ItemSideMenu/Text'
import NewItem from '../UI/ItemSideMenu/NewItem'
import { HomeIcon, ContactIcon, FavoritesIcon, CostCalculator } from '../Icons'
import IconDocument from '../IconDocument'
import PopupChangeLanguage from '../PopupChangeLanguage'
import FlagDocument from '../FlagDocument'

class SideMenu extends Component {
  state = {
    rawMenus: '',
    openId: '',
    menus: [],
    layers: []
  }

  async componentDidMount() {
    const { staticValue } = this.props
    document.addEventListener('mousedown', this.handleClickOutside)
    const menus = []
    const response = await Menu.getAll()
    response.data.sort((a, b) => a.position - b.position)
    response.data.forEach(item => {
      item.viewed = true
      if (!item.parentMenuId) {
        menus.push(item)
      }
    })

    this.setState({ openId: staticValue, menus, rawMenus: response.data }, async () => {
      $('.bottom-item').show().css('display','flex')

      // parse the hashes and restore menu states
      const hashes = location.hash.split('/')
      for (let x = 0;x < hashes.length;x++) {
        hashes[x] = hashes[x].replace('#', '')
        if (hashes[x]) {
          if (x == 0) {
            await this.getCallBack(hashes[x], false, true)
          } else {
            await this.getCallBackChild(hashes[x], x, false, true)
          }
        }
      }

      // build viewed data
      this.buildViewedDocument()
    })
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node
  }

  getCallBack = async (value, animation, hashing) => {
    await this.getCallBackChild(value, 0, animation, hashing)
    this.setState({ openId: value })
  }

  getCallBackChild = async (value, layerIndex, animation, hashing) => {
    const { rawMenus, layers } = this.state
    const menu = rawMenus.filter(menu => menu.id == value)[0]
    const menus = rawMenus.filter(menu => menu.parentMenuId == value)
    const documents = menu.documentList
    const isCalendar = menu.name.toLowerCase().indexOf('3dp training') == -1 ? false: true

    // change hash location so it can perform go back function
    if (!hashing) {
      const hashes = layerIndex == 0 ? [] : location.hash.split('/')
      if (hashes[layerIndex]) {
        hashes[layerIndex] = value
      } else {
        hashes.push(value)
      }
      location.hash = hashes.join('/')
    }

    if (!isCalendar && menus.length == 0 && documents.length == 0) {
      if (layers.length > 0 && layers[layerIndex - 1]) {
        layers[layerIndex - 1].openId = value
      }

      if (layerIndex == 0) {
        const el = document.getElementById('bgMainPage')
        Image.getUrl(menu.backgroundId).then(img => {
          el.style.backgroundImage = `url('${img.data}')`
          el.style.display = 'block'
        })
      }
      
      layers.splice(layerIndex)
      this.setState({ layers })
    } else {
      const num = layerIndex - 1
      if (layerIndex > 2) {
        if (animation && num + 1 == layers.length ) {
          $(`#layer${num}`).css({ 'z-index': 1100 })
          await $(`#layer${num}`).animate({ 'left': '-=200px' }).promise()
          if (layers[num]) {
            layers[num].styleIndex = 1
          }
        }
        this.setDataState(layers, value, layerIndex, animation)
      } else {
        this.setDataState(layers, value, layerIndex, animation)
      }
    }
  }

  setDataState = (stateLayers, value, layerIndex, animation) => {
    const { rawMenus } = this.state
    const layers = [...stateLayers]
    const menu = rawMenus.filter(menu => menu.id == value)[0]
    const menus = rawMenus.filter(menu => menu.parentMenuId == value)
    const documents = menu.documentList

    if (layerIndex == 0) {
      // click on non main page (contact, setting, calendar pages)
      const el = document.getElementById('bgMainPage')

      // change background if it is on main page
      Image.getUrl(menu.backgroundId).then(img => {
        el.style.backgroundImage = `url('${img.data}')`
        el.style.display = 'block'
      })
    }

    layers.splice(layerIndex)
    
    // sort menus by position
    const docData = documents.sort((a, b) => a.position - b.position)
    const theCalendar = menu.name.toLowerCase().indexOf('3dp training') == -1 ? false: true

    layers.push({
      id: `layer${layerIndex}`,
      index: layerIndex,
      styleIndex: layerIndex > 2 ? 2 : layerIndex,
      parentMenuId: value,
      menus: menus,
      documents: docData,
      isCalendar: theCalendar,
      isActive: true
    })

    const lastIndex = layerIndex == 0 ? layerIndex : layerIndex - 1
    layers[lastIndex].openId = value

    let layerLength = layers.length
    this.setState({ layers }, () => {

      // perform slide in / slide out effect
      let numId = (layerIndex).toString()
      let idLayer = '#layer' + numId

      for (let x = layerIndex; x < layerLength;x++) {
        $(`#side-menu-user #layer${x}`).css({ display: 'none', width: 0 })
      }

      if (animation) {
        $(`#side-menu-user ${idLayer}`).delay(300).css({ display: 'block' }).animate({ width: 300 })
      } else {
        $(`#side-menu-user ${idLayer}`).css({ display: 'block', width: 300 })
      }
    })
  }

  handleClickOutside = event => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      var elements = document.querySelectorAll('.sub-menu-child')
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove('open')
      }
    }
  }

  buildViewedDocument() {
    const { rawMenus } = this.state
    const documents = rawMenus.map(menu => menu.documentList).flat()
    documents.forEach(doc => {
      if (!doc.viewed) {
        let finalMenu = doc.menuId
        // set new icon to the parent
        while (finalMenu) {
          rawMenus.forEach(menu => {
            if (menu.id == finalMenu) {
              menu.viewed = false
              finalMenu = menu.parentMenuId
            }
          })
        }
      }
    })

    this.setState({ rawMenus })
  }

  closeAllLayer() {
    var elements = document.querySelectorAll('.sub-menu-child')
    for (let i = 1; i < elements.length; i++) {
      elements[i].classList.remove('open')
    }
  }

  logout() {
    try {
      Authorization.logout('web').then(response => {
        removeAccessToken()
        if (response.data != 'OK') {
          window.location = response.data
        } else {
          window.location = '/'
        }
      }).error(response => {
        removeAccessToken()
        window.location = '/'
      })
    } catch(err) {
      removeAccessToken()
      window.location = '/'
    }
  }

  openHomePage() {
    window.location.href = '/'
  }

  openCalendar() {
    window.location.href = '/calendar'
  }

  openDocument(menu, document, lang) {
    Document.viewedDocuments(document).then(() => {
      const temp = lang ? lang : 'en'
      window.location.href = `/content-viewer?menuId=${menu}&document=${document}&lang=${temp}`
    })
  }

  async openFavorites() {
    const { layers, rawMenus } = this.state
    const documents = await Document.favoriteDocuments()
    const temp = rawMenus.map(menu => menu.documentList.map(item => item.id)).flat()
    const result = []
    if (temp) {
      documents.data.forEach(item => {
        if (temp.includes(item.documentDTO.id)) {
          result.push(item.documentDTO)
        }
      })
    }
    layers.splice(0)
    layers.push({
      id: 'layer0',
      index: 0,
      styleIndex: 0,
      parentMenuId: 'favorite',
      menus: [],
      documents: result,
      isActive: true
    })

    this.setState({ openId: 'fav', layers }, () => {
      // perform slide in / slide out effect for favorite page
      let idLayer = '#layer0'
      $(`#side-menu-user ${idLayer}`).css({ display: 'none', width: 0 })
      $(`#side-menu-user ${idLayer}`).delay(300).css({ display: 'block' }).animate({ width: 300 })
    })
  }

  openContactPage() {
    window.location.href = '/contact'
  }

  openCalculator() {
    window.open('https://www.printos.com', '_blank')
  }

  render(props) {
    const { staticValue } = this.props
    const { openId, menus, layers } = this.state
    return (
      <React.Fragment>
        <WrapperSideMenu id='side-menu-user' ref={this.setWrapperRef}>
          <div className='content-menu'>
            <RowItem
              className={openId == 'homepage' ? 'active row-item bottom-item' : 'row-item bottom-item'}
              onClick={() => this.openHomePage()}
            >
              <Icon className='icon-menu'><HomeIcon /></Icon>
              <Text className='txt'>Home</Text>
            </RowItem>
            {
              menus.map(item => (
                <ToggleContentParent
                  key={item.id}
                  selectedIcon={item.primaryIconId}
                  unSelectedIcon={item.secondaryIconId}
                  imageId={item.primaryIconId}
                  title={item.name}
                  id={item.id}
                  keyId={openId} 
                  getData={this.getCallBack}
                  viewed={item.viewed}
                />
              ))
            }
            <RowItem
              className={openId == 'fav' ? 'active row-item bottom-item' : 'row-item bottom-item'}
              onClick={() => this.openFavorites()}
            >
              <Icon className='icon-menu'><FavoritesIcon /></Icon>
              <Text className='txt'>Favorites</Text>
            </RowItem>
            <RowItem
              className='row-item bottom-item'
              onClick={() => this.openCalculator()}
            >
              <Icon className='icon-menu'><CostCalculator /></Icon>
              <Text className='txt'>Cost Calculator</Text>
            </RowItem>
            <RowItem
              className={openId === 'contact' ? 'active row-item bottom-item' : 'row-item bottom-item'}
              onClick={() => this.openContactPage()}
            >
              <Icon className='icon-menu'><ContactIcon /></Icon>
              <Text className='txt'>Contact</Text>
            </RowItem>
            {
              layers && layers.map(layer => (
                <WrapperSideMenuPlayer
                  key={layer.id}
                  id={'layer' + layer.index}
                  style={{ left: `${(layer.styleIndex + 1) * 100}%`, zIndex: 1000 - layer.styleIndex }}
                >
                  {
                    layer.isCalendar && (
                    <RowItemSub
                      role='button'
                      className={openId === 'calendar' ? 'active row-item' : 'row-item'}
                      key='calendar'
                      onClick={e => this.openCalendar()}
                    >
                      <TextSub className='txt'>WW 3DP Training Calendar</TextSub>
                    </RowItemSub>
)}
                  {
                    layer.menus && layer.menus.map(menu => (
                      <RowItemSub
                        role='button'
                        className={layer.openId == menu.id ? 'active row-item' : 'row-item'}
                        key={menu.id}
                        onClick={e => this.getCallBackChild(menu.id, layer.index + 1, true)}
                      >
                        <TextSub className='txt'>{menu.name}</TextSub>
                        { !menu.viewed && <NewItem /> }
                      </RowItemSub>
                    ))
                  }
                  {
                    layer.documents && layer.documents.map(document => (
                      <RowItemDocument
                        role='button'
                        className={layer.openId == document.id ? 'active row-item' : 'row-item'}
                        key={document.id}
                      >
                        <Icon onClick={e => this.openDocument(layer.parentMenuId, document.id)} className='icon-menu'>
                          <IconDocument documentType={document.documentType ? document.documentType : document.type} />
                        </Icon>
                        <TextDocument
                          onClick={e => this.openDocument(layer.parentMenuId, document.id)}
                          className='txt'
                        >
                          {document.name}
                        </TextDocument>
                        {
                          document.languages && document.languages.length > 1 && (
                          <PopupChangeLanguage>
                            { document.languages.map(lang => (
                              <div
                                role='button'
                                tabIndex={0}
                                onKeyUp={e => this.openDocument(layer.parentMenuId, document.id, lang.toLowerCase())}
                                onClick={e => this.openDocument(layer.parentMenuId, document.id, lang.toLowerCase())}
                                className='row-country'
                              >
                                <div className='icon-flag'>
                                  <FlagDocument lang={lang.toLowerCase()} />
                                </div>
                                <div className='name'>{lang.toUpperCase()}</div>
                              </div>
))}
                          </PopupChangeLanguage>
)}
                        { !document.viewed && <NewItem /> }
                      </RowItemDocument>
                    ))
                  }
                </WrapperSideMenuPlayer>
              ))
            }
          </div>
          <div className='bottom-menu'>
            <a href='#' onClick={() => this.logout()}>Logout</a>
            <a className={staticValue === 'setting' ? 'active' : ''} href='/app-setting'>App Settings</a>
            <a className={staticValue === 'term' ? 'active' : ''} href='/term-and-conditions'>Term and conditions</a>
          </div>
        </WrapperSideMenu>
      </React.Fragment>
    )
  }
}

SideMenu.propTypes = {
  staticValue: propTypes.string
}

const WrapperSideMenuPlayer = styled.div`
  background-color: ${props => props.theme.colorContent};
  position: absolute;
  height: 100%;
  top: 0;
  width: 0;
  border-right: 1px solid ${props => props.theme.colorBlue};
  padding: 0;
  box-sizing: border-box;
  opacity: 1;
  z-index: 10;
`

const WrapperSideMenu = styled.div`
  width: 300px;
  flex: 1 1 auto;
  background-color: ${props => props.theme.colorBlue};
  position: relative;
  padding-top: 60px;
  min-width: 300px;
  box-sizing: border-box;
  border-right: 1px solid ${props => props.theme.colorBlue};
  display: flex;
  flex-direction: column;

  .content-menu {
    flex: 1 1 100%;
    overflow-y: scroll;
  }

  .bottom-menu {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-bottom: 15px;
    padding-top: 10px;

    a {
      color: ${props => props.theme.colorWhite} !important;
      font-size: ${props => props.theme.languagesSize};
      padding: 2px 0;

      &.active {
        font-size: 17px;
      }
    }
  }

  .bottom-item {
    display: none;
  }
`

export default SideMenu
