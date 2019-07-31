import styled from 'styled-components'

const RowItemSub = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colorBlue};
  height: 60px;
  box-sizing: border-box;

  &.active {
    > .txt {
      color: ${props => props.theme.colorTextBody};
      font-weight: 800;
    }
  }
`

export default RowItemSub
