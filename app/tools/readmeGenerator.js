/* eslint-disable */
// TODO: Move to the Tools build
const fs = require('fs')
const path = require('path')
const md = require('markdown-it')()
const { baseLogger, logStyles } = require('dmi-fe-tools').debug

const templateHTML = path.resolve(__dirname, '../../README.template.html')
const parsedHTML = path.resolve(__dirname, '../../README.html')
const sourceMD = path.resolve(__dirname, '../../README.md')

const buildReadmeHTML = () =>
  fs.readFile(templateHTML, 'utf8', (errT, template) => {
    baseLogger.info(
      `${logStyles.infoLabel(' README ')} ${logStyles.infoText('Reading [README.template.html] file...')}`
    ) // eslint-disable-line
    if (errT) {
      throw errT
    }

    fs.readFile(sourceMD, 'utf8', (err, mdContent) => {
      baseLogger.info(`${logStyles.infoLabel(' README ')} ${logStyles.infoText('Reading [README.me] file...')}`) // eslint-disable-line
      if (err) {
        throw err
      }

      const parsed = template.replace('{MARKDOWN_CONTENT}', md.render(mdContent), template)

      fs.readFile(parsedHTML, 'utf-8', (errR, templateT) => {
        if (errR) {
          throw errR
        }

        // Compare previous content of README.html with the new one by removing trailing whitespaces
        // and write the new file if the file has been changed.
        if (templateT.replace(/^\s+|\s+$|\s+(?=\s)/g, '') !== parsed.replace(/^\s+|\s+$|\s+(?=\s)/g, '')) {
          fs.writeFile(parsedHTML, parsed, () => {
            baseLogger.info(`${logStyles.okLabel(' README ')} ${logStyles.okText('[README.html] HTML file updated.')}`) // eslint-disable-line
          })
        }
      })
    })
  })

const init = () => {
  fs.watchFile(sourceMD, { interval: 1000 }, () => {
    baseLogger.info(`${logStyles.infoLabel(' README ')} ${logStyles.infoText('Watcher: Source file changed.')}`) // eslint-disable-line

    buildReadmeHTML()
  })

  buildReadmeHTML()
}

module.exports = init
