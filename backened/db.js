import mongoose from "mongoose";

export const connect = async (url) => {
    try {
        await mongoose.connect(url);
        console.log("MongoDB connected successfully");
    }
    catch (err) {
        console.log(err);
        console.log("Error occured while connecting to the DB");
    }

}

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
});

const todo = mongoose.model('todo', todoSchema);

export { todo };    