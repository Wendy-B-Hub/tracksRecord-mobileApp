const jwt=require('jsonwebtoken');
const mongoose=require('mongoose');
const User=mongoose.model('User');


module.exports=(req,res,next)=>{
   const {authorization}=req.headers;
   //authorization==='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmU3MWJmOWM4MGVmZGE1NzJhODA3YjUiLCJpYXQiOjE2NTkzMTMxNDV9.K6MM1PCKa5Wz20SdAZiulK8yx0meNi2gO930yi7Kw3c'
   if(!authorization){
     return res.status(401).send({error:'you must logged in'})
   }

   const token=authorization.replace('Bearer ','');
   jwt.verify(token,'MY_SECRET_KEY',async (err,payload)=>{
      if(err){
         return res.status(401).send({error:'you must logged in'})
      }
      const {userId}=payload;
      const user=await User.findById(userId);
      req.user=user;
      next();
   })

}

















