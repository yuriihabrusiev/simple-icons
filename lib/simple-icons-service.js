'use babel';

import { Disposable } from 'atom';
import Icon from './icon';

export default class SimpleIconsService {
  iconClassForPath(filePath) {
    var icon = new Icon(filePath);
    return icon.cssClass();
  }

  onWillDeactivate(){
    return new Disposable();
  }
}
