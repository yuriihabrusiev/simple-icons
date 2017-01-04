'use babel';

import { CompositeDisposable } from 'atom';
import SimpleIconsService from './simple-icons-service';

export default {
  activate() {
  },

  deactivate() {
  },

  provideSimpleIcons() {
    return new SimpleIconsService();
  }
};
