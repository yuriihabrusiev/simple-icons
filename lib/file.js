'use babel';

import path from 'path';
import fs from 'fs-plus';

import fileTypes from './file-types';

const iconBinary = 'icon-file-binary';
const iconCode = 'icon-file-code';
const iconMedia = 'icon-file-media';
const iconPdf = 'icon-file-pdf';
const iconSymlink = 'icon-file-symlink-file';
const iconText = 'icon-file-text';
const iconZip = 'icon-file-zip';
const iconDatabase = 'icon-database';

export default class File {
  constructor(filePath) {
    this.filePath = filePath;
    this.extension = path.extname(filePath);
    this.fileName = path.basename(filePath, this.extension);
    this.fileType = this.extension.substring(1) || this.fileName;
  }

  iconClass() {
    if (fs.isSymbolicLinkSync(this.filePath)) {
      return iconSymlink;
    } else if (fs.isCompressedExtension(this.extension)) {
      return iconZip;
    } else if (fs.isImageExtension(this.extension)) {
      return iconMedia;
    } else if (fs.isPdfExtension(this.extension)) {
      return iconPdf;
    } else if (fs.isBinaryExtension(this.extension)) {
      return iconBinary;
    } else if (fs.isMarkdownExtension(this.extension)) {
      return iconText;
    } else if (this.isDatabase()) {
      return iconDatabase;
    } else if (this.isCodeExtension()) {
      return iconCode;
    }
    return iconText;
  }

  isCodeExtension() {
    return fileTypes.source.includes(this.fileType);
  }

  isDatabase() {
    return fileTypes.database.includes(this.fileType);
  }
}
