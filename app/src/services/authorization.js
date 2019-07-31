import client from './_api'
import url from '../constants/endpoints'

const Authorization = {
  authen: type => client.get(`${url.hp}/authen/${type}`),
  profile: () => client.get(`${url.hp}/profile`),
  removeToken: () => client.get(`${url.hp}/remove-token`),
  logout: type => client.get(`${url.hp}/logout/${type}`),
  token: payload => client.post(`${url.hp}/token`, payload)
}

export default Authorization
