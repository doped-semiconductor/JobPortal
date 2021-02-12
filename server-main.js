const express = require('express')
const bodyParser = require('body-parser')
const app = express()

/** custom routing to modularize */
const langRouter = require('./languageRouter')
const loginRouter = require('./loginRouter')
const regRouter1 = require('./guidedRegRouter')

app.use('/login',loginRouter)
app.use('/new',langRouter)
app.use('/register',regRouter1)

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
// app.use(express.static(path.resolve(__dirname, 'public')))//adding static directories
app.use('/general',express.static(__dirname + '/public-general'))
app.use('/images',express.static(__dirname + '/public/images'))
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/public/pindex.html')
})

app.get('/test',(req,res)=>{
  res.sendFile(__dirname+'/public/intro.html')
})

app.get('/general', (req, res) => {
  res.sendFile('./index.html')
})

// app.post('/register.newWorker',(req,res)=>{
//   console.log(req.body)
//   res.send("Received")
// })

app.listen(port, () => {
  console.log(`Server app listening at http://localhost:${port}`)
})