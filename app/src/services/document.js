/* eslint-disable no-undef */
import client from './_api'
import url from '../constants/endpoints'

const Document = {
    calendar: () => client.get(`${getEnvConfig.dmi.fe.api}/msvc/v1/3dapp/calendar`, null),
    download: id => `${getEnvConfig.dmi.fe.api}/${url.doc}/download/${id}`,
    generateUrl: id => `${getEnvConfig.dmi.fe.api}/${url.doc}/generate-url/${id}`,
    getContent: id => client.get(`${url.doc}/content/${id}`, null),
    get: id => client.get(`${url.doc}/${id}`, null),
    getByMenu: id => client.get(`${url.doc}/menu/${id}`, null),
    getByFavorites: id => client.get(`${url.favorite}/${id}`, null),
    favoriteDocuments: () => client.get(`${url.favorite}`, null),
    viewedDocuments: id => client.get(`${url.viewDoc}/${id}`, null),
    favorite: payload => client.post(`${url.favorite}`, payload),
    deleteFavorite: id => client.delete(`${url.favorite}/${id}`, null),
    isShareable: id => client.get(`${url.doc}/${id}/shareable`, null),
    search: keywords => {
      if (keywords.length < 3) {
        return { data: [] }
      } else {
        return client.get(`${url.doc}/search?searchText=${keywords}`, null)
      }
    }
  }
  
export default Document
