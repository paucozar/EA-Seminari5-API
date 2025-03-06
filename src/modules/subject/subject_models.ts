import mongoose, { Types, model, ObjectId, Schema, TypeExpressionOperatorReturningObjectId } from "mongoose";
import { IUser } from "../users/user_models.js";

const subjectSchema = new Schema<ISubject>({
    name :{
        type: String,
        required : true
    },
    teacher: {
        type: String,
        required : true
    },
    students: [{
        type : Schema.Types.ObjectId,  
        ref: "User"
    }]
});

export interface ISubject{
    name : string;
    teacher : string;
    students : Types.ObjectId[];

}

const Subject = model('Subject', subjectSchema);
export default Subject;
