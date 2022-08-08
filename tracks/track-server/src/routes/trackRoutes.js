const express=require('express')
const mongoose=require('mongoose')
const requireAuth=require('../middlewares/requireAuth')

const Track=mongoose.model('Track')
const router=express.Router()

router.use(requireAuth)

router.get('/tracks',async (req,res)=>{
  const tracks=await Track.find({userId:req.user._id})
  res.send(tracks)
})

router.post('/tracks',async (req,res)=>{
  const {name,locations}=req.body;

  if(!name || !locations){
    res.status(422).send({error:'you must send a name and locations'})
  }

  try {
    const track = new Track({name,locations, userId: req.user.id})

    
    await track.save();

    res.send(track)
  } catch (e) {
    console.log("connect error in trackRoutes.js");
    res.status(422).send({error:e.message})

  }
})

module.exports=router;






































