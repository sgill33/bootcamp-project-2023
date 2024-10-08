import mongoose from "mongoose";
import { Schema } from "mongoose";

// Define the interface for the Portfolio document
export type IPort = {
    _id?: string;
    title: string;
    slug: string; 
    description: string; // for preview
    image: string;
};

// Define the schema for the portfolio model
const portfolioSchema = new Schema<IPort>({
    _id: { type: String, required: false },
    title: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
}, 
{ collection: 'projects' } // Specify the collection name
);

// Safely check if the model exists or create it
const Portfolio = mongoose.models && mongoose.models.projects 
    ? mongoose.model<IPort>('projects') 
    : mongoose.model<IPort>('projects', portfolioSchema);

export default Portfolio;
