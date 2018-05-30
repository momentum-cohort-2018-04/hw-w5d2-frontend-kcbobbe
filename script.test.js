/* globals test, expect */
import Note from './script'

test('two equals 2', () => {
  expect(2).toEqual(2)
})

test('new note title = title', () => {
  const testNote = new Note('Title', 'Text')
  expect(testNote.title).toEqual('Title')
})

test('new note text = text', () => {
  const testNote = new Note('Title', 'Text')
  expect(testNote.text).toEqual('Text')
})
