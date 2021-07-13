const app = require('express')()
const consign = require('consign')
const db = require('./config/db.js')
const mongoose = require('mongoose')
require('./config/mongoDb')   
app.db = db
app.mongoose = mongoose


consign()
.include('./config/passport.js')
.then('./api/validator.js')
.then('./api')
.then('./schedule')
.then('./config/middlewares.js')
.then('./config/routes.js')
.into(app)

app.listen(3000,()=>{
    console.log('Back-end Started')
})

