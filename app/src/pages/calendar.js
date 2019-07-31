/* eslint-disable no-loops/no-loops */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/aria-role */
import styled from 'styled-components'
import React, { Component } from 'react'
import dateFns from 'date-fns'
import icsToJson from 'ics-to-json'
import Slider from 'react-slick'
import moment from 'moment'
import nanoid from 'nanoid'
import Document from '../services/document'
import SideMenu from '../components/Layout/SideMenu'
import BackButton from '../components/Layout/BackButton'
import { IconAddress, IconTime } from '../components/Icons'
import PopupSeeMoreComponent from '../components/PopupSeeMoreComponent'
import BackGroundContent from '../components/UI/BackGroundContent'
import '../../../node_modules/slick-carousel/slick/slick.css'

class Calendar extends Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date(),
    data: []
  }

  async componentDidMount() {
    Document.calendar().then(t => {
      const json = icsToJson(t.data)
      const result = []
      json.forEach(data => {
        const startDate = moment(data.startDate, 'YYYYMMDD')
        const endDate = moment(data.endDate, 'YYYYMMDD')
        const startMonth = startDate.format('M')
        const endMonth = endDate.format('M')
        if (startMonth != endMonth) {
          const copy = { ...data }
          data.endDate = startDate.endOf('month').format('YYYYMMDD')
          copy.startDate = endDate.startOf('month').format('YYYYMMDD')
          result.push(copy)
        }
        result.push(data)
      })
      this.setState({
        data: result
      })
    })
  }

  onDateClick = day => {
    this.setState({ selectedDate: day })
  }

  nextMonth = () => {
    const { currentMonth } = this.state
    this.setState({
      currentMonth: dateFns.addMonths(currentMonth, 1)
    })
  }

  prevMonth = () => {
    const { currentMonth } = this.state
    this.setState({
      currentMonth: dateFns.subMonths(currentMonth, 1)
    })
  }

  checkDate(day, monthStart, selectedDate) {
    if (dateFns.isSameMonth(day, monthStart)) {
      if (dateFns.isSameDay(day, selectedDate)) {
        return 'selected'
      } else {
        return ''
      }
    } else {
      return 'disabled'
    }
  }

  renderDays() {
    const { currentMonth } = this.state
    const dateFormat = 'dddd'
    const days = []

    let startDate = dateFns.startOfWeek(currentMonth)

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className='col col-center' key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      )
    }

    return <div className='days row'>{days}</div>
  }

  renderEvent(dateCompare, isSameMonth, day) {
    const { data } = this.state
    const settings = {
      dots: false,
      fade: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <span>{'>'}</span>,
      prevArrow: <span>{'<'}</span>
    }
    
    let events = []
    let slider = []
    let color = 'pink'
    let days = 0
    for (let i = 0; i < data.length; i++) {

      let endDateCompare = dateFns.getTime(data[i].endDate)
      let startDateCompare = dateFns.getTime(data[i].startDate)
      days = dateFns.eachDay(data[i].startDate,data[i].endDate).length  
      if (days > 6) {
        days = 6
      }
            
      if ((startDateCompare <= dateCompare) && (dateCompare <= endDateCompare)) {
        if (events.length  == 0) {
          color = 'yellow'
        } else if (events.length  == 1) {
          color = 'green'
        } else if (events.length == 2) {
          color = 'pink'
        }

        if (events.length < 4) {          
          if (dateCompare == startDateCompare || dateFns.isMonday(day)) {      
            events.push(
              <React.Fragment key={`${day}${color}`}>
                <PopupSeeMoreComponent
                  index={events.length}
                  allowShowContent={isSameMonth}
                  type='detail'
                  color={color}
                  lenghtDay={days}
                  text={data[i].summary}
                >
                  {
                    isSameMonth && (
                    <ContentDetail>
                      <div className='top-content'>
                        <div className={`date ${color}`}>
                          { data[i].summary }
                        </div>
                        <div className='address'>
                          { data[i].location }
                        </div>
                        {
                          data[i].description && (
                          <div className='content-detail'>
                            { data[i].description.split('\\n').map( item => <p key={`param_${nanoid()}`}>{item}</p>) }
                          </div>
)}
                      </div>
                    </ContentDetail>
)}
                </PopupSeeMoreComponent>
              </React.Fragment>
            )
          } else {
            events.push(<div key={color} value={events.length} className={`empty ${color}`} />)
          }
        }

        slider.push(
          <div className='top-content'>
            <div className={`date  ${color}`}>
              {dateFns.format(day, 'MMMM DD YYYY')}
            </div>
            <div className='name'>
              {data[i].summary}
            </div>
            <div className='address'>
              {data[i].location}
            </div>
            <div className='time'>
              {`${days} days`}
            </div>
            <div className='content-detail'>
              {data[i].description.split ('\\n').map((item, i) => <p key={`param_${nanoid()}`}>{item}</p>)}
            </div>
          </div>
        )
      }
    }

    return (
      <React.Fragment>
        {events}
        {
          slider.length > 0 && events.length > 3 && (
          <React.Fragment>
            {
              isSameMonth && (
              <PopupSeeMoreComponent allowShowContent type='seeMore'>
                <ContentDetail>
                  <Slider {...settings}>
                    {slider}
                  </Slider>
                </ContentDetail>
              </PopupSeeMoreComponent>
)}
          </React.Fragment>
)}
      </React.Fragment>
    )
  }

  renderHeader() {
    const dateFormat = 'MMMM YYYY'
    const onlyDateFormat = 'MMMM'
    const { currentMonth } = this.state
    return (
      <div className='header row flex-middle'>
        <div
          className='col col-start'
          role='button'
          tabIndex={0}
          onKeyDown={this.prevMonth}
          onClick={this.prevMonth}
        >
          <span className='arrow'>{'<'}</span>
          <span>{dateFns.format(dateFns.subMonths(currentMonth, 1), onlyDateFormat)}</span>
        </div>
        <div className='col col-center'>
          <span>{dateFns.format(currentMonth, dateFormat)}</span>
        </div>
        <div
          className='col col-end'
          role='button'
          tabIndex={0}
          onKeyDown={this.nextMonth}
          onClick={this.nextMonth}
        >
          <span>{dateFns.format(dateFns.addMonths(currentMonth, 1), onlyDateFormat)}</span>
          <span className='arrow'>{'>'}</span>
        </div>
      </div>
    )
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state       
    const monthStart = dateFns.startOfMonth(currentMonth)
    const monthEnd = dateFns.endOfMonth(monthStart)
    const startDate = dateFns.startOfWeek(monthStart)
    const endDate = dateFns.endOfWeek(monthEnd)
    const dateFormat = 'D'
    const rows = []
    let days = []
    let day = startDate
    let formattedDate = ''
    
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat)
        const cloneDay = day
        let dateCompare = dateFns.getTime(dateFns.format(day, 'YYYYMMDD'))
        days.push(
          <div
            className={`col cell ${this.checkDate(day, monthStart, selectedDate)}`}
            key={day}
            tabIndex={0}
            role='button'
            onKeyDown={() => this.onDateClick(dateFns.parse(cloneDay))}
            onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
          >
            <span className='number'>{formattedDate}</span>
            { this.renderEvent(dateCompare, dateFns.isSameMonth(day, monthStart), day) }
          </div>
        )
        day = dateFns.addDays(day, 1)
      }
      rows.push(<div className='row' key={day}>{days}</div>)
      days = []
    }
    
    return <div className='body'>{rows}</div>
  }

  render() {
    return (
      <React.Fragment>
        <BackButton type='backHome' />
        <SideMenu staticValue='calendar' />
        <Content>
          <WrapperCalendar>
            {this.renderHeader()}
            {this.renderDays()}
            {this.renderCells()}
          </WrapperCalendar>
        </Content>
        <BackGroundContent id='bgMainPage' />
      </React.Fragment>
    )
  }
}

const ContentDetail = styled.div`
  font-family: ${props => props.theme.bodyFontBold};

  .slick-prev {
    color: ${props => props.theme.colorBlue};
    top: 70px;
    z-index: 1000;
    left: 15px;
    position: absolute;
    cursor: pointer;
    width: 15px;
    height: 15px;
    display: flex;
    text-align: center;
    font-size: 18px;
  }

  .slick-next {
    color: ${props => props.theme.colorBlue};
    top: 70px;
    z-index: 1000;
    right: 15px;
    position: absolute;
    cursor: pointer;
    width: 15px;
    height: 15px;
    display: flex;
    text-align: center;
    font-size: 18px;
  }

  .top-content {
    .date {
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding-top: 10px;

      &.green {
        background-color: #21ccd1;
      }

      &.yellow {
        background-color: #fae147;
      }

      &.gray {
        background-color: #c7c7c7;
      }

      &.pink {
        background-color: #f99900;
      }
    }

    .name {
      border-bottom: 1px solid ${props => props.theme.colorBorder};
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding-top: 10px;
    }

    .address {
      padding: 15px 0 15px 40px;
      background-image: url(${IconAddress});
      background-repeat: no-repeat;
      background-size: 15px;
      background-position: 15px center;
      border-bottom: 1px solid ${props => props.theme.colorBorder};
    }

    .time {
      padding: 15px 0 15px 40px;
      background-image: url(${IconTime});
      background-repeat: no-repeat;
      background-size: 15px;
      background-position: 15px center;
      border-bottom: 1px solid ${props => props.theme.colorBorder};
    }

    .content-detail {
      padding: 5px 15px 0 15px;

      .row-detail {
        padding: 10px 0;
        flex-direction: column;
        align-items: flex-start;

        ul {
          margin-left: 20px;
          margin-top: 5px;

          li {
            list-style: disc;
          }
        }

        a {
          color: ${props => props.theme.colorBlue};
        }
      }
    }
  }
`

const Content = styled.div`
  flex: 1 1 100%;
  overflow-y: scroll;
`

const WrapperCalendar = styled.div`
  background-color: #f0f0f0;
  font-size: 14px;
  color: ${props => props.theme.colorTextBody};

  .header {
    display: flex;
    height: 50px;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.colorBorder};
    box-sizing: border-box;
    font-weight: bold;

    .col-start,
    .col-end {
      flex: 1 1 auto;
      color: ${props => props.theme.colorBlue};
      padding: 0 15px;
      cursor: pointer;
    }

    .col-start {
      .arrow {
        margin-right: 5px;
      }
    }

    .col-end {
      .arrow {
        margin-left: 5px;
      }
    }

    .col-center {
      flex: 1 1 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: ${props => props.theme.bodyFontBold};
    }
  }

  .days {
    display: flex;
    height: 60px;
    border-bottom: 1px solid ${props => props.theme.colorBorder};
    box-sizing: border-box;

    .col {
      flex: 1 1 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;

      &:first-child,
      &:last-child {
        display: none;
      }
    }
  }

  .body {
    .row {
      display: flex;
      min-height: 150px;
      border-bottom: 1px solid ${props => props.theme.colorBorder};
      box-sizing: border-box;

      .col {
        flex: 1 1 100%;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        border-right: 1px solid ${props => props.theme.colorBorder};
        position: relative;
        flex-direction: column;
        justify-content: flex-start;
        padding: 35px 10px 0 10px;
        width: 20%;
        min-width: 20%;

        &:first-child,
        &:last-child {
          display: none;
        }

        &.disabled {
          .number {
            opacity: 0.4;
          }
        }

        &:nth-of-type(2) {
          .content.detail {
            left: 0 !important;
            margin-left: 0 !important;
          }
        }

        &:nth-of-type(6) {
          .content.detail {
            left: auto !important;
            right: 0;
            margin-left: 0 !important;
          }

          .content {
            right: auto;
            left: 0;
            margin-left: -450px !important;
          }

          .add-new {
            &::after {
              left: -40px;
              transform: rotate(180deg);
            }
          }
        }

        &:nth-of-type(5) {
          .content {
            right: auto;
            left: 0;
            margin-left: -450px !important;
          }

          .add-new {
            &::after {
              left: -40px;
              transform: rotate(180deg);
            }
          }

          .content.detail {
            left: 50% !important;
            margin-left: -200px !important;
          }
        }

        .empty {
          height: 30px;
          width: 100%;
          margin-bottom: 3px;
        }

        .event {
          width: auto;
          min-width: 100%;
          height: 30px;
          min-height: 30px;
          box-sizing: border-box;
          font-size: 14px;
          white-space: nowrap;
          cursor: pointer;
          position: absolute;
          outline: none !important;
          box-shadow: none !important;
          padding-left: 15px;
          left: 0;
          top: 0;
          display: block;
          line-height: 30px;
          z-index: 100;

          &.length1 {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          &.length2 {
            width: calc(200% + 22px);
          }

          &.length3 {
            width: calc(300% + 42px);
          }

          &.length4 {
            width: calc(400% + 62px);
          }

          &.length5 {
            width: calc(500% + 82px);
          }

          &.length6 {
            width: calc(500% + 82px);
          }

          &.length7 {
            width: calc(500% + 82px);
          }

          &.green {
            background-color: #21ccd1;

            .content-text {
              background-color: #21ccd1;
            }
          }

          &.yellow {
            background-color: #fae147;

            .content-text {
              background-color: #fae147;
            }
          }

          &.gray {
            background-color: #c7c7c7;

            .content-text {
              background-color: #c7c7c7;
            }
          }

          &.pink {
            background-color: #f99900;

            .content-text {
              background-color: #f99900;
            }
          }

          &.event-array {
            background-color: transparent;
            position: relative;

            .content-text {
              position: absolute;
              width: 300%;
              left: 0;
              top: 0;
              height: 30px;
              display: flex;
              align-items: center;
              z-index: 1;
              padding: 5px 10px;
              max-height: 30px;
              box-sizing: border-box;
            }
          }
        }

        .number {
          font-family: ${props => props.theme.bodyFontBold};
          position: absolute;
          left: 5px;
          top: 5px;
          font-size: 14px;
          background-color: transparent;
        }
      }
    }
  }
`
export default Calendar
