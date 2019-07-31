/* eslint-disable react/no-danger */
/**
 * Define font data
 */
const fontData = {
  // WalbaumBookBq: { // example
  //   family: 'WalbaumBookBq',
  //   variants: {
  //     100: {
  //       woff2: require('../static/fonts/WalbaumBookBQ/WalbaumBookBQ-regular.woff2'),
  //       woff: require('../static/fonts/WalbaumBookBQ/WalbaumBookBQ-regular.woff'),
  //       truetype: require('../static/fonts/WalbaumBookBQ/WalbaumBookBQ-regular.ttf')
  //     },
  //     400: {
  //       woff2: require('../static/fonts/WalbaumBookBQ/WalbaumBookBQ-medium.woff2'),
  //       woff: require('../static/fonts/WalbaumBookBQ/WalbaumBookBQ-medium.woff'),
  //       truetype: require('../static/fonts/WalbaumBookBQ/WalbaumBookBQ-medium.ttf')
  //     },
  //     700: {
  //       woff2: require('../static/fonts/WalbaumBookBQ/WalbaumBookBQ-bold.woff2'),
  //       woff: require('../static/fonts/WalbaumBookBQ/WalbaumBookBQ-bold.woff'),
  //       truetype: require('../static/fonts/WalbaumBookBQ/WalbaumBookBQ-bold.ttf')
  //     }
  //   }
  // },
  // UniversLTPro: {
  //   family: 'UniversLTPro',
  //   variants: {
  //     400: {
  //       woff2: require('../static/fonts/UniversLTPro/UniversLTPro-55Roman.woff2'),
  //       woff: require('../static/fonts/UniversLTPro/UniversLTPro-55Roman.woff'),
  //       truetype: require('../static/fonts/UniversLTPro/UniversLTPro-55Roman.ttf')
  //     },
  //     700: {
  //       woff2: require('../static/fonts/UniversLTPro/UniversLTPro-65Bold.woff2'),
  //       woff: require('../static/fonts/UniversLTPro/UniversLTPro-65Bold.woff'),
  //       truetype: require('../static/fonts/UniversLTPro/UniversLTPro-65Bold.ttf')
  //     }
  //   }
  // }
}

/**
 * Assign fonts
 *
 * example: const fontMap = ['WalbaumBookBq', 'UniversLTPro']
 */
const fontMap = []

/**
 * Build  CSS from the font data by map
 * Each variant outputs new "@font-face {}" block
 */
let themeFontCSS = ''
const currentThemeFonts = fontMap

currentThemeFonts.map((fontName) => {
  const font = fontData[fontName]
  const fontVariants = font.variants

  Object.keys(fontVariants).map((variantWeight) => {
    const fontFormats = fontVariants[variantWeight]
    const cssURLs = []

    // ! - Add new URL for each font format as font-face src
    Object.keys(fontFormats).map((fontFormat) => {
      const fontURL = fontFormats[fontFormat]
      const fullFontURL = `/static/${fontURL}`

      cssURLs.push(`url('${fullFontURL}') format('${fontFormat}')`)
    })

    // ! - Add new @font-face block
    themeFontCSS = `
/* ${font.family} - ${variantWeight} */
@font-face {
  font-family: '${font.family}';
  src: ${cssURLs.join(', \n')};
  font-weight: ${variantWeight};
  font-style: normal;
  font-display: block;
}`
  })

  return fontName
})

export default () => {
  if (!themeFontCSS) return null

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `${themeFontCSS}`
      }}
    />
  )
}
