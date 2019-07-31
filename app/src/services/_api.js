/* eslint-disable no-undef */
import axios from 'axios'
import { getAccessToken } from '../utils/storage'

// Regular client, this client will hold user access token
const client = axios.create({
  baseURL: getEnvConfig.dmi.fe.api,
  headers: {
    'Authorization': `Bearer ${getAccessToken()}`,
    'Cache-Control': 'no-cache'
  }
})

export default client
