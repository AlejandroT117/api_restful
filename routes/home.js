const express = require('express')
const {Router} = express
const path = require('path')

const router = Router()


router.get("/", (req, res)=>{
  res.sendFile(path.join(__dirname, '../public/home.html'))
})

module.exports = router