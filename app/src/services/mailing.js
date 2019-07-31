import client from './_api'
import url from '../constants/endpoints'

const Mailing = {
    contactUs: payload => client.post(`${url.mailing}/template/contactus`, payload),
    shareEmail: payload => client.post(`${url.mailing}/template/sharebyemail`, payload)
  }
  
export default Mailing
