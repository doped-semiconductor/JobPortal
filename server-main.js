const express = require('express')
const bodyParser = require('body-parser')
const app = express()

/** custom routing to modularize */
const langRouter = require('./languageRouter')
const loginRouter = require('./loginRouter')
const regRouter1 = require('./guidedRegRouter')
const mongo = require('./mongoService')

var mongoOp = new mongo.mongoDriver()

app.use('/login',loginRouter)
app.use('/new',langRouter)
app.use('/register',regRouter1)

app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);

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


app.get('/createJobPost', (req, res) => {
  res.sendFile(__dirname+'/public-general/createJobPost.html')
})
app.post('/createJobPost',(req,res)=>{
  console.log(req.body)
  res.render('notif',{'message':'Post Created!'})
  // res.send(resMessage1+`Post Created!`+resMessage2)
})

app.get('/test',(req,res)=>{
  res.sendFile(__dirname+'/public/intro.html')
})

app.get('/general', (req, res) => {
  res.sendFile('./index.html')
})

app.get('/worker/:phone',async (req,res)=>{
  await mongoOp.getWorkerProfile({'phone':req.params.phone},(data)=>{
    res.render('workerProfile',{'data':data})
  })
})

app.get('/dashboard',(req, res) => {
  res.sendFile(__dirname+'/public-general/dashboard.html')
})

// app.post('/register.newWorker',(req,res)=>{
//   console.log(req.body)
//   res.send("Received")
// })

app.listen(port, () => {
  console.log(`Server app listening at http://localhost:${port}`)
})