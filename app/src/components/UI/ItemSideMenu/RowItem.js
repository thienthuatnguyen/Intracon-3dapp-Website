import styled from 'styled-components'

const RowItem = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  border-bottom: 1px solid #fff;
  height: 60px;
  box-sizing: border-box;

  &.active {
    background-color: #fff;

    > .txt {
      color: ${props => props.theme.colorBlue};
    }

    svg {
      path {
        fill: ${props => props.theme.colorBlue} !important;
      }
    }
  }
`

export default RowItem


