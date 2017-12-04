'use babel'

import path from 'path'
import fs from 'fs-plus'
import loadJsonFile from 'load-json-file'

const iconBinary = 'icon-file-binary'
const iconCode = 'icon-file-code'
const iconMedia = 'icon-file-media'
const iconPdf = 'icon-file-pdf'
const iconSymlink = 'icon-file-symlink-file'
const iconText = 'icon-file-text'
const iconZip = 'icon-file-zip'
const iconDatabase = 'icon-database'
const iconBook = 'icon-book'

export default class SimpleIconsService {
  constructor () {
    this.fileTypes = loadJsonFile.sync(path.join(__dirname, 'file-types.json'))
  }

  iconClassForPath (filePath) {
    if (!filePath) return iconText

    let extension = path.extname(filePath)
    let fileType = extension.substring(1) || path.basename(filePath, extension)

    if (fs.isSymbolicLinkSync(filePath)) {
      return iconSymlink
    } else if (fs.isCompressedExtension(extension)) {
      return iconZip
    } else if (fs.isImageExtension(extension)) {
      return iconMedia
    } else if (fs.isPdfExtension(extension)) {
      return iconPdf
    } else if (fs.isBinaryExtension(extension)) {
      return iconBinary
    } else if (fs.isMarkdownExtension(extension)) {
      return iconBook
    } else if (this.isDatabase(fileType)) {
      return iconDatabase
    } else if (this.isCodeExtension(fileType)) {
      return iconCode
    }
    return iconText
  }

  isCodeExtension (fileType) {
    return this.fileTypes.source.includes(fileType)
  }

  isDatabase (fileType) {
    return this.fileTypes.database.includes(fileType)
  }
}
