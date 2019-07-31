import UniversalCookie from 'universal-cookie'

export const Cookies = new UniversalCookie()
const ACCESS_TOKEN_NAME = 'Intracon3D_Token'

export const setCookie = (key, value, options) => {
  Cookies.set(key, value, options)
}

export const getAccessToken = req => {
  let result = ''
  try {
    if (typeof window !== 'undefined') {
      result = Cookies.get(ACCESS_TOKEN_NAME)
    } else {
      if (req && req.universalCookies) {
        result = req.universalCookies.get(ACCESS_TOKEN_NAME)
      }
    }
  } catch (e) {
    console.log(e)
  }
  return result
}

export const setAccessToken = (token, options) => {
  Cookies.set(ACCESS_TOKEN_NAME, token, options)
}

export const removeAccessToken = req => {
  if (req && req.universalCookies) {
    req.universalCookies.remove(ACCESS_TOKEN_NAME)
    req.universalCookies.remove('email')
  } else {
    Cookies.remove(ACCESS_TOKEN_NAME, { path: '/' })
    Cookies.remove('email', { path: '/' })
  }
}
