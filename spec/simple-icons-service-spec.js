'use babel';

import SimpleIconsService from '../lib/simple-icons-service';

describe('SimpleIconsService', function() {
  const fileIcons = new SimpleIconsService();

  it('defaults to text', function() {
    expect(fileIcons.iconClassForPath('foo.bar')).toEqual('icon-file-text');
  });

  it('recognizes .js code files', function() {
    expect(fileIcons.iconClassForPath('foo.js')).toEqual('icon-file-code');
  });

  it('recognizes .rb code files', function() {
    expect(fileIcons.iconClassForPath('foo.rb')).toEqual('icon-file-code');
  });

  it('recognizes Makefile', function() {
    expect(fileIcons.iconClassForPath('Makefile')).toEqual('icon-file-code');
  });

  it('recognizes Markdown files', function() {
    expect(fileIcons.iconClassForPath('foo.md')).toEqual('icon-file-text');
  });

  it('recognizes compressed files', function() {
    expect(fileIcons.iconClassForPath('foo.zip')).toEqual('icon-file-zip');
  });

  it('recognizes image files', function() {
    expect(fileIcons.iconClassForPath('foo.png')).toEqual('icon-file-media');
  });

  it('recognizes PDF files', function() {
    expect(fileIcons.iconClassForPath('foo.pdf')).toEqual('icon-file-pdf');
  });

  it('recognizes binary files', function() {
    expect(fileIcons.iconClassForPath('foo.exe')).toEqual('icon-file-binary');
  });
});
