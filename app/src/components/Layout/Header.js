import styled from 'styled-components'
import Logo from '../../static/imgs/appLogo.png'
import SearchBox from '../SearchBox'

const Header = () => (
  <HeaderWrapper className='cms-header'>
    <div className='logo'>
      <img src={Logo} alt='logo' />
    </div>
    <div className='right-header'>
      <SearchBox />
    </div>
  </HeaderWrapper>
)

const HeaderWrapper = styled.section`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #0096d6;

  .logo {
    flex: 1 1 auto;
    height: 60px;
    padding-left: 15px;
    flex-direction: column;
    display: flex;
    justify-content: center;

    img {
      height: 53px;
      width: auto;
      object-fit: contain;
    }
  }

  .right-header {
    flex: 1 1 100%;
    justify-content: flex-end;
    align-items: center;
    display: flex;
    padding-right: 15px;
    box-sizing: border-box;

    .search-icon {
      cursor: pointer;

      img {
        width: 18px;
        object-fit: contain;
      }
    }
  }
`

export default Header
