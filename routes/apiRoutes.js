const router = require('express').Router()
const data = require('../db/db.json')

router.get('/api/notes', (req, res) => {
    res.json(data)
})

router.get('/notes', (req, res) => {
    let notes = data
    if (notes) {
        res.json(notes)
    }
})

module.exports = router