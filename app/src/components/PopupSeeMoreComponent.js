/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import styled from 'styled-components'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { IconSeeMore } from './Icons'

class PopupSeeMoreComponent extends Component {

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
    const { type, children, text, color, allowShowContent, lenghtDay, index } = this.props
    const { showDropDown } = this.state
    const contentText = `event ${color} length${lenghtDay}`
    return (
      <PopupUserGroup
        value={index}
        ref={this.setWrapperRef}
        className={(showDropDown == true && allowShowContent) ? 'isActive notEmpty' : 'notEmpty'}
      >
        <div
          id='head-popup-user-group'
          className='head'
          role='button'
          tabIndex={0}
          onKeyUp={() => this.showDropDownUserGroup()}
          onClick={() => this.showDropDownUserGroup()}
        >
          {type == 'detail' && (
            <div
              className={allowShowContent ? contentText: `${contentText} gray`}
            > 
              {' '}
              {text}
            </div>
          )}
          {type == 'seeMore' && (
            <div className='add-new'>
              click here to see more
            </div>
          )}
         
        </div>
        <div id='content-popup-user-group' className={type == 'detail'? 'content detail': 'content'}>
          {children}
          <div
            className='bottom-content'
            role='button'
            tabIndex={0}
            onKeyUp={() => this.showDropDownUserGroup()}
            onClick={() => this.showDropDownUserGroup()}
          >
              Close
          </div>
        </div>
      </PopupUserGroup>
    )
  }
}

PopupSeeMoreComponent.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
  index: PropTypes.string,
  lenghtDay: PropTypes.number,
  allowShowContent: PropTypes.bool,
  children: PropTypes.node
}

const PopupUserGroup = styled.div`
  width: 100%;
  position: relative;

  .bottom-content {
    padding: 15px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    cursor: pointer;
    background-color: ${props => props.theme.colorBlue};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  &.isActive {
    .content {
      display: block;
    }

    .add-new {
      &::after,
      &::before {
        display: block !important;
      }
    }

    .event {
      &::after,
      &::before {
        display: block !important;
      }
    }
  }

  .head {
    position: relative;
    outline: none !important;
    box-shadow: none !important;
    margin-bottom: 3px;
    height: 30px;

    .add-new {
      width: 100%;
      padding: 3px 0 6px 20px;
      background-image: url(${IconSeeMore});
      background-repeat: no-repeat;
      background-size: 13px;
      background-position: left center;
      box-sizing: border-box;
      cursor: pointer;
      font-size: 14px;
      font-family: ${props => props.theme.bodyFontBold};

      &::after {
        left: calc(100% + 8px);
        top: 50%;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        z-index: 10000;
        display: none;
        border-right-color: ${props => props.theme.colorWhite};
        border-width: 20px;
        margin-top: -20px;
        margin-left: -10px;
      }
    }
  }

  .content {
    background-color: ${props => props.theme.colorWhite};
    border-radius: 10px;
    position: absolute;
    width: 400px;
    z-index: 1000;
    display: none;
    box-shadow: 5px 5px 15px 0 rgba(0, 0, 0, 0.5);
    top: -172px;
    left: 100%;
    margin-left: 38px;

    &.detail {
      top: 60px;
      left: 50%;
      margin-left: -200px;

      .date {
        position: relative;

        &::after {
          bottom: 100%;
          left: 50%;
          border: solid transparent;
          content: " ";
          height: 0;
          width: 0;
          position: absolute;
          pointer-events: none;
          border-color: rgba(136, 183, 213, 0);
          border-bottom-color: #fff;
          border-width: 20px;
          margin-left: -20px;
        }
      }

      .yellow {
        &::after {
          border-bottom-color: #fae147;
        }
      }

      .green {
        &::after {
          border-bottom-color: #21ccd1;
        }
      }

      .gray {
        &::after {
          border-bottom-color: #c7c7c7;
        }
      }

      .pink {
        &::after {
          border-bottom-color: #f99900;
        }
      }
    }
  }
`

export default PopupSeeMoreComponent
