// const fs = require('fs')
// const path = require('path')
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')
const express = require('express')
// const { notes } = require('./db/db.json')
const PORT = process.env.PORT || 3000
const app = express()



app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use(express.static('public'))
app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`)
})

