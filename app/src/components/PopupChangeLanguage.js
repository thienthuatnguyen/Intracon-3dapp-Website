import styled from 'styled-components'
import React, { Component } from 'react'
import propTypes from 'prop-types'
import { IconLang } from './Icons'

class PopupChangeLanguage extends Component {

  state = {
    showDropDown: false
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  showDropDownUserGroup = () => {
    const { showDropDown } = this.state
    this.setState({
      showDropDown: !showDropDown
    })
  }

  handleClickOutside = event => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({
        showDropDown: false
      })
    }
  }

  setWrapperRef = node => {
    this.wrapperRef = node
  }

  render() {
    const { children } = this.props
    const { showDropDown } = this.state
    return (
      <React.Fragment>
        <Language ref={this.setWrapperRef} className={showDropDown? 'showDropdown': ''}>
          <div
            role='button'
            tabIndex={0}
            className='icon'
            onKeyUp={() => this.showDropDownUserGroup()}
            onClick={() => this.showDropDownUserGroup()}
          >
            <IconLang />
          </div> 
          <Wrapper className='wrapper'>
            { children }
          </Wrapper>
        </Language>
      </React.Fragment>
    )
  }
}

PopupChangeLanguage.propTypes = {
  children: propTypes.node
}

const Language = styled.div`
  flex: 1 1 auto;
  height: 60px;
  display: flex;
  flex-direction: column;
  width: 40px;
  max-width: 40px;
  min-width: 40px;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 12px;
  box-sizing: border-box;

  img {
    cursor: pointer;
    width: 16px;
    object-fit: contain;
  }

  &.showDropdown {
    .wrapper {
      width: 150px;
      opacity: 1;
      border: 1px solid ${props => props.theme.colorBlue};
    }
  }
`
const Wrapper = styled.div`
  position: absolute;
  right: -165px;
  width: 150px;
  z-index: 1000;
  background-color: ${props => props.theme.colorContent};
  top: -1px;
  box-sizing: border-box;
  opacity: 0;

  &::after,
  &::before {
    right: 100%;
    top: 30px;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    z-index: 1000;
  }

  &::after {
    border-right-color: ${props => props.theme.colorContent};
    border-width: 10px;
    margin-top: -10px;
  }

  &::before {
    border-right-color: ${props => props.theme.colorBlue};
    border-width: 11px;
    margin-top: -11px;
  }

  .row-country {
    border-bottom: 1px solid ${props => props.theme.colorBlue};
    height: 60px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding-left: 8px;

    .icon-flag {
      width: 60px;
      flex: 1 1 auto;
    }

    svg {
      width: 40px;
    }

    &:last-child {
      border-bottom: 1px solid transparent;
    }

    .name {
      flex: 1 1 100%;
      font-family: ${props => props.theme.bodyFont};
      color: ${props => props.theme.colorTextBody};
    }
  }
`

export default PopupChangeLanguage
