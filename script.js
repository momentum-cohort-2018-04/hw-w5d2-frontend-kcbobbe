import request from 'superagent'

class Note {
  constructor (title, text, date) {
    this.title = title
    this.text = text
    this.date = date
  }
  //send innerHTML to API
  postNote() {
    request
      .post("https://notes-api.glitch.me/api/notes")
      .auth('kcbobbe','password123')
      .send({
        title:"hihi",
        text:"note"
      })
      .then (function a(){
        console.log('yes')
      })

  }
//get notes from API and put in app
  getNote() {

  }
//delete note
  deleteNote(){

  }
}

request
      .post("https://notes-api.glitch.me/api/notes")
      .auth('kcbobbe','password123')
      .send({
        title:"hihi",
        text:"note"
      })
      .then (function a(){
        console.log('yes')
      })

