import express from "express";
import cors from "cors";
import { createTodo, updateTodo } from "./types";
import { todo } from "./db";

const app = express();
app.listen(3000);

app.use(express.json());
app.use(cors());

app.post("/todo", async (req, res) => {
  const payload = req.body;
  const parsedPayload = createTodo.safeParse(payload);

  if (!parsedPayload.success) {
    return res.status(411).json({ msg: "You sent the wrong inputs" });
  }
  // put it in mongodb
  await todo.create({
    title: payload.title,
    description: payload.description,
    completed: false,
  });

  res.json({ msg: "Todo created" });
});

app.get("/todos", async (req, res) => {
  // const todos = await todo.find({});

  res.json({
    todos: [],
  });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    return res.status(411).json({ msg: "You sent the wrong inputs" });
  }

  await todo.update(
    {_id: req.body.id},
    {completed: true}
  );

  res.json({
    msg: "Todo marked as completed",
  });
});
