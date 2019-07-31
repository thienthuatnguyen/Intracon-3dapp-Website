import styled from 'styled-components'

const RowItemDocument = styled.div`
  display: flex;
  cursor: pointer;
  height: 60px;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colorBlue};
  box-sizing: border-box;
  position: relative;
  padding-left: 8px;
  min-height: 60px;

  &.active {
    > .txt {
      color: ${props => props.theme.colorTextBody};
      font-weight: 800;
    }
  }
`

export default RowItemDocument
