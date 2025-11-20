const express = require('express')

const {getUser,createUser,deleteUser} = require('../controller/user.controller.js')
const router = express.Router()

router.get('/',getUser)

router.post('/adduser',createUser)

router.delete('/delete/:id',deleteUser)

module.exports = router