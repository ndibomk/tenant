import mongoose from "mongoose";

const tourSchema = mongoose.Schema({
  apartment: {type:String,required:true},
  name:{type:String,required:true},
  houseNo:{type:String,required:true},
  amount: {type:Number,required:true},
  idNo: {type:Number},
  payment:{type:String},
  currentRead:{type:Number},
  lastRead:{type:Number},
  plotA:{type:Number,default:15000},
  plotB:{type:Number,default:17000},
  waterFee:{type:Number},
  datePaid:{type:String},
  phone:{type:String},
  imageFile:{type:String},
  aptType:{type:String},
  arrears:{type:String},
  wifi:{type:String},
  penalties:{type:String},
  balance:{type:String},
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
  
},
{timestamps:true});

const TourModal = mongoose.model("Tour", tourSchema);

export default TourModal;
