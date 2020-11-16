const mongoose = require ("mongoose");
// the schema is what will define the structure of the documents (document class)
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: { type: String, required: true },
    snippet: { type: String, required: true },
    body: { type: String, required: true },
    date: { type: Date, default: Date.now }
}, {timestamps: true});