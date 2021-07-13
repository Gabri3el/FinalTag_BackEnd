const mongoose = require('mongoose')


mongoose.connect(process.env.mongodb,{useNewUrlParser: true})
    .catch(e =>{
        const msg = 'Não foi possivel conectar ao MongoDB'
        console.log(msg)
    })
