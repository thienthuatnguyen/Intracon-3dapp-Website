import styled from 'styled-components'

const TextSub = styled.div`
  display: flex;
  flex: 1 1 100%;
  height: 44px;
  align-items: flex-start;
  padding: 0 15px;
  font-size: 14px;
  color: ${props => props.theme.colorTextBody};
  box-sizing: border-box;
  margin: 8px 0;
  overflow: hidden;
  -webkit-line-clamp: 2;
  font-family: ${props => props.theme.bodyFont};
`

export default TextSub
