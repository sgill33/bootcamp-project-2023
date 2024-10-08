import mongoose from "mongoose";
import { Schema } from "mongoose";

// Define the interface for the Comment document
export type IComment = {
    user: string;
    comment: string;
    time: Date;
}

// Define the schema for the Comment model
const commentSchema = new Schema<IComment>({
    user: { type: String, required: true },
    comment: { type: String, required: true },
    time: { type: Date, default: () => new Date() }  // Use function to set default time
},
{ collection: 'comments' } // Specify the collection name
);

// Safely check if the model exists or create it
const Comment = mongoose.models && mongoose.models.comments
    ? mongoose.model<IComment>('comments')
    : mongoose.model<IComment>('comments', commentSchema);

export default Comment;
