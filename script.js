import request from 'superagent'
const NOTES = []

class Note {
  constructor (title, text) {
    this.title = title
    this.text = text
    //this.date = date
  }
  writeNote() {
    var inputTitle = document.getElementById('input-title').value
    var inputText = document.getElementById('input-text').value
    note = new Note(inputTitle, inputText)
    return note
  }
  //send innerHTML to API
  postNote() {
    //const noteDetails = new Note()
    request
      .post("https://notes-api.glitch.me/api/notes")
      .auth('kcbobbe','password123')
      .send({
        title:this.title,
        text:this.text
      })
      .then (function a(){
        console.log('yes')
      })

  }
//get notes from API and put in app
  getNote() {
    request
      .get("https://notes-api.glitch.me/api/notes")
      .auth('kcbobbe','password123')
      .then (function(result){
        result.body.notes.forEach(function(element){
          element = `<div>${element.title} ${element.text}</div>`
          NOTES.push(element)
          // console.log(element)
        }
        )
        // console.log(NOTES)
        document.getElementById("notes-list").innerHTML = NOTES.join('')
        
      })
  }
//delete note
  deleteNote(){

  }
}
//
// var note = new Note ()



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
})


export default Note