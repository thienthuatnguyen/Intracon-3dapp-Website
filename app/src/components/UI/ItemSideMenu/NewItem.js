import styled from 'styled-components'

const NewItem = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  height: 100%;
  position: relative;
  width: 25px;
  min-width: 25px;

  &::before {
    content: '';
    width: 14px;
    height: 14px;
    background-color: #f99900;
    border-radius: 50%;
    position: absolute;
    top: 14px;
    right: 10px;
    box-sizing: border-box;
    border: 1px solid #fff;
  }
`
export default NewItem

