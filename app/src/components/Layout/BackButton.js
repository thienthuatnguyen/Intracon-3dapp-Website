import styled from 'styled-components'
import IconBack from '../../static/imgs/back.png'

const BackButton = (props) => {
  const handleClick = () => {
    history.go(-1)
  }
  if (props.type == 'backHome') {
    return (
      <Wrapper className='active backbutton absolute' href='/'>
        <img alt='icon' src={IconBack} />
        <span>Back</span>
      </Wrapper>
    )
  }
  else {
    return (
      <Wrapper className='active backbutton' onClick={handleClick}>
        <img alt='icon' src={IconBack} />
        <span>Back</span>
      </Wrapper>
    )
  }
  
}

const Wrapper = styled.a`
  height: 60px;
  min-height: 60px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding-left: 18px;
  border-bottom: 1px solid ${props => props.theme.colorBorder};
  background-color: ${props => props.theme.colorBlue};
  color: white;
  cursor: pointer;
  width: 299px;

  img {
    width: 12px;
    margin-right: 10px;
  }

  span {
    font-size: 13px;
  }

  &.absolute {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }

  &:hover {
    color: white;
  }
`
export default BackButton
