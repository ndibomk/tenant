import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String,unique: true, required: true },
  password: { type: String, required: false },
  googleId: { type: String, required: false },
  id: { type: String },
  isAdmin:{type:Boolean,default:false},
  caretaker:{type:Boolean,default:false}
});

export default mongoose.model("User", userSchema);
