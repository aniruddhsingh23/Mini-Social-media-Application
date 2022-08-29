const mongoose=require('mongoose')
var passportLocalMongoose=require('passport-local-mongoose');
mongoose.connect('mongodb://localhost/paass')
var userSchema=mongoose.Schema({
  name:String,
  username:String,
  password:String,
  pics:{
    type:String,
    default : 'abcd.png'
  },
  posts:[
    {type:mongoose.Schema.Types.ObjectId,ref:"post"}
  ]
})
userSchema.plugin(passportLocalMongoose);
module.exports=mongoose.model('user',userSchema)