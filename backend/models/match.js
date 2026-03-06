import mongoose from "mongoose";

const matchSchema = new mongoose.Schema({

user:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},

job:{
type:mongoose.Schema.Types.ObjectId,
ref:"Job"
},

matchScore:{
type:Number
},

matchedSkills:[
{
type:String
}
]

},{timestamps:true})

export default mongoose.model("Match",matchSchema);