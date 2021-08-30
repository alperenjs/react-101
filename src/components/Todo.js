import React from 'react';
import useToggleState from '../hooks/useToggleState';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import EditTodoForm from './EditTodoForm';
import Checkbox  from '@material-ui/core/Checkbox';
import  IconButton  from '@material-ui/core/IconButton';
import EditRounded  from '@material-ui/icons/EditRounded';
import DeleteIcon from "@material-ui/icons/Delete";
import  ListItemSecondaryAction  from '@material-ui/core/ListItemSecondaryAction';



export default function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) {
    const [isEditing, toggle] = useToggleState(false);
    return (
        <ListItem>
            {isEditing ? <EditTodoForm editTodo={editTodo} id={id} task={task} toggleEditForm={toggle}/>: 
         <>
         <Checkbox onClick={() => toggleTodo(id)} tabIndex={-1} checked={completed}/>
            <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>{task}</ListItemText>
            <ListItemSecondaryAction>
                <IconButton onClick={() => removeTodo(id)} aria-label="Delete">
                    <DeleteIcon/>
                </IconButton>
                <IconButton aria-label="Edit" onClick={toggle}>
                    <EditRounded/>
                </IconButton>
            </ListItemSecondaryAction>
            </>
            }
        </ListItem>
           )
}
