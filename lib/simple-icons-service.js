'use babel';

const {CompositeDisposable, Disposable} = require("atom");
const fs = require('fs-plus');
const path = require('path');

export default class SimpleIconsService {
  iconClassForPath(filePath) {
    const extension = path.extname(filePath);
    var iconClass = '';

    if (fs.isSymbolicLinkSync(filePath))
      iconClass = 'icon-file-symlink-file';
    else if (fs.isReadmePath(filePath))
      iconClass = 'icon-book';
    else if (fs.isCompressedExtension(extension))
      iconClass = 'icon-file-zip';
    else if (fs.isImageExtension(extension))
      iconClass = 'icon-file-media';
    else if (fs.isPdfExtension(extension))
      iconClass = 'icon-file-pdf';
    else if (fs.isBinaryExtension(extension))
      iconClass = 'icon-file-binary';
    else
      iconClass = 'icon-file-text';

    return iconClass;
  }

  onWillDeactivate(){
    return new Disposable();
  }
}
