'use babel'

import File from './file'

export default class SimpleIconsService {
  iconClassForPath (filePath) {
    const file = new File(filePath)
    return file.iconClass()
  }
}
