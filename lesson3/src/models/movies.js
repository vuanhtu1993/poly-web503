import mongoose from "mongoose";

const { Schema } = mongoose

const moviesSchema = new Schema({
    title: String,
    year: Number,
    genres: [String],
    extract: String
})

const Movies = mongoose.model("movies", moviesSchema)
export default Movies