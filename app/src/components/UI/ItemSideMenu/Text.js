import styled from 'styled-components'

const Text = styled.div`
  flex: 1 1 100%;
  color: #fff;
  height: 44px;
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  font-size: 14px;
  box-sizing: border-box;
  margin: 8px 0;
  overflow: hidden;
  -webkit-line-clamp: 2;
  font-family: ${props => props.theme.bodyFont};
`

export default Text
