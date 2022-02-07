const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const path = require('path')
const PORT = process.env.PORT || 8080

const homeRouter = require('./routes/home')
const productosRouter = require('./routes/productos')


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use("/static", express.static(path.join(__dirname, '/public')))

app.use("/", homeRouter)
app.use("/api", productosRouter)


app.use((req, res, next)=>{
  console.log('Time: ', Date.now().toLocaleString())
  next()
})


app.use((err, req, res, next)=>{
  console.log(err.stack)
  res.status(500).send('Error en middleware')
})

app.listen(
  PORT, ()=>console.log(`Escuchando en: http://localhost:${PORT}`)
)

