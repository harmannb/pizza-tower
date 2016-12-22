var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  name: {type:String, required:[true,"Name cannot be blank"]},
  image:String,
  woncount:Number
});
mongoose.model('Users',UserSchema);
