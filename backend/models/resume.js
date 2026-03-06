import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({

user:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},

resumeFile:{
type:String
},

skills:[
{
type:String
}
],

experience:{
type:String
},

education:{
type:String
}

},{timestamps:true})

export default mongoose.model("Resume",resumeSchema);