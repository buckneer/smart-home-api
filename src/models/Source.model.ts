import {Schema, Document, model} from "mongoose";


export interface SourceDocument extends Document {
    name: string,
    state: boolean
}

const SourceSchema = new Schema({
    name: {type: String, required: true},
    state: {type: Boolean, default: false}
})

const Source = model("Source", SourceSchema)

export default Source;
