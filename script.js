import request from 'superagent'
let NOTES = []

class Note {
  constructor (title, text) {
    this.title = title
    this.text = text
    // this.date = date
  }
  writeNote () {
    var inputTitle = document.getElementById('input-title').value
    var inputText = document.getElementById('input-text').value
    let note = new Note(inputTitle, inputText)
    return note
  }
  // send innerHTML to API
  postNote () {
    // const noteDetails = new Note()
    request
      .post('https://notes-api.glitch.me/api/notes')
      .auth('kcbobbe', 'password123')
      .send({
        title: this.title,
        text: this.text
      })
      .then(function a () {
        console.log('yes')
      })
  }
  // get notes from API and put in app
  getNote () {
    let noteList = document.getElementById('notes-list')
    request
      .get('https://notes-api.glitch.me/api/notes')
      .auth('kcbobbe', 'password123')
      .then(function (result) {
        result.body.notes.forEach(function (element) {
          element = `<div>${element.title} ${element.text}</div>
          <button type="button" class="delete button-danger" id = "${element._id}">Delete</button>`
          NOTES.push(element)
          // console.log(element)
        })
        // console.log(NOTES)
        // document.getElementById("notes-list").innerHTML = NOTES.join('')
        noteList.innerHTML = NOTES.join('')
        noteList.querySelectorAll('.delete').forEach(function (element) {
          element.addEventListener('click', function (event) {
            const noteId = element.id
            console.log('click: ' + noteId)
            request
              .delete(`https://notes-api.glitch.me/api/notes/${noteId}`)
              .auth('kcbobbe', 'password123')
              .then(function (result) {
                let note = new Note()
                // can't do this.getNote() can't call this from a closure
                note.getNote()

                // NOTES = NOTES.filter(note => note._id !== noteId)
                // document.getElementById("notes-list").innerHTML = NOTES.join('')
              })
          })
        })
      })

    // this.deleteNote()
  }
  // delete note
  deleteNote () {
    document.querySelectorAll('.delete').forEach(function (element) {
      element.addEventListener('click', function (event) {
        const noteId = element.id
        console.log('click')
        request
          .delete(`https://notes-api.glitch.me/api/notes/${noteId}`)
          .auth('kcbobbe', 'password123')
          .then(function (result) {
            // NOTES = NOTES.filter(note => note._id !== noteId)
            // document.getElementById('notes-list').innerHTML = NOTES.join('')
            let note = new Note()
            note.getNote()
          })
      })
    })
  }
}
//
// var note = new Note ()
// request
//     .delete(`https://notes-api.glitch.me/api/notes/yilc1c27ZMRFuzpp`)
//     .auth('kcbobbe','password123')
//     .then(function(result){
//       console.log('deleted')
//     })

// note.postNote()
// note.getNote()
// console.log(new Note('yow','wow'))
// request
//       .post("https://notes-api.glitch.me/api/notes")
//       .auth('kcbobbe','password123')
//       .send({
//         title:"hihi",
//         text:"note"
//       })
//       .then (function a(){
//         console.log('yes')
//       })
document.addEventListener('submit', function (event) {
  event.preventDefault()
  console.log('yo')
  let note = new Note(document.getElementById('input-title').value, document.getElementById('input-text').value)
  console.log(note)
  note.postNote()
  note.getNote()
  // document.addEventListener("DOMContentLoaded", function(event) {
  //   console.log("DOM fully loaded and parsed")
  //   let note = new Note()
  //   note.deleteNote()
})

export default Note
