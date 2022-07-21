import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
  apartment: {type:String,required:true},
  name:{type:String,required:true},
  houseNo:{type:String,required:true},
  // amount: {type:Number,required:true},
  idNo: {type:Number},
  reason:{type:String},
   codition:{type:String},
   remTime:{type:String},
  // currentRead:{type:Number},
  // lastRead:{type:Number},
plotA:{type:Number,default:15000},
plotB:{type:Number,default:15000},

  imageFile:{type:String},
  creator: String,
  status:{
    type:String,
    enum:['pending','success', 'rejected'],
     default:'pending'
  },
 
  
  createdAt: {
    type: Date,
    default: new Date(),
  },
  
});

const TourModal = mongoose.model("vacation", tourSchema);

export default TourModal;
