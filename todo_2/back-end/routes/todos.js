import {Router} from 'express';
import pool from '../db.js';

const router = Router();

router.post("/", async(req, res) => {
    try {
        const { description, completed } = req.body;
        if (!description) {
            return res.status(400).json({ error: "Description is reqired" });
        }
        const newTodo = await pool.query("insert into todo (description, completed) values ($1, $2) returning *", [description, completed || false]);
        res.json(newTodo.rows[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
})

router.get("/", async(req, res) => {
    try {
        const allTodos = await pool.query("select * from todo");
        res.json(allTodos.rows);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

router.get("/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const todoById = await pool.query("select * from todo where todo_id = $1", [id]);
        res.json(todoById.rows[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

router.put("/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const {description, completed} = req.body;
        if (!description) {
            return res.status(400).json({ error: "Description is reqired" });
        }
        const updatedTodo = await pool.query("update todo set description = $1, completed = $2 where todo_id = $3 returning *", [description, completed || false, id]);
        if (updatedTodo.rows.length === 0) {
            return res.status(404).json({ error: "Todo not found" });
        }
        res.json({
            message: "todo was updated",
            todo : updatedTodo.rows[0],
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

router.delete("/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const deletedTodo = await pool.query("delete from todo where todo_id = $1 returning * ", [id]);
        if (deletedTodo.rows.length === 0) {
            return res.status(404).json({ error: "Todo not found!" }); 
        }
        res.json("Todo was deleted");
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
})

export default router;