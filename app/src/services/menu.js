import client from './_api'
import url from '../constants/endpoints'

const Menus = {
  getAll: () => client.get(`${url.menu}`),
  get: id => client.get(`${url.menu}/${id}`, null),
  search: () => client.get(`${url.menu}/list`)
}

export default Menus
