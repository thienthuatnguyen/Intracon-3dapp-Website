import client from './_api'
import url from '../constants/endpoints'

const Image = {
    getUrl: id => client.get(`${url.image}/${id}`)
  }
  
export default Image
