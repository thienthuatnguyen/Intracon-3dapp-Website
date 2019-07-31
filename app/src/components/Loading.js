import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'
import LoadingImage from '../static/imgs/loading.gif'

const Loading = ({ showLoading }) => (
  <LoadingWrap className={showLoading == true? 'show': 'hidden'}>
    <img src={LoadingImage} alt='loading' />
  </LoadingWrap>
)
const LoadingWrap = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  z-index: 1000;

  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }

  &.show {
    display: flex;
  }

  &.hidden {
    display: none;
  }
`
Loading.propTypes = {
  showLoading: PropTypes.bool
}
export default Loading
