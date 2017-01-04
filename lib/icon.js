'use babel';

import fs from 'fs-plus';
import path from 'path';

import { fileTypes } from './file-types';

const iconBinary = 'icon-file-binary';
const iconCode = 'icon-file-code';
const iconMedia = 'icon-file-media';
const iconPdf = 'icon-file-pdf';
const iconSymlink = 'icon-file-symlink-file';
const iconText = 'icon-file-text';
const iconZip = 'icon-file-zip';

export default class Icon {
  constructor(filePath) {
    this.filePath = filePath;
    this.extension = path.extname(filePath);
    this.fileName = path.basename(filePath, this.extension);
  }

  cssClass() {
    if (fs.isSymbolicLinkSync(this.filePath))
      return iconSymlink;
    else if (fs.isCompressedExtension(this.extension))
      return iconZip;
    else if (fs.isImageExtension(this.extension))
      return iconMedia;
    else if (fs.isPdfExtension(this.extension))
      return iconPdf;
    else if (fs.isBinaryExtension(this.extension))
      return iconBinary;
    else if (fs.isMarkdownExtension(this.extension))
      return iconText;
    else if (this.isCodeExtension())
      return iconCode;
    else
      return iconText;
  }

  isCodeExtension() {
    const fileType = this.extension.substring(1) || this.fileName;
    if (fileTypes.includes(fileType))
      return true;
    else
      return false;
  }
}
