
const express = require('express')
const {Router} = express
const path = require('path')

const router = Router()

//Productos json
const productos = require('../productos.json')

//Router index
router.get("/", (req, res)=>{
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

router.get("/productos", (req, res)=>{
  res.send(productos)
})

router.get("/productos/:id", (req, res)=>{
  const {id} = req.params

  const producto = productos.find(p=>p.id==id)
  if(!producto){
    res.status(404).send({
      error:'Producto no encontrado'
    })
    return
  }

  res.send(producto)
})


// POST 

router.post("/productos", (req, res) => {
  const { nombre, precio, thumbnail } = req.body
  let last_id = 0

  if(productos){
    for (let i = 0; i < productos.length; i++) {
      const producto = productos[i];
      last_id = producto.id          
    }
  }
  let id = last_id+1

  productos.push({
    id,
    nombre, 
    precio, 
    thumbnail
  })

  //res.sendStatus(201)

  const producto = productos.find(p=>p.id==id)
  res.send(`Nuevo producto: ${JSON.stringify(producto)}`)
})

// PUT 

router.put("/:id", (req, res) => {
  const { id } = req.params // parametros de URL
  const { nombre, precio, thumbnail } = req.body // parametros de URL


  const producto = productos.find(p=>p.id==id)
  if(!producto) {
    res.status(404).send({
      error: "Product not found"
    })
    return
  }
  productos.push({
    id,
    nombre, 
    precio, 
    thumbnail
  })

  res.sendStatus(200)
  res.send(`Producto actualizado: ${producto}`)
})

//Delete 


router.delete("/:id", (req, res) => {
  const { id } = req.body // parametros de URL
  //const { id } = req.params // parametros de URL

  const producto = productos.find(p=>p.id==id)

  if(!producto) {
    res.status(404).send({
      error: "Product not found"
    })
    return
  }

  console.log(mascota)

  const index = producto.indexOf(movie)
  productos.splice(index, 1)

  res.sendStatus(200)

})

module.exports = router