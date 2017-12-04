'use babel'

import SimpleIconsService from './simple-icons-service'

export default {
  iconsService: null,

  activate () {
    this.iconsService = new SimpleIconsService()
  },

  provideSimpleIcons () {
    return this.iconsService
  }
}
