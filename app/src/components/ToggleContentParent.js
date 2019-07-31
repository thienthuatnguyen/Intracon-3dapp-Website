/* eslint-disable react/forbid-prop-types */
/* eslint-disable sx-a11y/click-events-have-key-events */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Image from '../services/image'
import RowItem from './UI/ItemSideMenu/RowItem'
import Icon from './UI/ItemSideMenu/Icon'
import Text from './UI/ItemSideMenu/Text'
import NewItem from './UI/ItemSideMenu/NewItem'

class ToggleContentParent extends Component {

  state = {
    selectedIconUrl: '',
    unSelectedIconUrl: ''
  }

  async componentDidMount() {
    const { selectedIcon, unSelectedIcon } = this.props
    if (selectedIcon) {
      const selected = await Image.getUrl(selectedIcon)
      const unselected = await Image.getUrl(unSelectedIcon)
      this.setState({
        selectedIconUrl: selected.data,
        unSelectedIconUrl: unselected.data
      })
    }
  }

  onItemClick = (id) => {
    const { getData } = this.props
    getData(id, true, false)
  }

  render(props) {
    const { selectedIconUrl, unSelectedIconUrl } = this.state
    const { viewed, keyId, id, icon, title } = this.props
      return (
        <RowItem id={id} className={(id == keyId ) ? 'active row-item' : 'row-item'}>
          <Icon onClick={() => { this.onItemClick(id) }} className='icon-menu'>
            { icon && this.getIcon(icon) }
            { id == keyId && selectedIconUrl && <img src={selectedIconUrl} alt='icon' /> }
            { id != keyId && unSelectedIconUrl && <img src={unSelectedIconUrl} alt='icon' /> }
          </Icon>
          <Text onClick={() => { this.onItemClick(id) }} className='txt'>{ title }</Text>
          { !viewed && <NewItem /> }
        </RowItem>
      )
  }
}

ToggleContentParent.propTypes = {
  keyId: PropTypes.any,
  getData: PropTypes.func,
  closeOutSide: PropTypes.any,
  id: PropTypes.any,
  title: PropTypes.string,
  children: PropTypes.any,
  icon: PropTypes.any,
  selectedIcon: PropTypes.number,
  unSelectedIcon: PropTypes.number,
  viewed: PropTypes.bool
}

export default ToggleContentParent