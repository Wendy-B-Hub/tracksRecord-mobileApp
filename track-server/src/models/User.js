const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const bcrypt=require('bcrypt')


const userSchema=new Schema({
  email:{
    type:String,
    unique:true,
    required:true,
  },
  password:{
    type:String,
    unique:true,

  }
})

//pre save hook
userSchema.pre('save',function (next){
  const user=this;
  if(!user.isModified()){   //如果user没有被改变
    return next();
  }

  bcrypt.genSalt(10,(err,salt)=>{
    if(err){return next(err);}
    bcrypt.hash(user.password,salt,(err,hash)=>{
      if(err)return next(err);
      user.password=hash;
      next();
    })
  })
})


userSchema.methods.comparePassword=function (candidatePassword){
  const user=this;
  return new Promise((resolve,reject)=>{
    bcrypt.compare(candidatePassword,user.password,(err,isMatch)=>{
      if(err){return reject(err);}
      else{
        resolve(true)
      }
    })
  })
}


mongoose.model("User",userSchema)

























