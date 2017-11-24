/* eslint-env jasmine */
'use babel'

import SimpleIconsService from '../lib/simple-icons-service'

describe('SimpleIconsService', () => {
  const fileIcons = new SimpleIconsService()

  it('defaults to text', () => {
    expect(fileIcons.iconClassForPath('foo.bar')).toEqual('icon-file-text')
  })

  it('recognizes .js code files', () => {
    expect(fileIcons.iconClassForPath('foo.js')).toEqual('icon-file-code')
  })

  it('recognizes .rb code files', () => {
    expect(fileIcons.iconClassForPath('foo.rb')).toEqual('icon-file-code')
  })

  it('recognizes Makefile', () => {
    expect(fileIcons.iconClassForPath('Makefile')).toEqual('icon-file-code')
  })

  it('recognizes Markdown files', () => {
    expect(fileIcons.iconClassForPath('foo.md')).toEqual('icon-file-text')
  })

  it('recognizes compressed files', () => {
    expect(fileIcons.iconClassForPath('foo.zip')).toEqual('icon-file-zip')
  })

  it('recognizes image files', () => {
    expect(fileIcons.iconClassForPath('foo.png')).toEqual('icon-file-media')
  })

  it('recognizes PDF files', () => {
    expect(fileIcons.iconClassForPath('foo.pdf')).toEqual('icon-file-pdf')
  })

  it('recognizes binary files', () => {
    expect(fileIcons.iconClassForPath('foo.exe')).toEqual('icon-file-binary')
  })

  it('ignores undefined', () => {
    expect(fileIcons.iconClassForPath(undefined)).toEqual('icon-file-text')
  })

  it('ignores null', () => {
    expect(fileIcons.iconClassForPath(null)).toEqual('icon-file-text')
  })
})
