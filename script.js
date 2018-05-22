import request from 'superagent'

class Note {
  constructor (title, text) {
    this.title = title
    this.text = text
    //this.date = date
  }
  writeNote() {
    inputTitle = document.getElementById('').innerHTML
    inputText = document.getElementById('').innerHTML
    note = new Note(inputTitle, inputText)
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
        console.log(result.body.notes)
      })
  }
//delete note
  deleteNote(){

  }
}
//
var note = new Note ("TITLE","CONTENT")
note.postNote()
note.getNote()
console.log(new Note('yow','wow'))
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

export default Note