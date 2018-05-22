/* globals test, expect */
test('two equals 2', () => {
  expect(2).toEqual(2)
})

test('new note = note', () => {
  const testNote = new Note ('Title','Text')
  expect(testNote).toEqual('Title','Text')
})