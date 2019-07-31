import styled from 'styled-components'

const TextDocument = styled.div`
  display: flex;
  flex: 1 1 100%;
  height: 44px;
  align-items: flex-start
  font-size: 14px !important;
  color: ${props => props.theme.colorTextBody};
  box-sizing: border-box;
  margin: 8px 0;
  overflow: hidden;
  -webkit-line-clamp: 2;
  font-family: ${props => props.theme.bodyFont};
`

export default TextDocument
