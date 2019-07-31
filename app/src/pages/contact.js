/* eslint-disable font-family-no-missing-generic-family-keyword */
import styled from 'styled-components'
import { Textarea,Checkbox,Label, Button, Input } from 'rbx/elements'
import 'rbx/index.css'
import Mailing from '../services/mailing'
import { ContactIcon } from '../components/Icons'
import SideMenu from '../components/Layout/SideMenu'
import BackButton from '../components/Layout/BackButton'
import withUserAuth from '../hocs/withAuth'
import BackGroundContent from '../components/UI/BackGroundContent'

class ContactPage extends React.Component {
  state = {
    agree: false,
    errors: {},
    form: {
      firstName: '',
      lastName: '',
      email: '',
      comments: ''
    }
  }

  handleChange(field, e) {
    const { form } = this.state
    form[field] = e.target.value
    this.setState({ form })
  }

  handleChangeCheckBox() {
    const { agree } = this.state
    this.setState({ agree: !agree })
  }

  sendContact() {
    const { agree, form } = this.state
    let errors = {}
    let formIsValid = true

    if (!form.firstName) {
      formIsValid = false
      errors.firstName = 'Cannot be empty'
    }

    if (!form.lastName) {
      formIsValid = false
      errors.lastName = 'Cannot be empty'
    }

    if (!form.email) {
      formIsValid = false
      errors.email = 'Cannot be empty'
    }

    if (!form.comments) {
      formIsValid = false
      errors.comments = 'Cannot be empty'
    }

    if (!agree) {
      formIsValid = false
      errors.agree = 'You have to agree the terms and conditions'
    }

    if (formIsValid) {
      if (confirm('Are you sure you want to send this form ?')) {
        Mailing.contactUs(form).then(() => {
          alert('Send Successfully!')
        })
      }
    } else {
      this.setState({ errors: errors })
    }
  }

  render() {
    const { errors, form } = this.state
    return (
      <React.Fragment>
        <BackButton type='backHome' />
        <SideMenu staticValue='contact' />
        <Wrapper>
          <div className='head-title'>
            <div className='icon-title'>
              <ContactIcon />
            </div>
            <span>Contact</span>
          </div>
          <div className='form-contact'>
            <div className='title'>
            Please leave your comment or question for the HP 3D Team
            </div>
            <div className='row-item'>
              <div className='col-left text'>
              First name
              </div>
              <div className='col-right input-col'>
                <Input
                  type='text'
                  placeholder=''
                  value={form.firstName}
                  onChange={e => this.handleChange('firstName', e)}
                />
                {errors.firstName && <span className='error'>{errors.firstName}</span>}
              </div>
            </div>
            <div className='row-item'>
              <div className='col-left text'>
              Last name
              </div>
              <div className='col-right input-col'>
                <Input
                  type='text'
                  placeholder=''
                  value={form.lastName}
                  onChange={e => this.handleChange('lastName', e)}
                />
                {errors.lastName && <span className='error'>{errors.lastName}</span>}
              </div>
            </div>
            <div className='row-item'>
              <div className='col-left text'>
              Email
              </div>
              <div className='col-right input-col'>
                <Input
                  type='text'
                  placeholder=''
                  value={form.email}
                  onChange={e => this.handleChange('email', e)}
                />
                {errors.email && <span className='error'>{errors.email}</span>}
              </div>
            </div>
            <div className='row-item'>
              <div className='col-left text vertical-flex-start'>
              Comments
              </div>
              <div className='col-right textarea-col'>
                <Textarea
                  rows={6}
                  placeholder=''
                  value={form.comments}
                  onChange={e => this.handleChange('comments', e)}
                />
                {errors.comments && <span className='error'>{errors.comments}</span>}
              </div>
            </div>
            <div className='row-item term-check'>
              <div className='col-left' />
              <div className='col-right'>
              Upon registration submission, you will receive follow-up communications
              from HP in regards to this registration. If you wish to view HP’s full privacy statement, please
              &nbsp;
                <a href='/term-and-conditions' className='link'>click here.</a>
              </div>
            </div>
            {
              errors.agree && (
              <div className='row-item'>
                <div className='col-left'>&nbsp;</div>
                <div className='col-right'>
                  <span className='error'>{errors.agree}</span>
                </div>
              </div>
)}
            <div className='row-item'>
              <div className='col-left' />
              <div className='col-right col-button'>
                <div className='left'>
                  <Label>
                    <Checkbox onClick={e => this.handleChangeCheckBox()} />
                    &nbsp;
                    I agree to the terms and conditions
                  </Label>
                </div>
                <div className='right'>
                  <Button type='button' className='btn-send' onClick={e => this.sendContact()}>Send</Button>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
        <BackGroundContent id='bgMainPage' />
      </React.Fragment>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  flex: 1 1 100%;
  padding: 20px 40px 40px 40px;
  background-color: ${props => props.theme.colorWhite};
  color: #333;

  .error {
    color: red;
  }

  .head-title {
    flex: 1 1 20%;
    width: 20%;
    max-width: 20%;
    justify-content: flex-start;
    display: flex;

    span {
      font-size: 28px;
      color: #000;
    }

    .icon-title {
      margin-top: -10px;
      margin-right: 5px;

      svg {
        width: 40px;

        path {
          fill: #000 !important;
        }
      }
    }
  }

  .form-contact {
    flex: 1 1 60%;
    width: 60%;
    max-width: 60%;

    .title {
      font-size: 19px;
      margin-bottom: 30px;
      margin-top: 15px;
    }

    .row-item {
      display: flex;
      margin-bottom: 20px;

      &.term-check {
        font-size: 14px;
        margin-bottom: 40px;

        .link {
          color: ${props => props.theme.colorBlue};
        }
      }

      .col-left {
        flex: 1 1 30%;
        display: flex;
        align-items: center;

        &.vertical-flex-start {
          align-items: flex-start;
          margin-top: 10px;
        }
      }

      .col-right {
        flex: 1 1 100%;

        &.input-col {
          input {
            height: 36px;
            line-height: 36px;
            font-size: 16px;
            width: 100%;
            margin: 0;
            padding: 0 10px;
            border: 1px solid ${props => props.theme.colorBlue};
            border-radius: 3px;
            box-sizing: border-box;
            box-shadow: none !important;
          }
        }

        &.textarea-col {
          textarea {
            font-size: 16px;
            width: 100%;
            margin: 0;
            padding: 10px;
            border: 1px solid ${props => props.theme.colorBlue};
            border-radius: 3px;
            box-sizing: border-box;
            box-shadow: none !important;
          }
        }

        &.col-button {
          display: flex;

          .left {
            flex: 1 1 100%;
          }

          .right {
            flex: 1 1 auto;
          }

          button {
            color: #fff !important;
            background-color: #409eff !important;
            border-color: #409eff !important;
            width: 130px;
            border-radius: 5px;
            padding: 0 15px;
            cursor: pointer;
            font-size: 16px;
            height: 26px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }
`

export default withUserAuth(ContactPage)
