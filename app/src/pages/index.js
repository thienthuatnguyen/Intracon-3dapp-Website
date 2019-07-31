import styled from 'styled-components'
import PropTypes from 'prop-types'
import BackGround from '../static/imgs/home/home-bg.jpg'
import Authorization from '../services/authorization'
import { setAccessToken, getAccessToken, setCookie, removeAccessToken } from '../utils/storage'
import Loading from '../components/Loading'
import SideMenu from '../components/Layout/SideMenu'
import LogoHP from '../static/imgs/hp-logo.png'
import BackGroundContent from '../components/UI/BackGroundContent'

class HomePage extends React.Component {

  state = {
    error: false,
    errorText: '',
    loading: true
  }

  static async getInitialProps({ req, query, params }) {
    if (req) {
      return { query: req.query, params: req.params }
    }

    return { query, params }
  }

  componentDidMount() {
    const { query } = this.props
    const token = getAccessToken()
    if (query.code) {
      try {
        Authorization.token({ code: query.code, type: 'web' }).then(
          response => {
            // success login
            if (response.data.error ||
                (typeof response.data === 'string' && response.data.indexOf('INVALID_TOKEN') != -1)) {
              this.resetLogin(true, 'Your Login is invalid. Please try again')
            } else if (response.data && response.data.access_token) {
              const sessionExpire = new Date(new Date().getTime() + 90000000)
              setAccessToken(response.data.access_token, { expires: sessionExpire, path: '/' })
              setCookie('email', response.data.email, { expires: sessionExpire, path: '/' })
              window.location.href = '/'
            } else {
              this.resetLogin(true, 'Your account: (email address) does not exist. Please contact 3D website Admin')
            }
          }
        )
      } catch(e) {
        this.resetLogin(
          true,
          'An error occurred. The connection timed out due to inactivity or the server is unable to respond.')
      }
    } else if (!token) {
      Authorization.authen('web').then(response => {
        window.location.href = response.data
      })
    } else {
      this.setState({ error: false, loading: false })
    }
  }

  resetLogin(error, errorText) {
    this.setState({ error: error, errorText: errorText, loading: false })
    removeAccessToken()
    setTimeout(() => {
      window.location.href = '/'
    }, 5000)
  }

  render() {
    const { loading, error, errorText } = this.state
    if (error) {
      return (
        <WrapperErrorPage>
          <div className='logo'>
            <img src={LogoHP} alt='logo' />
          </div>
          <div className='content-error'>
            <div className='box'>
              <div className='text'>
                {errorText}
              </div>
            </div>
          </div>
        </WrapperErrorPage>
      )
    }
    else {
      return (
        <React.Fragment>
          {
            loading && <Loading showLoading />
          }
          {
            !loading && (
            <React.Fragment>
              <SideMenu staticValue='homepage' />
              <Wrapper />
              <BackGroundContent id='bgMainPage' />
            </React.Fragment>
          )}
        </React.Fragment>
      )
    }
  }
}

HomePage.propTypes = {
  query: PropTypes.object
}


const Wrapper = styled.div`
  background-image: url(${BackGround});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  display: flex;
  flex: 1 1 100%;
`
const WrapperErrorPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;

    img {
      object-fit: contain;
      width: 50px;
    }
  }

  .content-error {
    display: flex;
    justify-content: center;
    margin-top: 60px;

    .box {
      width: 400px;
      padding: 50px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
      background-color: #fff;

      .text {
        color: #000;
        font-size: 26px;
        font-family: ${props => props.theme.bodyFont};
      }

      .ression {
        margin-top: 40px;
      }
    }
  }
`

export default HomePage
