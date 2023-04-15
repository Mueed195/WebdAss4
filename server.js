const express = require('express')
const app = express()
var path = require('path');
const expressLayouts = require('express-ejs-layouts')

// Static Files.
app.use(express.static ('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/fonts', express.static(__dirname + 'node_modules/bootstrap'))


// Set Views
app.set('views', './views')
app.set('view engine', 'ejs')



app.get('', (req, res) => {
    res.render("index")
})

app.get('/products', (req, res) => {
    res.render("products")
})





app.listen(3000)