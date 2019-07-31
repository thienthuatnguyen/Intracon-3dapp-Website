/* eslint-disable no-console */
/* Detect all Internet Explorer versions. No Edge, only IE */
const isIE = userAgent => /Trident|MSIE/.test(userAgent) || /Edge\/\d./i.test(userAgent)

const isAndroidWebview = userAgent => userAgent && userAgent.includes('ArtBasel/a/')

const isiOSWebview = userAgent => userAgent && userAgent.includes('ArtBasel/i/')

const DOMTokenListSupports = (tokenList, token) => {
  if (!tokenList || !tokenList.supports) {
    return
  }
  try {
    // eslint-disable-next-line consistent-return
    return tokenList.supports(token)
  } catch (e) {
    if (e instanceof TypeError) {
      console.log('The DOMTokenList doesn\'t have a supported tokens list')
    } else {
      console.error('That shouldn\'t have happened')
    }
  }
}

module.exports = {
  isIE,
  isAndroidWebview,
  isiOSWebview,
  DOMTokenListSupports
}
