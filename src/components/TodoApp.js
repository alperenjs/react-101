import React, { useState } from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { v4 as uuid } from "uuid"


export default function TodoApp() {
    const initialTodos = [
        { id: 1, task: "clean fishtank", completed: false },
        { id: 2, task: "reset computer", completed: true }
    ];
    const [todos, setTodos] = useState(initialTodos);
    const addTodo = (newTodoText) => {
        setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
    };
    const removeTodo = todoId => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos);
    };

    const toggleTodo = todoId => {
        const updatedTodos = todos.map(todo =>
            todo.id === todoId ? { ...todo, completed: !todo.completed } : todo);
        setTodos(updatedTodos);
    }

    const editTodo = (todoId, newTask) => {
        const updatedTodos = todos.map(todo =>
            todo.id === todoId ? { ...todo, task: newTask } : todo);
        setTodos(updatedTodos);
    }

    return (
        <Paper style={{
            padding: 0,
            margin: 0,
            height: "100vh",
        }}>
            <Grid container justifyContent="center" style={{ marginTop: "4rem" }}>
                <Grid item xs={12} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
                </Grid>
            </Grid>
        </Paper>


    )
}
