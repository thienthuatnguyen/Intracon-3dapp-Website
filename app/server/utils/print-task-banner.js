const figlet = require('figlet')
const kleur = require('kleur')

module.exports = (text) => {
  const bannerFiglet = figlet.textSync(text, { font: 'Calvin S' })
  const banner = [
    // header
    '.'.repeat(70),
    `.${'\n.'.repeat(1)}`,
    '.'.repeat(70),
    // body
    bannerFiglet,
    // footer
    '.'.repeat(70),
    `${'.\n'.repeat(1)}.`,
    '.'.repeat(70)
  ]

  banner.map(i => console.log(kleur.yellow.dim(i)))
}
