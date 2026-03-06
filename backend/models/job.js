import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({

title:{
type:String,
required:true
},

company:{
type:String,
required:true
},

skills:[
{
type:String
}
],

salaryMin:{
type:Number
},

salaryMax:{
type:Number
},

experience:{
type:String
},

description:{
type:String
},

createdBy:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
}

},{timestamps:true})

export default mongoose.model("Job",jobSchema);