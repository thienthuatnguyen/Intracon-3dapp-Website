/* eslint-disable no-undef */
import client from './_api'
import url from '../constants/endpoints'

const Setting = {
    getAnonymous: () => client.get(`${url.setting}`, null),
    saveSetting: payload => client.post(`${url.setting}`, payload)
  }
  
export default Setting
