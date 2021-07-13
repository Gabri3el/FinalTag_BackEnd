const app = require('express')()
const consign = require('consign')
const db = require('./config/db.js')
const mongoose = require('mongoose')
const dotenv = require ('dotenv')
require('./config/mongoDb')   

app.db = db
app.mongoose = mongoose
dotenv.config({path: './.env'})

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

