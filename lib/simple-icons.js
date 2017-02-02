'use babel';

import SimpleIconsService from './simple-icons-service';

export default {
  provideSimpleIcons() {
    return new SimpleIconsService();
  }
};
