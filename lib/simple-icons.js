'use babel';

import SimpleIconsService from './simple-icons-service';
import { CompositeDisposable } from 'atom';

export default {
  activate(state) {
  },

  deactivate() {
  },

  provideSimpleIcons() {
    return new SimpleIconsService();
  }
};
