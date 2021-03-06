import React from 'react'
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Todo from "./Todo";



export default function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
    return (
        <Paper>
            <List>
                {todos.map(todo => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        task={todo.task}
                        completed={todo.completed}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                    />
                ))}
            </List>
        </Paper>
    )
}
