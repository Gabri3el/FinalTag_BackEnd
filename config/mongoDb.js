const mongoose = require('mongoose')
const {mongodb} = require('../.env')

mongoose.connect(mongodb,{useNewUrlParser: true})
    .catch(e =>{
        const msg = 'Não foi possivel conectar ao MongoDB'
        console.log(msg)
    })
