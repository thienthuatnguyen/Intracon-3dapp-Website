/* eslint-disable font-family-no-missing-generic-family-keyword */
import styled from 'styled-components'
import { Checkbox, Label, Button } from 'rbx/elements'
import { IconAppSetting } from '../components/Icons'
import SideMenu from '../components/Layout/SideMenu'
import BackButton from '../components/Layout/BackButton'
import BackGroundContent from '../components/UI/BackGroundContent'
import Setting from '../services/setting'
import Authorization from '../services/authorization'
import { removeAccessToken } from '../utils/storage'

class AppSettingPage extends React.Component {
  state = {
    selectedValue: ''
  }

  async componentDidMount() {
    const response = await Setting.getAnonymous()
    if (response.data === 'OK') {
      this.setState({ selectedValue: 'anonymous' })
    }
  }

  changeCheckBoxValue(val) {
    this.setState({ selectedValue: val })
  }

  async apply() {
    const { selectedValue } = this.state

    if (selectedValue === 'delete' && confirm('Are you sure you want to share this document ?')) {
      await Setting.saveSetting({
        isAnomynousUser: selectedValue === 'anonymous' ? true : false,
        isDeletedUser: true
      })
  
      Authorization.logout('web').then(response => {
        removeAccessToken()
        alert('Your account has been deleted!')
        if (response.data != 'OK') {
          window.location = response.data
        } else {
          window.location = '/'
        }
      })
    } else {
      await Setting.saveSetting({
        isAnomynousUser: selectedValue === 'anonymous' ? true : false,
        isDeletedUser: false
      })
    }
  }

  render() {
    const { selectedValue } = this.state

    return (
      <React.Fragment>
        <BackButton type='backHome' />
        <SideMenu staticValue='setting' />
        <Wrapper>
          <div className='title'>
            App Settings 
          </div>
          <div className='content'>
            <div className='row-radio'>
              <Label>
                <Checkbox
                  onChange={e => this.changeCheckBoxValue('anonymous')}
                  checked={selectedValue === 'anonymous' ? true : false}
                /> 
                <span className='circle' />
                <span className='name'>Browser anonymously</span>
              </Label>
              <div className='txt'>
              Applying this option you will browse the app anonymously,
              no data of yours will be saved
              </div>
            </div>
            <div className='row-radio'>
              <Label>
                <Checkbox
                  onChange={e => this.changeCheckBoxValue('delete')}
                  checked={selectedValue === 'delete' ? true : false}
                />
                <span className='circle' />
                <span className='name'>Delete my account</span>
              </Label>
              <div className='txt'>
              Remember that this option can not be undone,
              checking this option you account and data will be deleted automatically
              </div>
            </div>
            <div className='btn-submit'>
              <Button onClick={e => this.apply()}>Apply</Button>
            </div>
          </div>
        </Wrapper>
        <BackGroundContent id='bgMainPage' />
      </React.Fragment>
    )
  }
}

const Wrapper = styled.div`
  flex: 1 1 100%;
  color: ${props => props.theme.colorTextBody};
  padding: 30px 0 0 40px;
  background-color: #f0f0f0;

  .title {
    background-image: url(${IconAppSetting});
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: left center;
    font-size: 18px;
    padding: 10px 0 10px 30px;
  }

  .content {
    margin-top: 50px;

    .row-radio {
      margin-bottom: 50px;

      .txt {
        padding-left: 30px;
        margin-top: 10px;
      }

      span {
        font-family: ${props => props.theme.bodyFontBold};
      }

      input[type="checkbox"] {
        display: none;
      }

      input[type="checkbox"] + span.circle {
        display: inline-block;
        margin-right: 15px;
        width: 13px;
        height: 13px;
        cursor: pointer;
        border: 1px solid ${props => props.theme.colorTextBody};
        box-sizing: border-box;
        position: relative;
        border-radius: 50%;

        &::before {
          content: '';
          position: absolute;
          background-color: ${props => props.theme.colorBlue};
          left: 0;
          top: 0;
          width: 12px;
          height: 12px;
          display: none;
          border-radius: 50%;
        }
      }

      input:checked + span.circle {
        &::before {
          display: block;
          border: 1px solid ${props => props.theme.colorBlue};
        }
      }
    }

    .btn-submit {
      button {
        width: 300px;
        height: 50px;
        font-size: 16px;
        color: #fff;
        border: none;
        box-sizing: border-box;
        outline: none;
        text-align: left;
        padding: 0;
        font-family: ${props => props.theme.bodyFont};
        font-weight: normal;
        cursor: pointer;
        background-color: #c7c7c7;

        &.active {
          background-color: ${props => props.theme.colorBlue};
        }
      }
    }
  }
`



export default AppSettingPage
