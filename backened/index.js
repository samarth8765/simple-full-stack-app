import express from 'express';
import { createSchema, updateSchema } from './types.js';
import { todo, connect } from './db.js';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 8000;
const URL = "mongodb://localhost:27017/todo";

connect(URL);
app.use(cors());
app.use(express.json());

app.get('/health', async (req, res) => {
    res.status(200).json({
        message: "Health is wealth",
    })
});

app.get("/todos", async (req, res) => {
    const todos = await todo.find({});
    if (!todos) {
        return res.status(200).json({
        });
    }
    return res.status(200).json(todos);
});

app.post("/todos", async (req, res) => {
    const payload = req.body;
    if (!createSchema.safeParse(payload)) {
        return res.status(411).json({
            message: "Input invalidation",
        });
    }

    await todo.create({
        title: req.body.title,
        description: req.body.description,
        completed: false
    });

    res.status(201).json({ message: "Todo created successfully" });
});

app.put("/todos", async (req, res) => {
    const payload = req.body;
    if (!createSchema.safeParse(payload)) {
        return res.status(411).json({
            message: "Input invalidation",
        });
    }

    await todo.updateOne({ _id: req.body.id }, { completed: req.body.completed });
    console.log(req.body);
    res.json({ message: "Todo is updated" });
})


app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`);
});