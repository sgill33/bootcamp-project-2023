import mongoose from "mongoose";
import { Schema } from "mongoose";


export type IPort = {
    title: string;
    slug: string; 
    description: string; // for preview
    image: string;
};

const portfolioSchema = new Schema<IPort>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String, required: true },
    image:{type:String, required: true},
})

const Portfolio = mongoose.models['projects'] ||
mongoose.model('projects', portfolioSchema);

export default Portfolio;