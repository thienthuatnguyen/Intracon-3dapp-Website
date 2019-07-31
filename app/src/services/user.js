import client from './_api'

/**
 * Example. Remove or
 */
const userService = {
  signOut: () => client.del('/msvc/v1/login'),
  getMe: () => client.get('/msvc/v1/userprofiles/me')
}

export default userService
