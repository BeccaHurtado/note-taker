const router = require('express').Router()
const data = require('../db/db.json')
const fs = require('fs')

router.get('/api/notes', (req, res) => {
    data = JSON.parse(fs.readFileSync("./db/db.json")) || []
    console.log("GET",data)
    res.json(data)
})

router.post('/api/notes', (req, res) => {
    let note = {
        title: req.body.title,
        text: req.body.text,
        id: Math.floor(Math.random() * 1000)
    }
    data.push(note)
    fs.writeFileSync("./db/db.json", JSON.stringify(data), function(error){
       if (error) throw error
    })
    console.log("POST",data)
    res.json(data)
})

router.delete('/api/notes/:id', (req, res) => {
    var updateNote = data.filter(note =>  {
        return (note.id != req.params.id)
    })
    data = updateNote
    fs.writeFileSync("./db/db.json", JSON.stringify(data), function(error){
       if (error) throw error
    })
    console.log("DELETE",data)
    res.json(data)
})

function newNote(body, notesArray) {
    const notes = body
    notesArray.push(notes)
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'), JSON.stringify({ notes: notesArray }, null, 2)
    )
    return notes
}

module.exports = router