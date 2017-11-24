'use babel'

import SimpleIconsService from './simple-icons-service'

export default {
  activate() {
    this.iconsService = new SimpleIconsService()
  },

  provideSimpleIcons () {
    return this.iconsService
  }
}
