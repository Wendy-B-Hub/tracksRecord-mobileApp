require("./models/User")
require("./models/Track")
const express=require('express');
const mongoose=require('mongoose')
const bodyParser=require('body-parser');
const authRoutes=require('./routes/authRoutes')
const requireAuth=require('./middlewares/requireAuth')
const trackRoutes=require('./routes/trackRoutes')

const app=express();
app.use(bodyParser.json())
app.use(authRoutes);
app.use(trackRoutes)

//====================================
//============mongo 安装和设置  cloud.mongodb.com
//====================================
const mongoURI='mongodb+srv://trackServer:258Z9qZp3ng2sn4@cluster0.jp6fb.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(mongoURI)
mongoose.connection.on('connected',()=>{
  console.log("connect to mongo instance")
})
mongoose.connection.on('error',()=>{
  console.log(" can not connect to mongo instance")
})


app.get('/',requireAuth,(req,res)=>{
  res.send(`your email is ${req.user.email}`)
})

app.listen(3000,()=>{
  console.log("3000 is open!")
})






















