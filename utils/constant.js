const constants = {
  defaultStyle: {
  // color: '#ffffff',
  // backgroundColor: '#115A1C'
  },
  errorStyle: { color: '#ffffff', backgroundColor: 'red' },
  langArr: ['javascript', 'vue'],
  operation: {
    generateKeys: {
      cmd: 'extension.generateKeys',
      title: 'Update I18n Locales Json'
    }
  },
  plugin: {
    name: 'wms-translation-extension',
    congratulations:
        'Congratulations, your extension "wms-translation-extension" is now active!',
    noUri: 'please selected a json file first'
  },
  defaultConfig: {
    defaultLocalesPath: 'src/locales',
    i18nValueHover: true,
    langFile: 'translationKeys.json',
    modulePrefixFoUpdateJson: '',
    notAlertBeforeUpdateI18n: false,
    parentDirLevel: 1
  },
  pkgFileName: 'package.json'
}
module.exports = constants
